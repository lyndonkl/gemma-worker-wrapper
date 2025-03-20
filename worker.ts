import { FilesetResolver, LlmInference } from "@mediapipe/tasks-genai";

let llmInference: LlmInference | null = null;

type WorkerMessage = {
  type: 'INIT' | 'INVOKE';
  payload: any;
};

async function initializeModel(options: {
  modelAssetPath?: string;
  maxTokens?: number;
  topK?: number;
  temperature?: number;
  randomSeed?: number;
}) {
  try {
    const fileset = await FilesetResolver.forGenAiTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai@latest/wasm"
    );
    
    llmInference = await LlmInference.createFromOptions(fileset, {
      baseOptions: {
        modelAssetPath: options.modelAssetPath || '/assets/gemma-2b-it-gpu-int4.bin'
      },
      maxTokens: options.maxTokens || 1000,
      topK: options.topK || 40,
      temperature: options.temperature || 0.8,
      randomSeed: options.randomSeed || 101
    });

    return { success: true };
  } catch (error: unknown) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}

async function invoke(prompt: string) {
  if (!llmInference) {
    return { success: false, error: 'Model not initialized' };
  }

  try {
    const response = await llmInference.generateResponse(prompt);
    return { success: true, response };
  } catch (error: unknown) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}

self.onmessage = async (e: MessageEvent<WorkerMessage>) => {
  const { type, payload } = e.data;
  
  try {
    let result;
    
    switch (type) {
      case 'INIT':
        result = await initializeModel(payload);
        break;
      case 'INVOKE':
        result = await invoke(payload);
        break;
      default:
        result = { success: false, error: 'Unknown message type' };
    }
    
    self.postMessage({ type, result });
  } catch (error: unknown) {
    self.postMessage({ 
      type, 
      result: { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      } 
    });
  }
}; 
import { FilesetResolver, LlmInference } from "@mediapipe/tasks-genai";

export type Message = {
  role: 'user' | 'model';
  content: string;
};

export type GemmaWrapperOptions = {
  systemMessage?: string;
  modelAssetPath?: string;
  maxTokens?: number;
  topK?: number;
  temperature?: number;
  randomSeed?: number;
  workerUrl?: string;
};

export class GemmaWrapper {
  private messageHistory: Message[] = [];
  private systemMessage: string = '';
  private worker: Worker | null = null;

  private constructor(options: GemmaWrapperOptions = {}) {
    this.systemMessage = options.systemMessage || '';
    this.worker = new Worker(new URL('./worker.js', import.meta.url).toString(),{ type: "module" })
  }

  public static async create(options: GemmaWrapperOptions = {}): Promise<GemmaWrapper> {
    const instance = new GemmaWrapper(options);
    await instance.initializeModel(options);
    return instance;
  }

  private async initializeModel(options: GemmaWrapperOptions) {
    return new Promise<void>((resolve, reject) => {
      const messageHandler = (e: MessageEvent) => {
        const { type, result } = e.data;
        
        if (type === 'INIT') {
          this.worker?.removeEventListener('message', messageHandler);
          
          if (result.success) {
            resolve();
          } else {
            reject(new Error(result.error));
          }
        }
      };

      this.worker?.addEventListener('message', messageHandler);
      this.worker?.postMessage({
        type: 'INIT',
        payload: options
      });
    });
  }

  private formatMessages(messages: Message[]): string {
    let formatted = '';
    
    // Add system message if present
    if (this.systemMessage) {
      formatted += `<start_of_turn>user\n[System Instructions: ${this.systemMessage}]<end_of_turn>\n`;
    }

    // Add conversation messages
    messages.forEach(msg => {
      formatted += `<start_of_turn>${msg.role}\n${msg.content}<end_of_turn>\n`;
    });

    // Add final model turn
    formatted += '<start_of_turn>model';

    return formatted;
  }

  public async invoke(message: string): Promise<string> {
    // Add user message to history
    this.messageHistory.push({ role: 'user', content: message });

    return new Promise((resolve, reject) => {
      const messageHandler = (e: MessageEvent) => {
        const { type, result } = e.data;
        
        if (type === 'INVOKE') {
          this.worker?.removeEventListener('message', messageHandler);
          
          if (result.success) {
            this.messageHistory.push({ role: 'model', content: result.response });
            resolve(result.response);
          } else {
            reject(new Error(result.error));
          }
        }
      };

      this.worker?.addEventListener('message', messageHandler);
      this.worker?.postMessage({
        type: 'INVOKE',
        payload: this.formatMessages(this.messageHistory)
      });
    });
  }

  public getMessageHistory(): Message[] {
    return [...this.messageHistory];
  }

  public clearHistory(): void {
    this.messageHistory = [];
  }

  public setSystemMessage(message: string): void {
    this.systemMessage = message;
  }

  public terminate(): void {
    this.worker?.terminate();
  }
} 
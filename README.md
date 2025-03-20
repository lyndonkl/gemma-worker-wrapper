# @lyndonkl/gemma-worker-wrapper

A TypeScript wrapper for the MediaPipe Gemma model, providing a simple interface for chat interactions and conversation management.

## Installation

```bash
npm install @lyndonkl/gemma-worker-wrapper @mediapipe/tasks-genai
```

## Requirements

- Modern browser with WebAssembly support
- Sufficient memory for model loading
- CORS-enabled server for serving model files

## Usage

```typescript
import { GemmaWrapper } from '@lyndonkl/gemma';

async function main() {
  // Initialize the wrapper
  const gemma = await GemmaWrapper.create({
    systemMessage: 'You are a helpful assistant',
    modelAssetPath: '/path/to/gemma-2b-it-gpu-int4.bin' // Optional, defaults to '/assets/gemma-2b-it-gpu-int4.bin'
  });
  
  // Send a message and get response
  const response = await gemma.invoke('Hello, how are you?');
  console.log(response);

  // Get conversation history
  const history = gemma.getMessageHistory();
  
  // Clear conversation history
  gemma.clearHistory();
  
  // Update system message
  gemma.setSystemMessage('You are a coding assistant');
}
```

## Worker Configuration

The package uses a Web Worker to run the Gemma model. Due to the MediaPipe library's use of `importScripts()`, the worker must be configured as a classic worker (not an ES module worker). Here's how to set it up:

1. Copy the worker file to your public directory:
```bash
mkdir -p public/worker
cp node_modules/@lyndonkl/gemma-webworker-wrapper/dist/worker.js public/worker/
```

2. If you're using a bundler (like Vite, webpack, etc.), configure it to:
   - Bundle the worker file as a single file
   - Use IIFE (Immediately Invoked Function Expression) format
   - Exclude the worker from module transformation

3. Update your worker URL in the GemmaWrapper options:
```typescript
const gemma = await GemmaWrapper.create({
  workerUrl: '/worker/worker.js',  // Path relative to your public directory
  systemMessage: 'You are a helpful assistant'
});
```

## React Integration

```typescript
import { useState, useEffect } from 'react';
import { GemmaWrapper } from '@lyndonkl/gemma-worker-wrapper';

function ChatComponent() {
  const [gemma, setGemma] = useState<GemmaWrapper | null>(null);
  const [response, setResponse] = useState('');

  useEffect(() => {
    async function initGemma() {
      const wrapper = await GemmaWrapper.create({
        workerUrl: '/worker/worker.js',  // Path to your worker file
        systemMessage: 'You are a helpful assistant'
      });
      setGemma(wrapper);
    }
    initGemma();
  }, []);

  async function handleSubmit(message: string) {
    if (!gemma) return;
    const response = await gemma.invoke(message);
    setResponse(response);
  }

  // ... rest of component
}
```

## API Reference

### GemmaWrapper

The main class for interacting with the Gemma model.

#### Constructor Options

```typescript
type GemmaWrapperOptions = {
  systemMessage?: string;      // Initial system message
  modelAssetPath?: string;    // Path to model file
  maxTokens?: number;         // Maximum tokens to generate
  topK?: number;             // Top-k sampling parameter
  temperature?: number;      // Temperature for sampling
  randomSeed?: number;       // Random seed for generation
  workerUrl?: string;        // Path to the worker file
};
```

#### Methods

- `invoke(message: string): Promise<string>` - Send a message and get response
- `getMessageHistory(): Message[]` - Get conversation history
- `clearHistory(): void` - Clear conversation history
- `setSystemMessage(message: string): void` - Update system message

## Troubleshooting

- "Failed to load fileset": Ensure WASM files are accessible and CORS is configured
- "Model not initialized": Wait for initialization to complete before calling invoke
- "Failed to load model": Verify model path and file accessibility
- "importScripts is not defined": Ensure the worker is configured as a classic worker, not an ES module worker
- "Worker failed to load": Check that the worker file is accessible and served with the correct MIME type

## License

MIT 
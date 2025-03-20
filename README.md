# @lyndonkl/gemma

A TypeScript wrapper for the MediaPipe Gemma model, providing a simple interface for chat interactions and conversation management.

## Installation

```bash
npm install @lyndonkl/gemma @mediapipe/tasks-genai
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

## React/Vite Integration

```typescript
import { useState, useEffect } from 'react';
import { GemmaWrapper } from '@agentic-data-analysis/gemma';

function ChatComponent() {
  const [gemma, setGemma] = useState<GemmaWrapper | null>(null);
  const [response, setResponse] = useState('');

  useEffect(() => {
    async function initGemma() {
      const wrapper = await GemmaWrapper.create({
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

## License

MIT 
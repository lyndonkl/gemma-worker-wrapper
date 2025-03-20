import { jest, describe, it, expect, beforeEach } from '@jest/globals';

/// <reference types="jest" />

// Mock the Worker
const mockWorker = {
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  postMessage: jest.fn().mockImplementation((message) => {
    // Get the last message handler that was registered
    const messageHandler = mockWorker.addEventListener.mock.calls
      .slice(-1)[0][1];
    
    // Create a proper MessageEvent with appropriate response based on message type
    const messageEvent = new MessageEvent('message', {
      data: {
        type: message.type,
        result: message.type === 'INIT' 
          ? { success: true }
          : { success: true, response: 'Mocked response' }
      }
    });
    
    // Call the handler with the event
    messageHandler(messageEvent);
  }),
  terminate: jest.fn()
} as unknown as Worker & {
  addEventListener: jest.Mock;
  removeEventListener: jest.Mock;
  postMessage: jest.Mock;
  terminate: jest.Mock;
};

// @ts-ignore - Worker is not available in Node environment
global.Worker = jest.fn().mockImplementation(() => mockWorker);

// Mock the MediaPipe dependencies
const mockGenerateResponse = jest.fn().mockResolvedValue('Mocked response');
const mockForGenAiTasks = jest.fn().mockResolvedValue('mock-fileset');
const mockCreateFromOptions = jest.fn().mockResolvedValue({
  generateResponse: mockGenerateResponse
});

jest.mock("@mediapipe/tasks-genai", () => ({
  FilesetResolver: {
    forGenAiTasks: mockForGenAiTasks
  },
  LlmInference: {
    createFromOptions: mockCreateFromOptions
  }
}));

import { GemmaWrapper } from '../wrapper';
import { FilesetResolver, LlmInference } from "@mediapipe/tasks-genai";

describe('GemmaWrapper', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    // Reset Worker mock
    // @ts-ignore - Worker is not available in Node environment
    global.Worker.mockClear();
    // Reset our MediaPipe mocks
    mockForGenAiTasks.mockResolvedValue('mock-fileset');
    mockCreateFromOptions.mockResolvedValue({
      generateResponse: mockGenerateResponse
    });
    mockGenerateResponse.mockResolvedValue('Mocked response');
  });

  describe('instantiation', () => {
    it('should initialize with default options', async () => {
      const wrapper = await GemmaWrapper.create({
        workerUrl: 'mock-worker.js'
      });

      // Verify Worker was created with correct URL
      // @ts-ignore - Worker is not available in Node environment
      expect(global.Worker).toHaveBeenCalledWith('file:///Users/kushaldsouza/Documents/Projects/agentic_data_analysis/src/gemma/worker.js', {"type": "module"});

      // Verify postMessage was called with default initialization options
      expect(mockWorker.postMessage).toHaveBeenCalledWith({
        type: 'INIT',
        payload: {
          workerUrl: 'mock-worker.js'
        }
      });

      // Verify system message is empty
      expect((wrapper as any).systemMessage).toBe('');
    });

    it('should initialize with custom system message', async () => {
      // The mocks are already set up in the jest.mock() call above
      // No need to set them up again here
      const systemMessage = 'You are a helpful assistant';
      const wrapper = await GemmaWrapper.create({ systemMessage });
      
      expect((wrapper as any).systemMessage).toBe(systemMessage);
    });

    it('should initialize with custom model path', async () => {
      const modelAssetPath = '/custom/path/model.bin';
      await GemmaWrapper.create({ modelAssetPath });

      // Verify worker was created
      // @ts-ignore - Worker is not available in Node environment
      expect(global.Worker).toHaveBeenCalledWith('file:///Users/kushaldsouza/Documents/Projects/agentic_data_analysis/src/gemma/worker.js', {"type": "module"});

      // Verify postMessage was called with correct initialization options
      expect(mockWorker.postMessage).toHaveBeenCalledWith({
        type: 'INIT',
        payload: {
          modelAssetPath
        }
      });
    });

    it('should initialize with custom generation parameters', async () => {
      const options = {
        maxTokens: 2000,
        topK: 50,
        temperature: 0.7,
        randomSeed: 42
      };
      const wrapper = await GemmaWrapper.create(options);

      // Verify worker was created
      // @ts-ignore - Worker is not available in Node environment
      expect(global.Worker).toHaveBeenCalledWith('file:///Users/kushaldsouza/Documents/Projects/agentic_data_analysis/src/gemma/worker.js', {"type": "module"});

      // Verify postMessage was called with correct initialization options
      expect(mockWorker.postMessage).toHaveBeenCalledWith({
        type: 'INIT',
        payload: {
          maxTokens: 2000,
          topK: 50,
          temperature: 0.7,
          randomSeed: 42,
        }
      });
    });

    it('should handle empty string system message', async () => {
      // No need to setup mocks here, they're already setup in beforeEach
      const wrapper = await GemmaWrapper.create({ systemMessage: '' });
      expect((wrapper as any).systemMessage).toBe('');
    });

    it('should handle undefined system message', async () => {
      // No need to setup mocks here, they're already setup in beforeEach
      const wrapper = await GemmaWrapper.create({ systemMessage: undefined });
      expect((wrapper as any).systemMessage).toBe('');
    });

    it('should handle initialization failure', async () => {
      // Mock FilesetResolver to throw an error
      mockForGenAiTasks.mockRejectedValueOnce(new Error('Failed to load fileset'));

      // Override the postMessage mock to simulate failure
      mockWorker.postMessage.mockImplementationOnce((message) => {
        const messageHandler = mockWorker.addEventListener.mock.calls
          .slice(-1)[0][1];
        
        const messageEvent = new MessageEvent('message', {
          data: { type: message.type, result: { success: false, error: 'Failed to initialize model' } }
        });
        
        messageHandler(messageEvent);
      });

      // Verify that initialization throws
      await expect(GemmaWrapper.create()).rejects.toThrow('Failed to initialize model');
    });
  });

  describe('formatMessages', () => {
    let wrapper: GemmaWrapper;

    beforeEach(async () => {
      wrapper = await GemmaWrapper.create();
    });

    it('should format empty message history', () => {
      const formatted = (wrapper as any).formatMessages([]);
      expect(formatted).toBe('<start_of_turn>model');
    });

    it('should format single user message', () => {
      const messages = [{ role: 'user' as const, content: 'Hello' }];
      const formatted = (wrapper as any).formatMessages(messages);
      expect(formatted).toBe('<start_of_turn>user\nHello<end_of_turn>\n<start_of_turn>model');
    });

    it('should format single model message', () => {
      const messages = [{ role: 'model' as const, content: 'Hi there' }];
      const formatted = (wrapper as any).formatMessages(messages);
      expect(formatted).toBe('<start_of_turn>model\nHi there<end_of_turn>\n<start_of_turn>model');
    });

    it('should format multiple messages in sequence', () => {
      const messages = [
        { role: 'user' as const, content: 'Hello' },
        { role: 'model' as const, content: 'Hi there' },
        { role: 'user' as const, content: 'How are you?' }
      ];
      const formatted = (wrapper as any).formatMessages(messages);
      expect(formatted).toBe(
        '<start_of_turn>user\nHello<end_of_turn>\n' +
        '<start_of_turn>model\nHi there<end_of_turn>\n' +
        '<start_of_turn>user\nHow are you?<end_of_turn>\n' +
        '<start_of_turn>model'
      );
    });

    it('should include system message when present', async () => {
      const wrapperWithSystem = await GemmaWrapper.create({ systemMessage: 'Be helpful' });
      const messages = [{ role: 'user' as const, content: 'Hello' }];
      const formatted = (wrapperWithSystem as any).formatMessages(messages);
      expect(formatted).toBe(
        '<start_of_turn>user\n[System Instructions: Be helpful]<end_of_turn>\n' +
        '<start_of_turn>user\nHello<end_of_turn>\n' +
        '<start_of_turn>model'
      );
    });

    it('should handle empty system message', async () => {
      const wrapperWithEmptySystem = await GemmaWrapper.create({ systemMessage: '' });
      const messages = [{ role: 'user' as const, content: 'Hello' }];
      const formatted = (wrapperWithEmptySystem as any).formatMessages(messages);
      expect(formatted).toBe('<start_of_turn>user\nHello<end_of_turn>\n<start_of_turn>model');
    });

    it('should handle messages with special characters', () => {
      const messages = [{ role: 'user' as const, content: 'Hello! @#$%^&*()' }];
      const formatted = (wrapper as any).formatMessages(messages);
      expect(formatted).toBe('<start_of_turn>user\nHello! @#$%^&*()<end_of_turn>\n<start_of_turn>model');
    });

    it('should handle messages with newlines', () => {
      const messages = [{ role: 'user' as const, content: 'Hello\nWorld' }];
      const formatted = (wrapper as any).formatMessages(messages);
      expect(formatted).toBe('<start_of_turn>user\nHello\nWorld<end_of_turn>\n<start_of_turn>model');
    });

    it('should handle messages with HTML-like content', () => {
      const messages = [{ role: 'user' as const, content: '<div>Hello</div>' }];
      const formatted = (wrapper as any).formatMessages(messages);
      expect(formatted).toBe('<start_of_turn>user\n<div>Hello</div><end_of_turn>\n<start_of_turn>model');
    });

    it('should handle very long messages', () => {
      const longMessage = 'A'.repeat(1000);
      const messages = [{ role: 'user' as const, content: longMessage }];
      const formatted = (wrapper as any).formatMessages(messages);
      expect(formatted).toBe(`<start_of_turn>user\n${longMessage}<end_of_turn>\n<start_of_turn>model`);
    });
  });

  describe('invoke', () => {
    let wrapper: GemmaWrapper;

    beforeEach(async () => {
      // Setup mocks for initialization

      wrapper = await GemmaWrapper.create();
    });

    it('should successfully invoke with a message', async () => {
      const message = 'Hello';
      const response = await wrapper.invoke(message);

      // Verify response
      expect(response).toBe('Mocked response');

      // Verify message history was updated
      expect(wrapper.getMessageHistory()).toEqual([
        { role: 'user', content: message },
        { role: 'model', content: 'Mocked response' }
      ]);

      // Verify postMessage was called with correct invocation message
      expect(mockWorker.postMessage).toHaveBeenCalledWith({
        type: 'INVOKE',
        payload: '<start_of_turn>user\nHello<end_of_turn>\n<start_of_turn>model'
      });
    });

    it('should handle response generation failure', async () => {
      // Override the postMessage mock to simulate failure
      mockWorker.postMessage.mockImplementationOnce((message) => {
        const messageHandler = mockWorker.addEventListener.mock.calls
          .slice(-1)[0][1];
        
        const messageEvent = new MessageEvent('message', {
          data: { type: message.type, result: { success: false, error: 'Generation failed' } }
        });
        
        messageHandler(messageEvent);
      });

      await expect(wrapper.invoke('Hello')).rejects.toThrow('Generation failed');

      // Verify message history was not updated with model response
      expect(wrapper.getMessageHistory()).toEqual([
        { role: 'user', content: 'Hello' }
      ]);
    });

    it('should handle empty message', async () => {
      const response = await wrapper.invoke('');

      // Verify response
      expect(response).toBe('Mocked response');

      // Verify message history
      expect(wrapper.getMessageHistory()).toEqual([
        { role: 'user', content: '' },
        { role: 'model', content: 'Mocked response' }
      ]);
    });

    it('should handle very long message', async () => {
      const longMessage = 'A'.repeat(1000);
      const response = await wrapper.invoke(longMessage);

      // Verify response
      expect(response).toBe('Mocked response');

      // Verify message history
      expect(wrapper.getMessageHistory()).toEqual([
        { role: 'user', content: longMessage },
        { role: 'model', content: 'Mocked response' }
      ]);
    });

    it('should handle messages with special characters', async () => {
      const message = 'Hello! @#$%^&*()';
      const response = await wrapper.invoke(message);

      // Verify response
      expect(response).toBe('Mocked response');

      // Verify message history
      expect(wrapper.getMessageHistory()).toEqual([
        { role: 'user', content: message },
        { role: 'model', content: 'Mocked response' }
      ]);
    });

    it('should handle messages with newlines', async () => {
      const message = 'Hello\nWorld';
      const response = await wrapper.invoke(message);

      // Verify response
      expect(response).toBe('Mocked response');

      // Verify message history
      expect(wrapper.getMessageHistory()).toEqual([
        { role: 'user', content: message },
        { role: 'model', content: 'Mocked response' }
      ]);
    });

    it('should handle messages with HTML-like content', async () => {
      const message = '<div>Hello</div>';
      const response = await wrapper.invoke(message);

      // Verify response
      expect(response).toBe('Mocked response');

      // Verify message history
      expect(wrapper.getMessageHistory()).toEqual([
        { role: 'user', content: message },
        { role: 'model', content: 'Mocked response' }
      ]);
    });

    it('should maintain conversation context across invocations', async () => {
      const messages = [
        'Tell me about TypeScript',
        'What are its main features?',
        'How does it compare to JavaScript?'
      ];

      for (const message of messages) {
        await wrapper.invoke(message);
      }

      // Verify message history maintains full conversation
      expect(wrapper.getMessageHistory()).toEqual([
        { role: 'user', content: messages[0] },
        { role: 'model', content: 'Mocked response' },
        { role: 'user', content: messages[1] },
        { role: 'model', content: 'Mocked response' },
        { role: 'user', content: messages[2] },
        { role: 'model', content: 'Mocked response' }
      ]);

      // Verify postMessage was called four times (1 INIT + 3 INVOKE)
      expect(mockWorker.postMessage).toHaveBeenCalledTimes(4);
      
      // Verify INIT call
      expect(mockWorker.postMessage).toHaveBeenNthCalledWith(1, {
        type: 'INIT',
        payload: {}
      });
      
      // Verify INVOKE calls
      expect(mockWorker.postMessage).toHaveBeenNthCalledWith(2, {
        type: 'INVOKE',
        payload: '<start_of_turn>user\nTell me about TypeScript<end_of_turn>\n<start_of_turn>model'
      });
      
      expect(mockWorker.postMessage).toHaveBeenNthCalledWith(3, {
        type: 'INVOKE',
        payload: '<start_of_turn>user\nTell me about TypeScript<end_of_turn>\n' +
                 '<start_of_turn>model\nMocked response<end_of_turn>\n' +
                 '<start_of_turn>user\nWhat are its main features?<end_of_turn>\n' +
                 '<start_of_turn>model'
      });
      
      expect(mockWorker.postMessage).toHaveBeenNthCalledWith(4, {
        type: 'INVOKE',
        payload: '<start_of_turn>user\nTell me about TypeScript<end_of_turn>\n' +
                 '<start_of_turn>model\nMocked response<end_of_turn>\n' +
                 '<start_of_turn>user\nWhat are its main features?<end_of_turn>\n' +
                 '<start_of_turn>model\nMocked response<end_of_turn>\n' +
                 '<start_of_turn>user\nHow does it compare to JavaScript?<end_of_turn>\n' +
                 '<start_of_turn>model'
      });
    });
  });

  describe('utility methods', () => {
    let wrapper: GemmaWrapper;

    beforeEach(async () => {
      wrapper = await GemmaWrapper.create();
    });

    describe('getMessageHistory', () => {
      it('should return empty array for new wrapper', () => {
        expect(wrapper.getMessageHistory()).toEqual([]);
      });

      it('should return copy of message history', async () => {
        // Add some messages to history
        await wrapper.invoke('Hello');
        await wrapper.invoke('How are you?');

        // Get history
        const history = wrapper.getMessageHistory();

        // Verify history
        expect(history).toEqual([
          { role: 'user', content: 'Hello' },
          { role: 'model', content: 'Mocked response' },
          { role: 'user', content: 'How are you?' },
          { role: 'model', content: 'Mocked response' }
        ]);

        // Verify it's a copy by modifying it
        history.push({ role: 'user', content: 'Extra message' });
        expect(wrapper.getMessageHistory()).toEqual([
          { role: 'user', content: 'Hello' },
          { role: 'model', content: 'Mocked response' },
          { role: 'user', content: 'How are you?' },
          { role: 'model', content: 'Mocked response' }
        ]);
      });
    });

    describe('clearHistory', () => {
      it('should clear empty history', () => {
        wrapper.clearHistory();
        expect(wrapper.getMessageHistory()).toEqual([]);
      });

      it('should clear populated history', async () => {
        // Add some messages to history
        await wrapper.invoke('Hello');
        await wrapper.invoke('How are you?');

        // Clear history
        wrapper.clearHistory();

        // Verify history is empty
        expect(wrapper.getMessageHistory()).toEqual([]);

        // Verify we can still add new messages
        await wrapper.invoke('New message');
        expect(wrapper.getMessageHistory()).toEqual([
          { role: 'user', content: 'New message' },
          { role: 'model', content: 'Mocked response' }
        ]);
      });
    });

    describe('setSystemMessage', () => {
      it('should set system message', () => {
        const newSystemMessage = 'You are a helpful assistant';
        wrapper.setSystemMessage(newSystemMessage);
        expect((wrapper as any).systemMessage).toBe(newSystemMessage);
      });

      it('should update existing system message', async () => {
        // Create wrapper with initial system message
        const wrapperWithSystem = await GemmaWrapper.create({ 
          systemMessage: 'Initial system message' 
        });

        // Update system message
        const newSystemMessage = 'Updated system message';
        wrapperWithSystem.setSystemMessage(newSystemMessage);
        expect((wrapperWithSystem as any).systemMessage).toBe(newSystemMessage);
      });

      it('should handle empty string system message', () => {
        wrapper.setSystemMessage('');
        expect((wrapper as any).systemMessage).toBe('');
      });

      it('should handle system message with special characters', () => {
        const systemMessage = 'You are a helpful assistant! @#$%^&*()';
        wrapper.setSystemMessage(systemMessage);
        expect((wrapper as any).systemMessage).toBe(systemMessage);
      });

      it('should handle system message with newlines', () => {
        const systemMessage = 'You are a helpful assistant\nBe friendly';
        wrapper.setSystemMessage(systemMessage);
        expect((wrapper as any).systemMessage).toBe(systemMessage);
      });

      it('should maintain system message after clearing history', async () => {
        // Set system message
        const systemMessage = 'You are a helpful assistant';
        wrapper.setSystemMessage(systemMessage);

        // Add some messages and clear history
        await wrapper.invoke('Hello');
        wrapper.clearHistory();

        // Verify system message is still set
        expect((wrapper as any).systemMessage).toBe(systemMessage);
      });

      it('should affect message formatting', async () => {
        // Set system message
        const systemMessage = 'You are a helpful assistant';
        wrapper.setSystemMessage(systemMessage);

        // Add a message
        await wrapper.invoke('Hello');

        // Verify message history includes system message
        expect(wrapper.getMessageHistory()).toEqual([
          { role: 'user', content: 'Hello' },
          { role: 'model', content: 'Mocked response' }
        ]);

        // Verify the formatted messages include system message
        const formatted = (wrapper as any).formatMessages(wrapper.getMessageHistory());
        expect(formatted).toBe(
          '<start_of_turn>user\n[System Instructions: You are a helpful assistant]<end_of_turn>\n' +
          '<start_of_turn>user\nHello<end_of_turn>\n' +
          '<start_of_turn>model\nMocked response<end_of_turn>\n' +
          '<start_of_turn>model'
        );
      });
    });
  });
}); 
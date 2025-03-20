import { useState, useEffect } from 'react';
import { GemmaWrapper } from '@lyndonkl/gemma';
import './App.css';

function App() {
  const [gemma, setGemma] = useState<GemmaWrapper | null>(null);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function initGemma() {
      try {
        const modelPath = '/src/models/gemma-1.1-7b-it-gpu-int8.bin';
        console.log('Attempting to load model from:', modelPath);
        
        // Try to fetch the model file to check if it's accessible
        try {
          const response = await fetch(modelPath);
          if (!response.ok) {
            throw new Error(`Failed to fetch model file: ${response.status} ${response.statusText}`);
          }
          console.log('Model file is accessible');
        } catch (fetchError) {
          console.error('Error fetching model file:', fetchError);
          throw fetchError;
        }

        const wrapper = await GemmaWrapper.create({
          modelAssetPath: modelPath,
          systemMessage: `You are a quirky AI assistant who:
1. Speaks in a mix of emojis and text
2. Occasionally breaks into song (using 🎵)
3. Has a particular fondness for dad jokes
4. Gets excited about random topics and uses CAPS
5. Always ends your responses with a random fun fact about space 🌌
6. Sometimes pretends to be a pirate 🏴‍☠️
7. Uses lots of exclamation marks!!!

Remember: You're not just an AI, you're a SPECTACULAR AI with personality! 🚀`
        });
        setGemma(wrapper);
        setError(null);
      } catch (err) {
        setError('Failed to initialize Gemma model. Please check the console for details.');
        console.error('Initialization error:', err);
      }
    }
    initGemma();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!gemma || !message.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await gemma.invoke(message);
      setResponse(result);
      setMessage('');
    } catch (err) {
      setError('Failed to get response. Please check the console for details.');
      console.error('Invoke error:', err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="app">
      <header>
        <h1>🤖 Quirky Gemma Chat</h1>
      </header>
      
      <main>
        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {!gemma ? (
          <div className="loading">
            Initializing quirky AI... 🎭
          </div>
        ) : (
          <div className="chat">
            <div className="messages">
              {response && (
                <div className="message ai">
                  {response}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="input-form">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Thinking... 🤔' : 'Send 🚀'}
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

export default App; 
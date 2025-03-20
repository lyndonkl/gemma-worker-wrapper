import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Mock import.meta.url
Object.defineProperty(import.meta, 'url', {
  value: `file://${__dirname}/../worker.js`
}); 
import { readFileSync } from 'node:fs';

const source = readFileSync('src/PasswordGenerator.astro', 'utf8');

const forbiddenPatterns = [
  'localStorage',
  'sessionStorage',
  'indexedDB',
  'document.cookie',
  'fetch(',
  'navigator.sendBeacon',
  'umami.track',
  'console.log',
  'Math.random'
];

const found = forbiddenPatterns.filter((pattern) => source.includes(pattern));

if (found.length > 0) {
  console.error('Privacy check failed. Forbidden pattern(s) found:');
  for (const pattern of found) {
    console.error(`- ${pattern}`);
  }
  process.exit(1);
}

if (!source.includes('crypto.getRandomValues')) {
  console.error('Privacy check failed. crypto.getRandomValues was not found.');
  process.exit(1);
}

console.log('Privacy check passed: no forbidden storage, network, cookie, beacon, analytics, debug-log, or weak random patterns found.');

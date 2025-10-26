import '@testing-library/jest-dom';

// Polyfill TextEncoder/TextDecoder for react-router in JSDOM
import { TextEncoder, TextDecoder } from 'util';
if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder;
}
if (!global.TextDecoder) {
  // eslint-disable-next-line no-undef
  global.TextDecoder = TextDecoder;
}

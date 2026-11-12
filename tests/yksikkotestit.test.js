import { describe, expect, it } from 'vitest';
import { statusLabel } from '../public/taskStore.js';

describe('unit testing environment', () => {
  it('runs a basic unit test', () => {
    expect(statusLabel('done')).toBe('Done');
  });
});
import { expect } from 'chai';
import add from '../src/add.js';

describe('add', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 1)).to.equal(2);
    expect(add(6, 1)).to.equal(7);
    expect(add(4569, 2301)).to.equal(6870);
  });
});

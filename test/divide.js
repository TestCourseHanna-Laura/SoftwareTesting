import { expect } from 'chai';
import divide from '../src/divide.js';

describe('divide', () => {
  it('should divide two numbers correctly', () => {
    expect(divide(8, 4)).to.equal(2);
    expect(divide(272, 16)).to.equal(17);
    expect(divide(1, 1)).to.equal(0);
  });
});

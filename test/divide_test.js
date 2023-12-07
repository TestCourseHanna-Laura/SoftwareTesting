import { expect } from 'chai';
import divide from '../src/divide.js';

describe('', () => {
  it('should divide two numbers correctly', () => {
    expect(divide(8, 4)).to.equal(2);
    expect(divide(272, 272)).to.equal(1);
    expect(divide(-5, 2)).to.equal(-2.5);
    expect(divide(-2, -2)).to.equal(1);
    expect(divide(40, -8)).to.equal(-5);
  });
});

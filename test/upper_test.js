import { expect } from 'chai';
import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
  it('should handle lowercase word correctly', () => {
    expect(upperFirst('crocodile')).to.equal('Crocodile');
    expect(upperFirst('RAINBOOW')).to.equal('RAINBOOW');
    expect(upperFirst('')).to.equal('');
    expect(upperFirst('hello world')).to.equal('Hello world');
  });
});

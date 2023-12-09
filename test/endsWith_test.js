// test/testEndsWith.js
import { expect } from 'chai';
import endsWith from '../src/endsWith.js';

describe('endsWith', function () {
    it('should return true if string ends with target', function () {
        expect(endsWith('abc', 'c')).to.equal(true);
        expect(endsWith('abc', 'b')).to.equal(false);
        expect(endsWith('abc', 'b', 2)).to.equal(true);
        expect(endsWith('abc', 'abc')).to.equal(true);
    });

    it('should handle position parameter correctly', function () {
        expect(endsWith('abc', 'b', 1)).to.equal(false);
        expect(endsWith('abc', 'b', 2)).to.equal(true);
        expect(endsWith('abc', 'c', -1)).to.equal(false);
        expect(endsWith('abc', 'c', 4)).to.equal(true);
    });

    it('should handle non-string inputs', function () {
        expect(endsWith(123, '23')).to.equal(false);
    });

});

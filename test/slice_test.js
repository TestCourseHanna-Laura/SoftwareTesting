import { expect } from 'chai';
import slice from '../src/slice.js';

describe('slice', function () {
    it('should return a slice of the array starting from the specified index', function () {
        const array = [1, 2, 3, 4];
        expect(slice(array, 2)).to.deep.equal([3, 4]);
    });

    it('should handle negative start index', function () {
        const array = [1, 2, 3, 4];
        expect(slice(array, -2)).to.deep.equal([3, 4]);
    });

    it('should handle negative end index', function () {
        const array = [1, 2, 3, 4];
        expect(slice(array, 0, -1)).to.deep.equal([1, 2, 3]);
    });

    it('should handle negative start and end indices', function () {
        const array = [1, 2, 3, 4, 5];
        expect(slice(array, -3, -1)).to.deep.equal([3, 4]);
    });

    it('should handle undefined end index as the length of the array', function () {
        const array = [1, 2, 3, 4];
        expect(slice(array, 1)).to.deep.equal([2, 3, 4]);
    });

    it('should handle undefined start index as 0', function () {
        const array = [1, 2, 3, 4];
        expect(slice(array)).to.deep.equal([1, 2, 3, 4]);
    });

    it('should handle negative start index beyond the array length as 0', function () {
        const array = [1, 2, 3, 4];
        expect(slice(array, -5)).to.deep.equal([1, 2, 3, 4]);
    });

    it('should handle start index greater than end index as an empty array', function () {
        const array = [1, 2, 3, 4];
        expect(slice(array, 3, 2)).to.deep.equal([]);
    });

    it('should handle empty array', function () {
        const array = [];
        expect(slice(array, 1, 3)).to.deep.equal([]);
    });
});

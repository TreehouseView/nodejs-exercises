'use strict';

const sut = require('./HexToBinary.js').HexToBinary;

describe('HexToBinary', () => {
    test('Should Return Binary', () => {
        expect(sut('1')).toBe('0001');
        expect(sut('2')).toBe('0010');
        expect(sut('3')).toBe('0011');
        expect(sut('4')).toBe('0100');
        expect(sut('5')).toBe('0101');
        expect(sut('6')).toBe('0110');
        expect(sut('7')).toBe('0111');
        expect(sut('A')).toBe('1010');
        expect(sut('FF')).toBe('11111111');
        expect(sut('F3')).toBe('11110011');
        expect(sut('3BF3')).toBe('0011101111110011');
    });
    test('Should Not Return Binary On Invalid Input', () => {
        expect(sut('ABCDEFG')).toBe('');
        expect(sut('G')).toBe('');
    });
});

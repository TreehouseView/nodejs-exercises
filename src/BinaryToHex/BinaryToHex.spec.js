'use strict';

const sut = require('./BinaryToHex.js').BinaryToHex;

describe('BinaryToHex', () => {
    test('Should Convert Zero Length Binary', () => {
        expect(sut('')).toBe('');
    });
    test('Should Convert 1 char Length Binary', () => {
        expect(sut('0')).toBe('0');
        expect(sut('1')).toBe('1');
    });
    test('Should Convert Binary with Leading Zeroes', () => {
        expect(sut('000111010')).toBe('3A');
    });
    test('Should Convert Binary', () => {
        expect(sut('1010101010101010')).toBe('AAAA');
        expect(sut('10101010101010')).toBe('2AAA');
        expect(sut('1111')).toBe('F');
        expect(sut('111111111111')).toBe('FFF');
        expect(sut('10')).toBe('2');
        expect(sut('10000')).toBe('10');
        expect(sut('100000')).toBe('20');
    });
    test('Should Not Convert Non String Input', () => {
        expect(sut({foo: 'bar', myFunc: x => x})).toBe('');
    });
    test('Should Not Convert Non Binary Input', () => {
        expect(sut('This is not Binary')).toBe('');
        expect(sut('101 Boisenberry St.')).toBe('');
    });
});

import {expect} from '@jest/globals';
const { generatePassword } = require('../script')

describe('generatePassword', () => {
    it('should return a password with correct length', () => {
        expect(generatePassword(12, 'low').length).toBe(12);

        expect(generatePassword(12, 'medium').length).toBe(12);

        expect(generatePassword(12, 'high').length).toBe(12);
    });

    it('should return a low strength password with only lowercase letters', () => {
        const password = generatePassword(12, 'low');
        expect (password).toMatch('/^[a-z]+$/');
    });

    it('should return a medium strength password with letters and numbers', () => {
        const password = generatePassword(12, 'medium');
        expect (password).toMatch('/^[a-zA-Z0-9]+$/');
    });

    it('should return a high strength password with letters, numbers and sppecial characters', () => {
        const password = generatePassword(12, 'high');
        expect (password).toMatch('/^[a-zA-Z0-9!@#$%^&*()_+~|{:;?><,.-=}]+$/');
    });

});
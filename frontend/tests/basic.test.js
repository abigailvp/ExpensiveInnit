import {test} from './basic.js';
import{describe, it, expect} from 'vitest';

describe('test of vitest werkt', () => {
    it ('true functie geeft true',()=> {
        expect (test(a).toBe(true));
    })
})
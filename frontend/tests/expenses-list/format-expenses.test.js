import { describe, it, expect, vi, beforeEach } from 'vitest';
//simulaties moeten altijd hier staan
vi.mock('../../src/expenses.list/fetch-expenses.js', () => ({
    getExpensesData: vi.fn(),
})); //simulatie van getExpensesData OMDAT je niet echt data wilt fetchen

global.fetch = vi.fn();

import { getExpensesData } from '../../src/expenses.list/fetch-expenses.js';
import { __only_for_test, getExpenses } from '../../src/expenses.list/format-expenses.js';

const { formatExpenses } = __only_for_test;

//FUCNTIE 1
describe('array formatteren', () => {
    it('array bevat displayDate property', () => {

        const array = [{ id: 'koekjes', aantal: 200 },
        { id: 'fruit', aantal: 100 }];
        const objectenVanArray = formatExpenses(array);

        expect(objectenVanArray[0]).toHaveProperty('date'); //date moet tussen aanhalingstekens, anders denkt die dat het een variabele is
        expect(objectenVanArray[1]).toHaveProperty('date'); //[0] om 1 object uit array te halen
    })
})




//FUNCTIE2


describe("statusobject teruggeven", () => {
    beforeEach(() => {
        vi.resetAllMocks(); //resetten zodat je bij elke test trg een lege functie hebt
        fetch.mockReset();
    });

    it("geeft succesobject bij succes", async () => {

        const data = [{ id: "fruit", aantal: 100 }, { id: "koekjes", aantal: 400 }];
        const formatted = [{ id: "fruit", aantal: 100, date: "17/6/2025" }, { id: "koekjes", aantal: 400, date: "17/6/2025" }];
        getExpensesData.mockResolvedValue(data);
        // laat ASYNCHRONE functie RESOLVEN en dit retourneren

        expect(formatExpenses(data)).toEqual(formatted); //toEqual want gaat om inhoud

        const result = await getExpenses();
        expect(result).toEqual({ success: true, expenses: formatted });
    });

    // test kan falen als de data niet wordt gefetchd OF als geen date toegevoegd
    it("geeft failureobject bij niet kunnen fetchen", async () => {
        fetch.mockResolvedValueOnce({ ok: false });

        const failFetch = await getExpenses();

        expect(failFetch.success).toBe(false); //getExpenses geeft object terug > .succes = property van object
        expect(failFetch.error).toBeInstanceOf(Error);
        expect(failFetch.error.message).toContain("error");
    });


})
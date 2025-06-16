import { describe, it, expect, expect, vi, beforeEach } from 'vitest';
import { formatExpenses } from "../../src/expenses.list/format-expenses.js";
import { getExpensesData } from '../../src/expenses-list/fetch-expenses.js';
import { getExpenses, __only_for_test as internal } from '../../src/expenses-list/format-expenses.js';

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

vi.mock('../../src/expenses-list/fetch-expenses.js', () => ({
    getExpensesData: vi.fn(),
})); //simulatie van getExpensesData OMDAT je niet echt data wilt fetchen

vi.mock('../../src/expenses-list/format-expenses.js', () => ({
    formatExpenses: vi.fn(),
})); //simulatie van formatExpenses omdat binnen getExpenses je data van getExpensesData gebruikt

describe("statusobject teruggeven", () => {
    beforeEach(() => {
        fetch.mockReset();
    });

    it("geeft succesobject bij succes", async () => {

        getExpensesData.mockResolvedValue([{ id: "fruit", aantal: 100 }, { id: "koekjes", aantal: 400 }]);
        // laat ASYNCHRONE functie RESOLVEN en dit retourneren

        formatExpenses.mockReturnValue([{ id: "fruit", aantal: 100, date: 16 / 6 / 25 }, { id: "koekjes", aantal: 400, date: 16 / 6 / 25 }]);
        const expenses = [{ id: "fruit", aantal: 100, date: 16 / 6 / 25 }, { id: "koekjes", aantal: 400, date: 16 / 6 / 25 }]
        const result = await getExpenses();
        expect(result).toEqual({ success: true, expenses });
    });

    it("geeft failureobject bij reject", async () => {
        getExpenseDate.mockResolvedValue([{ id: "fruit", aantal: 100 }, { id: koekjes, aantal: 400 }]);
        const result = await getExpenses();
        expect(getExpenses()).toEqual({ success: false, error });
    });

    it("geeft failureobject bij formatExpenses error idfk", async () => {
        const expenses = [{ id: "koekjes", aantal: 400 }];
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => expenses,
        });
        const result = await getExpenses();
        expect(getExpenses()).toEqual({ success: false, error });
    });

})
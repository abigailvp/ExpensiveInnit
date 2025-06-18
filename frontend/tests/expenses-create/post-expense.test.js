import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createExpense } from '../../src/expenses-create/post-expense.js';

global.fetch = vi.fn(); // mock fetch en vervang door lege functie

describe("post expenses in body", () => {
    beforeEach(() => {
        fetch.mockReset(); //resetten van fetch VOORALEER elke test opnieuw begint
    });


    it("zet expenses in body via POST", async () => {
        const newExpense = { description: "koekjes", amount: 500, date: "18/6/2025" };
        const returned = { id: 42, description: "koekjes", amount: 500, date: "18/6/2025" };

        fetch.mockResolvedValueOnce({
            ok: true, //als test lukt
            json: async () => returned, //laat mock dan dit retourneren
        });

        const result = await createExpense(newExpense);

        expect(fetch).toHaveBeenCalledWith("http://localhost:3000/expenses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newExpense),
        });

        expect(result).toEqual(returned);
    });

    it("gooit een fout bij POST failure", async () => {
        fetch.mockResolvedValueOnce({ ok: false });
        await expect(createExpense({ description: "koekjes" })).rejects.toThrow("not enough data");
    });
});
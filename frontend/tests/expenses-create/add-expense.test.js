import { describe, expect, it, vi, beforeEach } from 'vitest';

vi.mock('../../src/expenses-create/post-expenses.js', () => ({
    createExpense: vi.fn(),
})); //simulatie van createExpense OMDAT je niet echt wilt uitvoeren

// altijd nog importen onder mock!!!
import { createExpense } from '../../src/expenses-create/post-expense.js';
import { validateFormData, addExpense } from '../../src/expenses-create/add-expense.js';

describe('validateFormData', () => {
    it('geeft error bij niet genoeg data properties', () => {
        const notEnoughData = { id: 42, description: "koekjes" }
        const noValidation = validateFormData(notEnoughData);
        expect(noValidation).toEqual({ success: false, error: 'Not enough data.' });
    })


    it('geeft succes bij genoeg data properties', () => {
        const data = { id: 42, description: "koekjes", amount: 400, date: "18/6/2025" }
        const validation = validateFormData(data);
        expect(validation.success).toEqual(true);
    })


    it('geeft error als amount niet positief is', () => {
        const errorData = { id: 42, description: "koekjes", amount: -400, date: "18/6/2025" }
        const noValidation = validateFormData(errorData);
        expect(noValidation.success).toEqual(false);
    })

})




describe("addExpense", () => {
    beforeEach(() => {
        vi.resetAllMocks(); //resetten zodat je bij elke test trg een lege functie hebt
    });



    it("geeft success als validateFormData en createExpense gelukt zijn", async () => {
        const data = { id: 42, description: "fruit", amount: 100, date: "18/6/2025" };

        //hier createExpense mocken want hier wordt die wel aangeroepen
        createExpense.mockResolvedValueOnce(data);
        const result = await addExpense(data);

        expect(createExpense).toHaveBeenCalledWith(data);
        expect(result).toEqual({ success: true });
    });


    it("geeft failureobject als validateFormdata gelukt maar createExpenses niet", async () => {
        const data = { amount: 100, date: "18/6/2025" };

        const result = await addExpense(data);

        expect(result).toEqual({ success: false, error: result.error });
    });

    it("geeft failureobject als validateFormData geen succes heeft", async () => {
        const data = { description: "fruit", amount: -100, date: "18/6/2025" };
        const validation = validateFormData(data);

        const result = await addExpense(data);
        expect(result).toEqual({ success: false, error: validation.error })
    });


})


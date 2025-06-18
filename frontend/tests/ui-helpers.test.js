import { __only_for_test } from "../src/ui-helpers.js";
vi.mock('../../src/expenses-list/format-expenses.js', () => ({
    getExpenses: vi.fn(),
})); //je mockt getExpenses en stelt die gelijk aan een lege functie

import { getExpenses } from "../src/expenses-list/format-expenses.js";


describe('showExpenses', () => {
    it('showError als er geen data of data.expenses is', async () => {
        getExpenses.mockResolvedValueOnce({ //laat async functie resolven
            success: true,
            expenses: [
                { description: 'Lunch', amount: 7.5, date: '15/06/2025' }
            ]
        });
        const element = document.createElement('div');
        await showExpenses(element);

        expect(element.textContent).toContain('Lunch');
    });

    it('showError als getExpenses niet gaat', async () => {
        const error = new Error('Network fail');


        const element = document.createElement('div');
        await showExpenses(element);

        expect(element.textContent).toContain('Network fail');
    });
});

// export async function showExpenses(element) {
//     showLoading(element);
//     try {
//         const data = await getExpenses();
//         if (data && data.expenses) {
//             renderExpenses(element, data.expenses); //.expenses zodat je in object property expenses selecteert
//         }
//         else {
//             showError(element, data.error)
//         }
//     }
//     catch (error) {
//         showError(element, error.message);
//     }
// }
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getExpenses } from '../../src/expenses-list/format-expenses.js';
import { __only_for_test, showExpenses } from '../../src/expenses-list/show-expenses.js';

vi.mock('../../src/expenses-list/format-expenses.js', () => ({
    getExpenses: vi.fn(),
})); //je mockt getExpenses en stelt die gelijk aan een lege functie



describe('showExpenses', () => {
    it('renders expenses when getExpenses succeeds', async () => {
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

    it('renders error when getExpenses fails', async () => {
        const error = new Error('Network fail');
        getExpenses.mockResolvedValueOnce({ success: false, error });

        const element = document.createElement('div');
        await showExpenses(element);

        expect(element.textContent).toContain('Network fail');
    });
});

import { describe, it, expect } from 'vitest';

vi.mock('../../src/expenses.list/show-expenses.js', () => ({
    showExpenses: vi.fn(),
})); //simulatie van showExpenses OMDAT getExpenses async is

global.fetch = vi.fn();

import { __only_for_test, showExpenses } from '../../src/expenses.list/show-expenses.js';

showEmptyState, renderExpenses
describe('render expenses: emptystate of lijst weergeven', () => {
    it('', () => {
        const element = document.createElement('div');
        document.body.appendChild(element);

        expect().toBe();
    })
})


showLoading, showError,
    describe('showExpenses: loading tonen of errortonen', () => {
        it('', () => {
            const element = document.createElement('div');
            document.body.appendChild(element);

            expect().toBe();
        })
    })


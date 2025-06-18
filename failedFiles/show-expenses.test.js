// import { describe, it, expect, vi } from 'vitest';
// import { __only_for_test, showExpenses } from '../frontend/src/expenses-list/show-expenses.js';

describe.skip('render expenses: emptystate of lijst weergeven', () => {
    const { renderExpenses } = __only_for_test;

    it('toont no expenses found als array leeg is', () => {
        const element = document.createElement('div');
        document.body.appendChild(element);

        const array = [];
        renderExpenses(element, array);

        expect(element.textContent).toEqual("No expenses found.");
    })

    it('toont lijst als array gegeven is', () => {
        const element = document.createElement('div');
        document.body.appendChild(element);
        const array = [{ id: "fruit", aantal: 100, date: "17/6/2025" }, { id: "koekjes", aantal: 400, date: "17/6/2025" }]

        renderExpenses(element, array);

        const ul = element.querySelector('ul');
        const expenses = element.querySelectorAll('li'); //alle elementen uit lijst

        expect(ul).not.toBeNull();
        expect(ul.textContent).toContain('koekjes');
        expect(expenses.length).toBe(2);
        expect(element.textContent).toContain('fruit');

    })
})


const { showLoading, renderExpenses, showError, getExpenses } = __only_for_test;

describe.skip('showExpenses: verschillende cases obv gedefineerde functies', () => {
    it('functie 1: loading is eerst zichtbaar', async () => {
        const element = document.createElement('div');

        const showLoadingMock = vi.spyOn(__only_for_test, 'showLoading').mockImplementation((el) => {
            el.innerHTML = '<p>Loading...</p>'; //implementation want je wilt testen of loading
            //werkt met het argument element
        });

        vi.spyOn(__only_for_test, 'getExpenses').mockResolvedValue({ expenses: [] });
        vi.spyOn(__only_for_test, 'renderExpenses').mockImplementation(() => { });
        vi.spyOn(__only_for_test, 'showError').mockImplementation(() => { });

        await showExpenses(element);

        expect(showLoadingMock).toHaveBeenCalledWith(element);
        expect(element.innerHTML).toContain('Loading...');
    });

    it('functie2: bij data: toon lijst', async () => {
        const element = document.createElement('div');
        const expenses = [{ id: "fruit", aantal: 100, date: "17/6/2025" }, { id: "koekjes", aantal: 400, date: "17/6/2025" }]

        vi.spyOn(__only_for_test, 'showLoading').mockImplementation(() => { });

        const renderMock = vi.spyOn(__only_for_test, 'renderExpenses').mockImplementation(
            () => { }); //je wilt alleen maar weten of de functie wordt aangeroepen als 
        //als loading voorbij is en er data is

        vi.spyOn(__only_for_test, 'showError').mockImplementation(() => { });
        vi.spyOn(__only_for_test, 'getExpenses').mockResolvedValue(data);

        await showExpenses(element);

        expect(showLijstMock).toHaveBeenCalledWith(element, expenses);

    })

    it('functie3: bij geen data: error', async () => {
        const element = document.createElement('div');

        vi.spyOn(__only_for_test, 'showLoading').mockImplementation(() => { })
        vi.spyOn(__only_for_test, 'renderExpenses').mockImplementation(() => { })
        const errorMock = vi.spyOn(__only_for_test, 'showError').mockImplementation((element) => { })
        vi.spyOn(__only_for_test, 'getExpenses').mockResolvedValue(data)


        expect(errorMock).toHaveBeenCalledWith(element, error);
    })

    it('functie3: catch: error', async () => {
        const element = document.createElement('div');

        vi.spyOn(__only_for_test, 'showLoading').mockImplementation(() => { })
        vi.spyOn(__only_for_test, 'renderExpenses').mockImplementation(() => { })
        const errorMock = vi.spyOn(__only_for_test, 'showError').mockImplementation((element) => { })
        vi.spyOn(__only_for_test, 'getExpenses').mockResolvedValue(data)


        expect(errorMock).toHaveBeenCalledWith(element, error);
    })
})


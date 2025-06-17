import { getExpenses } from "./format-expenses.js";

function showLoading(element) { //  toont een paragraaf met de tekst "Loading...".
    const p = document.createElement('p');
    p.textContent = "Loading...";

    //toevoegen aan element
    element.appendChild(p);
}

function showError(element, error) { //toont een paragraaf met de foutmelding en maakt de tekst rood.
    // error.setAttribute('id', 'errorId');
    const melding = document.createElement('p');
    melding.textContent = error;
    melding.style.color = "red";

    element.appendChild(melding); //getElementById gaat pas na appenden

}

function showEmptyState(element) { // toont een paragraaf met de tekst "No expenses found.".
    const p = document.createElement('p');
    p.textContent = "No expenses found.";
    element.appendChild(p);
}

function renderExpenses(element, expenses) {
    //Als de array leeg is, toon je de lege staat. 
    if (expenses.length < 1 || expenses == undefined) {
        showEmptyState(element);
    }
    //  toon lijst 
    else {
        const titel = document.createElement('ul');
        titel.textContent = 'Expenses lijst';
        element.appendChild(titel);

        for (let i = 0; i < array.length; i++) { // elke expense als tekst weergegeven
            const expense = document.createElement('li');
            expense.textContent = expenses[i];
            element.appendChild(expense);
        }
    }
}



export async function showExpenses(element) {
    showLoading(element);
    const data = await getExpenses();
    if (data) {
        renderExpenses(element, data.expenses); //.expenses zodat je in object property expenses selecteert
    }
    else {
        showError(element, data.error);
    }
}


export const __only_for_test = { showLoading, showError, showEmptyState, renderExpenses };
// exporteren op deze manier omdat
// je niet wilt dat de tekst direct in de html zit
// wel als showExpenses aangeroepen wordt
import { getExpenses } from "./format-expenses.js";
import { showError } from "../ui-helpers.js"

function showLoading(element) { //  toont een paragraaf met de tekst "Loading...".
    const p = document.createElement('p');
    p.textContent = "Loading...";

    //toevoegen aan element
    element.appendChild(p);
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
        const titel = document.createElement('h2');
        titel.textContent = 'Expenses lijst';
        element.appendChild(titel);
        const lijst = document.createElement('ul'); //<li> zitten in ul, de titel is apart
        element.appendChild(lijst);

        for (let i = 0; i < expenses.length; i++) { // elke expense als tekst weergegeven
            const expense = document.createElement('li');
            expense.textContent = `${expenses[i].id} - ${expenses[i].description} - ${expenses[i].amount} - ${expenses[i].date} - ${expenses[i].category}`;
            lijst.appendChild(expense);
        }
    }//kan ook met forEach
}



export async function showExpenses(element) {
    showLoading(element);
    try {
        const data = await getExpenses();
        if (data && data.expenses) {
            renderExpenses(element, data.expenses); //.expenses zodat je in object property expenses selecteert
        }
        else {
            showError(element, data.error)
        }
    }
    catch (error) {
        showError(element, error.message);
    }
}


export const __only_for_test = { showLoading, showEmptyState, renderExpenses };
// exporteren op deze manier omdat
// je niet wilt dat de tekst direct in de html zit
// wel als showExpenses aangeroepen wordt
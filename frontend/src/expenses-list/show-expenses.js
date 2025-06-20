import { getExpenses } from "./format-expenses.js";
import { showError } from "../ui-helpers.js";
import { appendDeleteButton } from "./delete-button.js";

export function showLoading(element) { // toont een paragraaf met de tekst "Loading...".
    const p = document.createElement('p'); //gaat alleen maar als je telkens het element overschrijft
    p.textContent = "Loading...";

    //overschrijven van childelements, niet toevoegen
    element.replaceChildren(p); //element is lege div
    //div met p in => p is child
    //DUS parent.replaceChildren(child) basically
}

export function showEmptyState(element) { // toont een paragraaf met de tekst "No expenses found.".
    const p = document.createElement('p');
    p.textContent = "No expenses found.";
    element.replaceChildren(p);
}

export function renderExpenses(element, expenses) {
    //Als de array leeg is, toon je de lege staat. 
    if (expenses.length < 1 || expenses == undefined) {
        showEmptyState(element);
    }
    //  toon lijst 
    else {
        const lijst = document.createElement('ul'); //<li> zitten in ul, de titel is apart

        //kan ook met forEach
        for (let i = 0; i < expenses.length; i++) { // elke expense als tekst weergegeven
            const lijstItem = document.createElement('li');
            lijstItem.textContent = `${expenses[i].id} - ${expenses[i].description} - ${expenses[i].amount} - ${expenses[i].displayDate} - ${expenses[i].category}`;
            appendDeleteButton(lijstItem, element, expenses[i]);
            lijst.appendChild(lijstItem);
            //< li > -element als parent

        }
        element.replaceChildren(lijst); //beter hier, performantie
    }
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
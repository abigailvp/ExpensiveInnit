import { removeExpense } from '../expenses-delete/remove-expense.js';
import { showExpenses } from '../expenses-list/show-expenses.js';
import { showError } from '../ui-helpers.js';


async function onDeleteButtonClicked(element, expense) {
    const result = await removeExpense(expense.id);
    if (result.success) {
        await showExpenses(element);
    }
    else {
        showError(element, result.error)
    }
}



// Implementeer en test de functie onDeleteButtonClicked(element, expense):
// Roept asynchroon removeExpense(expense.id) aan
// Bij succes: showExpenses(element)
// Bij fout: showError(element, result.error)
// export via __only_for_test

export async function appendDeleteButton(parent, element, expense) { //element (=div)> parent(=lijstitem)> expense
    const btn = document.createElement('button');
    btn.setAttribute('class', 'confirm-delete');

    const spanConfirm = document.createElement('span');
    spanConfirm.setAttribute('class', 'confirm-label');
    spanConfirm.textContent = 'Zeker'; //value gaat niet bij span
    btn.appendChild(spanConfirm);

    spanConfirm.addEventListener('click', async () => await onDeleteButtonClicked(element, expense))
    //event listener moet altijd met arrow function ALS ARGUMENT!!!!!

    const spanTrash = document.createElement('span');
    spanTrash.setAttribute('class', 'trash-icon');
    spanTrash.textContent = 'ⓧ';
    btn.appendChild(spanTrash);

    parent.appendChild(btn);
}


// Implementeer de functie appendDeleteButton(parent, element, expense):
// Maakt een knop aan met klasse confirm - delete
//     Bevat een span.confirm - label met tekst "Zeker?"
//     die op click onDeleteButtonClicked(element, expense) aanroept
//
//     Bevat een span.trash - icon met de tekst "X"
//     Voegt deze knop toe aan het opgegeven parent element




// Voeg in renderExpenses(element, expenses) IN showexpenses.js een verwijderknop
// toe aan elk < li > -element met behulp van de eerder
// aangemaakte functie appendDeleteButton(parent, element, expense).

// Roep deze functie aan met het < li > -element als parent, het
// element waarin de lijst gerenderd wordt, en de bijbehorende expense.
// 
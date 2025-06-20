import { showExpenses } from "./expenses-list/show-expenses.js";
import { bindFormSubmit } from './expenses-create/bind-form.js';


const element = document.getElementById('app')

showExpenses(element);


const form = document.getElementById('form');
bindFormSubmit(form, element);





// Verifieër dat de initiële uitgaven getoond worden in je browser.
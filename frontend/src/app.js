import { showExpenses } from "./expenses-list/show-expenses.js";
import { bindFormSubmit } from '../expenses-create/bind-form.js'; //CHECK DEZE NOG

const app = document.getElementById('app');
showExpenses(app);



// Verifieër dat de initiële uitgaven getoond worden in je browser.
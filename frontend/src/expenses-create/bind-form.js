import { showError } from '../../src/ui-helpers.js'
function submitExpense(form) {

}
// Implementeer en test de functie submitExpense(form):
// leest waarden uit het formulier via FormData
// vormt een object data
// roept addExpense(data) aan en geeft het resultaat terug
// export via __only_for_test
function updateUI(form, element, result) {

}


export const __only_for_test = { submitExpense, updateUI }

// Implementeer en test updateUI(form, element, result):
// controleert of result.success true is
// als dat zo is:
// reset het formulier met form.reset()
// roept showExpenses(element) aan om de lijst opnieuw te laden
// als het mislukt:
// toont een foutmelding via showError(element, result.error') 
// (bijv. UI feedback geven op basis van result)
// export via __only_for_test

function bindFormSubmit(form, element) {

}
// Implementeer en test de functie bindFormSubmit(form, element):
// registreert een submit-handler op het formulier
// haalt de formdata op via FormData
// roept addExpense(data) aan
// bij succes: reset het formulier en toont de geüpdatete lijst
// via showExpenses(element) (import show-expenses.js)
// bij fout: toont een foutmelding via showError(element, message)
// (import ui-helpers.js)

async function removeExpense(id) {
    const result = await deleteExpense(id);
    if (result) {
        return { success: true }
    }

    else {
        return { success: false, error }
    }
}






// Maak een nieuw bestand remove-expense.js aan in /src/expenses-delete/

// Maak een testbestand remove-expense.test.js aan in /tests/expenses-delete/

// Implementeer en test de functie removeExpense(id):

// Roept deleteExpense(id) aan
// Bij succes geeft deze { success: true } terug
// Bij fout geeft deze { success: false, error } terug
// Commit on Green
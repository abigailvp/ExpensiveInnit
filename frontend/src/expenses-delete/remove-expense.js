import { deleteExpense } from './delete-expense.js';

export async function removeExpense(id) {
    const result = await deleteExpense(id);
    if (result) { //status 200 of 204
        return { success: true };
    }

    else { //404 of niet kunnen fetchen

        return { success: false, error }
    }
}



// Implementeer en test de functie removeExpense(id):

// Roept deleteExpense(id) aan
// Bij succes geeft deze { success: true } terug
// Bij fout geeft deze { success: false, error } terug
// Commit on Green
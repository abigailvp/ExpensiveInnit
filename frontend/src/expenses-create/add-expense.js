import { createExpense } from './post-expense.js';

export function validateFormData(data) {
    if (!data.description || !data.amount || !data.date) {
        return { success: false, error: 'Not enough data.' };
    }

    try {
        const getal = parseInt(data.amount); //bv. 5
        if (getal > 0) {
            return { success: true } //const isPositief = getal >0 geeft true
        }
        else {
            return { success: false, error: "amount must be postive" }
        }
    }
    catch (error) {
        return { success: false, error: error.message } //isPositief is false
    }
}


export async function addExpense(data) {
    const validatie = validateFormData(data); //geeft{ success: true } of { success: true, error }
    if (validatie.success) { //success en error zijn properties van validatie!!!!!!!

        try {
            const created = await createExpense(data); // oftwel geeft dit "Failed to post expenses" of response.json();
            if (created.success) {
                return { success: true }
            }
            else {
                return { success: false, error: created.error }
            }
        }
        catch (error) {
            return { success: false, error: error.message }
        }
    }

    else {
        return { success: false, error: validatie.error }
    }
}


// Implementeer en test de functie addExpense(data)
// die validatie uitvoert met validateFormData(data)

// bij fout geeft deze { success: false, error } terug zonder een API-call te doen
// bij geldige input roept ze createExpense(data) aan en verwerkt eventuele fouten:
// bij succes geeft ze { success: true } terug
// bij fout geeft ze { success: false, error } terug
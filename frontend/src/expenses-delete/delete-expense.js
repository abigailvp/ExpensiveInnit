async function deleteExpense(id) {
    const response = await fetch('http://localhost:4000/expenses/id'){
        method: 'DELETE',
        body: ,
        header: ,
    }
    if (!response.ok) {
        throw new Error('failed to delete');
    }
}




// Maak een nieuw bestand delete-expense.js aan in /src/expenses-delete/ en
// implementeer daarin een functie deleteExpense(id) die een
// DELETE-verzoek stuurt naar DELETE /expenses/:id.

// De functie neemt een string id als argument en gebruikt deze in de URL.

// Test deze functie in delete-expense.test.js (in /tests/expenses-delete/):

// succesvolle DELETE (status 200 of 204)
// fout bij DELETE (bv. 404 of netwerkfout)
// De functie moet een fout gooien bij !response.ok, zonder try/catch.

// Commit on Green
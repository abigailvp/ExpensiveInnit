export async function deleteExpense(id) {
    const response = await fetch(`http://localhost:5082/api/expenses/${id}`, {
        method: "DELETE",
    })

    if (!response.ok) {
        throw new Error(`Failed to delete expense at: ${id}`)
    }
    return response

}



// implementeer daarin een functie deleteExpense(id) die een
// DELETE-verzoek stuurt naar DELETE /expenses/:id.

// De functie neemt een string id als argument en gebruikt deze in de URL.

// succesvolle DELETE (status 200 of 204)
// fout bij DELETE (bv. 404 of netwerkfout)
// De functie moet een fout gooien bij !response.ok, zonder try/catch.

// Commit on Green
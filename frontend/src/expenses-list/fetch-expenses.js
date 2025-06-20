export async function getExpensesData() { //haalt ruwe data van API via GET/expenses

    const response = await fetch("http://localhost:3000/expenses") //frontend URL

    if (!response.ok) {
        throw new Error("couldn't get data");
    }

    return await response.json(); //geen json, geen strings
}


// Laat fouten doorsijpelen naar de servicelaag:

// Gebruik throw als response.ok niet waar is.
// Vermijd try/catch hier, foutafhandeling gebeurt hogerop.



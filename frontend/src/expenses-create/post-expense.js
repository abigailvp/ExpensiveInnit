export async function createExpense(data) {

    if (!data.description || !data.amount || !data.date) { //object properties
        throw new Error('not enough data');
    }

    const response = await fetch("http://localhost:3000/expenses", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    console.log("status code", response.status); //status is een property van uitkomst fetch

    if (!response.ok) { throw new Error("Failed to post expenses") };
    return await response.json();


};






// succesvolle POST (status 201)
// fout bij POST (bv. 400 of netwerkfout)


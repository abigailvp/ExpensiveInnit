import { getExpensesData } from "./fetch-expenses.js";
function formatExpense(expense) {
        const objectDate = expense.date;
        let realDate = new Date(objectDate);
        expense.displayDate = realDate.toLocaleDateString(); //toLocaleDateString() zet d om in een ander format van datum
        return expense;
}
function formatExpenses(expenses) { //expenses van fetch omzetten en date (zonder value) aan toevoegen

        //je wilt een object toevoegen, niet enkel de datum
        expenses.forEach(expense => formatExpense(expense))
        return expenses;

}


//array.forEach => voor elk element uit array

// methode om nog onbestaande property aan object toe te voegen
//      object.new_property = new_propertyValue;



// Maak deze hulpfunctie
// testbaar zonder ze publiek te maken met een export zoals:
export const __only_for_test = { formatExpenses };



export async function getExpenses() {

        try {
                // ruwe data ophaalt via getExpensesData()
                const ruweData = await getExpensesData(); // is al geen json meer, wel promise object

                // het resultaat verwerkt met formatExpenses()
                const expenses = formatExpenses(ruweData);

                const succes = { success: true, expenses }
                return succes;
        }

        catch (error) {
                const failure = { success: false, error }
                return failure;
        }


}

// je moet met async want anders kan je functie niet exporteren

//output van functie is object



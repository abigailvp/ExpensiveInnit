import { getExpensesData } from "./fetch-expenses.js";

function formatExpense(expense) { //1 expense
        const objectDate = expense.date; //opgehaalde data heeft date als property
        let realDate = new Date(objectDate);
        expense.displayDate = realDate.toLocaleDateString(); //toLocaleDateString() zet om in een ander format: dd/mm/yyyy
        return expense;
}

function formatExpenses(expenses) { //opgehaalde expenses allemaal een date geven

        //je wilt een object toevoegen, niet enkel de datum
        expenses.forEach(expense => formatExpense(expense))
        return expenses;

}


//array.forEach BETEKENT voor elk element uit array => doe iets

// methode om nog onbestaande property aan object toe te voegen
//      object.new_property = new_propertyValue;



// Maak deze hulpfunctie testbaar zonder ze publiek te maken met een export zoals:
export const __only_for_test = { formatExpenses };



export async function getExpenses() { //ophalen en formatten van data
        try {
                // ruwe data ophalen via getExpensesData()
                const ruweData = await getExpensesData(); // is al geen json meer, wel promise object

                // het resultaat verwerkt met formatExpenses()
                const expenses = formatExpenses(ruweData);

                const succes = { success: true, expenses } //output van functie is object
                return succes;
        }

        catch (error) {
                const failure = { success: false, error }
                return failure;
        }


}

// je moet met async want anders kan je functie niet exporteren





# verder bouwen op expense-tracker
expense-tracker gebruikte vroeger een *JSON-bestand* om data op te slaan.

nu: app laten praten met een *Web API* in C# die *Entity Framework Core* gebruikt voor opslag in een database.
- EF: async versie 

# expense-tracker
heeft
- backend
    - server.js
- frontend
    - src
        - expenses-create
            add-expense.js
            bind-form.js
            post-expense.js
        - expenses-delete
            delete-expense.js
            remove-expense.js
        - expenses-list
            delete-button.js
            fetch-expenses.js
            format-expenses.js
            show-expenses.js
        - app.js
        - ui-helpers

    - index.html
    - style.css
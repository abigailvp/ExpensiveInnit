# 💰 Expense Tracker - Setup

### Repository aanmaken

1. Maak een nieuwe repository aan op GitHub met de naam `expense-tracker`. Invite Mark Meyers.
2. Clone deze repository naar je lokale machine.
3. Voeg een `.gitignore` toe met minimaal `node_modules/` en `expenses.json` (voor backend).

### Projectstructuur
1. Maak een nieuwe map aan `/backend`.
2. Zet de hiernaast ingesloten bestanden van de backend API (`server.js`, `expenses.json` en `package.json`) in `/backend`.
3. Maak een nieuwe map aan `/frontend`.
4. Binnen `/frontend`, maak lege bestanden aan voor:
   * `index.html`
   * `style.css`
   * `app.js` in subfolder `src`

### Github Workflow toevoegen

1. Voeg in `.github/workflows/ci.yml` een workflow toe die automatisch je tests uitvoert bij elke push of pull request.
2. Gebruik `node` als basis image en installeer dependencies in de `/frontend` map.
3. Zorg dat `vitest` wordt gebruikt als testrunner (die moet ook als dependency worden toegevoegd).
4. De workflow moet minstens uitvoeren:
   * `npm ci` in `/frontend`
   * `npm test` om de tests te draaien

> 💡 Vergeet niet een eenvoudige test toe te voegen in de `frontend`, subfolder `tests` om de workflow te laten slagen!

### Backend opstarten en testen

1. Ga naar de map `/backend` in je terminal.
2. Installeer dependencies met npm.
3. Start de backend server (npm start).
4. Test de endpoint `GET /expenses` met Thunder Client VSCode Extensie.

### Project structuur
```
/expense-tracker
├── /backend
│   ├── expenses.json
│   ├── package.json
│   └── server.js
│
├── /frontend
│   ├── index.html
│   ├── style.css
│   ├── /src
│   │   └── app.js
│   ├── /tests
│   │   └── basic.test.js
│   ├── package.json
│   └── vitest.config.js           # (optioneel als je configuratie nodig hebt)
├── /.github
│   └── /workflows
│       └── ci.yml                 # (Vitest + backend check)
│
├── .gitignore
└── README.md
```





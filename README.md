<h1>OVERVIEW</h1>

<img src="https://github.com/user-attachments/assets/b71cdc19-5a58-4b6c-b108-f1d75b50fba4" alt="Demo" width="600" />

<b>Landing Page</b> realizzata in <b>React.js</b> simile a Netflix.</br>
Una <b>searchbar</b> ed una <b>select</b> ci permetteranno di effettuare ricerche mirate attraverso una <b>fetch</b> verso le <b>API di terze parti the Movie DB(TMDB)</b>

<h2>TECONOLOGIE UTILIZZATE</h2>
<ul>
 <li>HTML, CSS + Bootstrap</li>
 <li>React.js</li>
 <li>Axios per fetch API</li>
</ul>

<h1>STEPS</h1>

# React Components

```bash
# clono la cartella da github

npm create vite@latest

# alla domanda project-name inserisco . (dot)

npm install

# testo
npm run dev

# apro il .gitignore e aggiungo package-lock.json

 # installo gli altri pacchetti che mi servono

 # cancello il contenuto di App.jsx e rimuovo gli import che non mi servono
 # cancello i file che non mi servono

 #se voglio importo bootstrap in main.jsx prima del mio css custom 
 import "bootstrap/dist/css/bootstrap.min.css";

 # comincio ad editare App.jsx


# add to rules in eslint
rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ..reactHooks.configs.recommended.rules,
      "react/prop-types": 0, 👈
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
```

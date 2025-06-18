import { __only_for_test } from "./expenses-list/format-expenses";

export function showError(element, error) { //toont een paragraaf met de foutmelding en maakt de tekst rood.
    // error.setAttribute('id', 'errorId');
    const melding = document.createElement('p');
    melding.textContent = error;
    melding.style.color = "red";

    element.appendChild(melding); //getElementById gaat pas na appenden

}

export const __only_for_test = showError;
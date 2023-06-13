
const yearsOld = 23;

const name = 'Janusz'

const sentence = `Mam na imię ${name} i mam ${yearsOld} lata`;

// console.log(sentence);

// Tagged template literal string
// example: https://styled-components.com/

function html(texts, ...vars) {
    // console.log(texts);
    // console.log(vars);

    return '<p>' + texts
        .map((text, i) => text + (vars[i] ? `<span>${vars[i]}</span>` : ''))
        .join('') + '</p>';

}

const sentenceHTML = html`Mam na imię ${name} i mam ${yearsOld} lata`;
console.log(sentenceHTML);

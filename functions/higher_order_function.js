// fn, która przyjmuje bądź zwraca deklarację innej fn
// to jest możliwe, gdy funkcje to 'first class citizen' - są obiektami

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}

function sentence(cb, text) {
   return cb(text);
}

// console.log(sentence(capitalize, 'Ala ma kota'));

// function composition

function reverse(text) {
    return [...text].reverse().join('');
}

// console.log(sentence(reverse, 'Ala ma kota'));

// console.log(sentence(reverse, sentence(capitalize, 'ala ma kota')));
// console.log(sentence(capitalize, sentence(reverse, 'ala ma kota')));

// IIFE - immediately invoked function expression
// do tej pory w CommonJS, coś jak namespacing (wzorzec projektowy module i module reveal)
// module - zamknięcie  wszystkich identyfikatorów, żeby nie były dostępne na zewnątrz
// moduleReveal - to samo tylko wystawia API

const moduleReveal = (() => {
    const queue = [];

    function add(item) {
        queue.push(item);
    }

    function remove() {
        queue.shift();
    }

    function show() {
        return queue;
    }

    return {add, remove, show};
})();

// moduleReveal.add(1);
// moduleReveal.add(2);
// moduleReveal.add(3);
//
// console.log(moduleReveal.show());

// przykład

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0)
// }

// kod synchroniczny odpala się zawsze przed asynchronicznym
// pętla wykonuje się przed setTimeout
// var to zmienna globalna, zapisuje się do globalnego zasięgu, więc clg wyświetla zawsze aktualne i

for (var i = 0; i < 10; i++) {

    ((z) => {
        setTimeout(() => {
            console.log(z);
        }, 0)
    })(i);

}
// closure - dostęp do zmiennych spoza wykonywanego zasięgu

// tworzenie
// 1. Muszą być min. 2 funkcje: funkcja outer musi zwracać deklarację funkcji inner
// 2. Fn inner musi używać czegoś z fn outer (np. zmiennej, funkcji, klasy...)

//zalety
// 1. Persystencja (trwałość zmiennych) (sprawia, że funkcje mają stan)

// zmienne dostępne w closure zapisywane są w obiekcie funkcji (inner)

function sentence(name) {
    return function (age) {
        return `Mam na imię ${name} i mam lat ${age}`;
    }
}

const fullSentence = sentence('Janusz');

// console.log(fullSentence());
// console.dir(fullSentence);

// function uuid(counter = 1) {
//     return function (newCounter = null) {
//         counter = newCounter ?? counter;
//         return counter++;
//     }
// }

const uuid = (counter = 1) => () => counter++;

const genUUID = uuid(42);

// console.log(genUUID());
// console.log(genUUID());
// console.log(genUUID());
// console.log(genUUID());
// console.log(genUUID());

function debounce(func, delay) {
    let timeoutId;

    return (...args) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

function fetchData(query) {
    // Symulacja wysyłania zapytania do serwera
    console.log('Wysyłanie zapytania:', query);
}

const debouncedFetchData = debounce(fetchData, 300);

// debouncedFetchData('Kot');
// debouncedFetchData('Pies');
// debouncedFetchData('Ptak');

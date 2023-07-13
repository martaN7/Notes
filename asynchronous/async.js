// przykład synchronicznego kodu, który blokuje interpreter do czasu skończonej operacji
// następna instrukcja wykona się dopiero wtedy, kiedy poprzednia skończy się liczyć

// console.log("start");
//
// for (let i = 0; i < 10000000000; i++) {
//     const result = i ** 2;
// }
//
// console.log("end");

// asynchroniczna wersja powyższego kodu
// console.log("start");
//
// const promise = new Promise((resolve) => {
//     for (let i = 0; i < 10000000000; i++) {
//         const result = i ** 2;
//     }
//
//     resolve("done, for end");
// });
//
// console.log("end");
//
// promise.then(console.log);

// wnioski: programowanie asynchroniczne używa się do rozwiązywania problemów IO bound, a nie CPU bound
// jeżeli operacje są CPU bound to i tak muszą się wykonać, zanim wykona się następna operacja

// małe ulepszenie - ta wersja kodu jest bardziej poprawna od poprzedniej, mimo że robi to samo. Nie blokuje main thread
// console.log("start");
//
// function promise() {
//     return new Promise((resolve) => {
//         for (let i = 0; i < 10000000000; i++) {
//             const result = i ** 2;
//         }
//
//         resolve("done, for end");
//     });
// }
//
// console.log("end");
//
// promise().then(console.log);

// tricky solution

// console.log("start");
//
// const promise = new Promise((resolve) => {
//
//     setTimeout(() => {
//         for (let i = 0; i < 10000000000; i++) {
//             const result = i ** 2;
//         }
//
//         resolve("done, for end");
//     }, 0);
//
// });
//
// console.log("end");
//
// promise.then(console.log);

// event loop - pętla zdarzeń, pętla nieskończona, która służy do przenoszenia tasków z microtask queue i callback queue
// na callstack. Na callstacku sprawdza czy jest pusty oraz czy global execution context jest skończony.
// Microtask queue ma priorytet nad callback queue tzn. dopóki istnieją taski na microtask queue, nie zostaną wzięte
// taski z callback queue

// techniki asynchroniczne
// 1. callback
// 2. promise
// 3. async await
// 2.5! generator i coroutine (współprogram)

// promise based - funkcja, która zwraca promisa, więc trzeba ją obsługiwać jak promisy (then, catch, finally, await)
// AJAX - asynchronous javascript and XML, możliwy dzięki obiektowi XMLHttpRequest
// wymagania funkcjonalne: aplikacja, która zwraca średnią cenę waluty z 3 podanych dni

const url = "http://api.nbp.pl/api/exchangerates/rates/a/"

function getCurrencyValue(currencyCode, dt) {

    // pierwsza opcja
    // return fetch(`${url}${currencyCode}/${dt}/`, {
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }).then((response) => response.json())

    // druga opcja
    // const response = fetch(`${url}${currencyCode}/${dt}/`, {
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // });
    //
    // return response.then((httpResponse) => httpResponse.json());

    // trzecia opcja - zwraca walutę, a nie body response, jak wcześniejsze dwie opcje
    const response = fetch(`${url}${currencyCode}/${dt}/`, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    const body = response.then((httpResponse) => httpResponse.json());

    return body.then((data) => data.rates[0].mid);

}

// getCurrencyValue("USD", "2023-06-15").then(console.log);

const dates = ["2023-04-23", "2023-05-24", "2023-06-15"];

const average = Promise.allSettled(dates.map((date) => getCurrencyValue("USD", date)));

// average.then((values) => console.log(values.reduce((acc, ce) => acc + ce) / values.length));

// NaN - not a correct number, but still number. Np. "Ala"/2

// Promise.all - zwraca nowy promise i zostanie zresolvovany jeśli wqszystkie się zresolvują lub zrejectowane, jeśli którykolwiek się zrejectuje
// Promise.allSettled - zwraca promise, zostanie rozwiązany, gdy wszystkie promusy zostaną zakończone, nie ważne jak
// Promise.any - zwraca promise, zostanie rozwiązany, gdy którykolwiek się rozwiąże. Jeżeli wszystkie się zrejectują, to zostanie odrzucony z błędem AggregateError
// Promise.race - zwraca promise, zostanie rozwiązany bądź odrzucony w zależności od tego, który promise zostanie pierwszy rozwiązany bądź odrzucony

// async await

async function getTwoCurrencies(code1, code2){
    const response1 = await fetch(`${url}${code1}?format=json`);
    const response2 = await fetch(`${url}${code2}?format=json`);
    console.log(1);

    const data1 = await response1.json();
    const data2 = await response2.json();
    console.log(2);
    console.log(data1.rates[0].mid, data2.rates[0].mid);
    console.log(3);
}

// bardziej optymalna wersja
async function getTwoCurrencies2(code1, code2){
    const response = await Promise.all([
        fetch(`${url}${code1}?format=json`).then((response) => response.json()),
        fetch(`${url}${code2}?format=json`).then((response) => response.json())
    ]);

    console.log(1);
    const [response1, response2] = response;
    console.log(2);
    console.log(response1.rates[0].mid, response2.rates[0].mid);
    console.log(3);
}

getTwoCurrencies2('USD', 'EUR').then(() => {});

function* getTwoCurrenciesCoro(code1, code2){
    const response1 = yield fetch(`${url}${code1}?format=json`);
    const response2 = yield fetch(`${url}${code2}?format=json`);
    console.log(1);

    const data1 = yield response1.json();
    const data2 = yield response2.json();
    console.log(2);
    console.log(data1.rates[0].mid, data2.rates[0].mid);
    console.log(3);
}

function executeAsync(c, x){
    return new Promise((resolve) => {
        const r = c.next(x);
        if (!r.done){
            r.value.then((d) => resolve(d))
        }
    })
}

function asyncFn(c, x){
    executeAsync(c, x).then((d) => {
        if (!d.done){
            asyncFn(c, d)
        }
    })
}

// asyncFn(getTwoCurrenciesCoro('USD', 'EUR'));

// to co poniżej - tak działa async await - wykorzystuje coroutine + promise, przez co działa sekwencyjnie, czyli kod synchroniczny i asynchroniczny wykonują się
// jeden po drugim
// to co powyżej to automatyzacja tego co poniżej
// async await można używać tylko w funkcji, gdyż tylko funkcją da się stworzyć generator

// const coro = getTwoCurrenciesCoro('USD', 'EUR');
// coro
//     .next()
//     .value
//     .then((response) => {
//         coro
//             .next(response)
//             .value
//             .then((response) => {
//                 coro
//                     .next(response)
//                     .value
//                     .then((data) => {
//                         coro
//                             .next(data)
//                             .value
//                             .then((data) => {
//                                 coro
//                                     .next(data)
//                             })
//                     })
//
//             })
//     })




// getTwoCurrencies('USD', 'EUR');

function getTwoCurrencies2(code1, code2){
    const response1 =  fetch(`${url}${code1}?format=json`);
    const response2 =  fetch(`${url}${code2}?format=json`);
    console.log(1);

    const data1 =  response1.then((response) => response.json());
    const data2 =  response2.then((response) => response.json());
    console.log(2);
    data1.then((d) => console.log(d.rates[0].mid))
    data2.then((d) => console.log(d.rates[0].mid))
    console.log(3);
}

// getTwoCurrencies2('USD', 'EUR');
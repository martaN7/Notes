// "use strict"

function x(){
    console.log(this);
}

// bind zwraca nowy obiekt funkcji z przekazanym kontekstem, na który będzie wskazywał this
const y = x.bind({magic: 42});
// y();

// call wywołuje funkcję z kontekstem, na który będzie wskazywał this
// x.call({magic: 42});
// x.call({magic: 2137});

// to samo co call, tylko przyjmuje parametry jako tablicę
// x.apply({magic: 124});

function add(a, b){
    return a + b * this.magic;
}

const a1 = add.bind({magic: 21});
// console.log(a1(2, 4));
//
// console.log(add.call({magic: 21}, 2, 4));
// console.log(add.apply({magic: 21}, [2, 4]));

const o = {
    score: 0,
    updateScore(newScore){
        // this.score += newScore;
        console.log(this);
    }
}

// jeżeli metoda jest wywoływana w kontekście obiektu (dot notation, notacja kropkowa), to this wskazuje na ten obiekt
// o.updateScore(4);

const o1 = {
    magic: 42,
}

const o2 = {
    magic: 2137,
    doMagic() {
        console.log(this.magic);
    }
}

// o2.doMagic();
// o2.doMagic.call(o1);
// o2.doMagic.apply(o2);

// const logoGoogle = document.getElementById("logo");

class Counter {
    constructor(){
        this.clickCounter = 0;
    }
    addEvent(){
        logoGoogle.addEventListener('click', function(){
            this.clickCounter++; // this w callbacku event listenera wskazuje na event emitera (logoGoogle). Dlatego nie będzie działać
        })
    }
}


class Counter1 {
    constructor(){
        this.clickCounter = 0;
    }
    addEvent(){
        logoGoogle.addEventListener('click', () => {
            this.clickCounter++; // arrow function nie ma this (lexical this), powoduje, że this jest brane z otoczenia (obiekt klasy Counter) - to rozwiązanie działa
        })
    }
}

class Counter2 {
    constructor(){
        this.clickCounter = 0;
    }
    addEvent(){
        logoGoogle.addEventListener('click', function(){
            this.clickCounter++;
        }.bind(this)) // zamiast używać arrow function można też użyć bind i zwrócić nowy obiekt funkcji wskazujący na this.addEvent - to rozwiązanie działa
    }
}

function printInfo(){
    console.log(`Name: ${this.name}, age: ${this.age}, occupation: ${this.occupation}`);
}

const person = {
    name: "Jarosław",
    age: 84,
    occupation: "deputy prime minister"
}

const student = {
    name: "Janusz",
    age: 42,
    occupation: "student"
}

printInfo.call(person);
printInfo.call(student);

// przeczytaj Getify (Kyle Simpson) - "You don't know JS. This"

// zadanie domowe: zastanowię się, przygotuję listę rzeczy, które chcę przećwiczyć bądż lepiej zrozumieć i wkleję ją na slacka
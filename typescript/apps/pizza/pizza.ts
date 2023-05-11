let pizzaCost: number = 10;

// pizzaCost = '25';
function calculatePrice(cost: number, toppings: number): number {
    return cost + 1.5 * toppings;
}

//String type
const coupon: string = 'pizza25';
function normalizeCoupon(code: string): string {
    return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

// Boolean
function offerDiscount(orders: number): boolean {
    return orders > 3;
}

// any
// nie powinniśmy w ogóle używać, z wyjątkiem migracji z js do ts
let coupon2;
let coupon3: any;

// void

let selectedTopping: string;
function selectTopping(topping: string): void {
    selectedTopping = topping;
}

// ten kod w react nie zwraca błędu. Setstate zwraca void
// onClick = () => setState(42);
// onClick = () => {
//     setState(42);
// }

// never
// używa się najczęściej z funkcjami, które nie zakończą się poprawnie

function orderError(error: string): never {
    throw new Error(error);
}

// const elo = orderError('oh no');

// null

let coupon4: string | null = 'pizza25';

function removeCoupon(): void {
    coupon4 = null;
}

// union type

let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size;
}

selectSize('small');

// function type

function sumOrder(price: number, quantity: number): number {
    return price * quantity;
}

let sumOrder2: (price: number, quantity: number) => number;

sumOrder2 = (x, y) => x * y;

// optional arguments

let sumOrder3: (price: number, quantity?: number) => number;
sumOrder3 = (x, y = 42) => x * y;

// object type

const pizza: {
    name: string,
    price: number,
    foo: string,
    getName(): string
} = {
    name: "pepperoni",
    price: 32,
    foo: 'example text',
    getName(){
        return pizza.name;
    }

}

// array type

let sizes: string[] = ['small', 'medium', 'large'];
let toppings: Array<string> = ['pepperoni', 'tomato', 'bacon']; // generic type

// tuple type
let pizza2: [string, number, boolean] = ['pepperoni', 23, true];

// alias type

type Size = 'small' | 'medium';

type Callback = (size: Size) => void;

let pizzaSize2: Size = 'small';
const selectSize2: Callback = (size) => pizzaSize2 = size;

selectSize2('medium');

// assertion type

type Pizza3 = {
    name: string;
}

const pizza3: Pizza3 = {
    name: 'hawajska',
}

const serialized = JSON.stringify(pizza3);

function getNameFromJson(obj: string) {
    return (JSON.parse(obj) as Pizza3).name;
}

getNameFromJson(serialized);

// interface

interface Pizza4 {
    name: string;
    sizes: string[];
    price: number;
}

let pizza4: Pizza4;

function createPizza(name: string, sizes: string[]): Pizza4 {
    return {
        name,
        sizes,
        price: 42,
    }
}

pizza4 = createPizza('margarita', ['large']);

interface Pizza5 {
    name: string;
    getAvailableSizes(): string[];
}

function createPizza5(name: string, sizes: string[]) {
    return {
        name, getAvailableSizes() {
            return sizes
        }
    } as Pizza5
}

const pizza5: Pizza5 = createPizza5('margarita', ['medium']);

// extending interface

interface Sizes6 {
    sizes: string[];
}

interface Pizza6 extends Sizes6 {
    name: string;
    getAvailableSizes(): void;
}

// classes

class Pizza7 {
    name: string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza7 = new Pizza7('capriciosa');

pizza7.addTopping('pieczarki');

// class: access modifiers (private, protected, public)

class Pizza8 {
    private toppings: string[] = [];

    constructor(readonly name: string) {

    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza8 = new Pizza8('fungi');

pizza8.addTopping('ziemniaki');

// pizza8.name = '42'; nie działa, bo name jest readonly

// class: setters and getters

class Sizes3 {
    constructor(public sizes: string[]) {
    }

    get availableSizes() {
        return this.sizes;
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

const sizes3 = new Sizes3(['small', 'medium']);

const sizes4 = sizes3.availableSizes // Wywołuje metodę z 226. Getter nigdy nie przyjmuje parametrów
sizes3.availableSizes = ['large']; // Wywołujemy bez (). Zawsze przyjmuje jeden parametr, nie zwraca wartości. Sprawdza się do walidacji danych

// class: inheritance extends (dowiązanie prototypowe)

class Pizza9 extends Sizes3 {
    constructor(public name: string, public sizes: string[]) {
        super(sizes); // wywołuje metodę rodzica
    }
}

const pizza9 = new Pizza9('cztery sery', ['small']);
console.log(pizza9.name);
console.log(pizza9.sizes);
pizza9.availableSizes = ['l'];

// class: interfaces

interface SizesInterface {
    availableSizes: string[];
}

class Sizes4 implements SizesInterface {
    availableSizes: string[] = [];
    constructor(public sizes: string[]) {
    }
}

interface PizzaInterface extends SizesInterface {
    readonly name: string;
    toppings: string[];
    updateSizes(sizes: string[]): void;
    addTopping(topping: string): void;
}

class Pizza10 extends Sizes4 implements PizzaInterface{
    public toppings: string[] = [];
    constructor(readonly name: string, sizes: string[]) {
        super(sizes);
    }

    updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}
// wbudowane typy generyczne - przykłady
// const junkDrawer: any[] = ['coolString', 42, true];
//
// const companies: string[] = ['Google', 'OpenAI', 'Microsoft'];
// const companies2: Array<string> = ['Google', 'OpenAI', 'Microsoft'];
//
// const primeNumbers = ['abc', 'b'];
// const primeNumber = primeNumbers.pop();

// concept snippet

// interface Book {
//     title: string;
// }
//
// interface Product {
//     name: string;
// }
// class BookShelf {
//     _books: Book[] = [];
//
//     addBookToCatalog(book: Book): void {
//     //     logic
//     }
//
//     removeBookFromCatalog(book: Book): Book {
//         // some logic
//         return book;
//     }
// }
//
// class ProductShelf {
//     _products: Product[] = [];
//
//     addProductToCatalog(product: Product): void {
//         //     logic
//     }
//
//     removeProductFromCatalog(product: Product): Product {
//         // some logic
//         return product;
//     }
// }
//
// class BookItem implements Book {
//     title = 'Pan Tadeusz';
// }
//
// class ProductItem implements Product {
//     name = 'cebula';
// }
//
//
// class Shelf<T> {
//     _items: T[] = [];
//
//     addItemToCatalog(item: T): void {
//         // logic
//     }
//
//     removeItemFromCatalog(item: T): T {
//         return item;
//     }
// }
//
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// const productShelf: Shelf<Product> = new Shelf<Product>();
//
//
// bookShelf.addItemToCatalog(new BookItem());
// productShelf.addItemToCatalog(new ProductItem());
//
// // funkcje
// function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
//     return data.splice(amountToShorten, data.length);
// }
//
// const stringArray: string[] = ['c#', 'c++', 'TS'];
//
// const result = shortenArray<string>(stringArray, 2);
//
// // type constraint dla funkcji
//
interface MeetingResource {
    name: string;
    capacity: number;
}
//
interface ConferenceRoom extends MeetingResource {
    hasProjector: boolean;
    location: string;
}

const conferenceRoomData: ConferenceRoom[] = [
    { name: 'Cheerios', capacity: 15, hasProjector: false, location: 'HQ'},
    { name: 'Froot Loops', capacity: 25, hasProjector: true, location: 'East Campus'},
    { name: 'Wheaties', capacity: 40, hasProjector: true, location: 'West Campus'},
    { name: 'Chex', capacity: 10, hasProjector: false, location: 'HQ'}
    ];

interface PartyTent extends MeetingResource {
    companyOwned: boolean;
    tablesIncluded: number;
}
//
const partyTentData: PartyTent[] = [
    { name: 'Parasol', capacity: 15, companyOwned: true, tablesIncluded: 3},
    { name: 'Shady', capacity: 100, companyOwned: true, tablesIncluded: 10},
    { name: 'Big Top', capacity: 200, companyOwned: false, tablesIncluded: 40},
    { name: 'Sun Fun', capacity: 50, companyOwned: true, tablesIncluded: 5}
];

interface Building {
    address: string;
    numberOfFloors: number;
}

const buildingData: Building[] = [
    { address: 'Main Street', numberOfFloors: 10 },
    { address: 'Central Avenue', numberOfFloors: 2 },
    { address: 'Curious Way', numberOfFloors: 1 },
    { address: 'Circle Drive', numberOfFloors: 4 },
];
//
// function getBigRooms<T extends MeetingResource>(rooms: T[], minSize: number): T[] {
//     const bigRooms: T[] = [];
//
//     for (const room of rooms) {
//         if (room.capacity > minSize) {
//             bigRooms.push(room);
//         }
//     }
//
//     return bigRooms;
// }
//
// const bigRooms: ConferenceRoom[] = getBigRooms<ConferenceRoom>(conferenceRoomData, 30);
// // const bigRooms2 = getBigRooms(buildingData, 30);
//
// let getLargeRooms: <T extends MeetingResource>(rooms: T[], minSize: number) => T[];
//
// getLargeRooms = function (r, m) {
//     return r;
// }

interface DataStructure<T> {
    add(item: T): void;
    remove(): T | undefined;
}

class Stack<T> implements DataStructure<T> {
    items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items.at(-1);
    }
}

const stack: Stack<number> = new Stack<number>();

stack.add(2);
stack.add(6);
stack.add(9);
// console.log(stack.remove());
// console.log(stack.peek());
// console.log(stack.remove());
// console.log(stack.remove());

// queue FIFO - first in, first out (data structure)

class Queue<T> implements DataStructure<T> {
    items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(): T | undefined {
        return this.items.shift();
    }

    peek(): T | undefined {
        return this.items[0];
    }

}

const queue: Queue<string> = new Queue<string>();

queue.add('tomato');
queue.add('potato');
queue.add('banana');
// console.log(queue.remove());
// console.log(queue.peek());
// console.log(queue.remove());
// console.log(queue.remove());
// console.log(queue.remove());

// type constraint dla klas

class Reservation<T extends MeetingResource> {
    constructor(private resource: T, private organiserName: string) {
    }
    requestResource(requestedResource: T, requester: string) {
        this.resource = requestedResource;
        this.organiserName = requester;
        console.log(`${requester} requested reservation for ${requestedResource.name}`);
    }

}

const reservation: Reservation<ConferenceRoom> = new Reservation<ConferenceRoom>(conferenceRoomData[0], 'Janusz');

reservation.requestResource(conferenceRoomData[0], 'Janusz');
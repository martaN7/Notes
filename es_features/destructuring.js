const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

// const a = obj.a;
// const b = obj.b;
// const c = obj.c;
// const d = obj.d;

// destructuring - tworzenie zmiennych na podstawie elementów tablic lub obiektów

// const {a, b, c, d} = obj;

// const {a: aliasA, b, c = 42, d: aliasD = 4};
// console.log(aliasA, b, c, aliasD);

// const obj2 = {a: {b: 1, c: 2}, d: 42};

// zrób zmienną b,c,d

// const {a: {b, c}, d} = obj2;
// console.log(b, c, d);

// destrukturyzacja tablic

const arr = [1, 2, 3, 4];

// const [a, b, c, d] = arr;

// const [a, b] = arr;
// const [a, b, ...rest] = arr;

// 2 ostatnie elementy tablicy
// const [a, b] = arr.slice(-2);
// console.log(a, b);


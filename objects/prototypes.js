// dodaj capitalize do tekstów w js
// "ala ma kota".capitalize() => "Ala ma kota"

String.prototype.capitalize = function (){
    return this[0].toUpperCase() + this.slice(1);
}

// console.log("ala ma kota".capitalize());

// zaimplementuj map do tablicy

Array.prototype.myMap = function (cb){
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this));
    }

    return newArr;
}



// console.log([1, 2, 3].myMap((a) => a * 2));

// zaimplementuj filter do tablicy

Array.prototype.myFilter = function (cb){

    const newArr = [];

    for (let i = 0; i < this.length; i++){
        if(cb(this[i], i, this)){
            newArr.push(this[i]);
        }
    }
    return newArr;
}

// console.log([1, 5, 2].myFilter((a) => a < 5));

// zaimplementuj reduce

Array.prototype.myReduce = function (cb, init){
    let acc = init !== undefined ? init : this[0];

    for(let i = init !== undefined ? 0 : 1; i < this.length; i++){
        acc = cb(acc, this[i], i, this);
    }

    return acc;
}

// console.log([1, 2, 3].myReduce((a, b) => a + b));

// myMap in place
// modyfikuje oryginalny obiekt, zazwyczaj nic nie zwraca

Array.prototype.mapInPlace = function (cb){
    for (let i = 0; i < this.length; i++) {
        this[i] = cb(this[i], i, this);
    }
}

const arr = [1, 2, 3];

arr.mapInPlace((a) => a * 2);
console.log(arr);
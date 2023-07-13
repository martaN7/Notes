class Car {
    constructor(brand, engine, maxSpeed) {
        this.brand = brand;
        this.engine = engine;
        this.maxSpeed = maxSpeed;
        this.speed = 0;
    }

    startEngine(){
        if(this.engine){
            console.log("Already started");
        } else {
            this.engine = true;
        }
    }

    stopEngine(){
        if(this.speed === 0){
            this.engine = false;
        } else {
            console.log("Stop the car!");
        }
    }

    speedUp(amount){
        if(this.engine){
            this.speed = Math.min(amount + this.speed, this.maxSpeed);
            console.log(`You're driving with speed: ${this.speed}`);
        } else {
            console.log("First start your engine!");
        }
    }

    slowDown(amount){
        this.speed = Math.max(this.speed - amount, 0);
        console.log(`You're driving with speed: ${this.speed}`);
    }
}

// const myCar = new Car("Bentley", false, 250);
// myCar.speedUp(50);
// myCar.startEngine();
// myCar.speedUp(100);
// myCar.speedUp(200);
// myCar.stopEngine();
// myCar.slowDown(150);
// myCar.slowDown(200);
// myCar.stopEngine();

class Van extends Car {
    constructor(brand, engine, maxSpeed, seats) {
        super(brand, engine, maxSpeed);
        this.seats = seats;
    }

    speedUp(amount) {
        if(this.seats <  7){
            super.speedUp(amount);
        } else {
            if(this.engine){
                this.speed = Math.min(this.speed + amount, this.maxSpeed * 0.9);
                console.log(`You're driving with speed: ${this.speed}`);
            } else {
                console.log("First start your engine!");
            }
        }
    }
}

const myVan = new Van("Toyota", false, 250, 9);
// console.log(myVan);
myVan.speedUp(50);
myVan.startEngine();
myVan.speedUp(100);
myVan.speedUp(200);
myVan.stopEngine();
myVan.slowDown(150);
myVan.slowDown(200);
myVan.stopEngine();
const player = {
    name: "Olek",
    score: 0,

    addScore(newScore) {
       player.score += newScore;
    }
}
// console.log(player.name, player.score);
//
// player.addScore(21);
// console.log(player.score);

// ten kod jest zły, ponieważ żeby stworzyć nowy obiekt tego typu, trzeba zduplikować cały kod

function player1(name, score) {

    return {
        name,
        score,
        addScore(newScore){
            this.score += newScore;
        }
    }
}

const newPlayer = player1("Adrian", 1);
// console.log(newPlayer);
// newPlayer.addScore(25);
// console.log(newPlayer);

const newPlayerSecond = player1("Alina", 0);
// console.log(newPlayerSecond);
// newPlayerSecond.addScore(67);
// console.log(newPlayerSecond);

// funkcja addScore dla każdego playera jest taka sama, ale nasz kod tworzy ją osobno dla każdego gracza

function Player(name, score){
    this.name = name;
    this.score = score;
}

Player.prototype.addScore = function(newScore){
    this.score += newScore;
}

// const p1 = Player("Karol", 2);
// console.log(p1); // undefined, bo Player nie ma return oraz nie zostało użyte słowo kluczowe "new"

const p2 = new Player("Karol", 2);
// console.log(p2);

p2.addScore(39);
// console.log(p2);

class PlayerC {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    addScore(newScore){
        this.score += newScore;
    }
}

const p3 = new PlayerC("Adam", 6);
// console.log(p3);

p3.addScore(61);
// console.log(p3);

const o = {
    magic: 42,

    fn1: function (){},
    fn2: () => {},
    fn3(){}
}
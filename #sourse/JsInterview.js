// 1 Immediate Invoked Function Expression---------------------------

// Example 1
const result = [];
for (var i = 0; i < 7; i++) {
    result.push(function () {
        console.log(i);
    });
}
result[2](); //7
result[3](); //7

//Decision
for (var i = 0; i < 7; i++) {
    (function () {
        var j = i;
        result.push(function () {
            console.log(j);
        });
    })();
}
result[2](); //2
result[3](); //3
result[6](); //6

//Example 3
const fib = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < fib.length; i++) {
    setTimeout(() => {
        console.log(`fib[${i}] = ${fib[i]}`);
    }, 2000);
}
// In console: fib[7] = undefined
// Decision 2: we can close settimeout
for (var i = 0; i < fib.length; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(`fib[${j}] = ${fib[j]}`);
        }, 2000);
    })(i)
}

// 2 Context ---------------------------------------------------------

const ivanov = {
    surname: "Ivanov",
    say: function (what, name) {
        console.log(`You know ${what}, ${name} ${this.surname}`);
    }
};
const petrov = {
    surname: "Petrov"
};

ivanov.say("everything", "Vasya");

ivanov.say.call(petrov, "nothing", "Petr");
ivanov.say.call(petrov, ...["nothing", "Petr"]);
ivanov.say.apply(petrov, ["nothing", "Petr"]);
ivanov.say.bind(petrov, "nothing", "Petr")();

// 3 Prototypes ---------------------------------------------------------
// ES5
function Dog(name, colour) {
    this.name = name,
        this.colour = colour;
}
Dog.prototype.bark = function () {
    console.log(`Dog ${this.name} bark`);
};
const dog = new Dog("Graf", "brown");

console.log(dog.name);
console.log(dog.colour);
dog.bark();

console.log(Dog.prototype); // ===  dog.__proto__
console.log(dog.__proto__);
console.log(dog.constructor);

// Own Properties---------------------------
function Person() {};
Person.prototype.hasSkin = true;
Person.prototype.legs = 2;

const person = new Person();
person.name = "Oleg";

console.log('name' in person); //true
console.log('legs' in person); //true

console.log(person.hasOwnProperty('name')); //true
console.log(person.hasOwnProperty('hasSkin')); //false

// Object.create()--------------------------
let proto = {
    year: 2020
};
const myYear = Object.create(proto);

console.log(myYear.year)
// console.log(myYear.hasOwnProperty("year"))
// console.log(myYear.__proto__ === proto)

// proto.year = 2000;
// console.log(myYear.year); //2000 changed value

proto = {
    year: 999
}
console.log(myYear.year); //2020 didn't change value
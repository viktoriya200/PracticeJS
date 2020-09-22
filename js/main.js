/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


// Objects
const user = {
    name: 'Oleg',
    age: 34,
    isProgrammer: true,
    sayHi() {
        console.log(`Hello ${this.name} how are you?`);
    }
}

console.log(user.age);
// delete user.isProgrammer;
user.sayHi();
console.log(user);

const {
    name,
    age,
    isProgrammer
} = user;
console.log(name,
    age,
    isProgrammer);

for (let prop in user) {
    if (user.hasOwnProperty(prop)) {
        console.log(`${prop} : ${user[prop]}`);
    }
}

Object.keys(user).forEach((prop) => {
    console.log(`Key ${prop} has value ${user[prop]}`);
});
// Object.keys(user).forEach(function (prop) {
//     console.log(`Key ${prop} has value ${user[prop]}`);
// });

// Context

const methods = {
    prop() {
        console.log('User keys:', Object.keys(this));
    },
    propAndVal() {
        Object.keys(this).forEach((key) => {
            console.log(`${key}:${this[key]}`)
        })
    }
};
// const keys = methods.prop.bind(user);
// keys();
methods.prop.bind(user)();
methods.prop.call(user);
methods.propAndVal.call(user);

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this));
    },

    keysAndValues() {
        // "key": value
        // Object.keys(this).forEach(key => {
        //   console.log(`"${key}": ${this[key]}`)
        // })
        // const self = this
        Object.keys(this).forEach(function (key) {
            console.log(`"${key}": ${this[key]}`)
        }.bind(this));
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('------- Start -------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('--------------')
            }
        })

        if (bottom) {
            console.log('------- End -------')
        }
    }
}

// const bound = logger.keys.bind(person)
// bound()
logger.keysAndValues.call(user);
logger.withParams.call(user, true, true, true)
logger.withParams.apply(user, [true, true, true])
// Arrays
const fruits = ['apple', 'orange', 'banana'];
fruits.push('melon');
console.log(fruits);

fruits.unshift('tangarine');
console.log(fruits);

fruits.reverse();
console.log(fruits);

const index = fruits.indexOf('apple');
console.log(index);

const incl = fruits.includes('apple');
console.log(incl);

fruits.splice(0, 2, 'strawberry', 'watermelon');
console.log(fruits);
console.log(fruits.slice(1, 4));

fruits.forEach(function (item, i) {
    console.log(`${item} is on index ${i}`);
})

// Arrays Methods-------------------------------------
// Split, Join, Reverse
const names = 'Nadya, Kate, Oleg, Alexey';
console.log(names.split(', ').reverse().join(', '));

// Map
const upp = fruits.map(function (item) {
    return item.toLocaleUpperCase();
});
console.log(upp);

// Filter
const numbers = [39, 3, 12, 57, 8, 65];
// const someNumbers = numbers.filter(function (item) {
//     return item > 20;
// })
const someNumbers = numbers.filter(item => item > 20);
console.log(someNumbers);

// Reduce
// const sumAl = numbers.reduce(function (sum, item) {
//     return sum + item;
// }, 6);
const sumAl = numbers.reduce((sum, item) => sum + item, 6);
console.log(sumAl);

//Flat
const array = ['a', 'b', ['c', 'd'], 'e', ['f', ['g', 'h']]];
console.log(array.flat(2));

//FlatMap
const framew = ['angular vue', 'react', 'redux node'];
// console.log(framew.map(tech => tech.split(" ")).flat()); // ["angular", "vue", "react", "redux", "node"]
console.log(framew.flatMap(tech => tech.split(" "))); // ["angular", "vue", "react", "redux", "node"]
// const heading = document.getElementById('hello')
// // const heading2 = document.getElementsByTagName('h2')[0]
// // const heading2 = document.getElementsByClassName('h2-class')[0]
// // const heading2 = document.querySelector('.h2-class')
// // const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент
// const heading2 = document.querySelector('h2')


// // const heading3 = heading2.nextElementSibling
// const h2List = document.querySelectorAll('h2')
// const heading3 = h2List[h2List.length - 1]


// setTimeout(() => {
//     addStylesTo(heading, 'JavaScript')
// }, 1500)

// const link = heading3.querySelector('a')

// link.addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log('Click on link', event.target.getAttribute('href'))
//     const url = event.target.getAttribute('href')

//     window.location = url
// })


// setTimeout(() => {
//     addStylesTo(link, 'Практикуйся', 'blue')
// }, 3000)

// setTimeout(() => {
//     addStylesTo(heading2, 'И все получится!', 'yellow', '2rem')
// }, 4500)

// function addStylesTo(node, text, color = 'red', fontSize) {
//     node.textContent = text
//     node.style.color = color
//     node.style.textAlign = 'center'
//     node.style.backgroundColor = 'black'
//     node.style.padding = '2rem'
//     node.style.display = 'block'
//     node.style.width = '100%'

//     // falsy: '', undefined, null, 0, false
//     if (fontSize) {
//         node.style.fontSize = fontSize
//     }
// }

// heading.onclick = () => {
//     if (heading.style.color === 'red') {
//         heading.style.color = '#000'
//         heading.style.backgroundColor = '#fff'
//     } else {
//         heading.style.color = 'red'
//         heading.style.backgroundColor = '#000'
//     }
// }


// heading2.addEventListener('dblclick', () => {
//     if (heading2.style.color === 'yellow') {
//         heading2.style.color = '#000'
//         heading2.style.backgroundColor = '#fff'
//     } else {
//         heading2.style.color = 'yellow'
//         heading2.style.backgroundColor = '#000'
//     }
// })

const items = document.querySelectorAll('.item__content');
console.dir(items);
// console.log(items[0]);

function changeStyles(node, text) {
    node.textContent = text;
    node.style.cursor = 'pointer';
    node.style.backgroundColor = 'gray';
    node.style.border = '2px solid #000';
    node.style.fontSize = '36px';
}

setTimeout(() => changeStyles(items[0], "You'll have a luck"), 1500);
setTimeout(() => changeStyles(items[1], 'in studying'), 2500);
setTimeout(() => changeStyles(items[2], 'JavaScript'), 3500);

items[0].onclick = () => {
    if (items[0].style.backgroundColor === "gray") {
        items[0].style.backgroundColor = "orange";
        items[0].textContent = "It's a joke";
    } else {
        items[0].style.backgroundColor = "gray";
        items[0].textContent = "You'll have a luck";
    }
}

function changeItem(node) {
    if (node.style.backgroundColor === "gray") {
        node.style.backgroundColor = "orange";
        node.textContent = "I'm kidding";
    } else {
        node.style.backgroundColor = "gray";
        node.textContent = "in studying";
    }
}
// changeItem(item[1]);

// item[1].onclick = () => {
//     changeItem(item[1]);
// }
// function sayHello(user) {
//     alert(`Hello ${user}!`);
// }

items[1].addEventListener("click", () => {
    // sayHello('Oleg');
    changeItem(items[1]);
});

items[2].addEventListener("click", () => {
    changeItem(items[2]);
})
// //Сложный JS простым языком

// //1 Prototype--------------------------------------------------

// const user = new Object({
//     name: "Oleg",
//     age: 43,
//     sayBye() {
//         console.log("Goodbye!");
//     }
// });
// console.log(user);

// Object.prototype.sayHello = function () {
//     console.log("Hello!");
// };

// const rabbit1 = Object.create(user);
// rabbit1.age = 3;
// console.log(rabbit1);


// // const num = new Number;
// // console.log(num);

// //2 This, bind, call, apply--------------------------------------

// function saySmth() {
//     console.log('Smth', this);
// }
// saySmth();

// const rabbit = {
//     name: "Mark",
//     meal: "Carrot",
//     saySound: saySmth,
//     feedAnimal: function (colour, action) {
//         console.group(`About ${this.name}`);
//         console.log(`${this.name} eats ${this.meal}`);
//         console.log(`${this.name} has ${colour} color`);
//         console.log(`${this.name} likes ${action}`);
//         console.groupEnd();
//     }
// };

// const dog = {
//     name: "Henry",
//     meal: "Bread"
// };

// // rabbit.feedAnimal.bind(dog)();
// // const feed = rabbit.feedAnimal.bind(dog);
// // feed();
// // rabbit.feedAnimal.call(dog, 'brown', 'bark');
// rabbit.feedAnimal.apply(dog, ['brown', 'bark']);

// //Example
// const anim = ['dog', 'cat', 'bird', 'cow'];

// Array.prototype.upp = function () {
//     return this.map((item) => {
//         return item.toUpperCase();
//     });
// };
// console.log(anim.upp());

// //3 Closures of function---------------------------------------------------

// function addNum(num) {
//     return function () {
//         console.log(300 + num);
//     }
// }
// const result = addNum(300);
// result();

// function increaseNum(num) {
//     return function (n) {
//         console.log(num * n);
//     }
// }
// const increaseTwenty = increaseNum(20);
// increaseTwenty(7);

// function createUrl(domen) {
//     return function (url) {
//         console.log(`Your url is https://${url}.${domen}`)
//     }
// }
// const comUrl = createUrl('com');
// comUrl('google');
// comUrl("youtube");
// const ruUrl = createUrl("ru");
// ruUrl('yandex');
// ruUrl('headhunter');

// //Задача: написать свою функцию bind

// function bind(pers, func) {
//     return function (...args) {
//         func.apply(pers, args);
//     }
// }

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age} is a ${this.job}`)
// }
// const person1 = {
//     name: 'Oleg',
//     age: 34,
//     job: 'Backend'
// };
// const person2 = {
//     name: 'Alexey',
//     age: 40,
//     job: 'Teamlead'
// };

// bind(person1, logPerson)();
// bind(person2, logPerson)();
// //---------------------------------------------
// // Example 1
// function sayHelloTo(name) {
//     const message = `Hello ${name}`;
//     return function () {
//         console.log(message);
//     }
// }
// const helloToOleg = sayHelloTo("Oleg");
// // console.log(helloToOleg);
// helloToOleg();
// const helloToGleb = sayHelloTo("Gleb");
// helloToGleb();

// // Example 2
// function createManager() {
//     const fw = ["Angular", "React"];
//     return {
//         print: function () {
//             console.log(fw.join(" "))
//         },
//         add: function (framework) {
//             fw.push(framework);
//         }
//     }
// }
// const manager = createManager();
// console.log(manager);
// manager.print();
// manager.add("VueJS");
// manager.print();

// //Example 3
// const fib = [1, 1, 2, 3, 5, 8, 13];
// for (var i = 0; i < fib.length; i++) {
//     setTimeout(() => {
//         console.log(`fib[${i}] = ${fib[i]}`);
//     }, 2000);
// }
// // In console: fib[7] = undefined
// // Decision 1: change var=>let
// for (let i = 0; i < fib.length; i++) {
//     setTimeout(() => {
//         console.log(`fib[${i}] = ${fib[i]}`);
//     }, 2000);
// }
// // Decision 2: we can close settimeout
// for (var i = 0; i < fib.length; i++) {
//     (function (j) {
//         setTimeout(() => {
//             console.log(`fib[${j}] = ${fib[j]}`);
//         }, 2000);
//     })(i);
// }

// //4 Asynchrony, SetTimeout 0---------------------------------------

// function hello() {
//     console.log('Hello');
// }
// hello();

// setTimeout(function () {
//     console.log('Hello from timeout');
// }, 2500);

// console.log('Bye');

// //5 Promise--------------------------------------------------------

// console.log('Start request');

// setTimeout(() => {
//     console.log('Preparing Data');
//     const fromBackend = {
//         port: 2000,
//         server: "aws",
//         status: "working"
//     };
//     setTimeout(() => {
//         fromBackend.place = "far away";
//         console.log('Date are ready');
//     }, 2000);
// }, 2500);

// const prom = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing Data');
//         const fromBackend = {
//             port: 2000,
//             server: "aws",
//             status: "working"
//         };
//         resolve(fromBackend);
//     }, 2500);
// }).then(date => {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             date.place = "far away";
//             console.log('Date are changed');
//             resolve(date);
//         }, 2000);
//     })
// }).then(newDate => {
//     console.log('New Date is:', newDate);
// }).catch(err => {
//     console.log("Error:", err);
// }).finally(() => {
//     console.log('Finally');
// });

// const run = function (ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });
// };

// run(2500).then(() => {
//     console.log('After 2500 sec')
// });
// run(3500).then(() => {
//     console.log('After 3500 sec')
// });

// Promise.all([run(2500), run(3500)]).then(() => {
//     console.log('All funtions are ready')
// });
// Promise.race([run(2500), run(3500)]).then(() => {
//     console.log('One of funtions are ready')
// });

// //6 Objects--------------------------------------------------------

// const person = Object.create({
//     //here we can make a prototype of our new object
//     calculateAge() {
//         console.log("Age", new Date().getFullYear() - this.birthYear);
//     }
// }, {
//     name: {
//         value: 'Oleg',
//         enumerable: true, //iterable key = true
//         writable: true, //we can rewrite = true
//         configurable: true //we can delete = true
//     },
//     birthYear: {
//         value: 1996,
//         enumerable: false,
//         writable: false,
//         configurable: false
//     },
//     age: {
//         get() {
//             return new Date().getFullYear() - this.birthYear;
//         },
//         set(value) { // here we can track changing of some fields and make smth with document or smth else
//             document.body.style.background = 'red';
//             console.log("Set age", value);
//         }
//     }
// });
// // console.log(person);
// person.name = "Maxim";
// console.log(person);

// for (key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('Key', key, person[key]);
//     }
//     // or we can use Object.keys() Object.values() Object.entries()
// }

// //7 Classes--------------------------------------------------------

// class Animal {
//     static type = "ANIMAL"

//     constructor(options) {
//         this.name = options.name;
//         this.age = options.age;
//         this.hasTail = options.hasTail;
//         this.weight = options.weight;
//     }
//     voice() {
//         console.log(`${this.name} can make sounds`);
//     }
// }
// console.log(Animal);

// const animal = new Animal({
//     name: 'Bear',
//     age: 2,
//     hasTail: true,
//     weight: 400
// });
// console.log(animal);

// class Dog extends Animal {
//     static type = "DOG"

//     constructor(options) {
//         super(options);
//         this.colour = options.colour;
//         this.hasTeeth = options.hasTeeth;
//         this.likesToEat = options.likesToEat;
//     }
//     voice() {
//         super.voice();
//         console.log(`${this.name} can bark`);
//     }
//     get realAge() {
//         return this.age * 7;
//     }
//     set realAge(age) {
//         return this.age = age;
//     }
// }

// const dog = new Dog({
//     name: "Richi",
//     age: 4,
//     hasTail: true,
//     weight: 18,
//     colour: "brown",
//     hasTeeth: true,
//     likesToEat: "carrot"
// });

// //Examle with figures------------------
// class Component {
//     constructor(selector) {
//         this.div = document.querySelector(selector);
//     }
//     hide() {
//         this.div.style.display = "none";
//     }
//     show() {
//         this.div.style.display = "block";
//     }
// }

// class Ractangle extends Component {
//     constructor(options) {
//         super(options.selector);
//         this.div.style.width = options.width + "px";
//         this.div.style.height = options.height + "px";
//         this.div.style.background = options.colour;
//     }
// }

// const ract1 = new Ractangle({
//     selector: "#ractan1",
//     width: 200,
//     height: 100,
//     colour: "green"
// })
// const ract2 = new Ractangle({
//     selector: "#ractan2",
//     width: 400,
//     height: 170,
//     colour: "red"
// })

// class Ellips extends Ractangle {
//     constructor(options) {
//         super(options);
//         this.div.style.borderRadius = "50%";
//     }
// }

// const ellips1 = new Ellips({
//     selector: "#ellips1",
//     width: 200,
//     height: 800,
//     colour: "yellow"
// });

// //8 Async Await, Fetch--------------------------------------------------------

// function delay(ms) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     });
// }
// delay(2000).then(() => console.log('2 sec later'));

// const url = "https://jsonplaceholder.typicode.com/todos";

// // function fetchToDos() {
// //     console.log("Start of fetch")
// //     return delay(3000)
// //         .then(() => fetch(url))
// //         .then(response => response.json())
// // }
// // fetchToDos()
// //     .then(date => console.log("Date", date))
// //     .catch(err => console.log(err))

// async function fetchAsyncToDos() {
//     try {
//         console.log("Start of fetch");
//         await delay(3000);
//         const responce = await fetch(url);
//         const date = await responce.json();
//         console.log("Date", date);
//     } catch {
//         console.log(err)
//     } finally {

//     }
// }
// fetchAsyncToDos();

// //9,10 Proxy----------------------------------------------------------------------

// // Object
// const user = {
//     name: "John",
//     age: 34,
//     job: "Backend"
// }

// const objProxy = new Proxy(user, {
//     get(target, prop) {
//         // console.log("Target: ", target);
//         // console.log("Prop: ", prop);

//         // console.log(`Getting property ${prop}`);
//         if (!(prop in target)) {
//             return prop
//                 .split("_")
//                 .map(p => target[p])
//                 .join(" ");
//         }
//         return target[prop];
//     },
//     set(target, prop, value) {
//         if (prop in target) {
//             target[prop] = value;
//         } else {
//             throw new Error(`No field ${prop} in target`);
//         }
//     },
//     has(target, prop) {
//         return ['name', 'age', 'job'].includes(prop);
//     },
//     deleteProperty(target, prop) {
//         console.log("Process deleting of ", prop);
//         delete target[prop];
//         return true;
//     }
// })

// // Functions
// // we can track when function will be called
// const log = text => `Log is: ${text}`;

// const funcProxy = new Proxy(log, {
//     apply(target, thisArg, args) {
//         // console.log("Target:", target);
//         // console.log("thisArg:", thisArg);
//         // console.log("Args:", args);

//         console.log("Calling function...");
//         return target.apply(thisArg, args).toUpperCase();
//     }
// });

// // Classes
// class Person {
//     constructor(name, age, job) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }
// }

// const PersonProxy = new Proxy(Person, {
//     construct(target, args) {
//         console.log("Constructing new class...");
//         // return new target(...args);
//         return new Proxy(new target(...args), {
//             get(tar, prop) {
//                 console.log(`Getting property ${prop}`);
//                 return tar[prop];
//             }
//         })
//     }
// })

// const person = new PersonProxy(
//     "Nikolay",
//     42,
//     "Devops"
// );

// // Examples--------------------------------
// //Wrapper
// const withDefaultValue = (target, defaultValue = 9) => {
//     return new Proxy(target, {
//         get(obj, prop) {
//             return prop in obj ? obj[prop] : defaultValue;
//         }
//     })
// }
// const position = withDefaultValue({
//     x: 2,
//     y: 4
// }, 0);

// //Hidden properties
// const withHiddenProps = (target, prefix = "_") => {
//     return new Proxy(target, {
//         has(obj, prop) {
//             return prop in obj && !prop.startsWith(prefix);
//         },
//         ownKeys: (obj) => Reflect.ownKeys(obj).filter(pr => !pr.startsWith(prefix)),
//         get(obj, prop, receiver) {
//             // console.log(receiver);
//             return prop in receiver ? obj[prop] : undefined;
//         }
//     })
// }
// const date = withHiddenProps({
//     height: 157,
//     weight: 56,
//     gender: "female",
//     age: 34,
//     _password: "hskhxa"
// });

// Optimization
// const IndexedArray = new Proxy(Array, {
//     construct(target, [args]) {
//         // console.log(args);

//         const index = {};
//         args.forEach(item => index[item.id] = item);

//         return new Proxy(new target(...args), {
//             get(arr, prop) {
//                 switch (prop) {
//                     case "push":
//                         return item => {
//                             index[item.id] = item;
//                             arr[prop].call(arr, item);
//                         }
//                     case "findByIndex":
//                         return id => index[id];
//                     default:
//                         return arr[prop];
//                 }
//             }
//         });

//     }
// })
// const users = new IndexedArray(
//     [{
//             id: 11,
//             name: 'Vladilen',
//             job: 'Fullstack',
//             age: 25
//         },
//         {
//             id: 22,
//             name: 'Elena',
//             job: 'Student',
//             age: 22
//         },
//         {
//             id: 33,
//             name: 'Victor',
//             job: 'Backend',
//             age: 23
//         },
//         {
//             id: 44,
//             name: 'Vasilisa',
//             job: 'Teacher',
//             age: 24
//         }
//     ]
// )

// //11 Generators, Symbol Iterator, for of-------------------------------------

// function* strGenerator() {
//     yield "J"; //{value: "J", done: false}
//     yield "a";
//     yield "v";
//     yield "a";
//     yield "S";
//     yield "c";
//     yield "r";
//     yield "i";
//     yield "p";
//     yield "t";
// }
// const str = strGenerator();

// function* numGenerator(num = 10) {
//     for (let i = 0; i < num; i++) {
//         yield i
//     }
// }
// const number = numGenerator(8);

// const iterator = {
//     // gen(num = 9) {
//     [Symbol.iterator](num = 9) {
//         let i = 0;
//         return {
//             next() {
//                 if (i < num) {
//                     return {
//                         value: ++i,
//                         done: false
//                     }
//                 }
//                 return {
//                     value: undefined,
//                     done: true
//                 }
//             }
//         }
//     }
// };
// // const itr = iterator.gen(3);
// for (key of iterator) {
//     console.log(key);
// }

// // They has property Symbol.iterator---------
// for (key of "JavaScript") {
//     console.log(key);
// }
// for (key of [1, 4456, 67, 33, 90]) {
//     console.log(key);
// }

// // Generators has property Symbol.iterator
// function* iter(number = 5) {
//     for (let i = 0; i < number; i++) {
//         yield i;
//     }
// }
// for (key of iter(7)) {
//     console.log(key);
// }

// //12 Arrays Methods ----------------------------------------------------

// const people = [{
//         name: "Elena",
//         age: 45,
//         money: 4500
//     },
//     {
//         name: "Andrey",
//         age: 15,
//         money: 1500
//     },
//     {
//         name: "Oleg",
//         age: 30,
//         money: 7000
//     },
//     {
//         name: "Viktor",
//         age: 25,
//         money: 2600
//     },
//     {
//         name: "Ann",
//         age: 20,
//         money: 1800
//     },
//     {
//         name: "Denis",
//         age: 54,
//         money: 9000
//     }
// ];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// for (let person of people) {
//     console.log(person);
// }

// // ForEach-------------
// people.forEach(function (person, index, arrPeop) {
//     return console.log(person);
// });

// people.forEach(person => console.log(person));

// // Map-------------
// const newPeople = people.map(person => {
//     return `${person.name} (${person.age}) has ${person.money}`;
// });
// console.log(newPeople);

// const newPeople = people.map(person => {
//     return person.money + 3000;
// });
// console.log(newPeople);

// // Filter-------------
// const newArr = [];
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age > 21) {
//         newArr.push(people[i])
//     }
// }
// console.log(newArr);

// const newPeople = people.filter(person => person.age > 21);
// console.log(newPeople);

// const newPeople = people.filter(person => person.money > 4000);
// console.log(newPeople);

// // Reduce-------------
// let summ = 0;
// for (let i = 0; i < people.length; i++) {
//     summ += people[i].money;
// }
// console.log(summ);

// const result = people.reduce((sum, person) => {
//     return sum += person.money;
// }, 0)
// console.log(result);

// // Find-------------
// const andrey = people.find(person => person.name === "Andrey");
// console.log(andrey);

// // FindIndex-------------
// const andreyIndex = people.findIndex(person => person.name === "Andrey");
// console.log(andreyIndex);

// // Example with methods
// const amount = people
//     .filter(person => person.money < 5000)
//     .map(person => {
//         return {
//             info: `${person.name} is ${person.age}`,
//             budget: person.money * 4
//         }
//     })
//     .reduce((sum, person) => {
//         return sum += person.budget;
//     }, 0);
// console.log(amount);

// //13 Map Set WeakMap WeakSet ----------------------------------------------------

// // Map-------------------------
// // It's improved object
// const obj = {
//     name: "Elena",
//     age: 32,
//     job: "Frontend"
// }
// const entries = [
//     ['name', 'Elena'],
//     ['age', 32],
//     ['job', 'Frontend']
// ]

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));
// const map = new Map(entries);
// console.log(map.get('age'));
// map
//     .set("newInfo", "Date")
//     .set(obj, "Value of Obj")
//     .set(NaN, "It's NaN")
//     .delete('age')
// // .clear();

// console.log(map.size);
// console.log(map.has("job"));

// console.log(map);
// // --------------------
// for (let [key, value] of map) {
//     console.log(key);
// }
// for (let val of map.values()) {
//     console.log(val)
// }
// for (let key of map.keys()) {
//     console.log(key)
// }

// map.forEach((val, key, mapp) => {
//     console.log(val, key)
// })

// // Set-------------------------
// // It's array which has his feature
// const set = new Set([1, 2, 5, 5, 5, 6, 77, 7, 8, 0]);
// console.log(set);

// set.keys() = set.values();
// Example

// function unicValues(array) {
//     return Array.from(new Set(array));
//     // return [...new Set(array)]
// }

// // WeakMap WeakSet-------------------------
// //links are weak in them, if object had been deleted, it'll be deleted from weakmap/weakset
// const obj = {
//     name: "Info"
// };
// const map = new WeakMap([
//     [obj, "Date of obj"]
// ])

// //14 XMLHttpRequest Fetch ----------------------------------------------------
// XMLHttpRequest
// const requestUrl = 'https://jsonplaceholder.typicode.com/users';

// const xhr = new XMLHttpRequest();
// xhr.open("GET", requestUrl);
// xhr.responseType = 'json'; //2
// xhr.onload = () => {
//     // console.log(JSON.parse(xhr.response));//1
//     if (xhr.status >= 400) {
//         console.log(xhr.response);
//     } else {
//         console.log(xhr.response);
//     }
// }
// xhr.onerror = () => {
//     console.log(xhr.response);
// }
// xhr.send();

// // We can use promise in request
// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.responseType = 'json'; //2
//         xhr.setRequestHeader('Content-type', 'application/json');
//         xhr.onload = () => {
//             // console.log(JSON.parse(xhr.response));//1
//             if (xhr.status >= 400) {
//                 reject(xhr.response);
//             } else {
//                 resolve(xhr.response);
//             }
//         }
//         xhr.onerror = () => {
//             reject(xhr.response);
//         }
//         xhr.send(JSON.stringify(body));
//     })
// }
// sendRequest("GET", requestUrl)
//     .then((date) => {
//         return console.log(date)
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// const body = {
//     name: 'Kelly',
//     age: 34,
//     job: "FullStack"
// };
// sendRequest("POST", requestUrl, body)
//     .then((date) => {
//         return console.log(date)
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// // Fetch
// const requestUrl = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest(method, url, body = null) {
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: {
//             'Content-type': 'application/json'
//         }
//     }).then((response) => {
//         if (response.ok) {
//             return response.json();
//         }
//         return response.json().then((err) => {
//             const errow = new Error();
//             errow.date = err;
//             throw errow;
//         })
//     })
// }

// // sendRequest("GET", requestUrl)
// //     .then((date) => {
// //         return console.log(date);
// //     })
// //     .catch((err) => {
// //         console.log(err)
// //     }); 

// const body = {
//     name: 'Kelly',
//     age: 34,
//     job: "FullStack"
// };
// sendRequest("POST", requestUrl, body)
//     .then((date) => {
//         return console.log(date)
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// //15 Spread and Rest ----------------------------------------------------
// const ruNames = ["Lesha", "Nadya", "Kate", "Max"];
// const enNames = ["Phill", "Andrew", "John"];

// const ruNamesAmount = {
//     "Lesha": 23,
//     "Nadya": 4,
//     "Kate": 16,
//     "Max": 28
// };
// const enNamesAmount = {
//     "Phill": 6,
//     "Andrew": 12,
//     "John": 9
// }
// console.log(ruNames);
// console.log(...ruNames);

// //Spread----------------------
// //arrays
// const names = [...ruNames, "Elena", ...enNames, "David"];
// console.log(names);
// //Old version
// const names2 = ruNames.concat(enNames);
// console.log(names2)

// //objects
// //if we'll have the same values in objects during merge, the last value will be actually, the first will be deleted
// const amount = {
//     ...ruNamesAmount,
//     "Ann": 5,
//     ...enNamesAmount
// }
// console.log(amount)

// //examples
// const numbers = [3, 56, 7, 16, 34, 78]
// const max = Math.max(...numbers)
// console.log(max);
// //old version
// const max2 = Math.max.apply(null, numbers)
// console.log(max2)

// const divs = document.querySelectorAll('div');
// console.log(divs);
// const arr = [...divs]
// console.log(arr) //we can use map and other methods

// // Rest------------------------------
// //examples
// const arr = [1, 4, 5, 6, 8, 9];

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(...arr));

// function sum2(a, b, ...others) {
//     console.log(others);
//     return a + b + others.reduce((acc, i) => {
//         return acc + i
//     }, 0);
// }
// console.log(sum2(...arr));

// // destructuring
// const [a, b, c, ...nums] = arr;
// console.log(a, b, c, nums);

// const person = {
//     name: "Oleg",
//     age: 78,
//     job: "SEO",
//     gender: "male"
// }
// const {
//     name,
//     age,
//     ...oth
// } = person;
// console.log(name, age, oth)

// // 16 Destrusturing ----------------------------------------------------
// //arrays
// function calcNumbers(a, b) {
//     return [
//         a + b,
//         a - b,
//         a * b,
//         a / b
//     ]
// }
// const [sum = 0, , mult, ...others] = calcNumbers(30, 10);
// console.log(sum, mult, others);

// //objects
// const user = {
//     name: "Oleg",
//     age: 41,
//     adress: {
//         country: "Russia",
//         town: "Novosibirsk"
//     }
// }
// const {
//     name = "Без имени",
//         age: hisAge,
//         adress: {
//             country,
//             town: city
//         }
// } = user;

// console.log(name, hisAge, country, city);

// //17 LocalStorage ----------------------------------------------------
// // EcmaScript
// // --------------------------------------------------------------------------
// // 1 Differences var let const

// // Definition 
// var a = 24;
// if (true) {
//     var a = 42;
//     console.log('a', a); //42
// }
// console.log(a); //42

// let b = 24;
// if (true) {
//     let b = 42;
//     console.log('b', b); //42
// }
// console.log(b); //24

// //Hoisting-----------
// c = 20;
// console.log("c", c); // 20
// var c = 10;

// console.log("d", d); // undefind
// var d = 10;

// // e = 20;
// // eonsole.log("e", e); //Err Cannot access 'c' before initialization
// // let e = 10;

// //-------------------
// function hoisted() {
//     age = 26;
// }
// let age;
// hoisted();
// console.log(age);

// // Const
// const COLOR = '#ffeebb';
// COLOR = '#000';
// console.log(COLOR); //err

// const array = [1, 2, 3, 5, 8];
// array.push(13);
// console.log(array); //we can change state not type

// const obj = {
//     a: 42;
// }
// obj.name = 'Igor';
// console.log(obj); //we can change state not type
// // --------------------------------------------------------------------------
// // 2 Arrow Function

// function log() {
//     console.log(this)
// }
// const arrLog = () => console.log(this)

// const user = {
//     name: 'Oleg',
//     job: "Frontend",
//     log: log,
//     arrLog: arrLog,

//     //First variant
//     // delayLog: function () {
//     //     const self = this;
//     //     setTimeout(function () {
//     //         console.log(self.name, self.job)
//     //     },1000)
//     // }

//     //Second variant
//     delayLog: function () {
//         setTimeout(() => {
//             console.log(this.name, this.job)
//         }, 1000)
//     }
// }

// user.log()
// user.arrLog()
// user.delayLog()
// // --------------------------------------------------------------------------
// // 3 Default Params

// function sumNumb(a = 5, b = 10) {
//     console.log(a + b);
// }
// sumNumb(); //15
// sumNumb(1); //11

// function sumNumb1(a = 5, b = a * 2) {
//     console.log(a + b);
// }
// sumNumb1(); //15

// const getValue = c => c - 1;

// function sumNumb2(a = 5, b = getValue(4)) {
//     console.log(a + b);
// }
// sumNumb2(); //8
// // --------------------------------------------------------------------------
// // 4 String

// const name = "Alex"
// const str = `<h1 style='color:red' id="title"> Hello ${name} </h1>`
// console.log(str);

// const isVisible = () => Math.random() > 0.5;
// const str1 = `
//     ${isVisible() ? '<p>Its visible</p>' : ""}
//     <h2> Hello ${name} </h2>
// `;
// console.log(str1);
// //Methods----------------
// const str2 = "Compulsory";

// console.log(str2.startsWith("Com")); //true
// console.log(str2.endsWith("om")); //false

// console.log(str2.includes("puls")); //true

// console.log(str2.repeat(4)); //CompulsoryCompulsoryCompulsoryCompulsory

// console.log(str2.trim()); //delete spase
// console.log(str2.trimEnd()); //delete spase in the end
// console.log(str2.trimStart()); //delete spase in the start

// console.log(str2.padStart(15, "1234")); //12341Compulsory
// console.log(str2.padEnd(18, 'abcd')); //Compulsoryabcdabcd
// // --------------------------------------------------------------------------
// // 5 Rest Spread operators, Destructuring

// // Rest остальные--------------------
// function average(arr) {
//     return arr.reduce((acc, item) => {
//         return acc += item;
//     }, 0) / arr.length;
// }
// console.log(average([10, 20, 30, 40]));

// // If we have just arguments, not array we cuold made it so(arguments is pseudo-array):
// function average1() {
//     return Array.from(arguments).reduce((acc, item) => {
//         return acc += item;
//     }, 0) / arguments.length;
// }
// console.log(average1(10, 20, 30, 40));

// //Now we can use rest(ars is array)
// function average2(a, b, ...args) {
//     return args.reduce((acc, item) => {
//         return acc += item;
//     }, 0) / args.length;
// }
// console.log(average2(10, 20, 30, 40));

// //Spread развернуть-----------------
// const array = [1, 2, 3, 5, 8, 13];
// console.log(...array);

// console.log(Math.max(...array));
// console.log(Math.min(...array));
// //console.log(Math.min.apply(null, array)); //old version

// const fib = [1, ...array];
// console.log(fib);

// //Destructuring--------------------
// const array3 = [1, 3, 65, 8, 90];
// // const d=array3[0];
// // const e=array3[1];
// const [d = 34, , e, ...other] = array3;
// console.log(d, e, other);

// const adress = {
//     country: "Russia",
//     city: "Moscow",
//     street: "Lenskaya",
//     concat() {
//         return `${this.country}, ${this.city},${this.street}`;
//     }
// }
// console.log(adress.concat());

// const {
//     city = "Novosibirsk",
//         country: newCountry,
//         concat
// } = adress;
// console.log(city, newCountry, concat.call(adress));

// const {
//     street,
//     ...otherProp
// } = adress;
// console.log(street);
// console.log(otherProp);

// const newAdress = {
//     ...adress,
//     country: "France",
//     home: 23
// };
// console.log(newAdress);

// // --------------------------------------------------------------------------
// // 6 Object

// function hello() {
//     console.log('Hello');
// }
// const makeCountry = "country";
// const user = {
//     name: 'Nadya',
//     age: 26,
//     [makeCountry]: "Russia",
//     'city - life': "Vladikavkaz",
//     hello,
//     where: () => {
//         "I'm here!";
//     },
//     toString() {
//         return Object
//             .keys(this)
//             .filter(key => key !== "toString")
//             .map((key) => this[key])
//             .join(" ");
//     }
// }
// console.log(user);
// console.log(user.toString());
// // Methods----------------------------
// console.log(Object.is(12, 12));

// const one = {
//     a: 1
// };
// const two = {
//     b: 2
// };
// // console.log(Object.assign(one, two)); //change array one
// // console.log(one);
// const newObj = Object.assign({}, one, two, {
//     c: 3,
//     d: 4
// }); //create new empty array and copy keys
// console.log(newObj, one);

// console.log(Object.entries(newObj));
// console.log(Object.keys(newObj));
// console.log(Object.values(newObj));
// // --------------------------------------------------------------------------
// // 7 Modules (import,export)

// // file index.js
// //1
// import Logger,{COLOR, compute} from "./modules"; //Logger is just example, can use any name
// compute(3,4);
// console.log(COLOR);
// Logger.log();
// //2
// import * as Module from "./module"; // Module is just example, can use any name
// Module.COLOR
// Module.compute(4,5);
// Module.default.log();

// //file module.js
// //1
// export const COLOR = #000;
// export function compute(a,b){
//     return a+b;
// }
// //2
// const private = "42";
// export default{
//     log(){
//         console.log(private);
//     }
// }
// // --------------------------------------------------------------------------
// // 8 Class

// class Animal {
//     static type = "ANIMAL"

//     constructor(options) {
//         this.name = options.name;
//         this.age = options.age;
//         this.hasTail = options.hasTail;
//         this.weight = options.weight;
//     }
//     voice(){
//         console.log(`${this.name} can make sounds`);
//     }
// }
// // console.log(Animal);

// // const animal = new Animal({
// //     name: 'Bear',
// //     age: 2,
// //     hasTail: true,
// //     weight: 400
// // });
// // console.log(animal);

// class Dog extends Animal {
//     static type = "DOG"

//     constructor(options) {
//         super(options);
//         this.colour = options.colour;
//         this.hasTeeth = options.hasTeeth;
//         this.likesToEat = options.likesToEat;
//     }
//     voice() {
//         super.voice();
//         console.log(`${this.name} can bark`);
//     }
//     get realAge() {
//         return this.age * 7;
//     }
//     set realAge(age) {
//         return this.age = age;
//     }
// }

// const dog = new Dog({
//     name: "Richi",
//     age: 4,
//     hasTail: true,
//     weight: 18,
//     colour: "brown",
//     hasTeeth: true,
//     likesToEat: "carrot"
// });
// // Examle with figures------------------
// class Component {
//     constructor(selector) {
//         this.div = document.querySelector(selector);
//     }
//     hide() {
//         this.div.style.display = "none";
//     }
//     show() {
//         this.div.style.display = "block";
//     }
// }

// class Ractangle extends Component {
//     constructor(options) {
//         super(options.selector);
//         this.div.style.width = options.width + "px";
//         this.div.style.height = options.height + "px";
//         this.div.style.background = options.colour;
//     }
// }

// const ract1 = new Ractangle({
//     selector: "#ractan1",
//     width: 200,
//     height: 100,
//     colour: "green"
// })
// const ract2 = new Ractangle({
//     selector: "#ractan2",
//     width: 400,
//     height: 170,
//     colour: "red"
// })

// class Ellips extends Ractangle {
//     constructor(options) {
//         super(options);
//         this.div.style.borderRadius = "50%";
//     }
// }

// const ellips1 = new Ellips({
//     selector: "#ellips1",
//     width: 200,
//     height: 800,
//     colour: "yellow"
// });

// // --------------------------------------------------------------------------
// // 9 Symbol
// // --------------------------------------------------------------------------
// // 10 Generators and Iterators

// const arr = [23, 45, 67, 89, 236];
// const str = "Difficult JS";

// // console.log(arr[Symbol.iterator]);
// // console.log(str[Symbol.iterator]);

// const iter = arr[Symbol.iterator]();
// const iter2 = str[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// for (let num of arr) {
//     console.log(num);
// }
// for (let letter of str) {
//     console.log(letter);
// }
// // Iteration array in obj
// const obj = {
//     values: ["Alex", "Andrey", "Dima", "Timur"],
//     [Symbol.iterator]() {
//         let i = 0;
//         return {
//             next: () => {
//                 const value = this.values[i];
//                 i++;
//                 return {
//                     value,
//                     done: i > this.values.length
//                 }
//             }
//         }
//     }
// }
// for (let name of obj) {
//     console.log(name);
// }
// //Generators
// function* gener(numb = 5) {
//     for (let i = 0; i < numb; i++) {
// try{
//     yield i;
// }catch(err){
//     console.log("Error:", err)
// }

//     }
// }
// const gen = gener(3);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.throw("My Error"));
// console.log(gen.next());
// console.log(gen.next());

// for (let number of gener(8)) {
//     console.log(number);
// }
// // --------------------------------------------------------------------------
// // 11 Promises, async await

// // Promises
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Succes');
//     }, 2500);
// })
// promise.then(date => console.log(date));

// const delay = ms => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("It's done", ms)
//     }, ms);
// })
// delay(2000).then(date => delay(3000))
//     .then(date => console.log(date))
//     .catch(err => console.log("Error:",
//         err))
//     .finally(() => console.log("The End"));

// // Async Await
// async function asyncFunc() {
//     try {
//         const date2 = await delay(2000);
//         console.log(date2);
//     } catch (e) {
//         console.log("Error:", e)
//     }
// }
// asyncFunc();

// Promise.race([
//     delay(1000),
//     delay(500),
//     delay(2500)
// ]).then(date => console.log(date));
// Promise.all([
//     delay(1000),
//     delay(500),
//     delay(2500)
// ]).then(date => console.log(date));
// // --------------------------------------------------------------------------
// // 12 Map and Set
// // --------------------------------------------------------------------------
// // 13 Reflect

// // Reflect.construct()----------------------
// class Student {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello, it's me ${this.name}`);
//     }
// }
// // const student = new Student({
// //     name: "Igor"
// // })
// class ProtoStudent {
//     university = "Oxford";
// }
// // const student2 = Reflect.construct(Student, ["Ilya"], ProtoStudent);
// const student2 = Reflect.construct(Student, ["Ilya"]);
// // console.log(student2.__proto__ === ProtoStudent.prototype);

// //Reflect.apply----------------------
// Reflect.apply(student2.greet, {
//     name: "Example Name"
// }, []);

// //Reflect.ownKeys----------------------
// console.log(Reflect.ownKeys(student2));

// //Reflect.preventExtensions  Reflect.isExtensible---------
// console.log(student2)
// Reflect.preventExtensions(student2);
// student2.age = 34;
// console.log(Reflect.isExtensible(student2));
// console.log(student2);

// // --------------------------------------------------------------------------
// // 14 Proxy

// const validator = {
//     get: (target, prop) => {
//         // if(prop in target){
//         //     return target[prop]
//         // } else{
//         //     return `There is no ${prop} in object`
//         // }
//         return prop in target ? target[prop] : `There is no ${prop} in object`;
//     },
//     set: (target, prop, value) => {
//         if (value.length > 2) {
//             Reflect.set(target, prop, value);
//         } else {
//             console.log(`Too short value, length has been more then 2 symbols, now it's ${value.length}`)
//         }
//     }
// }
// const person = {
//     login: "klon",
//     password: "hdjsin34",
//     name: "Alex"
// }
// const proxyPerson = new Proxy(person, validator);
// console.log(proxyPerson);

// console.log(proxyPerson.name)
// console.log(proxyPerson.login)
// console.log(proxyPerson.age)

// proxyPerson.surname = "Sokolov";
// console.log(proxyPerson);
// proxyPerson.age = 34;
// console.log(proxyPerson);
// // --------------------------------------------------------------------------
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

/***/ })
/******/ ]);
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
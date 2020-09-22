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
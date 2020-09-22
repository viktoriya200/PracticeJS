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
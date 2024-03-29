
//1. Use Strict
//added in ES 5
//use this for Valina Javascript
'use strict';


//2. Variable   rw(read/write)
//let (added in ES6)

let globalName = 'global name';
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

//var(don't ever use this!)
//var hoisting(move declaration from bottom to top)
//has no block scope
{
console.log(age);
age = 4;
console.log(age);
var age;
}

console.log(age);


//3. Consant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.

const datsInWeek = 7;
const maxNumber = 5;
// mutable type -> let
// immutable type -> const


// Note!
// Immutable data types: premitive types, frozen objects(i.e. object.freeze())
// Mutable data types: all objects by default are muatable in JS
// favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes



//4. Variable types

//primitive, single item: number, string, boolean, null, undefied, symbol
//object, box container
//function, first-class function
const count = 17; //integer
const size = 17.1; //demical number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


const infinity = 1/0;               //infinity
const negativeInfinity = -1/0;      //negativeINfinity
const nAn = 'not a number' / 2;     //NaN
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt},type: ${typeof bigInt}`);

//String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello '+brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; //template literals (String)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

//boolean
//false: 0, null, undefinde, NaN, ''
//ture : nay other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefinded
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol('id');
const gSymbol2 = Symbol('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);


//object, real-life object, data structure
const ellie = {nane: 'ellie', age: 20};

//5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' /'2';
console.log(`value: ${text}, type: ${typeof text}`);
//다이나믹한 형때문에 TypeScript 나옴

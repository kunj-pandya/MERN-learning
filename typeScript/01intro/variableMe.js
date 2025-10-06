"use strict";
// -------- Syntex ----------
// let variable: type = value; //value: always in lowercase
Object.defineProperty(exports, "__esModule", { value: true });
// ------ Example ----------
var greetings = "Hello kunj";
// greetings = 6;  //Type 'number' is not assignable to type 'string'.
var mynum = 6;
// mynum.toUpperCase();  //String methods can'be used for number
console.log(greetings);
// number
var userId = 112233;
// userId = "kunj" //can't do 
// boolean
var isLoggedIn = false;
//any 
// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
var hero;
function getHero() {
    return true;
}
hero = getHero();

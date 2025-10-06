"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
};
// bad syntex
// function createUser({ name: string, isPaid: boolean }) { }
// createUser({ name: "kunj", isPaid: false });
// let newUser = { name: "kunj", isPaid: false, email: "kunj@gmail.com" };
// createUser(newUser);
function createCourse() {
    return {
        name: "reactjs",
        price: 3999
    };
}

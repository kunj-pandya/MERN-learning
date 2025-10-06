function addTwo(num: number): number {
    return num + 2;
}

// function addTwo(num: number) {
// retrun "hello"
// }
// let myValue = addTwo(5);  //allowed but we should not do this

function geteUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) { }

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }  //with defalut value


addTwo(5);
// addTwo("3"); //not allowed
geteUpper("kunj");
signUpUser("kunj", "kunj@gmail.com", false);
loginUser("kunj", "kunj@gmail.com");

// Arrow function
const getHello = (s: string): string => {
    return "";
}

// Arrays
const heros = ["thor", "spiderman", "tronman"];
heros.map((hero): string => {
    return `hero is ${hero}`;
})


// void
// void represents the return value of functions which don’t return a value. It’s the inferred type any time a function doesn’t have any return statements, or doesn’t return any explicit value from those return statements
function consoleError(errmsg: string): void {
    console.log(errmsg);
}


// naver
// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
function handleError(errmsg: string): never {
    throw new Error(errmsg)
}


export { }

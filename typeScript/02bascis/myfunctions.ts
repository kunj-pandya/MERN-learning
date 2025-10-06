function addTwo(num: number) {
    return num + 2;
}

function geteUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) { }

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }  //with defalut value


addTwo(5);
// addTwo("3"); //not allowed
geteUpper("kunj");
signUpUser("kunj", "kunj@gmail.com", false);

export { }

const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
}
// bad syntex
// function createUser({ name: string, isPaid: boolean }) { }
// createUser({ name: "kunj", isPaid: false });

// let newUser = { name: "kunj", isPaid: false, email: "kunj@gmail.com" };
// createUser(newUser);



function createCourse(): { name: string, price: number } {
    return {
        name: "reactjs",
        price: 3999
    }
}

export { }

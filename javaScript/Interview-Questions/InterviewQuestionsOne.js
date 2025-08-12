// shariyuns codind school
// --------------------------------------------------------
// Q : For loop that skips the even numbers between 1 and 20.
for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        // console.log(i);
    }
}

// --------------------------------------------------------
//  Q : do..while loop to log numbers from 5 to 1.
let ba = 5;
do {
    // console.log(a);
    a--;
} while (a > 0);
// Ans : 5 4 3 2 1


// --------------------------------------------------------
//  Q : for loop that calculates the factorial of 5.
let factorial = 1;
for (let j = 5; j > 0; j--) {
    factorial = factorial * j;
}
// console.log(factorial);
// Ans  : 120


// --------------------------------------------------------
//  Q : A nasted loop to print a 3x3 Grid of numbers.
var hold = 1;
for (let x = 1; x < 4; x++) {
    var str = "";
    for (let y = 1; y < 4; y++) {
        str += `${hold} `;
        hold++;
    }
    // console.log(str);
}
// Ans : 1 2 3
//       4 5 6
//       7 8 9


// --------------------------------------------------------
//  Q : For loop to reverse an array [1, 2, 3, 4, 5].
var revArray = [1, 2, 3, 4, 5];
for (let p = 0; p < Math.floor(revArray.length / 2); p++) {
    var temp = revArray[p];
    revArray[p] = revArray[revArray.length - 1 - p];
    revArray[revArray.length - 1 - p] = temp;
}
// console.log(revArray);
// Ans : [5, 4, 3, 2, 1]


// --------------------------------------------------------
//  Q : Write a While loop that logs numbers from 1 to 100 divisible by 5.
let num = 1;
while (num <= 100) {
    if (num % 5 === 0) {
        // console.log(num);
    }
    num++;
}


// --------------------------------------------------------
//  Q : Use a for...in loop to iterate over an object and log its keys.
let obj = {
    name: "kunj",
    email: "kunj@email.com"
}

for (const key in obj) {
    // console.log(key);
}
// Ans : name 
//       email


// --------------------------------------------------------
//  Q : Create an array of your top 5 favorite movies and log it.
let movieArray = ["ironman", "thor", "batman", "antman", "spiderman"]
movieArray.forEach(function (movie) {
    // console.log(movie);
});


// --------------------------------------------------------
//  Q : Add two new elements to the start of an array using .unsift().
let shiftArray = [1, 2, 3, 4, 5];
shiftArray.unshift(0);
shiftArray.unshift(-1);
// console.log(shiftArray);
// Ans : [-1, 0, 1, 2, 3, 4, 5]


// --------------------------------------------------------
//  Q : Remove the last element of an arrray and log the updated array.
let removeArray = [1, 2, 3, 4, 5];
removeArray.pop();
// console.log(removeArray); 
// Ans : [1, 2, 3, 4]


// --------------------------------------------------------
//  Q : Use Slice() to extract the first three element of an array.
let sliceArray = [1, 2, 3, 4, 5];
// console.log(sliceArray.slice(0, 3)); 
// Ans : [1, 2, 3]


// --------------------------------------------------------
//  Q : Find the index of a specific element of an array using .indexOF().
let indexArray = [1, 2, 3, 4];
// console.log(indexArray.indexOf(3)); 
//  Ans : 2


// --------------------------------------------------------
//  Q : Check if a value exists in an array using .includes().
let inculdesArray = [1, 2, 3, 4];
// console.log(inculdesArray.includes(3));   
// console.log(inculdesArray.includes(12));  
// Ans : true
// Ans : false


// --------------------------------------------------------
//  Q : Combine two arrrays [1, 2] and [3, 4] using .concat().
let concatArrayOne = [1, 2];
let concatArrayTwo = [3, 4];
// console.log(concatArrayOne.concat(concatArrayTwo));
//  Ans : [1, 2, 3, 4]


// --------------------------------------------------------
//  Q  : Sort array of numbers [5, 2, 9, 1] in accending array.
let shortArray = [5, 2, 9, 1];
for (let y = 0; y < shortArray.length; y++) {
    for (let z = 0; z < shortArray.length - y - 1; z++) {
        if (shortArray[z] > shortArray[z + 1]) {
            var temp = shortArray[z];
            shortArray[z] = shortArray[z + 1];
            shortArray[z + 1] = temp;
        }
    }
}
// console.log(shortArray);
//  Ans : [ 1, 2, 5, 9 ]


// --------------------------------------------------------
// Q : Write a program that creates a copy of array without mutating the original.
var copyArray1 = [11, 22, 33, 44, 55];
var copyArray2 = [];

copyArray1.forEach(function (value) {
    copyArray2.push(value);
})
// console.log("copyArray2 :",copyArray2);
// Ans : copyArray2 : [ 11, 22, 33, 44, 55 ]


// --------------------------------------------------------
// Q : write a fucntion to chechk if a number is even or odd.
function evenodd(value) {
    if (value % 2 === 0) return "even value";
    else return "odd value";
}
// console.log(evenodd(12)); // Ans: even value 
// console.log(evenodd(5)); // Ans: odd value 


// --------------------------------------------------------
// Q : Function to calculate the area of the circle with the given redius.
function circleArea(r) {
    return Math.round(Math.PI * r * r);
}
// console.log(circleArea(9));\
// Ans: 254


// --------------------------------------------------------
// Q : Function that accepts an array and returns the sum of its elements.
function sumOfArr(arr) {
    var sum = 0;
    arr.forEach(function (V) {
        sum = sum + V;
    })
    return sum;
}
// console.log(sumOfArr([1, 2, 3, 4, 5]));
// Ans : 15


// --------------------------------------------------------
// Q : Function that checks ia astring starts with a specific character.
function checker(str, char) {
    return str.toLowerCase().startsWith(char.toLowerCase());
}
// console.log(checker("kunj", "k"));
// Ans : true


// --------------------------------------------------------
// Q : Function to find maximum of two numbers.
function max(a, b) {
    if (a > b) return "A is big";
    else if (a < b) return "B is big";
    else return "Equals";
}
// console.log(max(33, 5));
// Ans : A is big


// --------------------------------------------------------
// Q : function that takes the number and returns its factorial.
function getFact(num) {
    let fact = 1;
    for (let f = 1; f <= num; f++) {
        fact = fact * f;
    }
    return fact;
}
// console.log(getFact(5));
// Ans : 120


// --------------------------------------------------------
// Q : function that accepts a string and returns its reverse.
function revFun(value) {
    return value.split("").reverse().join("");
}
// console.log(revFun("kunj"));
// Ans : junk


// --------------------------------------------------------
//  Q : function that finds the maximum from the array.
function maxFun(arr) {
    var max = 0;
    for (let m = 0; m < arr.length; m++) {
        if (arr[m] > arr[max]) {
            max = m;
        }
    }
    return arr[max];
}
// console.log(maxFun([1, 33, 4, 5 , 34, 54, 6]));
// Ans : 54


// --------------------------------------------------------
// Q : function that converts string to kebab-case(e.g. "hello world"=> "hello-world")

function kebab(str) {
    return str.replaceAll(" ", "-");
}
// console.log(kebab("kunj pandya"));
// Ans: kunj-pandya
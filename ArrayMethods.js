
// ----forEach()----

// forEach() method calls a function (a callback function) once for each array element.

/* 
const names = ["Amit","Rohit","Virat"];


function myfunc(value)
{
    console.log(value);
}

names.forEach(myfunc);

 */


// --- map() ---

// map() creates a new array by performing a function on each array element.

/* 
const numbers = [1,2,3,4];

function square(value)
{
    return value*value;
}

const result = numbers.map(square);

console.log(result);

 */


// --- filter() ---

//  filter method creates a new array with array elements that pass a test.

/* 
const numbers = [1,2,3,4];

function isEven(value)
{
    return value%2==0;
}

const result = numbers.filter(isEven);

console.log(result);

 */



// --- reduce() ---

// reduce() method runs a function on each array element to produce a single value.

const numbers = [1,2,3,4];

function sum(total, value)
{
    return total + value;
}

const result = numbers.reduce(sum);

console.log(result);

// ----forEach()----

// forEach() method calls a function (a callback function) once for each array element.


const names = ["Amit","Rohit","Virat"];


function myfunc(value)
{
    console.log(value);
}

names.forEach(myfunc);


// --- map() ---


const numbers = [1,2,3,4];

function square(value)
{
    return value*value;
}

const result = numbers.map(square);

console.log(result);
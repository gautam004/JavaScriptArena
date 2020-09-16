//https://www.w3schools.com/jsref/jsref_foreach.asp

const allNumbers = [ 1, 2, 3, 4, 5];

//using one paramter of function inside forEach
let sum = 0;
allNumbers.forEach( num => {
    sum = sum + num;
} )
console.log(sum);

//using first 2 args
allNumbers.forEach( (num, index) => {
    allNumbers[index] = 2*num;
} );
console.log(allNumbers);
 

 //using 3 args for fn
allNumbers.forEach( (num, index, arr1) => {
    arr1[index] = allNumbers[index] + 1;
    console.log(arr1[index]);
} )

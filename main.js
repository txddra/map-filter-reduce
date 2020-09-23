// 1.  a. You are given an array of numbers below
//     b. Using reduce subtract all of the numbers in the array from an initial number 200
let numbers = [12, 3, 5, 3, 5, 4]

let difference = numbers.reduce(function (passedIn, item) {
    return passedIn - item
}, 200)

console.log(difference)

// 2.  Add 500 to each bottle of red wine, then add all the red wine bottles together. Use all three methods we learned today and use method chaining.
let data = [{
        wineColor: 'red',
        year: '1922',
        region: 'Bordeaux',
        numBottles: 123
    },
    {
        wineColor: 'red',
        year: '1972',
        region: 'Beaujolais',
        numBottles: 29
    },
    {
        wineColor: 'white',
        year: '2020',
        region: 'Bourgogne',
        numBottles: 224
    },
    {
        wineColor: 'white',
        year: '1987',
        region: 'Merlot',
        numBottles: 122
    },
    {
        wineColor: 'white',
        year: '1963',
        region: 'Rioja',
        numBottles: 22
    },
    {
        wineColor: 'red',
        year: '1976',
        region: 'Napa',
        numBottles: 54
    }
];

//find all the red wine, add 500 to them
//add all red and white wines

//'solution'
let x = data.filter((allWine) => allWine.ineColor === "red")
    .map((wine) => {
        wine.numBottles += 500;
        return wine;
    })

//testing
// console.log(x)

// 3.  Just Averages
//     - Using reduce, return an integer value for the average of all the index values and/or calculated values in an array.
//     - If the Value is a String, use the character Code number for the first letter in the String.
//     - Use all four arguments in the callback function in your solution
//     - And a ternary wouldn't hurt
const nums1 = [8, 21.3, 16, 55, 22, 44]; // should be 27
const nums2 = [11.12, 43, 56.22, 78, 98, 11]; // should be 49
const nums3 = [2, 1222, 3444, 7254, 83.04444, 1111]; // should be 2186
const nums4 = [2, 1222, 'sneeze', 3444, 7254, 8, 'abacus']; //should be 1734

//'solution'
function justAverages(array){
    if(array !== ''){
  return Math.floor(array.reduce((a, b) => a + b, 0) / array.length);
   //need help with trying to convert the string
    //learned about the 'charCodeAt' method, but not enough
    }
   
   
 return array = array.charCodeAt(0) 
    
}

// console.log(array.charCodeAt(0) )
//testing
console.log(justAverages(nums1));
console.log(justAverages(nums2));
console.log(justAverages(nums3));
console.log(justAverages(nums4));

// let average1 = Math.floor(nums1.reduce((total,current)=> total + current, 0) / nums1.length);
// let average2 = Math.floor(nums2.reduce((total, current) => total + current,average1) / nums2.length);

// console.log(average1)
// console.log(average2)

// 4.  Choose all the companies that started after 2000 and sort them ascending

let businesses = [{
        company: 'VISA',
        startYear: 2000
    },
    {
        company: 'Chase',
        startYear: 1998
    },
    {
        company: 'BOA',
        startYear: 1980
    },
    {
        company: 'Amex',
        startYear: 2000
    },
    {
        company: 'TD',
        startYear: 2001
    },
    {
        company: 'Mastercard',
        startYear: 2011
    },
    {
        company: 'Citibank',
        startYear: 2010
    },
];


// function sortStart(company){
let sortStart =businesses.filter((company) => company.startYear > 2000).sort((comp1,comp2)=>comp1.startYear - comp2.startYear)

console.log(sortStart)


// 5.  COMPUTE INTEGERS

//     - use the array methods to multiply all integers in an array by 5.
//       [1,2,3,4] should be [5,10,15,20]
//       [1,2,undefined,6] should be [5,10,30]
//       [1,3,25.5,4,32.9] should be [5,15,20]
let arrA = [1, 2, 3, 4]
let arrB = [1, 2, undefined, 6];
let arrC =  [1, 3, .5, 4, 32.9];
//should be whole numbers and an actual number
//if not skip it
//learned that if you want to skip something when mapping through an array, just filter it first
 function byFive(arr){  
     return arr.filter((value) => value > 0 && value % 1===0).map((val) => val * 5)
}
console.log(byFive(arrA));
console.log(byFive(arrB));
console.log(byFive(arrC));
// 6.

// - Count the number times the same element value appears in an array and display your answer in an object with the element as the key and the number of times as the value
// - Use reduce and use its second argument to initialize the empty object
// - The properties in the object will have a string for the key and a number for the value
// - The key in each property should be the value in the array we are counting.
// - The value in the object property should be the number of times a value appears in the original array.
const arr1 = [5, 3, 2, 5, 6]; //should be {'5':2,'3':1,'2':1,'6':1}
const arr2 = [3, 1, 2, 5, 2, 5, 7, 5] // should be { '1': 1, '2': 2, '3': 1, '5': 3, '7': 1 }

function getOccurrence(array, value) {
    let count = 0;
    array.forEach((v) => (v === value && count++));
    return`${value}: ${count}` ;
}

console.log(getOccurrence(arr1,5,3 ,2));  // 2
console.log(getOccurrence(arr1, 3));
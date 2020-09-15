// 1.  a. You are given an array of numbers below
//     b. Using reduce subtract all of the numbers in the array from an initial number 200
    let numbers = [12, 3, 5, 3, 5, 4]

// 2.  Add 500 to each bottle of red wine, then add all the red wine bottles together. Use all three methods we learned today and use method chaining.
    let data = [
    {
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

// 3.  Just Averages
//     - Using reduce, return an integer value for the average of all the index values and/or calculated values in an array.
//     - If the Value is a String, use the character Code number for the first letter in the String.
//     - Use all four arguments in the callback function in your solution
//     - And a ternary wouldn't hurt
      const nums1 = [8, 21.3, 16, 55, 22, 44]; // should be 27
      const nums2 = [11.12, 43, 56.22, 78, 98, 11]; // should be 49
      const nums3 = [2, 1222, 3444, 7254, 83.04444, 1111]; // should be 2186
      const nums4 = [2, 1222,'sneeze', 3444, 7254, 8, 'abacus']; //should be 1734
// 4.  Choose all the companies that started after 2000 and sort them ascending

    let businesses = [
             { company: 'VISA', startYear: 2000 },
            { company: 'Chase', startYear: 1998 },
            { company: 'BOA', startYear: 1980 },
            { company: 'Amex', startYear: 2000 },
            { company: 'TD', startYear: 2001 },
            { company: 'Mastercard', startYear: 2011 },
            { company: 'Citibank', startYear: 2010 },
            ];

// 5.  COMPUTE INTEGERS

//     - use the array methods to multiply all integers in an array by 5.
//       [1,2,3,4] should be [5,10,15,20]
//       [1,2,undefined,6] should be [5,10,30]
//       [1,3,25.5,4,32.9] should be [5,15,20]

// 6.

// - Count the number times the same element value appears in an array and display your answer in an object with the element as the key and the number of times as the value
// - Use reduce and use its second argument to initialize the empty object
// - The properties in the object will have a string for the key and a number for the value
// - The key in each property should be the value in the array we are counting.
// - The value in the object property should be the number of times a value appears in the original array.
  const arr1 = [5,3,2,5,6]; //should be {'5':2,'3':1,'2':1,'6':1}
  const arr2 = [3,1,2,5,2,5,7,5] // should be { '1': 1, '2': 2, '3': 1, '5': 3, '7': 1 }

// 1-Objects javascriptde name value seklinde olusan karmasık veri tipi dir.
 const person = {
  name: "Selim",
  surname:"İsabetli",
  age: 45,
  programmings: ["html","css","javascript","react"],
  fullName:function() {
    return this.name + " "+this.surname
  },
  adress: {
  city:"Bursa",
  districh:"Yıldırım"
  }

}
console.log(person.name);
console.log(person.surname);
console.log(person.name);
console.log(person.age);
console.log(person.programmings);
console.log(person.adress);
console.log(person.fullName());
console.log(person.adress.city);
console.log(person.adress.districh); 
console.log("1-############################")

//2-Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.
let myDog = {
  name:"Kont",
  legs:4,
  tails:1,
  friends:["Childs","Other dogs","Babies"]

};
console.log(myDog)
console.log("2-############################")
//3-Accessing Object Properties with Dot Notation

// Setup
let testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};


const hatValue = testObj.hat;      
const shirtValue = testObj.shirt;  
console.log(hatValue);
console.log(shirtValue);
console.log("3-############################")
//4-Accessing Object Properties with Bracket Notation 
//Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

 testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};


const entreeValue = testObj["an entree"];   
const drinkValue = testObj["the drink"]; 
console.log(entreeValue);
console.log(drinkValue);
console.log("4-############################")
//5-Accessing Object Properties with Variables

 testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};


const playerNumber = 16;  
const player = testObj[playerNumber];  
console.log(player)
console.log("5-############################")
//6-Updating Object Properties   
//Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
 myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder"
console.log(myDog.name)
console.log("6-############################")
//7-Add New Properties to a JavaScript Object

 myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark="woof"
console.log(myDog);
console.log("7-############################")
//8-Delete Properties from a JavaScript Object
//Delete the tails property from myDog. You may use either dot or bracket notation.
 myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;
console.log(myDog)
console.log("8-############################")

//9-Using Objects for Lookups
//Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
function phoneticLookup(val) {
  let result = "";

 

  const lookup={
    alpha:"Adams",
    bravo:"Boston",
    charlie:"Chicago",
    delta:"Denver",
    echo:"Easy",
    foxtrot:"Frank"}

  result =lookup[val];
  return result;
 
}

phoneticLookup("charlie");
console.log(phoneticLookup("charlie"))
console.log("9-############################")
//10-Testing Objects for Properties
//Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".
let obj= {gift: "pony", pet: "kitten", bed: "sleigh"};
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
console.log(checkObj(obj,"gift"))
console.log("10-############################")
//11-Manipulating Complex Objects
//Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }, 
  
  {
    "artist": "Beau Carnes",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats": [
      "YouTube video"
    ]
  }
];
console.log(myMusic);
console.log("11-########################")

//12-Accessing Nested Objects
//Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)
console.log("12-########################")
//13-Accessing Nested Arrays
//Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree =myPlants[1].list[1] ;
console.log(secondTree);
console.log("13-############################")
//14-record collection 

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log("14-##########################")
//15-Iterate with JavaScript While Loops
//Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
var myArray = [];

var i = 5;
while(i>=0) {
  myArray.push(i);
  i--;
}

console.log(myArray);
console.log("15-#########################")
//16-Iterate with JavaScript For Loops
//Use a for loop to push the values 1 through 5 onto myArray.
const myArr = [];

for (let i = 1; i <6; i++) {
  myArr.push(i);
}
console.log(myArr);
console.log("16-#########################");
//17-Iterate Odd Numbers With a For Loop
//Push the odd numbers from 1 through 9 to myArray using a for loop.
const oddNumArray = [];

for (let i = 1; i < 10; i += 2) {
  oddNumArray.push(i);
}
console.log(oddNumArray);
console.log("17#########################")
//18Count Backwards With a For Loop
//Push the odd numbers from 9 through 1 to myArray using a for loop.
const oddNumBackCount = [];

for (let i = 9; i > 0; i -= 2) {
  oddNumBackCount.push(i);
}
console.log(oddNumBackCount)
console.log("18#########################")
//19Iterate Through an Array with a For Loop
//Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
const sumArr = [2, 3, 4, 5, 6];
let total =0;


for (let i = 0; i < sumArr.length; i++) {
  
   total+= sumArr[i]
}
console.log(total)
console.log("19#########################")
//20Nesting For Loops
//Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
function multiplyAll(arr) {
  var product = 1;
  
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);
console.log("20###########################")
//21Iterate with JavaScript Do...While Loops
//Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.

var sumWithDoWhileArr = [];
var i = 10;



do {
  sumWithDoWhileArr.push(i);
  i++;
} while (i < 5)

console.log(i, sumWithDoWhileArr);
console.log("21#########################")
//22Replace Loops using Recursion
//Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
console.log(sum([2,3,4,5],2))
console.log("22################")
//23 Profile Lookup
//If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.


var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}


var data = lookUpProfile("Sherlock", "hello");

console.log(data);
console.log("23#####################")
//24 Generate Random Fractions with JavaScript
//Change randomFraction to return a random number instead of returning 0.
function randomFraction() {


  return Math.random();
}

console.log(randomFraction());
console.log("24#####################")

//25Generate Random Whole Numbers with JavaScript
//Use this technique to generate and return a random whole number between 0 and 9.
function randomWholeNum() {

  

  return Math.floor(Math.random()*10);
}
console.log(randomWholeNum());
console.log("25########################")
//26Generate Random Whole Numbers within a Range
//Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);



function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

var myRandom = randomRange(5, 15);

console.log(myRandom);
console.log("26#####################")
//27Use the parseInt Function
//Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
function convertToInteger(str) {
return parseInt(str)
}

convertToInteger("56");
console.log(convertToInteger("56"))
console.log("27#####################")
//28Use the parseInt Function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2)
}

convertToInteger("10011");
console.log(convertToInteger("10011"))
console.log("28#####################")
//29Use the Conditional (Ternary) Operator
//Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

function checkEqual(a, b) {
  return a===b? "Equal":"Not Equal"

}

checkEqual(1, 2);
console.log(checkEqual(1, 2));
console.log("29######################")
//30Use Multiple Conditional (Ternary) Operators
//In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(0));
console.log("30########################")
//31 Use Recursion to Create a Countdown
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log( countdown(5));
console.log("31#####################")
//32Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(4,9))
console.log("32###################")

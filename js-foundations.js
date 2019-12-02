// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".

var test1 = 15
var test2 = 0
var test3 = 385
var test4 = -7


const isDivisible = (number) => {
    if(number%3 === 0){
        return `${number} is divisble by 3!`
    } else {
        return `${number} is not divisible by 3!`
    }
}

console.log(isDivisible(Math.abs(test1)));
console.log(isDivisible(Math.abs(test2)));
console.log(isDivisible(Math.abs(test3)));
console.log(isDivisible(Math.abs(test4)));


// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.


    var helloMe = { name : "Mary",
    lastName : "Redlinger",
    city : "San Diego",
    age : 23,
        getData: function() {
            return this.name + " " + this.lastName + " is " + this.age + " years ols and lives in " + this.city
        }
    }
    
    console.log(helloMe.getData())

// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

const everyOther = (array) => {
    let newArr = array.filter((value, index) =>{
        return index%2 === 0
    })
     return newArr.join(" ");
}

console.log(everyOther(randomNouns))

// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

const capitalizeThat = (array) => {
    return array.map(value => {
        return value[0].toUpperCase() + value.slice(1)
    })
}
console.log(capitalizeThat(randomNouns))



// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

//create function returnLength
// pass in array
//find highest index of value
//return that index in new array

const returnLength = (array) => {
    return array.map(value => {
        return value.length
    })
}
console.log(returnLength(randomNouns))


// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

//create a function called alphabetSoup
//passes in one argument
//returns a string with letters in alphabetical order

const alphabetSoup = (string) => {
    let arr = string.split('');
    let newArr = arr.sort();
    return newArr.join('');
}
console.log(alphabetSoup(testString1))
console.log(alphabetSoup(testString2))
console.log(alphabetSoup(testString3))

// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

//write a function called threeVar
//combine arrays
//sort and join arrays
//returns string with all in alphabetical order

var combine = testString1 + testString2 + testString3

const threeVariableSoup = (string) => {
    let arr = string.split('');
    let newArr = arr.sort();
    return newArr.join('');
}
console.log(threeVariableSoup(combine))


// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

//write function called orderedString
//pass two variables
//oder variables based on index number
//return new string of values


const orderedString = (array1, array2) => {
    return array1.map((v,i) => {
        return [v + " " + array2[i]]
    }).join(' ')
}

console.log(orderedString(amounts, animals));


// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

//create a function called noStringS
//take in both variables
//if amounts === 1
//return animal slice()

const noStringS = (array1, array2) => {
    return array1.map((v,i) => {
        if( v === 1){
        return [v + " " + array2[i].slice(0, array2[i].length -1)]
        } else {
        return [v + " " + array2[i]]
        }
    }) .join(' ')
}

console.log(noStringS(amounts, animals));
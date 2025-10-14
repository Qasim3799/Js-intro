// Strings

console.log('Bolanle')

console.log(typeof 'Bolanle')

// Ways of creating strings in JavaScript
// 1. Using single quotation marks (' ')
// 2. Using double quotation marks (" ")
// 3. Using back-ticks   (` `)

console.log(typeof "Bolanle");

console.log(typeof `Bolanle`);

// Numbers
// Types of numbers
// 1. Integers e.g. 2, 5, 6, -3, 1
// 2. Floats e.g. 2.12, -3.4, 1.0

console.log(typeof 3)
console.log(typeof 3.2)


// Operators in JavaScripts
// 1. Addition +
// 2. Subtraction -
// 3. Multiplication *
// 4. Division /
// 5. Power  **
// 6. Modulo %  (returns the remainder of the division between two numbers)

// console.log(4/2)
// console.log(2 ** 4)  // power
// console.log(4 % 2)
// console.log(10 % 3)

// alert(1 - 1 + 1 * 1 / 1) // BODMAS

// D/M
// A/S

// alert('My name is Bolanle')

// person = prompt('What is your name?')
// console.log(person)


// Converting from float to integer
// console.log(parseInt(3.2))
// console.log(parseInt('34'))

// console.log(typeof('3.45'))

// console.log(parseFloat('3.45'))
// console.log(parseFloat('34'))



// Variables in JS

let firstName = 'Bola'  // can be changed later 
const lastName = 'Akinola'  // cannot be changed later
var otherName = 'Damilola'   // can be changed later


// Rules of naming variables in JS
//1. variable names are written in camel case  e.g. firstName, favPen, bestFriend etc.

//2. A variable name cannot start with a number  e.g 1stCar instead carOne, firstCar

//3. A variable name cannot start with a special character or punctuation mark. except underscore (_) e.g. _name but not @name

//4. A variable name cannot have space in between. It should be written in camel case instead. e.g 'best friend' instead it should be 'bestFriend' 

//5. A variable name cannot contain an operator e.g best-friend  instead it shold be bestFriend 


// Array

let students = ['Bola', 'Olamide', 'Daniel']

console.log(students)

console.log(typeof students)

// Adding items to  an array

// adding items to the end of an array
students.push('Michael')

console.log(students)

students.push('Malik')

//adding items to the beginning of an array

students.unshift('Tunde')

console.log(students)

console.log(students.length)


// Reading values in an array (Indexing and slicing)

const fruits = []

fruits.push('mango')
fruits.push('apple')
fruits.push('banana')

console.log(fruits)

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

console.log(students[0])

// last name in the students array

console.log(students[students.length - 1])

// or

console.log(students.at(-1))   //last name in the array
console.log(students.at(0))  // first name in the array

console.log(students.at(1))

// Slicing

console.log(fruits)

console.log(fruits.slice(0,2))

console.log(fruits.slice(0,3))

console.log(fruits.slice(0,1))

console.log(fruits.slice(1))
console.log(fruits.slice(0))


fruits.unshift('carrot')
fruits.unshift('pineapple')

// inserting items into an array (splicing)

fruits.splice(2,1,'guava')

fruits.splice(3,0, 'banana')

console.log(fruits)


let age = 13
let name = 'Bolaji'

console.log('My name is', name, 'I am', age, 'years od')


let recipe = ['onions', 'salt', 'pepper']

recipe.push('maggi', 'carrot')

console.log(recipe)

recipe.unshift('cabbage', 'groundnut oil')

console.log(recipe)  // ['cabbage', 'groundnut oil', 'onions', 'salt', 'pepper', 'maggi', 'carrot']



recipe.splice(3,2, 'palm oil', 'curry', 'thyme' ) 

console.log(recipe)   // ['cabbage', 'groundnut oil', 'onions', 'palm oil', 'curry', 'thyme', 'maggi', 'carrot']

// popping and item from the end of an array

let lastItem = recipe.pop() // carrot is the last item

console.log(lastItem)  // carrot

console.log(recipe) // ['cabbage', 'groundnut oil', 'onions', 'palm oil', 'curry', 'thyme', 'maggi']

recipe.pop() // maggi is the last item

console.log(recipe)  // ['cabbage', 'groundnut oil', 'onions', 'palm oil', 'curry', 'thyme']


// removing the first item in an array

let foods = ['rice', 'beans']

console.log(foods.length)

foods.push('yam', 'egg')

console.log(foods)  // ['rice', 'beans', 'yam', 'egg']

foods.pop()

console.log(foods)   // ['rice', 'beans', 'yam']

// Removing the first item in an array

foods.shift()


// Practice Questions 
// Question 1: 
// Create an array named colors containing the strings 'red', 'green', and 'blue'. Then, use console.log() to print the second element of the array. 

let colors = ['red', 'green', 'blue']

console.log(colors[1])

// Question 2: 
// Start with an array named fruit containing 'apple' and 'banana'. Add 'cherry' to the end of the array. Then, remove the first element from the array. Finally, print the fruit array. 

let fruit = ['apple', 'banana']
fruit.push('cherry')

fruit.shift()
console.log(fruit)

// Question 3
// Given the array const data = [1, 2, 3, 4, 5];, use the splice() method to remove the elements at index 1 and 2, and then insert the string 'a' and the string 'b' in their place. Print the modified data array.

const data = [1, 2, 3, 4, 5]

data.splice(1,2, 'a', 'b')
console.log(data)


// Merging and  concatenating arrays

// Merging

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let arr3 = arr1 + arr2
console.log(arr3)  // 1,2,34,5,6

// concatenation
let arr4 = arr1.concat(arr2)
console.log(arr4)  // [1, 2, 3, 4, 5, 6]


// spread operator (...)

let arr5 = [...arr4,7,8,9]

console.log(arr5)


// searching if an item is in an array (includes)

console.log(fruits)

console.log(fruits.includes('carrot'))   //true

console.log(fruits.includes('water melon'))  //false


// Finding index of an item inside an array
console.log(fruits.indexOf('banana'))

fruits.splice(3,1)

console.log(fruits)



// Working with formulas in Javascript
// Program to calculate the area of a triangle
// A = 1/2 * b * h

// let base = prompt('Enter the base of the triangle')
// let  height = prompt('Enter the height of the triangle')

// let area = 1/2 * base * height
// console.log(area)

// console.log('The area of the triangle =', area,'cm squared')

// console.log(`The area of the triangle = ${area} cm squared`)   // interpolatin


// Typecasting - conveting from one data type to another 

let str1 = '123'
typeof str1   // string

parseInt(str1)   // 123

typeof parseInt(str1)   // number (integer)


let str2 = '1.23'
typeof parseFloat(str2)   // number (float)


let num1 = 149
typeof num1.toString()   //string

console.log(num1.toString())






// CLASS WORK
// 1. Create a variable named greeting and assign the string "Hello World" to it. Log its type to the console.

// 2. Create an array named languages containing the strings 'JavaScript', 'Python', and 'C++'.

//    - Add 'Java' to the end of the array.

//    - Add 'HTML' to the beginning of the array.

//    - Print the final array.

// 3. Given the array const nums = [1, 2, 3, 4, 5];

//    - Use the splice() method to remove elements at index 2 and 3, and insert the strings 'a' and 'b' in their place.

//    -Log the final array.

//4. Write a JavaScript expression that calculates the area of a triangle with a base of 10 and height of 5. Use the formula:

//     - Area = 1/2 × base × height

//     - Print the result to the console.

//5. Convert the number 2025 to a string and log its type to the console to confirm the conversion.


// SOLUTION 

// 1. 
let greeting = 'hello world'
console.log(typeof greeting)

//2. 
const languages = ['JavaScript', 'Python', 'C++']

languages.push('Java')
languages.unshift('HTML')
console.log(languages)

// 3. 

const nums = [1, 2, 3, 4, 5];
nums.splice(2,2,'a', 'b')
console.log(nums)

//4. 
let base = 10
let height = 5

const area = 1/2 * base * height
console.log(area)

//5.
let num = 2025
console.log(typeof num.toString())  // 'string'


// Functions in JavaScript

function  add(num1, num2){
    return num1 + num2
}


let answer = add(5,10)
console.log(answer)

// A function that says 'Hello world!

function sayHello(){
    console.log('Hello World')
}

sayHello()

// Write a funtion that takes the name of a person as argument and then return 'Hello' and the person's name.

function greetPerson(name){
    console.log(`Hello ${name}`) // Interpolation
}


greetPerson('Tunde')
greetPerson('Wale')

// A function that converts words to uppercase

function convertToUpper(word){
    return word.toUpperCase()
}


let output = convertToUpper('Welcome to this JavaScript class')

console.log(output)


// Function that calculates the area of a triangle

function areaOfTriangle(base, height){
    let area = 1/2 * base * height
    return `Area = ${area} cm^2`
}

console.log(areaOfTriangle(4,5))

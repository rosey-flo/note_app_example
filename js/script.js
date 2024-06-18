//Javascript works with or has a set of different values
//A word or multiple words wrapped in quotes is called a string value type
// number is called a Number value type
var firstName = 'Emily'; //string value type(legacy term "var" is being used)
var lastName = 'Flores';
var age = 44; //Number value type
var isADev = true; //Boolean value type
var un = undefined; // Undefined is a calue type that JS will give you when there is no declared or assigned value
var n = null; // Programmer's representation of nothing - we may use this as a placeholder until a value is recieved
var notANumber = NaN; // Not a number value tye - this is ptovided when you try to process a mathmathical equation and the result is not a valid number

var nothing;

//console.log(isADev); // Using a variable within your code is called a reference

// age = age + 1; //this is referencing the already exisiting value type above 'age' and edits it

//age += 5; //this is an increment operator =+ to increase age by a numerical amount that we set, in this case 5
//age = age + 1;
age ++; // increases a variable by 1

//console.log(age);

age --;//decreases your number value by 1

//console.log(age);

//age -= 4;

//console.log(age);

//console.log(firstName + ' Tadlock') //combines but does not reassign

//firstName + ' Tadlock'; //as a combinator this will not fuse the names together on console

//console.log(firstName); //does not work to add tadlock

//console.log(firstName + ' ' + lastName);

var fullName = firstName + ' ' + lastName;

console.log(fullName); //This a great way to store variabes to create a !descriptive! outcome

var names = ['john', 'anne', 'bob', 'jane']; // Array

//console.log(names[2]);//by putting the [2] in the variable area, you care calling the 2 indexed value of the array which would be bob, aka they art with 0, 1, 2...

//console.log(names.length); // gives you the number of items in the referenced array

//console.log(names[names.length-1])

//names[1] = 'Kim';

//console.log(names[1])

//var ages = [40, 24, 54, 12]
//ages[2] += 10;
//console.log(ages);

//names.push('susan'); //this pushes or add a name to your array
//console.log(names)

//names.unshift('Eli'); //this will add a name to the beginning of an array
//console.log(names);

//names.pop(); //removes the last item in a refrenced array
//console.log(names);

//names.shift(); //removes the first item in a refrenced array
//console.log(names);

names.splice(3,1); //this can remove a middle value in an array, the first number is the index and the second number is the amount you are reomving
console.log(names);
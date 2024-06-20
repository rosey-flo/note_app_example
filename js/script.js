

/*
//functions and their codes are hoisted to the top and can be called before being declared

myFirstFunc();

//==============================

function myFirstFunc () { //() holds a pararemeter list, and the words after fucntion will be your reference name to the code block
   console.log('function has been called');
}

//this is declaration above
//==============================
//This is calling it below

myFirstFunc();

//This is meant to be used a a repeatable code !!

*/


/*
function add(num1, num2) {
   console.log(num1 + num2); //this will be the action you want performed with your refrenced, delclared values
}

add(5, 10); // pthis is where you will pass your arguments and are comma separated, and will then be referenced in the () as 'parameter'
// this can then be used to get the sum of all different numbers

add(20, 27);
*/



//=====================

/*
function printValues (num, boolean, name, another) {
   console.log(another); //this will be undefined since a 4th value is not being declared
}
printValues(10, 'Allen', false);
//the print or output will line up exactly with the value order you put in, therefore you will get an outout if "allen" when calling 'boolean for example
*/
//======================


function printNames(names) { //the () are the refrence name for the array listed below
   for (const name of names) { //this for / of reference is best used in times liike this becasue we are calling each name from a parent list of names
   console.log(name);
}
}

printNames (['Bob', 'Sally', 'Jimmy']) //array will be used as a single parameter in the function

/*
printNames ('hello'); // this would print out the character of the single string we had, aka name = the characters

printNames ('jake','justin'); //This would also be read as an characters bc it is not within the [] brackets

printNames (113); //strings and arrays are the only ones that can processed in this manner, numbers do not
*/


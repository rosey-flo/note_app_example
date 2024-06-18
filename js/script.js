//Javascript works with or has a set of different values
//A word or multiple words wrapped in quotes is called a string value type
// number is called a Number value type
var firstName = 'Emily'; //string value type(legacy term "var" is being used)
var lastName = 'Flores';
var age = 44; //Number value type
var names = ['john', 'anne', 'bob', 'jane']; // Array

//Comparison Operators --- to get Boolean results based on  the results of your comparisom
//console.log(age < 30);

//console.log(age == 30);
//console.log (age == '44'); //== will only check values so even if you put a number value in the string '' marks, it will still read as a number value
//console.log(age ==='44'); // === this is a strict quality operator that check both value and type, therefore the 'string' marks, makes it false

//console.log(age >= 40); //greater than or equal to
//console.log(age <= 40); //less than or equal to

//console.log(age != 44); //!= means NOT so not equal to 44 would be false
//console.log(age !== 44); //!== means NOT so not equal to value 44 AND type

//Logical Operstors - Return a value on either the left side or right side of the operator
//The value that is equated is based on truth (truthy vs falsey)

//console.log(0 || null || '' || -5 || undefined); //If anyone of these is true, then perfom some action

//falsey values: 0, null, undefined, '' (empty string), NaN, false
//if neither is truthy it will return the last value in the chain or the first truthy value

//console.log(1 && age && '' && true);//stops at the first falsey --- returns the first falsey, in this case ''
//console.log(1 && age && 100 && 90); //will fall back to last value if all are true

//console.log(!50); //if you put a truthy value, it will output the opposite sice we are putting NOT!, or vice versa
//console.log(!'');

//progrma is a list of AuthenticatorAssertionResponse, to mke a file of code to perfom some AuthenticatorAssertionResponse,
//those actions are determined by the systems checks ans balances via the conditional statements



//Javascript works with or has a set of different values
//A word or multiple words wrapped in quotes is called a string value type
// number is called a Number value type




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

var firstName = 'Emily'; //string value type(legacy term "var" is being used)
var lastName = 'Flores';
var age = 44; //Number value type
var names = ['john', 'anne', 'bob', 'jane']; // Array
var oldEnough = age >= 21; //truth
var users = ['Bob', 99, 'Ann', 35, 'Billy', 45];


console.log(users[4])


/*
//Conditionals
//if conditionals trigger only if the value is a TRUTHY value
if (3) {
    console.log('it is truth!');
}

if (!3) {
    console.log('it is false!');
}
//this one will not trigger be !3 is not a truthy value


if (age>30) {
    console.log('it is truth!');
}
//comparisons can be used w/in a condtional as well
//comparisons always result in a truth or false value--so truth ones will run

if (age || 30) {
    console.log('it is truth!');
}
//RECAP: logical operators (or) stop at the first truthy value, so this one would result in 44 which is truthy

if (0 || 30) {
    console.log('it is truth!');
}
//since this stops at the first truth value, it would stop at 30 which is still true

if (0 || null) {
    console.log('it is truth!');
}
//This results in no value, therefore will not execute
//it will actually read the last in the list, null which is then a falsey value and not execute

if (firstName && lastName) {
    console.log('recieved your full name!')
}
//for example, this logical would be used if we wanted the full first and last name entered into the system to execute
// and the && will stop at the first falsy
//if there are no falsey, it will end on the last value, which in this case is going to be a string "lastname", this would be a truthy making they program run

lastName = ''

if (firstName && lastName) {
    console.log('recieved your full name!')
}
else {
    console.log('you must provide your full name!')
}
//if the person on the website does not provide thier last name, they would recoeve a message to tell them they need to orovide their last name

//firstName= '';
//edited out for coditional else if last name


if (firstName && lastName) {
    console.log('recieved your full name!')
}
else if (!firstName) {
console.log('you must provide you first name!')
}
else if (!lastName) {
    console.log('you must provide your last name!')
}
//(firstName == '') would work as well bc == checks the value
else {
    console.log('you must provide your full name!')
}


if (oldEnough) {
    console.log('Welcome')
}
else {
    console.log('Must be old enough to enter')
}


alert ('welcome' + firstName)

*/
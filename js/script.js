//psuedocoding is way to start the layout of the code

/* 
Create a function that takes 3 arguments
-Thie first and second argument will be a number
-The third argument will be a mathmatical operator (+, -, *, /)

ExampleL if the operator is a "+" then you will add the two numbers together and console log the sum
*/

//Call your function 4 times with different numbers and operators to confirm if it is working correctly


/*

function calculator(num1, num2, operator) {
   if (typeof num1 === 'number' && typeof num2 === 'number' && typeof operator === 'string') {
      if (operator === '+') {
         console.log(num1 + num2);
      }
      else if (operator === '-') {
         console.log(num1 - num2);
      }
      else if (operator === '*') {
         console.log(num1 * num2);
      }
      else if (operator === '/') {
         console.log(num1 / num2);
      }
      else {
         console.log('invalid answer')
      }
   }
   else {
      if (typeof num1 !== 'number') {
         console.log("The first input is not a numeric value")
      }
      else if (typeof num2 !== 'number') {
         console.log("The second input is not a numeric value")
      }
      else if (typeof operator !== 'string') {
         console.log("The third input is not a string value")
      }
         
   }
}


calculator ("20", "10", '+')

*/






/*

function calculator(num1, num2, operator) {
   switch (operator) {
      case '+':
         console.log(num1 + num2);
         break;
      case '-':
         console.log(num1 - num2);
         break;
      case '*':
         console.log (num1 * num2)
         break;
      case '/':
         console.log (num1 / num2)
         break;
      default:
         console.log('you must provide a valid operator');
   }
}


calculator(20, 10, '+')
calculator(20, 10, '-')
calculator(20, 10, '*')
calculator(20, 10, '/')




//'return' is the function's anwer


function add(num1, num2) {
   return 'something else'
   }
   console.log (add());

//===============
   add(5,10);
   console.log ('something after our function call')
   
*/

function calculator(num1, num2, operator) {
   switch (operator) {
      case '+':
         return num1 + num2;
      case '-':
         return num1 - num2;
      case '*':
         return num1 * num2;
      case '/':
         return num1 / num2;
      default:
         return 'you must provide a valid operator';
   }
}


const sum = calculator(20, 10, '+');
console.log (sum);
const kevin = 5;
console.log (typeof(kevin));

calculator(20, 10, '-')
calculator(20, 10, '*')
calculator(20, 10, '/')


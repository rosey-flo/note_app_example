

var names = ['john', 'anne', 'bob', 'jane', 'Jimmy', 'will']; // Array
var users = ['Bob', 99, 'Ann', 35, 'Billy', 45];

//goals of today: learn loops
// Print a count from 1 to 10

//for (var count = 1; count <=10; count++) {
//    console.log(count)
//}

//console.log(names[names.length -1])

//for (var index = 0; index < names.length; index++) {
//   console.log (names[index]);
//}
 //refrencing the index, becasue we are calling the names by their index number, we used index < names/length as the conditional bc names/length is the number of values in the array but bc it starts from 0, it would be 0 to 1 less than the final number, so we do not have to set =<

var count = 1;

 while (count <= 10) {
    console.log(count);

    count++;
 }
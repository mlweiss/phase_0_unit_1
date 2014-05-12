// I worked by myself




// Pseudocode
// Set secretnumber to 7
// Set value of password to "just open the door"
// Set value of allowedIn to false
// Set value of members to an array
// Set value of the first element of members to 'John'
// Set value of the fourth element of members to 'Mary'



// Write your code below.
var secretNumber = 7;
var password = 'just open the door';
var allowedIn = false;
var members = ['John', 'Max', 'Jim', 'Mary'];

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
/*
My code passed on the first try. I followed the variable declaration protocol in the javascript intro 
so it was also concise. It is also the minimum number of lines to define these variables (as far as I know)
so it is also D.R.Y.
*/

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here.

/*
What parts of your strategy worked? What problems did you face?

This exercise was a beginning exercise so my strategy worked immediately and I didn't face
any problems.

What questions did you have while coding? What resources did you find to help you answer them?
No questions arose.

What concepts are you having trouble with, or did you just figure something out? If so, what?

I looked up an exact definition of local variables. It was a bit confusing to me why they were
mentioned when they were not used in this exercise (the variables we were required to write were in 
fact global).

Did you learn any new skills or tricks?

I solidified my understanding of variable declarations in JavaScript.

How confident are you with each of the Learning Competencies?

Very confident.

Which parts of the challenge did you enjoy?

I enjoyed that it was clearly presented.

Which parts of the challenge did you find tedious? 

It was so quick it didn't even have the time to be tedious.
*/
/*
Learning Competencies: Local variables in JavaScript are variables defined within the context of a function.
This is in contrast to global variables which are defined outside a function and is accessible and modifiable
throughout the program. To add objects to an array, one can do my_array[i] = my_object among other methods.
Other learning competencies were displayed in the solution. 

*/
// __________________________________________
// Driver Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'), 
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)


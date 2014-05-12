// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

Initiate a variable called adam as a new object

2. Give adam a name property with the value "Adam".

Assign adam a property called name with the value "Adam"

3. Add a spouse property to terah and assign it the value of adam.

Assign terah a property called spouse with the value adam

4. Change the value of the terah weight property to 125.
Reassign the existing property of terah the value 125

5. Remove the eyeColor property from terah.
delete the property eyeColor from terah

6. Add a spouse property to adam and assign it the value of terah.
assign adam a property called spouse

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

Initiate a variable terah.children

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

terah children give property carson with value "Carson"assign terah.children a property carson and assign it the value "Carson"

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

same as above, switch carter and carson

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

switch colton and carson in above

11. Add a children property to adam and assign it the value of terah children.
adam give property children with value terah children

assign adam a property name with value terah.children
*/

// __________________________________________
// Write your code below.
var adam = new Object();
adam.name = 'Adam';
terah.spouse = adam;
terah.weight = 125; // terah lost weight to fit into her wedding dress
delete terah.eyeColor; // a woman never tells her eye color
adam.spouse = terah;
terah.children = new Object();
terah.children.carson = {};
terah.children.carson.name = 'Carson';
terah.children.carter = {};
terah.children.carter.name = 'Carter';
terah.children.colton = {};
terah.children.colton.name =  'Colton';
adam.children = terah.children;


// __________________________________________
// Reflection: Use the reflection guidelines
/*
What parts of your strategy worked? What problems did you face?
What questions did you have while coding? What resources did you find to help you answer them?
What concepts are you having trouble with, or did you just figure something out? If so, what?
Did you learn any new skills or tricks?
How confident are you with each of the Learning Competencies?
Which parts of the challenge did you enjoy?
Which parts of the challenge did you find tedious?

My strategy was pretty effective. I wrote the code based on my current understanding of 
the syntax in Javascript and tweaked it as I noticed problems. I ran in to some issues
trying to assign names to the children properties. It took me some time to come to realize
that I needed to initialize them separately first.

I think that the pseudocode for such problems is a bit tedious, because any English
statement feels like it could be decent pseudocode for this purpose. 

I also like test driven development, but I wonder to what extent it is realistic, or better
put to what extent it gives one the false sense that their code is bug free just because
it passes some specified tests. I think that it will be important going forward
to always assume code is buggy and to prove myself wrong.


*/
// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
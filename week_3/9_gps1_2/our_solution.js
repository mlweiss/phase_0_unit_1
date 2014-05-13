// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Michael Weiss
//  2. Hilary Barr


// 1. "YOU SIGNED... WHO?!"
var tomCruise = {
    Name: "Tom Cruise",
    Age: 50,
    Quote: "Show me the money!",
    Gender: "Male"
};

var nataliePortman = {
    Name: "Natalie Portman",
    Age: 35,
    Quote: "May the force be with you!",
    Gender: "Female"
};



// 2. "Here they Come!"

var adamSandler = {
    Name: "Adam Sandler",
    Age: 47,
    Quote: "That's your home! Are you too good for your home?!",
    Gender: "Male"
};

var kristenBell = {
    Name: "Kristen Bell",
    Age: 33,
    Quote: "Do you wanna build a snowman?",
    Gender: "Female"
};


var jimCarrey = {
    Name: "Jim Carrey",
    Age: 52,
    Quote: "...So you're telling me there's a chance? YEAH!",
    Gender: "Male",
    showQuote: function() {console.log(this.Quote); }
};



// 3. "TIME IS MONEY!"


var Client= function(Name, Age, Quote) {
	 this.Name=Name;
	 this.Age=Age;
	 this.Quote=Quote;
};


var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
console.log(shooterMcGavin.constructor === Client);
console.log(shooterMcGavin.Age === 48);
console.log(shooterMcGavin.Quote === "Just stay out of my way... or you'll pay. Listen to what I say.");

console.log(shooterMcGavin.Age);



// 4. "SHOW 'EM OFF!"
//The Client here is just the parameter, not the same as the var Client
var printClient=function(Client) {
	console.log("This is " + Client.Name);
	if (Client.Gender==="Male") {
		console.log("He is " + Client.Age);
		console.log("He said  " + Client.Quote);
	}
	else {
		console.log("She is  " + Client.Age);
		console.log("She said  " + Client.Quote);
	}

}

printClient(kristenBell);



// 5. "ShowQuote"

var jimCarrey = {
    Name: "Jim Carrey",
    Age: 52,
    Quote: "...So you're telling me there's a chance? YEAH!",
    Gender: "Male",
    showQuote: function() {console.log(this.Quote); }
};

jimCarrey.showQuote()



// ** BONUS **
// Added Gender above

//  Your Reflection:
/*
What parts of your strategy worked? What problems did you face?

I think that we ended up working quite well on the project. We had some intial difficulties with some
of the syntax of functions, but a few quick web searches and discussion really pushed us through. We also
ran into some trouble passing the driver tests, but this was easily resolved after a little more discussion.

What questions did you have while coding? What resources did you find to help you answer them?

We ran into some trouble with the syntax for functions, for example:

function {
	att1: foo,
	att2: bar,
}

will give an error. The proper syntax would be to replace the ','s with a ;

Some searching on the web put us in the right direction.

What concepts are you having trouble with, or did you just figure something out? If so, what?

I still am trying to understand why we need to iniate some object properties as empty ones before being
able to set properties of their own, but that luckily did not come up in this project.

Did you learn any new skills or tricks?

All in all a lot of the techniques here were solidifying some of the ones that we had seen in the Javascript
introduction.

How confident are you with each of the Learning Competencies?

After this week's exercises I definitely feel comfortable with objects. Furthermore I feel comfortable with
the error messages from node as they are quite detailed.

Which parts of the challenge did you enjoy?

I liked working with Hilary, she was a great partner! Also making objects of celebrities was enjoyable and 
displayed some of the basic features of JavaScript.

Which parts of the challenge did you find tedious?

This was relatively tedium free.




*/
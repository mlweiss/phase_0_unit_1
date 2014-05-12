// I worked with Fahia Mohammed on this challenge

// Your mission description:
// You find yourself in a dungeon on a 2d grid.  
// George is standing two steps away. Defeat him!
// 
// 

// Pseudocode
// 
/* 

Initiate a hero object, Tharin.

Implement a grid for the Tharin object that allows him to move up, down, left, and right
in increments of 5. Set his starting position to (0,0). Initiate health and strength attributes
and set them to 100.

Implement an Object constructor function that creates an Enemy object 
which has the following properties: position, name, health, and strength.



Tharin should be able to attack the Enemy. He should lose a certain amount of health
that is one half the value of the enemy's strength when he attacks. The enemy should
lose a certain amount of health that is one half the value of Tharin's strength. If Tharin's
health goes to 0 or below, abort the attack and let the user know his health is too low. If
the enemy's health is less than or equal to 0 abort the attack and tell the user that the 
enemy has already been defeated.

The attack should be possible if and only if Tharin is within 1 step of the enemy. Based on the
above pseudocode this will effectively mean that Tharin and the enemy are standing on the same
point on the grid.

Intiate an Enemy object, George and give him strength 


*/
// Initial Code

var Enemy = function(name, health, strength, position){
	this.position = position;
	this.name = name;
	this.health = health;
    this.strength = strength;
}

var Tharin = {
    name: "Tharin",
	position: {x:0, y:0},
	health: 100,
	strength: 100,
	
	moveUp: function() {
		this.position.y += 5;
		console.log('You have moved to (' + Tharin.position.x + ', '  + Tharin.position.y + ')');						
	},
	
	moveDown: function() {
		this.position.y -= 5;
		console.log('You have moved to (' + Tharin.position.x + ', '  + Tharin.position.y + ')');				
	},
	
	moveRight: function() {
		this.position.x += 5;
		console.log('You have moved to (' + Tharin.position.x + ', '  + Tharin.position.y + ')');		
	},
	
	moveLeft: function() {
		this.position.x -= 5;
		console.log('You have moved to (' + Tharin.position.x + ', '  + Tharin.position.y + ')');
	},
	
	attackNow: function(Enemy) {
		if (Tharin.health <= 0) {
				return console.log("Your health is too low to attack")
					}

		if (Enemy.health <= 0) {
				return console.log("You've already defeated " + Enemy.name)
					}

		if (Math.abs (Tharin.position.x - Enemy.position.x) <= 1
			&& Math.abs (Tharin.position.y - Enemy.position.y) <= 1) { 
				Tharin.health -= Enemy.strength * 0.5;
	    		console.log('You took a swing at ' + Enemy.name)
	    		if (Enemy.health >= Tharin.strength * 0.5) {
		    		Enemy.health -= Tharin.strength * 0.5;
					console.log(Enemy.name + '\'s' + ' health is now ' + Enemy.health);
					}
	    		
	    		else {
	    			(Enemy.health = 0);
	  				console.log("You have defeated "+ Enemy.name)
	  				}
			}

		else { 
			console.log("You're too far away to attack!(move closer)")
			}

		if (Tharin.health <= 0) {
			return console.log("You've been defeated")
			}
	}
};

var george = new Enemy('George', 75, 50, {x:0, y:10}) 
Tharin.moveUp();
Tharin.moveUp();
Tharin.attackNow(george);
Tharin.attackNow(george);


// Refactored Code

/*
I think that a lot could be implemented that I have not been able to implement yet. I think it would be 
better to implement the moving system via an XY coordinate system, rather than having it be a separate
command for each move. Furthermore I think that it might be nice to have more types of objects. However
since I did this with Fahia this was the fruit of our collaboration. For the moment I am inclined to leave
it in its current state as this is what we worked out.


*/
// Reflection
/*
What parts of your strategy worked? What problems did you face?
What questions did you have while coding? What resources did you find to help you answer them?
What concepts are you having trouble with, or did you just figure something out? If so, what?
Did you learn any new skills or tricks?
How confident are you with each of the Learning Competencies?
Which parts of the challenge did you enjoy?
Which parts of the challenge did you find tedious?

I found this challenge to be quite interesting. I wish actually that I had attempted it by myself and 
had thought up of a little more detailed and interesting scenario. As it is I think my solution leaves a lot
to be desired and is only the very beginning of an interesting program. I did like the introduction it gave
me to working with classes, methods, objects, and functions. I noticed that this functionality really allows
a great deal of customization.

I wish however that more instruction was given on how to take this to the next level, i.e., implementing a 
graphical realization of the action using html. I think that without a great deal of additional research
this would be impossible for me to carry out at my skill level.

I really liked the tweaking aspect of working on this project. It seemed like every time I would 
add a new class to an object, I would need to adjust another one to keep everything consistent. At the end
of a few hours it really feels like something complex has been built. Unfortunately this was also 
a bit frustrating as it felt like it made the code a little less readable, and I think overall my implementation
of the attack system as a function of the hero character was not optimal.

*/
//complete this code
class Animal {
	construcctor(species)
	{
	this.species=species;
	}
	get species()
	{
	return(this.species);
	}
	maeSound()
	{
	console.log("The " + this.species + "makes a sound") 
	}
}

class Dog extends Animal {
	bark()
	{
	bark()
	{
	console.log("bark"); 
	} 
	}
}

class Cat extends Animal {
	purr()
	{
	console.log("purr"); 
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

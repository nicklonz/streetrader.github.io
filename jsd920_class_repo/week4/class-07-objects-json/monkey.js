/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

 var Monkey = function (name, species,foodsEaten,eatSomething) {
    this.name = name;
    this.species = species;
    this.foodsEaten = foodsEaten;
    this.eatSomething = extraFood;
  }

  var magila = new Monkey('Magila', 'Mandrill','banannas','beans')
  
  console.log(magila) 
  */
  
  var Monkey = function(name,species,foodsEaten) {
      this.name = name,
      this.species = species,
      this.foodsEaten = foodsEaten
      this.eatSomething = function(){
        console.log("Hello my name is " + this.name + " and I've eaten " + foodsEaten)
      }
  }
  
  var bobo = new Monkey("Bobo", "snake-monkey","bananna")
  
  bobo.name
  bobo.eatSomething()
  
  




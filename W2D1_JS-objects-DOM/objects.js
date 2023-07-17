// Boolean
// String
// Number
// undefined / null
// ---------------
// Array [1,2,3,4]
// Objects {key: value}

var animals = ["🦓", "🦁", "🐘"]
var person = ["John", "Smith", 38, "🍕", true]

var personObject = {
    firstName : "John",
    lastLast: "Smith",
    age: 38,
    favFood: "🍕",
    isAdmin: true
}
// adding another property (key - value pair)
personObject.favColor = "blue";

// console.log(personObject)

// get the age
// console.log(personObject)

var taco1 = {
    "tortilla": "soft corn tortilla",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + taco1.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Cheese:   " + taco1.cheese);
        console.log("Toppings: " + taco1.toppings);
    }
}
    
console.log(taco1.tacoInfo())
// we can now get all the delicious taco facts by
// taco1.tacoInfo(); // note we call this like a function because it is a function


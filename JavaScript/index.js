// TODO Basic - Print all integers from 0 to 100.

function print0To100(){
    for(var i = 0; i < 101; i++){
        console.log(i)
    }
}

// print0To100()

// TODO Multiples of Five - Print all the multiples of 5 from 5 to 1,000


// TODO Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".

function dojoCounting(){
    for(var i = 0; i < 101; i++){
        if(i % 5 === 0 && i % 10 !== 0){
            console.log("Coding")
        } else if(i % 10 === 0){
            console.log("Coding Dojo")
        } else {
            console.log(i)
        }
    }
    
}

// dojoCounting()

//TODO Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.


//TODO Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.


//TODO Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)


//TODO Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].

var x = [ [5,2,3], [10,8,9,[1,2,3]] ] 
// x[1][3] = 15

// console.log(x[1][3][2])
// console.log(x)


// Objects 

var person = ["Tyler", 39, true]

var personObj = {name: "Tyler", age: 45, isAdmin: false}

// console.log(person[0])
// console.log(person[1])
console.log(personObj["name"])
console.log(personObj["age"])

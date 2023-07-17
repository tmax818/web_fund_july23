console.log("JS file linked")

// grab the h1 by the id


var title = document.querySelector("#main");
var sameTitle = document.querySelector(".main-title")

// console.log(sameTitle)

// change text in the DOM
var h3 = document.querySelector("#text")
// console.log(h3.innerText)
h3.innerText = "bob"

function changeToDarkMode() {
    // WE NEED TO TARGET THE CONTAINER (WRAPPER ELEMENT)
    var wrapperElement = document.querySelector(".wrapper");

    // shows us the classes
    console.log(wrapperElement.classList)

    // remove a class
    wrapperElement.classList.remove("light-mode")

    // add the dark mode class
    wrapperElement.classList.add("dark-mode")
}

// click on the paragraph and remove it from the DOM
function removePara(bob) {
    console.log(bob)
    // remove from DOM
    
    bob.innerText = ""
    // bob.remove();

}

// --------------

function removePara2() {
    // grab the para
    var para = document.querySelector("#para")
    console.log(para)

    para.remove()
}













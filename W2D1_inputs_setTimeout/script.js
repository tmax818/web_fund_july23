// var nameTag = document.querySelector("#name-tag");


// function setName(element) {
//     console.log(element.value);
//     nameTag.innerText = element.value;
// }

var theBody = document.querySelector("body")

// changeColor
function changeColor() {
    // 1 target the input
    var pageColor = document.querySelector("#inputColor").value
    // console.log(pageColor)

    // 2. grab the BODY
    var theBody = document.querySelector("body")
    // console.log(theBody)

    // 3. change the background of the element
    theBody.style.backgroundColor = pageColor

    alert(pageColor)

}


// dropdown
function chooseLunch(element) {
    alert("You picked " + element.value);

    theBody.style.backgroundColor = element.value

}


// ==== setTimeout =====
function message() {
    console.log("Delayed message");    
}
    
console.log("Start");
setTimeout(message, 3000);
console.log("End");
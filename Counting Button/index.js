let countValue = 0
let countElement = document.getElementById("count")
let saveElement = document.getElementById("saveEl")
function increment() {
    countValue += 1
    countElement.textContent = countValue
    //innerText can also be used but 
}   // the spacing was not found while using -

function save() {
    let countStr = countValue + " - "
    saveElement.textContent += countStr
    countElement.textContent = 0
    countValue = 0
}

let welcome = {
    name: "Arnav",
    age: 18
}
let welcomeMessage = document.getElementById("welcome")
welcomeMessage.textContent = "Hello " + welcome.name + " of age " + welcome.age
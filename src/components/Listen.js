const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector("parent")
const child = document.querySelector("child")

// bubbling versus capturing, in bubbling, you go from bottom up
// in capturing, you go from the outside/top down
// set capture: true to have it capture, or else it'll be a ghost
// capture where nothing actually gets captured, then it'll bubble


grandparent.addEventListener("click", e => {
    console.log("Grandparent 1")
}, { capture: true })
// when capture: true, it will not bubble

grandparent.addEventListener("click", e => {
    console.log("Grandparent 1")
}, )
// this will allow the grandparent to both bubble and capture

parent.addEventListener("click", e => {
    e.stopPropagation()
    // will stop any more event listeners from here on
    console.log("Parent")
})

child.addEventListener("click", e => {
    console.log("child")
})

document.addEventListener("click", e => {
    console.log("document")
},)

grandparent.addEventListener("click", e => {
    console.log("ROCKET SHIP TO DA MOON")
}, { once: true })
// anything like once, or capture, happens after the block of event e

parent.removeEventListener("click", printHi)
// this will remove the event listener or function printHi when you 
// click on parent

const divs = document.querySelectorAll("div")

divs.forEach(div => {
    div.addEventListener("click", e => {
        console.log("hi")
    })
})

document.addEventListener("click", e => {
    if (e.target.matches("div")) {
        console.log("hi")
    }
})

const newDiv = document.createElement("div")
newDiv.style.width = "200px"
newDiv.style.height = "200px"
newDiv.style.backgroundColor = "purple"

document.body.append(newDiv)
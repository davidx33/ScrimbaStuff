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
    console.log("Parent")
})

child.addEventListener("click", e => {
    console.log("child")
})

document.addEventListener("click", e => {
    console.log("document")
})
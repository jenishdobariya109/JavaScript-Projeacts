let Piano1 = document.getElementById('Piano1')
let Piano2 = document.getElementById('Piano2')
let Piano3 = document.getElementById('Piano3')
let Piano4 = document.getElementById('Piano4')
let Piano5 = document.getElementById('Piano5')
let Piano6 = document.getElementById('Piano6')
let Piano7 = document.getElementById('Piano7')
let auto1 = new Audio("./Sound/piano1key.mp3")
let auto2 = new Audio("./Sound/piano2key.mp3")
let auto3 = new Audio("./Sound/piano3key.mp3")
let auto4 = new Audio("./Sound/piano4key.mp3")
let auto5 = new Audio("./Sound/piano5key.mp3")
let auto6 = new Audio("./Sound/piano6key.mp3")
let auto7 = new Audio("./Sound/piano7key.mp3")
Piano1.addEventListener("click" , function () {
    auto1.play()
})
Piano2.addEventListener("click" , function () {
    auto2.play()
})
Piano3.addEventListener("click" , function () {
    auto3.play()
})
Piano4.addEventListener("click" , function () {
    auto4.play()
})
Piano5.addEventListener("click" , function () {
    auto5.play()
})
Piano6.addEventListener("click" , function () {
    auto6.play()
})
Piano7.addEventListener("click" , function () {
    auto7.play()
})
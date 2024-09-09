
let box = document.querySelector(".slid .box")

let prev = document.querySelector(".slid .but .button:nth-child(1)")

let text = document.querySelector(".slid .but .button:nth-child(2)")

let deg = 0

prev.addEventListener("click" , ()=>{
    deg += 45
    box.style = `transform: perspective(1000px) rotateY(${deg}deg);`
})

text.addEventListener("click" , ()=>{
    deg -= 45
    box.style = `transform: perspective(1000px) rotateY(${deg}deg);`
})
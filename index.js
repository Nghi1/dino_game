let dino= document.getElementById("dino")
let cactus=document.getElementById("cactus")
let gameOver=document.getElementById("over")
let game= document.getElementById("game")
let batman=document.getElementById("batman")
let joker=document.getElementById("joker")
game.classList.add("begin")
function jump(){
    cactus.classList.add("run")
    dino.classList.add("jump")
    gameOver.classList.remove("block")
    setTimeout(()=>{
        dino.classList.remove("jump")
    }, 1000)
}
setInterval(()=>{
    dinoTop=parseInt(window.getComputedStyle(dino).top)
    cactusLeft=parseInt(window.getComputedStyle(cactus).left)
    if(cactusLeft>0 && cactusLeft<50 && dinoTop>=230){
        cactus.classList.remove("run")
        gameOver.classList.add("block")
    }
}, 10)
document.addEventListener("keydown", function(event){
    game.classList.remove("begin")
    jump()})
function batmanClick(){
    dino.classList.remove("joker")
    dino.classList.add("batman")
}
function jokerClick(){
    dino.classList.remove("batman")
    dino.classList.add("joker")
}
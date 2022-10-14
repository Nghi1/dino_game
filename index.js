let dino= document.getElementById("dino")
let cactus=document.getElementById("cactus")
let gameOver=document.getElementById("over")
let game= document.getElementById("game")
let batman=document.getElementById("batman")
let joker=document.getElementById("joker")
let score=document.getElementById("score")
let point=0
let status=false
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
    if(status)
    score.innerHTML=`Score: 0${point+=1}`
}, 1000)
setInterval(()=>{
    if(status){
        dinoTop=parseInt(window.getComputedStyle(dino).top)
    cactusLeft=parseInt(window.getComputedStyle(cactus).left)
    if(cactusLeft>0 && cactusLeft<50 && dinoTop>=230){
        cactus.classList.remove("run")
        gameOver.classList.add("block")
        status=false
        point=0
    }
    }
}, 10)
document.addEventListener("keydown", function(event){
    game.classList.remove("begin")
    jump()
    status=true
    })
function batmanClick(){
    dino.classList.remove("joker")
    dino.classList.add("batman")
}
function jokerClick(){
    dino.classList.remove("batman")
    dino.classList.add("joker")
}
let boxes = document.querySelectorAll(".boxes")
let turnX = true;
let turn1 = document.querySelector(".turn1")
let turn2 = document.querySelector(".turn2")
let msg = document.querySelector(".msg")
let span = document.querySelector("#result")
let reset = document.getElementById("reset")
let newgame = document.getElementById("ng")
let clicksound = new Audio("click.mp3")
let winnerSound = new Audio("winner.mp3")
let winnercondition = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

reset.addEventListener("click",() => {
  boxes.forEach(box=>{
    box.innerText = "";
    box.disabled = false;
    box.classList.add("hover")
    msg.classList.add("hide")
    box.classList.remove("bs")
  })
}
)

newgame.addEventListener("click",() => {
  boxes.forEach(box=>{
    box.innerText = "";
    box.disabled = false;
    box.classList.add("hover")
    msg.classList.add("hide")
      box.classList.remove("bs")
  })
}
)

boxes.forEach(box => {
  box.addEventListener("click",() => {
    clicksound.play()
    if(turnX){
        box.innerText = "X";
        box.style.color = "rgb(151,38,38)";
        turn1.classList.remove("bs")
         turn2.classList.add("bs")
        turnX = false

    }
    else{
        box.innerText = "O"
        box.style.color = "rgb(53,53,163)"
        turn1.classList.add("bs")
         turn2.classList.remove("bs")
        turnX = true;
    }
    checkwinner();
  }
  )
}
)

function checkwinner(){
    for(let condition of winnercondition){
        let box1 = boxes[condition[0]].innerText;
        let box2 = boxes[condition[1]].innerText;
        let box3 = boxes[condition[2]].innerText;

        if(box1!==""&&box2!==""&&box3!=="")
            if(box1===box2 && box2===box3){
                showresult(box1);
                winnerSound.play();
                boxes.forEach (box => {
                box.classList.add("bs")
    })
         boxes[condition[0]].classList.remove("bs")
         boxes[condition[1]].classList.remove("bs")
         boxes[condition[2]].classList.remove("bs")
            }
    }
}

function showresult(result){
    boxes.forEach (box => {
      box.disabled = true;
      box.classList.remove("hover")
    })
    
   msg.classList.remove("hide")
   span.innerText = result;
   if(result === ""){
    span.style.color = "rgb(151,38,38)"
   }
   else{
    span.style.color = "rgb(53,53,163)"
   }
}
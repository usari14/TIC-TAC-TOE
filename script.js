let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#reset");
let msgcont = document.querySelector(".msgcontainer");
let newgame = document.querySelector("#newgame");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    turnO = true;
    enableboxes();
    msgcont.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";    
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is Player ${winner}`;
    msgcont.classList.remove("hide");
    disableboxes();
}

const checkWinner = () => {
    for(let patterns of winPatterns){
        pos1val = boxes[patterns[0]].innerText;
        pos2val = boxes[patterns[1]].innerText;
        pos3val = boxes[patterns[2]].innerText;

        if( pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner", pos1val)
                showWinner(pos1val);
            }
        }
    }
}

rstbtn.addEventListener("click", resetGame);
newgame.addEventListener("click", resetGame);
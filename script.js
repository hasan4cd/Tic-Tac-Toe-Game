let boxes = document.querySelectorAll(".box");
let message = document.querySelector(".message");

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
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            box.style.color = "blue";
            turnO = false;
            message.innerHTML = "Player(X) Turn";
            message.style.color = "red";

        } else {
            box.innerHTML = "X";
            box.style.color = "red";
            turnO = true;
            message.innerHTML = "Player(O) Turn";
            message.style.color = "blue";
        }
        box.disabled = true;

        if (checkWin()) {
            return;
        }
        checkDraw();
    })
});

const showWin = (winner) => {
    message.innerHTML = `Congratulations, Winner is ${winner}`;
    message.style.color = "chartreuse";
    gamestop();
};

const showDraw = () => {
    message.innerHTML = `Game is Draw`;
    message.style.color = "red";
    gamestop();
};

const gamestop = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

function resetGame() {
    for (let box of boxes) {
        box.disabled = true;
        box.disabled = "";
    }
    message.innerHTML = "";
    startGame();

    if (turnO) {
        message.innerHTML = "Player(O) Turn";
        message.style.color = "blue";
    } else {
        message.innerHTML = "Player(X) Turn";
        message.style.color = "red";
    }
};

const startGame = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};

const checkWin = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWin(pos3);
                return true;
            }
        }
    }
    return false;
};

const checkDraw = () => {
    let allFull = true;
    boxes.forEach(box => {
        if (box.innerHTML == "") {
            allFull = false;
        }
    });
    if (allFull) {
        showDraw();
    }
};

if (turnO) {
    message.innerHTML = "Player(O) Turn";
    message.style.color = "blue";
} else {
    message.innerHTML = "Player(X) Turn";
    message.style.color = "red";
};
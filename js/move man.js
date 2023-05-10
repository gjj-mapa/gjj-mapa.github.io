import {meSpace, enemySpaces, rowcolumncount} from "./grid tonk.js";
const moveButton = document.querySelector(".move-button");
let move = true;

moveButton.addEventListener("click", () => {
    let squares = getNumbers(meSpace, rowcolumncount);
    for (let square of squares) {
        const sleSquare = document.querySelector(`#square${square}`);
        if (move && !enemySpaces.includes(square)) {
            sleSquare.classList.add("mover");
        }
        else if (!move && !enemySpaces.includes(square)) {
            sleSquare.classList.remove("mover");
        }
        
    }
    move = !move;
    
})

function getNumbers(number, rownum) {
    let numbers = new Array(8);
    numbers[0] = number - rownum - 1;
    numbers[1] = number - rownum;
    numbers[2] = number - rownum + 1;
    numbers[3] = number - 1;
    numbers[4] = number + 1;
    numbers[5] = number + rownum - 1;
    numbers[6] = number + rownum;
    numbers[7] = number + rownum + 1;
    return numbers;
  }
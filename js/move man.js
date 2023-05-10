import {meSpace, enemySpaces, rowcolumncount} from "./grid tonk.js";
import { getMovers, modifyMoverButtons } from "./function master.js";
const moveButton = document.querySelector(".move-button");
let move = true;

moveButton.addEventListener("click", () => {
    let squares = getMovers(meSpace, rowcolumncount);
    for (let square of squares) {
        if (square != null) {
            const sleSquare = document.querySelector(`#square${square}`);
            if (move && !enemySpaces.includes(square)) {
                sleSquare.classList.add("mover");
            }
            else if (!move && !enemySpaces.includes(square)) {
                sleSquare.classList.remove("mover");
            }
        }
    }
    move = !move;
    
})

export function removeMovers() {
    let squares = getMovers(meSpace, rowcolumncount);
    for (let square of squares) {
        if (square != null) {
            console.log(square + " is the one!");
            const sleSquare = document.querySelector(`#square${square}`);
            sleSquare.classList.remove("mover");
        }
    }
}
import {
  meSpace,
  enemySpaces,
  rowcolumncount,
  buildGrid,
  changeMeSpace,
} from './grid tonk.js';
import { getMovers } from './function master.js';
const moveButton = document.querySelector('.move-button');
export let move = true;

moveButton.addEventListener('click', () => {
  let squares = getMovers(meSpace, rowcolumncount);
  for (let square of squares) {
    if (square != null) {
      let sleSquare = document.querySelector(`#square${square}`);
      if (move && !enemySpaces.includes(square) && sleSquare != null) {
        sleSquare.classList.add('mover');
        sleSquare.addEventListener('click', () => {
          if (!move) {
            changeMeSpace(square);
            buildGrid();
          }
        });
      } else if (!move && !enemySpaces.includes(square) && sleSquare != null) {
        sleSquare.classList.remove('mover');
      } else if (sleSquare == null) {
        console.debug(`Selected square is null! Selector: #square${square}`);
      }
    }
  }
  move = !move;
});
export function removeMove() {
  move = true;
}

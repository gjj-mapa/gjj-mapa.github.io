import { meSpace, enemySpaces, rowcolumncount, range } from './grid tonk.js';
import { getRangers } from './function master.js';
const rangeButton = document.querySelector('.add-range-button');
let showRangers = true;

rangeButton.addEventListener('click', () => {
  let squares = getRangers(meSpace, rowcolumncount, range);
  for (let square of squares) {
    if (square != null) {
      let sleSquare = document.querySelector(`#square${square}`);
      if (showRangers && !enemySpaces.includes(square) && sleSquare != null) {
        sleSquare.classList.add('ranger-close');
      } else if (!showRangers && !enemySpaces.includes(square)) {
        sleSquare.classList.remove('ranger-close');
      } else if (sleSquare == null) {
        console.debug('The square #square' + square + ' was null!');
      }
    }
  }
  showRangers = !showRangers;
});

import { removeMove } from './move man.js';
const grid = document.querySelector('.grid');
export const rowcolumncount = 15;
let counter = 1;
let occupiedSquares = [];
export let meSpace = null;
export let me = null;
export let dialog = null;
export let enemySpaces = [];
export let range = 2;

buildGrid();

// ===================================================================================================================================
// ============================GOING BEYOND THIS POINT WILL CAUSE NAUSEA==============================================================
// ===================================================================================================================================

function createEnemy() {
  // Generate a random index between 1 and the number of squares in the grid
  let randomNumber =
    Math.floor(Math.random() * rowcolumncount * rowcolumncount) + 1;

  // Keep generating a new random number until an unoccupied square is found
  while (enemySpaces.includes(randomNumber)) {
    randomNumber =
      Math.floor(Math.random() * rowcolumncount * rowcolumncount) + 1;
  }

  // Mark the square as occupied
  enemySpaces.push(randomNumber);

  // Select the square at the random index
  const selectedSquare = document.querySelector(`#square${randomNumber}`);

  // Set the background image of the selected square to the tank SVG
  selectedSquare.style.backgroundImage = 'url("styles/pictures/red tank.svg")';
  selectedSquare.classList.remove('empty-square');
  selectedSquare.classList.add('enemy-button');
}

function createMe() {
  // Generate a random index between 1 and the number of squares in the grid
  let randomNumber =
    Math.floor(Math.random() * rowcolumncount * rowcolumncount) + 1;

  // Keep generating a new random number until an unoccupied square is found
  while (enemySpaces.includes(randomNumber)) {
    randomNumber =
      Math.floor(Math.random() * rowcolumncount * rowcolumncount) + 1;
  }
  meSpace = randomNumber;

  // Select the square at the random index
  const selectedSquare = document.querySelector(`#square${randomNumber}`);
  const dialog2 = document.querySelector('.dialog-me');
  // Set the background image of the selected square to the tank SVG
  selectedSquare.style.backgroundImage =
    'url("styles/pictures/green tank.svg")';
  selectedSquare.appendChild(dialog2);
  selectedSquare.classList.remove('empty-square');
  selectedSquare.classList.add('me-button');
  me = selectedSquare;
  dialog = dialog2;
}
export function buildGrid() {
  removeMove();
  if (dialog != null) {
    document.querySelector('body').appendChild(dialog);
  }
  grid.innerHTML = '';
  for (let i = 0; i < rowcolumncount * rowcolumncount; i++) {
    const square = document.createElement('button');
    square.classList.add('square');

    // Calculate the row and column indices based on the square's position
    const row = Math.floor(i / rowcolumncount) + 1;
    const col = (i % rowcolumncount) + 1;

    // Calculate the number of the square based on its position in the grid
    const squareNumber = (row - 1) * rowcolumncount + col;

    // Update the text content of the square with its number
    square.id = 'square' + squareNumber;
    square.classList.add('empty-square');

    grid.appendChild(square);

    counter++;
  }
  if (meSpace == null) {
    counter = 1;
    occupiedSquares = [];
    meSpace = null;
    me = null;
    dialog = null;
    enemySpaces = [];
    for (let i = 0; i < 7; i++) {
      createEnemy();
    }
    createMe();
  } else {
    const dialog2 = document.querySelector('.dialog-me');
    const me = document.querySelector(`#square${meSpace}`);
    me.style.backgroundImage = 'url("styles/pictures/green tank.svg")';
    me.appendChild(dialog2);
    me.classList.remove('empty-square');
    me.classList.add('me-button');
    dialog = dialog2;

    for (let enemy of enemySpaces) {
      const selectedSquare = document.querySelector(`#square${enemy}`);

      // Set the background image of the selected square to the tank SVG
      selectedSquare.style.backgroundImage =
        'url("styles/pictures/red tank.svg")';
      selectedSquare.classList.remove('empty-square');
      selectedSquare.classList.add('enemy-button');
    }
  }
  document.querySelector(`#square${meSpace}`).addEventListener('click', () => {
    dialog.show();
    let viewportHeight = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    let isOffScreen =
      dialog.getBoundingClientRect().top < 0 ||
      dialog.getBoundingClientRect().top > viewportHeight;

    if (isOffScreen) {
      dialog.style.top = '125%';
    } else {
      dialog.style.top = '-250%';
    }
  });
}
export function changeMeSpace(newVal) {
  meSpace = newVal;
}

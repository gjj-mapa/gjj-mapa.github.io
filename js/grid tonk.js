const grid = document.querySelector('.grid');
export const rowcolumncount = 15;
let counter = 1;
let occupiedSquares = [];
export let meSpace = 0;
export let me = null;
export let dialog = null;
export let enemySpaces = [];

for (let i = 0; i < rowcolumncount*rowcolumncount; i++) {
    const square = document.createElement("button");
    square.classList.add("square");
    
    // Calculate the row and column indices based on the square's position
    const row = Math.floor(i / rowcolumncount) + 1;
    const col = (i % rowcolumncount) + 1;
    
    // Calculate the number of the square based on its position in the grid
    const squareNumber = (row - 1) * rowcolumncount + col;
    
    // Update the text content of the square with its number
    square.id = "square" + squareNumber;
    square.classList.add("empty-square");
    
    grid.appendChild(square);
    
    counter++;
}

for (let i = 0; i < 7; i++) {
    createEnemy();
}

createMe();

// ===================================================================================================================================
// ============================GOING BEYOND THIS POINT WILL CAUSE NAUSEA==============================================================
// ===================================================================================================================================

function createEnemy() {
    // Generate a random index between 1 and the number of squares in the grid
    let randomNumber = Math.floor(Math.random() * rowcolumncount * rowcolumncount) + 1;
    
    // Keep generating a new random number until an unoccupied square is found
    while (occupiedSquares.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * rowcolumncount * rowcolumncount) + 1;
    }
    
    // Mark the square as occupied
    occupiedSquares.push(randomNumber);
    enemySpaces.push(randomNumber);
    
    // Select the square at the random index
    const selectedSquare = document.querySelector(`#square${randomNumber}`);
    
    // Set the background image of the selected square to the tank SVG
    selectedSquare.style.backgroundImage = "url(\"styles/pictures/red tank.svg\")";
    selectedSquare.classList.remove("empty-square");
    selectedSquare.classList.add("enemy-button");
}


function createMe() {
    // Generate a random index between 1 and the number of squares in the grid
    let randomNumber = Math.floor(Math.random() * rowcolumncount * rowcolumncount) + 1;
    
    // Keep generating a new random number until an unoccupied square is found
    while (occupiedSquares.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * rowcolumncount * rowcolumncount) + 1;
    }
    // Mark the square as occupied
    occupiedSquares.push(randomNumber);
    meSpace = randomNumber;
    
    // Select the square at the random index
    const selectedSquare = document.querySelector(`#square${randomNumber}`);
    const dialog2 = document.querySelector(".dialog-me");
    
    // Set the background image of the selected square to the tank SVG
    selectedSquare.style.backgroundImage = "url(\"styles/pictures/green tank.svg\")";
    selectedSquare.appendChild(dialog2);
    selectedSquare.classList.remove("empty-square");
    selectedSquare.classList.add("me-button");
    me = selectedSquare;
    dialog = dialog2;
}

export function resetMe(number) {
    
    // Select the square at the random index
    const oldSquare = document.querySelector(`#square${meSpace}`);
    
    // Set the background image of the selected square to the tank SVG
    oldSquare.style.remove;
    oldSquare.classList.add("empty-square");
    oldSquare.classList.remove("me-button");
    occupiedSquares.remove(meSpace);
    meSpace = number;
    occupiedSquares.push(number);
        
    // Select the square at the random index
    const selectedSquare = document.querySelector(`#square${number}`);
    const dialog2 = document.querySelector(".dialog-me");

    selectedSquare.style.backgroundImage = "url(\"styles/pictures/green tank.svg\")";
    selectedSquare.appendChild(dialog2);
    selectedSquare.classList.remove("empty-square");
    selectedSquare.classList.add("me-button");
    me = selectedSquare;
    dialog = dialog2;
    
}
Array.prototype.remove = function(element) {
    const index = this.indexOf(element);
    if (index !== -1) {
      this.splice(index, 1);
    }
    return this;
  };


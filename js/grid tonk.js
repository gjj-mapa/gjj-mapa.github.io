const grid = document.querySelector('.grid');
const rowcolumncount = 15;
let counter = 1;
let occupiedSquares = [];
let meSpace = 0;
let me = null;
let dialogState = "hidden";
let dialog = null;
let enemySpaces = [];

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

function createEnemy() {
    // Generate a random index between 1 and the number of squares in the grid
    let randomNumber = Math.floor(Math.random() * rowcolumncount * rowcolumncount) + 1;
    
    // Keep generating a new random number until an unoccupied square is found
    while (occupiedSquares.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * rowcolumncount * rowcolumncount) + 1;
    }
    
    // Mark the square as occupied
    occupiedSquares.push(randomNumber);
    
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
me.addEventListener("click", () => {
    if (dialogState == "hidden") {
        dialog.show();
        dialogState = "shown";
    }
    else {
        dialog.close();
        dialogState = "hidden";
    }
})



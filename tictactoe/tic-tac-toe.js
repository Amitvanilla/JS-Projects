// const resetButton = document.querySelector('.reset');
// const gridSelector = document.querySelectorAll(".grid-box")
// let currentPlayer = "X"
//
// function reset() {
//     gridSelector.forEach(box => {
//         box.innerHTML = ""
//     });
// }
//
//
// function addElements(e){
//     let elements = e.target;
//     if(elements.innerHTML === ""){
//         elements.innerHTML = currentPlayer
//     }
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
// }
//
// gridSelector.forEach(box => {
//     box.addEventListener("click", addElements);
// })
//
// resetButton.addEventListener('click', reset)



const resetButton = document.querySelector('.reset');
const gridSelector = document.querySelectorAll(".grid-box");
const resultDisplay = document.querySelector('.result');

let currentPlayer = 'X'; // Track the current player
let gameActive = true; // Track whether the game is still active

const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
];

// Function to reset the game board
function reset() {
    gridSelector.forEach(box => {
        box.innerHTML = ""; // Clear each grid box
    });
    currentPlayer = 'X'; // Reset to the first player
    gameActive = true; // Reactivate the game
    resultDisplay.innerHTML = ""; // Clear the result display
}

// Function to check if the current player has won
function checkWin() {
    // return winningCombinations.some(combination => {
    //     return combination.every(index => {
    //         return gridSelector[index].innerHTML === currentPlayer;
    //     });
    // });

    for(let i = 0; i < winningCombinations.length; i++) {
        let zero = winningCombinations[i][0];
        let one = winningCombinations[i][1];
        let two = winningCombinations[i][2];
        if(gridSelector[zero].innerHTML === currentPlayer && gridSelector[one].innerHTML === currentPlayer && gridSelector[two].innerHTML === currentPlayer) {
            return true;
        }
    }
    return false;
}

// Function to handle adding elements to the grid
function addElements(e) {
    // console.log(e);
    // const box = e.target; // Get the clicked box
    // if (box.innerHTML === "" && gameActive) { // Only add if the box is empty and the game is active
    //     box.innerHTML = currentPlayer; // Set the box to the current player's symbol
    //     if (checkWin()) {
    //         resultDisplay.innerHTML = `Player ${currentPlayer} Wins!`; // Display the winner
    //         gameActive = false; // End the game
    //     } else if ([...gridSelector].every(box => box.innerHTML !== "")) {
    //         resultDisplay.innerHTML = "It's a Draw!"; // Check for a draw
    //         gameActive = false; // End the game
    //     } else {
    //         currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch the player
    //     }
    // }

    const curr = e.target

    if(curr.innerHTML === "" && gameActive){
        curr.innerHTML = currentPlayer;
        if(checkWin()){
            resultDisplay.innerHTML += `Winner is ${currentPlayer}`;
            gameActive = false
        }
        else if(checkEachBox()){
            resultDisplay.innerHTML = `Game is draw!!`
            gameActive = false
        }
        else {
            currentPlayer = currentPlayer ==='X' ? "O" : "X";
        }
    }
}

function checkEachBox() {
    let c = true
    gridSelector.forEach(box => {
        if(box.innerHTML === ""){
            c =  false
        }
    })
    return c
}

// Add event listeners
gridSelector.forEach(box => {
    console.log(box)
    box.addEventListener('click', addElements); // Add event listener to each grid box
});

resetButton.addEventListener('click', reset); // Add event listener to the reset button

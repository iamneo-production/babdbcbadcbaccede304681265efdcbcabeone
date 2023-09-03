// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Your game logic here

    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...
};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    // ...

    // Your code to update the 'result' element
    // ...

    // Your code to re-enable buttons
    // ...
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);

const cells = document.querySelectorAll('.cell');
const result = document.getElementById('result');
const resetButton = document.getElementById('reset-button');


let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameWon = false;

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                            [0, 4, 8], [2, 4, 6] // Diagonals
                                ];

                                    for (const condition of winConditions) {
                                            const [a, b, c] = condition;
                                                    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                                                                return true;
                                                                        }
                                                                            }

                                                                                return false;
                                                                                }

                                                                                function checkDraw() {
                                                                                    return !gameBoard.includes('');
                                                                                    }

                                                                                    function handleCellClick(cell, index) {
                                                                                        if (!cell.textContent && !gameWon) {
                                                                                                cell.textContent = currentPlayer;
                                                                                                        gameBoard[index] = currentPlayer;

                                                                                                                if (checkWin()) {
                                                                                                                            result.textContent = `Player ${currentPlayer} wins!`;
                                                                                                                                        gameWon = true;
                                                                                                                                                } else if (checkDraw()) {
                                                                                                                                                            result.textContent = "It's a draw!";
                                                                                                                                                                        gameWon = true;
                                                                                                                                                                                } else {
                                                                                                                                                                                            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                                                                                                                                                                                                        result.textContent = `Player ${currentPlayer}'s Turn`;
                                                                                                                                                                                                                }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                    function handleReset() {
                                                                                                                                                                                                                        gameBoard = ['', '', '', '', '', '', '', '', ''];
                                                                                                                                                                                                                            gameWon = false;
                                                                                                                                                                                                                                currentPlayer = 'X';
                                                                                                                                                                                                                                    cells.forEach(cell => {
                                                                                                                                                                                                                                            cell.textContent = '';
                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                    result.textContent = `Player ${currentPlayer}'s Turn`;
                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                    cells.forEach((cell, index) => {
                                                                                                                                                                                                                                                        cell.addEventListener('click', () => {
                                                                                                                                                                                                                                                                handleCellClick(cell, index);
                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                    resetButton.addEventListener('click', handleReset);
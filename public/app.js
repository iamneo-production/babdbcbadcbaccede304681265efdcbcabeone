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
    // Check if the clicked cell is empty
    if (cells[index] === '') {
        // Set the cell with the current player's symbol ('X' or 'O')
        cells[index] = currentPlayer;
        element.textContent = currentPlayer;
        
        // Check for winning conditions
        for (const condition of conditions) {
            const [a, b, c] = condition;
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                // Display a winning message
                result.textContent = `${currentPlayer} wins!`;
                // Disable all buttons after a win
                btns.forEach(btn => btn.disabled = true);
            }
        }

        // Toggle the current player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        // Display the current player's turn
        result.textContent = `Player ${currentPlayer}'s turn`;
    }
};
// Function to reset the game
const resetGame = () => {
    // Reset the game state
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    // Update the result element
    result.textContent = `Player ${currentPlayer}'s turn`;
    // Re-enable buttons
    btns.forEach(btn => {
        btn.textContent = '';
        btn.disabled = false;
    });
};

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => ticTacToe(btn, i));
   });

  document.querySelector('#reset').addEventListener('click', resetGame);
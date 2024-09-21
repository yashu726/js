let timeRemaining = 11;
let gameMode = "";
let colorSelected = "";
let multiplierSelected = 1;
let gameOver = false;

document.addEventListener("DOMContentLoaded", function() {
    // Set up game mode buttons
    const gameModeButtons = document.querySelectorAll(".game-mode button");
    gameModeButtons.forEach(button => {
        button.addEventListener("click", function() {
            gameMode = this.id;
            startGame();
        });
    });

    // Set up color buttons
    const colorButtons = document.querySelectorAll(".color-button");
    colorButtons
})
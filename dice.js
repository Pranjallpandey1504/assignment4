// Get references to the button and result display
const rollDiceButton = document.getElementById("rollDice");
const diceNumberDisplay = document.getElementById("diceNumber");

// Function to generate a random dice number (1 to 6)
function rollDice() {
    const diceNumber = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    diceNumberDisplay.textContent = diceNumber; // Update the result display
}

// Attach click event to the button
rollDiceButton.addEventListener("click", rollDice);

let players = [
    { id: 1, score: 0 },
    { id: 2, score: 0 }
];

function rollDice(playerId) {
    const diceRoll = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    players[playerId - 1].score = diceRoll; // Update player's score
    document.getElementById(`score-${playerId}`).innerText = `Score: ${diceRoll}`;
    updateWinner();
}

function rollAll() {
    players.forEach(player => rollDice(player.id));
}

function updateWinner() {
    const highestScore = Math.max(...players.map(player => player.score));
    const winners = players.filter(player => player.score === highestScore);
    const winnerText =
        winners.length === 1
            ? `Winner: Player ${winners[0].id} with a score of ${highestScore}`
            : `It's a tie! Players ${winners.map(player => player.id).join(', ')} with a score of ${highestScore}`;

    document.getElementById('winner').innerText = winnerText;
}

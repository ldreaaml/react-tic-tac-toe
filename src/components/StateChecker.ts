function findWinner (gameState:string[]){
    const winstate = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winstate.length; i++) {
      const [a, b, c] = winstate[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return true;
      }
    }
    return false;
}

function checkForTie(gameState:string[]){
    if (gameState.indexOf("") === -1) {
      return true;
    }
    return false;
}

const test = {findWinner,checkForTie};
export default test
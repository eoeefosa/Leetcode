document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll(".tile");
  const startButton = document.getElementById("start-btn");
  let activeTile = null;
  let gameActive = false;

  startButton.addEventListener("click", startGame);

  tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
      if (!gameActive) return;

      if (tile === activeTile) {
        // Deselect the tile
        tile.classList.remove("active");
        activeTile = null;
      } else if (activeTile === null) {
        // Select the new tile
        tile.classList.add("active");
        activeTile = tile;
      } else {
        // Swap tiles
        const tempColor = activeTile.style.backgroundColor;
        activeTile.style.backgroundColor = tile.style.backgroundColor;
        tile.style.backgroundColor = tempColor;

        activeTile.classList.remove("active");
        activeTile = null;

        checkWinCondition();
      }
    });
  });

  function startGame() {
    // Initialize game state
    const colors = ["#ff5722", "#4caf50", "#2196f3", "#ffc107"];
    gameActive = true;
    activeTile = null;

    tiles.forEach((tile, index) => {
      tile.style.backgroundColor = colors[index];
      tile.classList.remove("active");
    });

    shuffleTiles();
  }

  function shuffleTiles() {
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tempColor = tiles[i].style.backgroundColor;
      tiles[i].style.backgroundColor = tiles[j].style.backgroundColor;
      tiles[j].style.backgroundColor = tempColor;
    }
  }

  function checkWinCondition() {
    const colors = ["#ff5722", "#4caf50", "#2196f3", "#ffc107"];
    let correctTiles = 0;

    tiles.forEach((tile, index) => {
      if (tile.style.backgroundColor === colors[index]) {
        correctTiles++;
      }
    });

    if (correctTiles === tiles.length) {
      gameActive = false;
      alert("You win!");
    }
  }
});

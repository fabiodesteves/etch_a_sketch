const squareGrid = document.querySelector("#squares-container");

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const squaresLine = document.createElement("div");
    squaresLine.classList.add("line-of-squares");
    
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      })
      squaresLine.appendChild(square);
    }
    squareGrid.appendChild(squaresLine);
  }
}

createGrid(16);


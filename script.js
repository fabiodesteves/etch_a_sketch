const squareGrid = document.querySelector("#squares-container");
const gridSizeInput = document.querySelector("#grid-size-input");
const createGridButton = document.querySelector("#create-grid-button");

function createGrid(gridSize) {
  // Clear any existing grid before creating a new one
  squareGrid.innerHTML = '';

  for (let i = 0; i < gridSize; i++) {
    const squaresLine = document.createElement("div");
    squaresLine.classList.add("line-of-squares");

    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseover", () => {
        // Generate random RGB values
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        square.style.backgroundColor = randomColor;
      });

      squaresLine.appendChild(square);
    }
    squareGrid.appendChild(squaresLine);
  }
}

// Event listener for the "Create Sketchpad" button
createGridButton.addEventListener("click", () => {
  const gridSize = parseInt(gridSizeInput.value); // Get input value and convert to integer

  if (gridSize >= 1 && gridSize <= 100) {
    createGrid(gridSize); // Create the grid with the user-specified size
  } else {
    alert("Please enter a grid size between 1 and 100."); // Error message for invalid input
  }
});

// Initial grid creation on page load (optional, if you want a default grid)
createGrid(16); // Create a default 16x16 grid when the page loads
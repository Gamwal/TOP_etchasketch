//This file contain all the code to create and interact with te GUI

// function to create a single pixel
function createPiece(n) {
  const piece = document.createElement('div');
  piece.id = `piece_${n}`;
  piece.className = 'piece';

  let transparency = 0;
  piece.style.backgroundColor = `rgb(0, 0, 0, ${transparency}%)`;

  piece.addEventListener('mousemove', (e) => {
    transparency += 10;
    piece.style.backgroundColor = `rgb(0, 0, 0, ${transparency}%)`;
    console.log
  });
  return piece;
}

// function to create a row container for pixels
function createRow(n) {
  const row = document.createElement('div');
  row.id = `row_${n}`;
  row.className = 'row';
  return row;
}

// funtion to integrate both row and pixel creation to form a square board of n x n pixels
function createSquareBoard(n) {
  const board = document.createElement('div');
  board.id = 'board';

  for (let i = 0; i < n; i++) {
    const row = createRow(i);
    for (let j = 0; j < n; j++) {
      const piece = createPiece(`${i}${j}`);
      row.appendChild(piece);
    }
    board.appendChild(row);
  }
  return board;
}

//function to get user grid dimensions
function getGridDimenions() {
  let gridDimensions;
  do {
    gridDimensions = prompt('Enter Grid Dimensions (must be an integer between 1 and 100)');
    size = parseInt(gridDimensions, 10);
  }
  while (size > 100 || size < 0);
  if (isNaN(size)) {
    alert("You didn't make a vaid input!");
  }
  return size;
}


// The following are the UI elements

const buttonDiv = document.createElement('div');
buttonDiv.id = 'buttondiv';

const gridSizeButton = document.createElement('button');
gridSizeButton.id = 'gridsizebutton';
gridSizeButton.textContent = 'Change Grid Size';

var gridSize = 16;

gridSizeButton.addEventListener('click', (e) => {
   const tempSize = getGridDimenions();
  if (!isNaN(tempSize)) {
    gridSize = tempSize;
    document.getElementById('resetButton').click();
  }
})

const resetButton = document.createElement('button');
resetButton.id = 'resetButton';
resetButton.textContent = 'Reset';

resetButton.addEventListener('click', (e) => {
  const board = document.getElementById('board');
  document.body.removeChild(board);
  const newBoard = createSquareBoard(gridSize);
  document.body.appendChild(newBoard);
});

buttonDiv.appendChild(gridSizeButton);
buttonDiv.appendChild(resetButton);
document.body.appendChild(buttonDiv);


const newBoard = createSquareBoard(gridSize);
document.body.appendChild(newBoard);
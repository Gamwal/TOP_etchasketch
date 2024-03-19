const board = document.createElement('div');
board.id = 'board';

function createPiece(n) {
  const piece = document.createElement('div');
  piece.id = `piece_${n}`;
  piece.className = 'piece';

  let transparency = 100
  piece.style.backgroundColor = `rgb(0, 0, 0, ${transparency}%)`;

  piece.addEventListener('mouseover', (e) => {
    transparency -= 10;
    piece.style.backgroundColor = `rgb(0, 0, 0, ${transparency}%)`;
    console.log
  })

  return piece;
}

function createRow(n) {
  const row = document.createElement('div');
  row.id = `row_${n}`;
  row.className = 'row';
  return row
}

function createSquareBoard(n = 2) {
  for (let i = 0; i < n; i++) {
    const row = createRow(i);
    for (let j = 0; j < n; j++) {
      const piece = createPiece(`${i}${j}`);
      row.appendChild(piece);
    }
    board.appendChild(row);
  }   
}

createSquareBoard(16);

document.body.appendChild(board);


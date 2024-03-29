// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.
//This solution returns new array

var gameOfLife = function (board) {
  const res = [];
  for (let y = 0; y < board.length; y++) {
    let row = [];
    for (let x = 0; x < board[y].length; x++) {
      let neighbors = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (y + i < 0 || y + i >= board.length) {
            continue;
          }
          if (x + j < 0 || x + j >= board[y].length) {
            continue;
          }
          if (i == 0 && j == 0) {
            continue;
          }
          neighbors += board[y + i][x + j];
        }
      }
      if (neighbors < 2 || neighbors > 3) {
        row.push(0);
      } else if (board[y][x] === 1 && neighbors == 2) {
        row.push(1);
      } else if (neighbors == 3) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    res.push(row);
  }
  return res;
};

gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
]);
gameOfLife([
  [1, 1],
  [1, 0],
]);



// Change values in place solution
// new cell values:
// 2 - represents currently alive cell (will die)
// 3 - represents currently dead cell (will live)

var gameOfLife = function (board) {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      let neighbors = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          // out of bounds
          if (y + i < 0 || y + i >= board.length) {
            continue;
          }
          if (x + j < 0 || x + j >= board[0].length) {
            continue;
          }
          if (i == 0 && j == 0) {
            continue;
          }

          // As we are changing cell values in place to '2' or '3', we add to 'neighbors' only if the cell is currently alive
          if (board[y + i][x + j] === 1 || board[y + i][x + j] === 2)
            neighbors++;
        }
      }

      // cell will die
      if (board[y][x] === 1 && (neighbors < 2 || neighbors > 3)) {
        board[y][x] = 2;
      }
      // cell will live
      if (board[y][x] === 0 && neighbors === 3) {
        board[y][x] = 3;
      }
    }
  }
  // replace with the final values (2 % 2 = 0 - dead; 3 % 2 = 1 - alive)
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      board[y][x] %= 2;
    }
  }
  console.log("board", board);
  return board;
};

// YOUR CODE BELOW
let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  move: function (character, rowNum, colNum) {
    if (this.board[rowNum][colNum] === null) {
      this.board[rowNum][colNum] = character;
    }
    console.log(this.board);
    return this.board;
  },
  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    return this.board;
  },
};
// console.log(ticTacToe.board);
// console.log(ticTacToe.move("s", 1, 1));

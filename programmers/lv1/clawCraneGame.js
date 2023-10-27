const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let answer = 0;
  let popDolls = [];

  moves.forEach((move) => {
    let popBoard = false;
    board.forEach((_board) => {
      if (popBoard || _board[move - 1] === 0) return;

      if (popDolls[popDolls - 1] === _board[move - 1]) {
        answer += 1;
      } else {
        popDolls.push(_board[move - 1]);

        if (popDolls[popDolls.length - 1] === popDolls[popDolls.length - 2]) {
          popDolls.splice(popDolls.length - 2, popDolls.length - 1);
          answer += 2;
        }
      }

      _board[move - 1] = 0;
      popBoard = true;
    });
  });
  return answer;
}

console.log(solution(board, moves));

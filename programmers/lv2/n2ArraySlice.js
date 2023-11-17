const n = 3;
const left = 2;
const right = 5;

function solution(n, left, right) {
  const answer = [];

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (count < left) {
        count++;
        continue;
      }
      if (count > right) {
        break;
      }
      answer.push(j + 1 < i + 1 ? i + 1 : j + 1);
      count++;
    }
  }

  return answer;
}

function realSolution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    console.log(col, row);
    answer.push(Math.max(row, col) + 1);
  }

  return answer;
}

console.log(solution(n, left, right));

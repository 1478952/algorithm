const x = 2;
const n = 5;

function solution(x, n) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(answer[i - 1] ? answer[i - 1] + x : x);
  }

  return answer;
}

console.log(solution(x, n));

function realSolution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

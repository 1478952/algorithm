const number = 121;

function solution(n) {
  if (n === 1) return -1;
  return String(Math.sqrt(n)).indexOf(".") !== -1
    ? -1
    : (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1);
}

console.log(solution(number));

function realSolution(n) {
  return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

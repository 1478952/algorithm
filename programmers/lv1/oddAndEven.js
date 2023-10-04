const num = 3;

function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(solution(num));

function realSolution(num) {
  return num % 2 ? "Odd" : "Even";
}

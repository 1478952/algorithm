const number = 118372;

function solution(n) {
  return +String(n)
    .split("")
    .map((v) => +v)
    .sort((a, b) => b - a)
    .join("");
}

console.log(solution(number));

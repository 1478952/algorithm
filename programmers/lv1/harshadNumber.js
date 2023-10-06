const number = 10;

function solution(n) {
  let addNumber = String(n)
    .split("")
    .reduce((a, b) => +a + +b);

  return Number.isInteger(n / addNumber) ? true : false;
}

console.log(solution(number));

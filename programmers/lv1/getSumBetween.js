const number = 5;
const number2 = 3;

function solution(n, n2) {
  let answer = 0;
  const sn = Math.min(n, n2);
  const ln = Math.max(n, n2);
  for (let i = sn; i <= ln; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(number, number2));

function ohterSolution(a, b) {
  var result = 0;
  //함수를 완성하세요
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

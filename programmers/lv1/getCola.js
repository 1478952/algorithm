const a = 2;
const b = 1;
const n = 20;

function solution(a, b, n) {
  var answer = 0;

  while (!(n < a)) {
    console.log(n);
    answer += b;
    n = n - (a - b);
  }

  return answer;
}

console.log(solution(a, b, n));

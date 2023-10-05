const n = 123;

function solution(n) {
  let answer = 0;
  const convertString = String(n);
  for (let i = 0; i < convertString.length; i++) {
    answer += +convertString[i];
  }
  return answer;
}

console.log(solution(n));

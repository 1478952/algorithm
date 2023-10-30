const A = [1, 4, 2];
const B = [5, 4, 4];

function solution(A,B){
  var answer = 0;

  const _A = [...A].sort((a, b) => a - b);
  const _B = [...B].sort((a, b) => b - a);

  _A.forEach((a, idx) => {
    answer += a * _B[idx];
  })

  return answer;
}

console.log(solution(A, B));
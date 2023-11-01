const s = 15;

// function solution(n) {
//   var answer = 0;

//   for (let i = 1; i <= n; i++) {
//     let addNum = i;
//     let num = i + 1;

//     while (addNum < n) {
//       addNum = addNum + num;
//       num++;
//     }
//     answer += addNum === n ? 1 : 0;
//   }

//   return answer;
// }

function solution(n) {
  var answer = 0;
  var num = 1;

  while (n > 0) {
    if (n % num === 0) {
      answer++;
    }
    n -= num;
    num++;
  }

  return answer;
}

console.log(solution(s));

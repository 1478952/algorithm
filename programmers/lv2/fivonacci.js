// 피보나치 수
const n = 5;

function solution(n) {
  if (n === 2) return 1;

  const memo = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    memo.push((memo[i - 1] + memo[i - 2]) % 1234567);
  }

  return memo[memo.length - 1] % 1234567;
}

// 런타임 에러.. ㅠ
// function solution(n) {
//   const memo = [0, 1];

//   function a(b) {
//     if (b > 1) {
//       if (memo[b] != null) return memo[b] % 1234567;
//       return (memo[b] = (a(b - 1) + a(b - 2)) % 1234567);
//     }
//     return b;
//   }
//   return a(n);
// }

console.log(solution(n));

// 2 = 0 + 1 = 0 + 1 = 1
// 3 = 1 + 2 = 1 + 1 = 2
// 4 = 2 + 3 = 1 + 2 = 3
// 5 = 3 + 4 = 2 + 3 = 5
// 6 = 4 + 5 = 3 + 5 = 8
// 7 = 5 + 6 = 5 + 8 = 13
// 8 = 6 + 7 = 8 + 13 = 21
// 9 = 7 + 8 = 13 + 21 = 34
// 10 = 8 + 9 = 21 + 34 = 55
// 11 = 9 + 10 = 34 + 55 = 89

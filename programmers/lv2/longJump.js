const n = 2;

function solution(n) {
  const memo = [0, 1, 2, 3];

  if (n < 4) return memo[n];

  for (let i = 4; i <= n; i++) {
    memo.push((memo[i - 1] + memo[i - 2]) % 1234567);
  }

  return memo[memo.length - 1] % 1234567;
}

console.log(solution(n));

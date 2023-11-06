const n = 500234234;

function solution(n) {
  let ans = 0;
  let num = n;
  while (num !== 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num -= 1;
      ans += 1;
    }
  }
  return ans;
}

// 이게 뭔;;
// function solution2(n) {
//   return n.toString(2).replace(/0/g, "").length;
// }

console.log(solution2(n));

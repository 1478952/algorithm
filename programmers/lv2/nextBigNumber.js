const n = 78;

function solution(n) {
  var answer = n + 1;

  let binaryN = n.toString(2).replaceAll("0", "");

  while (answer.toString(2).replaceAll("0", "") !== binaryN) {
    answer++;
  }

  return answer;
}

console.log(solution(n));

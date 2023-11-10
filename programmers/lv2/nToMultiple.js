const arr = [2, 6, 8, 14];

function solution(arr) {
  var answer = 2;

  while (true) {
    if (
      arr.reduce((a, b) => {
        return a + (answer % b);
      }, 0) === 0
    ) {
      break;
    } else {
      answer++;
    }
  }

  return answer;
}

console.log(solution(arr));

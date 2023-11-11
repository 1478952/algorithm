const k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];

function solution(k, tangerine) {
  var answer = 0;

  const tObj = {};

  tangerine.forEach((t) => {
    tObj[t] = tObj[t] ? tObj[t] + 1 : 1;
  });

  tArr = Object.values(tObj).sort((a, b) => b - a);

  let count = 0;

  for (let i = 0; i < tArr.length; i++) {
    answer++;
    if (count + tArr[i] >= k) {
      break;
    } else count += tArr[i];
  }

  return answer;
}

console.log(solution(k, tangerine));

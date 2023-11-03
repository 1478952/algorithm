const s = "abcdefggfedcba";

function solution(s) {
  const answer = [];
  const sArr = s.split("");

  sArr.forEach((_s, i) => {
    if (answer[answer.length - 1] === _s) {
      answer.pop();
      return;
    }
    answer.push(_s);
  });

  return answer.length > 0 ? 0 : 1;
}

console.log(solution(s));

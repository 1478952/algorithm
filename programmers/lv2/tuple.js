const s = "{{2},{2,3},{2,3,1},{2,3,1,2}}";

function solution(s) {
  const answer = [];

  const sArr = s.replaceAll("{", "").split("},");
  sArr[sArr.length - 1] = sArr[sArr.length - 1].replace("}}", "");

  const sortArr = sArr.sort((a, b) => a.length - b.length);

  for (let i = 0; i < sortArr.length; i++) {
    let t = sortArr[i].split(",");
    for (let j = 0; j < t.length; j++) {
      if (!answer.includes(+t[j])) {
        answer.push(+t[j]);
      }
    }
  }

  return answer;
}

console.log(solution(s));

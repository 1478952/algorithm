const s = "110010101001";

function solution(s) {
  let targetS = s;
  let convertCount = 0;
  let zeroCount = 0;

  while (targetS !== "1") {
    convertCount += 1;
    const targetSArr = targetS.split("");
    targetSArr.forEach((_s, i) => {
      if (_s === "0") {
        zeroCount += 1;
        targetSArr[i] = "";
      }
    });
    targetS = targetSArr.join("").length.toString(2);
  }
  return [convertCount, zeroCount];
}

console.log(solution(s));

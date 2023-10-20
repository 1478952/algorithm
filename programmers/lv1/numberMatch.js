const X = "5525";
const Y = "1255";

function solution(X, Y) {
  const answerArr = [];

  const _X = new Array(10).fill(0);
  const _Y = new Array(10).fill(0);

  X.split("").forEach((n) => _X[n]++);
  Y.split("").forEach((n) => _Y[n]++);

  for (let i = 0; i < 10; i++) {
    if (_X[i] > 0 && _Y[i] > 0) {
      for (let j = 0; j < (_X[i] > _Y[i] ? _Y[i] : _X[i]); j++) {
        answerArr.push(i);
      }
    }
  }

  const answer = answerArr.sort((a, b) => b - a).join("");

  return answer[0] === "0" ? "0" : answer === "" ? "-1" : answer;
}

console.log(solution(X, Y));

// function solution(X, Y) {
//   var answer = "";

//   const maxNumber = (Math.max(X, Y) + "").split("");

//   const minNumber = (Math.min(X, Y) + "").split("");

//   for (let i = 0; i < minNumber.length; i++) {
//     const findNum = maxNumber.indexOf(minNumber[i]);
//     if (findNum !== -1) {
//       maxNumber[findNum] = "";
//       answer += minNumber[i];
//     }
//   }
//   return answer === ""
//     ? "-1"
//     : (+answer + "")
//         .split("")
//         .sort((a, b) => b - a)
//         .join("");
// }

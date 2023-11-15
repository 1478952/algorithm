const s = "{(})";

// function solution(s) {
//   let answer = 0;

//   const openBracket = {
//     "[": "]",
//     "{": "}",
//     "(": ")",
//   };

//   const closeBracket = {
//     "]": "[",
//     "}": "{",
//     ")": "(",
//   };

//   let sArr = s.split("");

//   for (let i = 0; i < sArr.length; i++) {
//     const includeObj = {};
//     for (let j = 0; j < sArr.length; j++) {
//       if (openBracket[sArr[j]]) {
//         if (includeObj[sArr[j]]) {
//           includeObj[sArr[j]] += 1;
//         } else {
//           includeObj[sArr[j]] = 1;
//         }
//       }

//       if (closeBracket[sArr[j]]) {
//         if (includeObj[closeBracket[sArr[j]]]) {
//           includeObj[[closeBracket[sArr[j]]]] -= 1;
//         }
//       }
//     }

//     if (Object.values(includeObj).filter((a) => a !== 0).length === 0) {
//       answer++;
//     }

//     const firstStr = sArr.shift();
//     sArr.push(firstStr);
//   }
//   return answer;
// }

// console.log(solution(s));

// function isValid(s) {
//   const stack = [];
//   const brackets = { "(": ")", "[": "]", "{": "}" };

//   for (let char of s) {
//     if (brackets[char]) {
//       stack.push(char);
//     } else {
//       const last = stack.pop();
//       if (brackets[last] !== char) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }

// function realSolution(s) {
//   let answer = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (isValid(s)) {
//       answer++;
//     }
//     const firstChar = s[0];
//     s = s.slice(1) + firstChar; // 문자열 회전
//   }

//   return answer;
// }

// console.log(realSolution(s));

function solution2(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    let sLength = s.length;
    let _s = s;
    console.log(_s.split(""));

    _s = _s.split("()").join("");
    _s = _s.split("{}").join("");
    _s = _s.split("[]").join("");

    while (sLength !== _s.length) {
      sLength = _s.length;
      _s = _s.split("()").join("");
      _s = _s.split("{}").join("");
      _s = _s.split("[]").join("");
    }

    if (_s.length === 0) {
      answer++;
    }
    const firstChar = s[0];
    s = s.slice(1) + firstChar; // 문자열 회전
  }
  return answer;
}

console.log(solution2(s));

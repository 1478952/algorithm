const s = "aukksy";
const skip = "wbqdze";
const index = 5;

function solution(s, skip, index) {
  const skipSet = new Set(skip);
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    let charCode = currentChar.charCodeAt();
    let steps = 0;

    while (steps < index) {
      charCode++;
      if (charCode > 122) charCode = 97; // 순환하도록 설정

      if (!skipSet.has(String.fromCharCode(charCode))) {
        steps++;
      }
    }

    result += String.fromCharCode(charCode);
  }

  return result;
}

console.log(solution(s, skip, index));

const s = "(())()";

function solution(s) {
  let bracketCount = 0;

  const _s = s.split("");

  for (let i = 0; i < _s.length; i++) {
    if (bracketCount === 0 && _s[i] === ")") {
      return false;
    }
    if (_s[i] === "(") {
      bracketCount += 1;
    } else {
      bracketCount -= 1;
    }
  }

  return bracketCount === 0;
}

console.log(solution(s));

const brown = 10;
const yellow = 2;

function solution(brown, yellow) {
  const max = brown + yellow;

  for (let horizontal = 1; horizontal < max; horizontal++) {
    if (max % horizontal === 0) {
      const vertical = max / horizontal;
      if ((horizontal - 2) * (vertical - 2) === yellow) {
        return [vertical, horizontal];
      }
    }
  }
}

console.log(solution(brown, yellow));

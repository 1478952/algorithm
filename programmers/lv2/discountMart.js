const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];

function solution(want, number, discount) {
  let answer = 0;
  const numberSum = number.reduce((a, b) => a + b, 0);

  const wantObj = {};
  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  for (let i = 0; i < discount.length; i++) {
    const _wantObj = { ...wantObj };
    if (numberSum + i > discount.length) {
      break;
    }

    for (let j = 0; j < numberSum; j++) {
      if (_wantObj[discount[i + j]]) {
        _wantObj[discount[i + j]] = _wantObj[discount[i + j]] - 1;
      }
    }

    if (Object.values(_wantObj).filter((v) => v !== 0).length === 0) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(want, number, discount));

const numbers = [2, 1, 3, 4, 1];

function solution(numbers) {
  var answer = [];

  numbers.forEach((_, idx) => {
    const _numbers = [...numbers];
    const popNumber = _numbers.splice(idx, 1);
    _numbers.forEach((_number) => {
      const result = +_number + +popNumber;
      if (answer.indexOf(result) === -1) {
        answer.push(result);
      }
    });
  });

  return answer.sort((a, b) => a - b);
}

console.log(solution(numbers));

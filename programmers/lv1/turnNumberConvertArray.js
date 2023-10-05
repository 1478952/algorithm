const number = 12345;

function solution(number) {
  const answer = [];

  const convertedNumberToStringArray = String(number);

  for (let i = convertedNumberToStringArray.length; i > 0; i--) {
    answer.push(+convertedNumberToStringArray[i - 1]);
  }

  return answer;
}

console.log(solution(number));

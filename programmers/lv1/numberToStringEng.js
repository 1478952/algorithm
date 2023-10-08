function solution(str) {
  const englishWords = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  let answer = "";
  let notNumberStr = "";

  str.split("").forEach((v) => {
    if (!isNaN(parseInt(v))) {
      answer += v;
    } else {
      notNumberStr += v;
      for (const key in englishWords) {
        if (englishWords[key] === notNumberStr) {
          answer += key;
          notNumberStr = "";
        }
      }
    }
  });
  return answer;
}

console.log(solution("one4seveneight"));

function otherSolution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

function solution(dartResult) {
  const answer = [];
  let dartResultString = dartResult;

  const reg = /([0-9]+)([SDT][*#]?)/;

  for (let i = 0; i < 3; i++) {
    const result = dartResultString.match(reg);

    dartResultString = dartResultString.split(result[0]).join("");

    let bonus = 1;
    let option = result[2][1];

    switch (result[2][0]) {
      case "S":
        bonus = 1;
        break;
      case "D":
        bonus = 2;
        break;
      case "T":
        bonus = 3;
        break;
    }

    let formula = result[1] ** bonus;

    if (option) {
      if (option === "*") {
        answer[i - 1] *= 2;
        formula *= 2;
      } else {
        formula *= -1;
      }
    }

    answer.push(formula);
  }

  return answer.reduce((a, b) => a + b);
}

console.log(solution("1D#2S*3S"));

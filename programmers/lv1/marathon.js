const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
  const answerObj = {};

  participant.forEach((member) => {
    if (answerObj[member]) {
      answerObj[member] = answerObj[member] + 1;
      return;
    }
    answerObj[member] = 1;
  });
  completion.forEach((member) => {
    if (answerObj[member]) {
      answerObj[member] = answerObj[member] - 1;
      if (answerObj[member] === 0) {
        delete answerObj[member];
      }
    }
  });

  return Object.keys(answerObj)[0];
}

console.log(solution(participant, completion));

// 시간초과 추가로 수정해보기

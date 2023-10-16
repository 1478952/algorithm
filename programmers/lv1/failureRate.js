const n = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

const failureRate = (n, stages) => {
  let answer = [];
  let stagesLength = stages.length;
  for (let i = 1; i < n + 1; i++) {
    const filteredStage = stages.filter((stage) => stage === i);
    answer.push({ stage: i, rate: filteredStage.length / stagesLength });
    stagesLength -= filteredStage.length;
  }
  return answer.sort((a, b) => b.rate - a.rate).map((item) => item.stage);
};

console.log(failureRate(n, stages));

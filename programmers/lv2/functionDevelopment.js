const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  let prevPublishDay = 0;
  const answer = [];

  progresses.forEach((progress, idx) => {
    const remainsPercent = 100 - progress;
    const day = Math.ceil(remainsPercent / speeds[idx]);
    if (prevPublishDay >= day) {
      answer[answer.length - 1] += 1;
    } else {
      prevPublishDay = day;
      answer.push(1);
    }
  });

  return answer;
}

console.log(solution(progresses, speeds));

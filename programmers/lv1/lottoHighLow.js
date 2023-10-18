const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
  let undefinedNumCount = 0;
  let correctNumCount = 0;

  lottos.forEach((lotto) => {
    if (lotto === 0) {
      undefinedNumCount++;
    } else {
      if (win_nums.indexOf(lotto) !== -1) {
        correctNumCount++;
      }
    }
  });

  return [
    6 - (undefinedNumCount + correctNumCount) + 1 > 6
      ? 6
      : 6 - (undefinedNumCount + correctNumCount) + 1,
    6 - correctNumCount + 1 > 6 ? 6 : 6 - correctNumCount + 1,
  ];
}

console.log(solution(lottos, win_nums));

const nums = [1, 2, 3, 4];

function solution(nums) {
  const answer = [];

  nums.forEach((num, idx1) => {
    const _nums1 = [...nums];
    const firstNum = _nums1.splice(idx1, 1);
    _nums1.forEach((num2, idx2) => {
      const _nums2 = [..._nums1];
      const secondNum = _nums2.splice(idx2, 1);
      _nums2.forEach((num3, idx3) => {
        const _nums3 = [..._nums2];
        const thirdNum = _nums3.splice(idx3, 1);

        const result = +firstNum + +secondNum + +thirdNum;

        let integerLength = 0;

        for (let i = 2; i < result; i++) {
          if (Number.isInteger(result / i)) {
            integerLength += 1;
          }
        }

        if (integerLength === 0) {
          const findPrimeNumber = answer.find(
            (numbers) =>
              numbers.toString() ===
              [...firstNum, ...secondNum, ...thirdNum]
                .sort((a, b) => a - b)
                .toString()
          );
          if (!findPrimeNumber) {
            answer.push(
              [...firstNum, ...secondNum, ...thirdNum].sort((a, b) => a - b)
            );
          }
        }
      });
    });
  });

  return answer.length;
}

console.log(solution(nums));

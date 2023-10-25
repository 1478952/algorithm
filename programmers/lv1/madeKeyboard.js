const keymap = ["AASDVX", "EWFVASVFSAV", "FDSAFSADFSADVCX"];
const targets = ["BDFS", "FSDAVXZC", "SDAFSADFDSAF"];

function solution(keymap, targets) {
  const keymapObj = {};

  keymap.forEach((key) => {
    key.split("").forEach((_key, index) => {
      if (keymapObj[_key] <= index) {
        return;
      }
      keymapObj[_key] = index + 1;
    });
  });
  const answer = targets.map((target, index) => {
    const result = target.split("").reduce((a, b) => {
      return a + keymapObj[b];
    }, 0);
    return !!result ? result : -1;
  });

  return answer;
}

console.log(solution(keymap, targets));

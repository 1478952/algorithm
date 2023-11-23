const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
  ["adsf", "asdfasdf"],
  ["zxcvxzcv", "214242"],
];

function solution(clothes) {
  let answer = 0;

  const clothesObj = {};

  clothes.forEach((c) => {
    clothesObj[c[1]] = clothesObj[c[1]] ? [...clothesObj[c[1]], c[0]] : [c[0]];
  });

  const objKeys = Object.keys(clothesObj);

  for (let i = 0; i < objKeys.length; i++) {
    answer +=
      clothesObj[objKeys[i]].length + answer * clothesObj[objKeys[i]].length;
  }

  return answer;
}

console.log(solution(clothes));

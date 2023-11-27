// const cities = [
//   "Jeju",
//   "Pangyo",
//   "Seoul",
//   "NewYork",
//   "LA",
//   "Jeju",
//   "Pangyo",
//   "Seoul",
//   "NewYork",
//   "LA",
// ];
// const cacheSize = 3;

// const cacheSize = 2;

// const cities = ["Jeju", "Pangyo", "NewYork", "newyork"];

// const cacheSize = 5;

// const cities = ["a", "b", "c", "b", "a"];
// 기댓값 〉 17
const cacheSize = 3;
const cities = ["a", "b", "c", "a", "b", "d", "c"]; // 27

// const cacheSize = 3;
// const cities = ["1", "2", "1", "1", "1", "1"];

function solution(cacheSize, cities) {
  let answer = 0;

  const cache = [];

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  for (let i = 0; i < cities.length; i++) {
    const findCacheIdx = cache.indexOf(cities[i].toLowerCase());
    if (findCacheIdx !== -1) {
      answer += 1;
      cache.splice(findCacheIdx, 1);
    } else {
      answer += 5;
    }
    cache.push(cities[i].toLowerCase());
    if (cache.length > cacheSize) {
      cache.shift();
    }
  }

  return answer;
}

console.log(solution(cacheSize, cities));

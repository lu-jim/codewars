/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 const twoSum = (nums, target) => {
  const prevMap = new Map();
  let result = '';
  nums.forEach((num, index) => {
    let diff = target - num;
    if(prevMap.has(diff)) {
      result = [prevMap.get(diff), index];}
    prevMap.set(num, index)
  });
  return result
};

const case1 = [2,7,11,15];
const case2 = [3,2,4];
const case3 = [3,3];
const target1 = 9;
const target2 = 6;
const target3 = 6;

const result1 = twoSum(case1, target1)
// const result2 = twoSum(case2, target2)
// const result3 = twoSum(case3, target3)

console.log(result1);

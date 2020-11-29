// 给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。
// 输入：nums = [2,5,1,3,4,7], n = 3
// 输出：[2,3,5,4,1,7] 
// 解释：由于 x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 ，所以答案为 [2,3,5,4,1,7]
// https://leetcode-cn.com/problems/shuffle-the-array/


/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result[i * 2] = nums[i];
    result[i * 2 + 1] = nums[n + i];
  }
  return result;
};

console.log("nums", shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));

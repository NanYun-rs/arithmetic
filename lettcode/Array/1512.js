// 给你一个整数数组 nums 。
// 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
// 返回好数对的数目。

// 输入：nums = [1,2,3,1,1,3]
// 输出：4
// 解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
// https://leetcode-cn.com/problems/number-of-good-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let result = {};
  let count = 0;
  // 维护一个map 根据 (n *n-1)/2 计算次数
  for (let i = 0; i < nums.length; i++) {
    Reflect.get(result, nums[i])
      ? (result[nums[i]] += 1)
      : (result[nums[i]] = 1);
  }
  for (let i in result) {
    if (result[i] > 1) count += (result[i] * (result[i] - 1)) / 2;
  }
  return count;
};
console.log(numIdenticalPairs([1, 1, 1, 1, 1]));

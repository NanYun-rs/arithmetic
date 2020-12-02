/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (nums) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const special = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const next = nums[i + 1];
    const current = nums[i];
    const concat = next ? current + "" + next : current;
    if (nums.length === 2) {
      return (result = special[concat]
        ? special[concat]
        : roman[current] + roman[next]);
    }
    if (special[concat]) ++i;
    result += special[concat] ? special[concat] : roman[current];
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));

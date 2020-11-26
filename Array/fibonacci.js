// 斐波那契数列前两项都是 1 第三项开始 是前两项的加和
let fi = [1, 1]

for (let i = 2; i < 20; i++) {
  fi[i] = fi[i - 1] + fi[i - 2]
}

console.log(fi, fi.length)
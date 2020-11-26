const martri = []

for (let i = 0; i < 3; i++) {
  martri[i] = []
  for (let j = 0; j < 3; j++) {
    martri[i][j] = []
    for (let z = 0; z < 3; z++) {
      martri[i][j][z] = i + j + z
    }
  }
}

console.log('martri', martri)

const i = [
  [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4]
  ],
  [
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5]
  ],
  [
    [2, 3, 4],
    [3, 4, 5],
    [4, 5, 6]
  ]
]
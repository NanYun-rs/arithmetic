const numbers = [1, 2, 3, 4, 5, 6]

let iterator = numbers[Symbol.iterator]()

for (let item of iterator) {
  console.log("item", item)
}
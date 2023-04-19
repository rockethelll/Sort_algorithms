const array = [10, 15, 3, 7]
const k = 17

console.log(`\nVoici le tableau d'origine : ${array}\n`)

function findSum(arr, result) {
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[index]
    if (currentValue + arr[i] === result) {
      console.log(`Les solutions sont : ${currentValue} et ${arr[i]}\n`)
      index++
    }
  }
}

findSum(array, k)

const array = [10, 15, 3, 7, 2, 14, 16, 1]
const k = 17

console.log(`\nVoici le tableau d'origine : ${array}\n`)

function findSum(arr, result) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === result) {
        console.log(`Les solutions sont : ${arr[i]} et ${arr[j]}\n`)
      }
    }
  }
}

findSum(array, k)

const array = [10, 15, 3, 7]
const k = 17

console.log(`\nVoici le tableau d'origine : ${array}\n`)

function findSum(arr, result) {
  const seenArray = new Set()
  for (let i = 0; i < arr.length; i++) {
    const rest = result - arr[i]
    if (seenArray.has(rest)) {
      console.log(`Les solutions sont : ${rest} et ${arr[i]}\n`)
    }
    seenArray.add(arr[i])
  }
}

findSum(array, k)

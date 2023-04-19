const fs = require('fs')

const fileName = process.argv[2]

function mergeSort(array) {
  if (array.length < 2) {
    return array
  }

  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  function merge(left, right) {
    const result = []

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }

    while (left.length) {
      result.push(left.shift())
    }

    while (right.length) {
      result.push(right.shift())
    }
    return result
  }
  return merge(mergeSort(left), mergeSort(right))
}

const launchMergeSort = (array) => {
  console.log(`Tableau original : ${array}`)
  console.time("Temps d'exécution : ")
  console.log(`Tri fusion : ${mergeSort(array)}`)
  console.timeEnd("Temps d'exécution : ")
}

try {
  const data = fs.readFileSync(fileName, 'utf-8')
  const arrayFromList = data.split(' ').map((item) => parseInt(item))
  launchMergeSort(arrayFromList)
} catch (error) {
  console.error(error.message)
}

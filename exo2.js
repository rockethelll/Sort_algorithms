const array = [3, 7, 8, 3, 6, 1]
const array2 = [1, 4, 5, 8]

function whoSeeTheSun(arr) {
  let seeTheSun = []
  let maxHeight = 0
  for (let i = arr.length; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > maxHeight) {
        seeTheSun.push(arr[j])
        maxHeight = arr[j]
      }
    }
  }
  console.log(`Les bâtiments ayant une vue sur le soleil couchant sont : ${seeTheSun}`)
  return seeTheSun
}

whoSeeTheSun(array)
whoSeeTheSun(array2)

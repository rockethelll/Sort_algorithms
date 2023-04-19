const array = [3, 7, 8, 3, 6, 1]
const array2 = [1, 4, 5, 8]

function whoSeeTheSun(arr) {
  const seeTheSun = []
  let maxHeight = 0
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] > maxHeight) {
      maxHeight = arr[i]
      seeTheSun.push(arr[i])
    }
  }
  console.log(
    `Les bâtiments ayant une vue sur le soleil couchant sont : ${seeTheSun}`
  )
  return seeTheSun
}

whoSeeTheSun(array)
whoSeeTheSun(array2)

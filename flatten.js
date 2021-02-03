
const flatten = function (arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        arr.push(arr[i][j]);
      }
      arr.splice(i, 1)
    }
  }
  return arr.sort();
}



console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
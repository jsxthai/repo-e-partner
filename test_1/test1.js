function cartesian(...args) {
  let results = [[]]; // results[0] = []
  let arrays = [...args];

  for (let i = 0; i < arrays.length; i++) {
    let currentSubArray = arrays[i];
    let tmp = [];

    for (let j = 0; j < results.length; j++) {
      for (let k = 0; k < currentSubArray.length; k++) {
        tmp.push(results[j].concat(currentSubArray[k]));
      }
    }
    results = tmp;
  }

  return results;
}

// data
const arrA = ["A1", "A2", "A3"],
  arrB = ["B1", "B2", "B3"],
  arrC = ["C1", "C2", "C3"];

const result = cartesian(arrA, arrB, arrC);
result.forEach((item) => console.log(item));

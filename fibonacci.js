/* Task 1: Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. 
Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13]. */
function fibs(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

console.log(fibs(8));

//Task 2: Now write another function fibsRec which solves the same problem recursively.
function fibsRec(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const arr = fibsRec(n - 1);
    return [...arr, arr[n - 2] + arr[n - 3]];
  }
}

console.log(fibsRec(8));

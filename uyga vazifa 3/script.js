// function linearSearch(arr, linear) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === linear) {
//             return i;
//         }
//     }

//   }

//   const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//   const index = linearSearch(numbers, 50);
//   console.log(index);

//binary search algoritimi

console.time("search");
function binarySearch(arr, binary) {
  var num1 = 0;
  var num3 = arr.length - 1;

  while (num1 <= num3) {
    const num2 = Math.floor((num1 + num3) / 2);
    if (arr[num2] === binary) {
      return num2;
    } else if (arr[num2] < binary) {
      num1 = num2 + 1;
    } else {
      num3 = num2 - 1;
    }
  }
  return -1;
}
console.timeEnd("search");

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const index = binarySearch(numbers, 70);
console.log(index);

// var matin = [];

// for (var i = 0; i < 301; i++) {
//   matin.push(i);
// }

// var men = [];

// for (var i = 0; i < matin.length; i++) {
//   matin[i] = `someone${i}`;
//   men.push(i);
// }

// console.log(matin);

// for (var i = 0; i < men.length; i++) {
//   matin[men[i]] = men[i];
// }

// console.log(men);

// //for each

// const array1 = ['a', 'b', 'c'];

// array1.forEach((element) => console.log(element));

// const c = [];

// for (let i = 0; i < 5000000; i++) {
//   c.push({
//     username: "Somebody" + i * 2,
//     ball: Math.floor(Math.random() * 5000),
//   });
// }
// console.time("REduce");
// var j = c.reduce(
//   function (acc, value) {
//     for (let i = 0; i < acc.length; i++) {
//       if (value.ball > acc[i]) {
//         acc[i] = value.ball;
//         break;
//       }
//     }
//     return acc;
//   },
//   [0, 0, 0, 0, 0]
// );
// console.timeEnd("REduce");
// console.time("Sort");
// c.sort(function (a, b) {
//   return b.ball - a.ball;
// });
// console.timeEnd("Sort");


function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
          return i; 
      }
  }
 
}

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const index = linearSearch(numbers, 50);
console.log(index);


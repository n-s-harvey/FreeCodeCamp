/**
 * Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

 */

// function sumFibs(num) {


//   /**
//    * @property {number} highestNum
//    * @property {array<number>} fibArray
//    */
//   let fibModel = {
//     highestNum: num,
//     fibArray: []
//   };


//   /**
//    * @param {Object} model
//    * @param {number} model.highestNum
//    * @param {array<number>} model.fibArray
//    */
//   let initializeErray = model => {

//     let array = [];

//     for (let i = 0; i < num; i++) {
//       array.push(0);
//     }

//     array[0] = 0;
//     array[1] = 1;

//     model.fibArray = array;

//     return model;

//   }

//   // console.log(initializeErray(num));

//   /**
//    * @param {Object} model
//    * @param {number} model.highestNum
//    * @param {array<number>} model.fibArray
//    */
//   let generateFibonacci = model => {

//     model.fibArray = model.fibArray.reduce(
//       (fibArray, num, index) => {

//         if (index === 0) return fibArray.concat(0);
//         else if (index === 1) return fibArray.concat(1);

//         else {
//           return fibArray.concat(
//             fibArray[index - 2] + fibArray[index - 1]
//           )
//         }

//       }, []);

//       return model;

//   }


//   /**
//    * @param {Object} model
//    * @param {number} model.highestNum
//    * @param {array<number>} model.fibArray
//    */
//   let sumOddNumbers = model => {

//     let sumOddNums = 0;

//     for (let i = 0; i < model.highestNum; i++) {
//       let element = model.fibArray[i];
//       if (element % 2 != 0) sumOddNums += element;
//     }

//     return sumOddNums;

//   }

//   let pipe =
//     (...functions) =>
//       (currentValue) =>
//         functions.reduce((val, func) => func(val), currentValue);

//   /* const value = pipe(
//     initializeErray,
//     generateFibonacci,
//     sumOddNumbers
//   )(num);
//   console.log(
//     value
//   ); */

//   return pipe(
//     initializeErray,
//     generateFibonacci,
//     sumOddNumbers
//   )(fibModel);

// }

function sumFibs(num) {

  let sumOddNums = 0;

  let fibNums = {
    current: 0,
    previous: 0
  };

  let updateFibNums = (fibNumObj, newNumber) => {
    fibNumObj.previous = fibNumObj.current;
    fibNumObj.current = newNumber;
  }


  for (let i = 0; i <= num; i++) {

    if (i == 0) {
      updateFibNums(fibNums, 0);
      sumOddNums += 0;
    }

    else if (i == 1) {
      updateFibNums(fibNums, 1);
      sumOddNums += 1;
    }

    else {
      let newFibNum = fibNums.previous + fibNums.current;
      if (newFibNum <= num) {
        if (newFibNum % 2 != 0) sumOddNums += newFibNum;
        updateFibNums(fibNums, newFibNum);
      }
      else return sumOddNums;
    }

    console.log(fibNums);
    console.log(`Current sum odd nums: ${sumOddNums}`);

  }

  return sumOddNums;
  
}

// sumFibs(4);
// console.log(sumFibs(1000));
// console.log(sumFibs(50));
sumFibs(1);

// sumFibs(5);
// console.log(sumFibs(4000000));
// ====================================
// function helloName (userName) {
  //   return `Hello, ${userName}!`;
  // }
  // console.log(helloName('Andrew'))



  // ====================================
  let anyNumbers = [1, 62, 4, 72, 3, 8, 105, 151]
  
  function largeNumbers(array) {
      for (let i = 0; i < anyNumbers.length; i++) {
          if (array[i] > 10) {
              console.log(array[i])
            }
          }
  return;
}
console.log(largeNumbers(anyNumbers))


// ====================================
// function simpleCalc (firstNumber, secondNumber, action) {
//   switch (action) {
//     case 'minus' || '-':
//       firstNumber - secondNumber;
//       break;
//     case 'plus' || '+':
//       firstNumber + secondNumber;
//       break;
//     case 'multiply' || '*':
//       firstNumber * secondNumber;
//       break;
//     case 'divivion' || '/':
//       firstNumber / secondNumber;
//       break;
//     default:
//       alert('Что-то тут не так:(');
//   }
//   return;
// }
// const result = simpleCalc(1, 6, 'minus')
// console.log(result)
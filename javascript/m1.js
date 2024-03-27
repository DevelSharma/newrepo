// const numbers = [1, 4, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers);

// // Result: squaredNumbers = [1, 4, 9, 16, 25]

// const sqnNum = function (...[num]) {
//   return num.map(num => num * 2)
// }

// console.log(sqnNum(numbers))


// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return   {
//     bar: "hello"
// };

// }

// console.log("foo2 : ", foo2())
// console.log("foo1 : ", foo1())

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);


// function sum (x) {
//   if (arguments.length == 2) {
//     return arguments[0] + arguments[1]
//   } else {
//     return (z) => x + z
//   }
//      ;
// }

// console.log(sum(2,3)); 
// console.log(sum(2)(4));


// console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));


// function divide (a,b) {
//   return new Promise ((resolve, reject)=> {
//     if (b === 0) {
//       reject ("Division by zero error")
//     } else {
//       resolve (a/b);
//     }
//   });
// };


//   divide (10,2) 
//     .then(result =>{
//     console.log("result: ", result)
//   })
//     .catch(error =>{
//     console.log ("Error: " + error)
//   });
console.log ("version 1")
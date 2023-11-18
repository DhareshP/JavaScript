// check whether the square of given number is even or odd
 

// function square(a){
//     let sq = a*a

//     if (sq % 2 == 0)
//     {
//         console.log(`The square is even ${sq}`)
//     }
//     else
//     {
//         console.log(`The square is odd ${sq}`)
//     }
// }
// square(3)

// //imperative way of writing code 
// const a = 5
// const aSquared = a*a 

// let isEven;

// if(aSquared % 2 == 0){
//     isEven = true
// }
// else{
//     isEven = false
// }
// console.log(isEven)


//Decalarative way of writing code

const CheckSquare = (x)=> (x*x % 2 ==0 ? true :false)

console.log(CheckSquare(2))
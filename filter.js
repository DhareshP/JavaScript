// // you have to check for even nos in an array an put them in an separate array

// let numbers = [1 , 2, 20, 35, 12, 17, 46 ]

// let evenarr = []

// for( let i = 0; i < numbers.length; i++){
//     if( i % 2 == 0)
//     {
//         evenarr.push(numbers[i])
//     }
// }

// console.log(evenarr)

//filter method
//fiter returns a new array it will return all those

let numbers = [1 , 2, 20, 35, 12, 17, 46 ]

let evenNum = numbers.filter(function(n){
    return n%2==0
})

console.log(evenNum)

//make all the +ve nos visible

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let posNum = transactions.filter(function(n){
    return n>0
})
console.log(posNum)
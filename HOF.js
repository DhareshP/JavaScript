//HIgher order Functions

// let arr = [1 ,2, 3, 4, 5]

// let SquaredArr = []

// for(i=0; i<arr.length; i++){
//     SquaredArr.push(arr[i]*arr[i])
// }
// console.log(SquaredArr)

// map function / method

//map will loop through every elemnt of your array and will perform specific operations that you have provided
// Map method creates a new array with your results


// const num = [1 ,2, 3, 4, 5]

// const SquaredNum = num.map(function(n){  //works as for loop
//     return n*n
// })

//below transaction entries, convert them into dollars

// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
// const inrtodollar = 80;

// const indollar = transactions.map(amount =>{
//     return (amount/inrtodollar).toFixed(0) // here its the amount imported and .tofixed optional to exclude any decimal entries
// })
// console.log(indollar)


// using foreach, doesnt return anything outside block


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtodollar = 80;

const indollar = transactions.forEach(trans=>{
    console.log((trans/inrtodollar))
})
console.log(indollar)


//Map returns a new array while for each returns values 



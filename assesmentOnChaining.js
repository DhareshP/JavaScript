//From the transactions array filter out the positive elements and calculate the total amount
//use filter an reduce to achieve this

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let TotalAmt = 0 // acc = accumulator , can give any name to the var

let posElements = transactions.filter(function(amt){
    return amt>0
}).reduce(function(acc , amounts){
    return TotalAmt = acc + amounts
})

console.log(posElements)

let sum = 0;
let arr = [10,15,20,30];  
arr.forEach(function myFunction(element) {  sum = sum + element;  });  
console.log(sum);
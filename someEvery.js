// Some method
// some:consdition check: to get true or false based on a condition
//it will return true if even 1 element satisfies the condition

const transactions = [1000, 3000, 4000, 2000, -898, 3800, 4500];
9
let result = transactions.some(function(n){
    return n>0
})
console.log(result)

//Every:every element should satisfy the condition

let resultevery = transactions.every(function(n){
    return n>0
})
console.log(resultevery)
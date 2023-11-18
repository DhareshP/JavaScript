//file return th first element of an array that satisfy the consition

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

//find

let FirstWhithdraw1 = transactions.find(function(n){
    return n<0
  })
  console.log(`first withdrawal -> `+ FirstWhithdraw1)

//findindex

let FirstWhithdraw1Index = transactions.findIndex(function(n){
    return n<0
})
console.log("First withdrawal Index -> " +FirstWhithdraw1Index)
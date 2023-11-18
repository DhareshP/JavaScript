// you need a sum of every elements in an array

let num = [1,2,3,4,10]

// let sum= 0 // accumulator

// for(let i = 0; i< num.length; i++){
//     // sum = num[0]+num[1]+num[2]+num[3]+num[4]
//     sum = sum+num[i]
// }
// console.log(sum)

//reduce method - reduce will always return a single value

let result = num.reduce(function(acc, value){  //we use function key here because we're using higher order function and need to use functio nas a callback
    let newSum= acc+value
    return newSum

},0)

console.log(result)


let product = num.reduce(function(acc, value){
    let newProd = acc * value
    return newProd
},1) // the initialization of the code starts from this no.

console.log(product)

// function printFirstName(firstname, cb){
//     console.log(firstname)
//     cb('Singh')
// }
//     printFirstName('Dharm', printLastName)//callback




// function printLastName(lastname){
//     console.log(lastname)
// }
// // printLastName('Singh')

//Application of callback
//create a function check even number and pass argument to check other nos as well

const isEven = (n)=>{
   return n%2 == 0
}

let printResult = (evenFn, num) =>{
    const isNumEven = evenFn(num)
    console.log(`The number ${num} is an even number ${isNumEven}`)
    // console.log('The number is an even number', num, isNumEven)
}
printResult(isEven, 9)
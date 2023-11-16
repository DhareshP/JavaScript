// //The destructuring assignment syntax is a javascript expression taht makes it possible to unpack values
// //from arrays. or properties from objects,into distinct variables
// //v imp in frameworks

// let arr = ['Hi','i','am' , 'Dharesh']

// // var a = arr[1]
// // var b = arr[2]
// // console.log(a)
// // console.log(b)

// let [a , b , c, d] = arr//instead of accessing the array elemts insividually,assignign the values direcly and calling them whenever reqd

// console.log(a)

//Destructuring an object

let myObj = {
    Name: 'Dan',
    age : 21,
    gender: 'M',
    address: {
        country: 'England',
        city: 'london'
    }
}

let{Name : n, age:a , gender:g, address:{country : c}} = myObj // can give specific name to elements

console.log(n)
console.log(a)
console.log(g)
console.log(c)






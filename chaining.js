let arr= [
    {name : "A", age : "14", gender : "M"},
    {name : "B", age : "34", gender : "M"},
    {name : "C", age : "24", gender : "F"},
    {name : "D", age : "44", gender : "M"},
    {name : "E", age : "28", gender : "F"},
    {name : "F", age : "36", gender : "M"},
    {name : "G", age : "47", gender : "F"}
]

// // Age of all the Males

// let Males = arr.filter(function(obj){
//     return obj.gender == 'M'
// })
// console.log(Males)


// //Ages of all the males

// let AgesofMales = Males.map(function(Male){
//     return Male.age 
// })
// console.log(AgesofMales)

//chaining - we used one method and chained with another
//Ages of all the males

let MaleAges = arr.filter(function(obj){
    return obj.gender == 'M'
}).map(function(male){
    return male.age
})
   
console.log(MaleAges)
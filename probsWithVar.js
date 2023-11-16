
//var a =21

var a = 30// redecalaration of value 1st issue security

//console.log(a)

if(a===30){
    var b =40
    console.log(b)
}
//variables declared with the var keyword are not blocked scoped they are function scoped
//scoping problem
console.log(b)

function test(){
    var c = 100
    console.log(c)
}
test()
console.log(c)
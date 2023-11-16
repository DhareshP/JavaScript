//modularity lets you access the function of a diff file to another file 
//so a part of code is available or module is available//
//here we are using calci and main file for the same

function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}

function mul(a,b){
    console.log(a*b)
}

function div(a,b){
    console.log(a/b)
}

module.exports = {
    Addition: add,
    Substraction: sub,
    Multiplication: mul,
    Division: div
}
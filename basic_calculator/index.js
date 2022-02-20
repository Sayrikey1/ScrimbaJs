


function Add(){
    let num1 = document.getElementById("num1-el").value
    let num2 = document.getElementById("num2-el").value
    var result = parseInt(num1) + parseInt(num2)
    document.getElementById("sum-el").innerHTML = result
}

function Subtract(){
    let num1 = document.getElementById("num1-el").value
    let num2 = document.getElementById("num2-el").value
    var result = parseInt(num1) - parseInt(num2)
    document.getElementById("sum-el").innerHTML = result
}

function Divide(){
    let num1 = document.getElementById("num1-el").value
    let num2 = document.getElementById("num2-el").value
    var result = parseInt(num1) / parseInt(num2)
    document.getElementById("sum-el").innerHTML = result
}

function Multiply(){
    let num1 = document.getElementById("num1-el").value
    let num2 = document.getElementById("num2-el").value
    var result = parseInt(num1) * parseInt(num2)
    document.getElementById("sum-el").innerHTML = result
}




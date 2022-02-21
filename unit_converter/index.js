
let massEl = document.getElementById("mass-el")
let volEl = document.getElementById("vol-el")


function convert() {
    let inputEl = document.getElementById("input-el").value
    
    var resultLen1 = (parseInt(inputEl) * 3.28084).toFixed(4)
    var resultLen2 = (parseInt(inputEl) * 0.30480).toFixed(4)
    
    var resultVol1 = (parseInt(inputEl) * 0.264172).toFixed(4)
    var resultVol2 = (parseInt(inputEl) * 3.78541).toFixed(4)
    
    var resultMas1 = (parseInt(inputEl) * 2.20462).toFixed(4)
    var resultMas2 = (parseInt(inputEl) * 0.453592).toFixed(4)
    
    document.getElementById("len-el").innerHTML = inputEl + " meters = " + resultLen1 + " feet " + "|" + inputEl + " feet = " + resultLen2 + " meters"
    
    document.getElementById("vol-el").innerHTML = inputEl + " litres = " + resultVol1 + " gallons " + "|" + inputEl + " gallons = " + resultVol2 + " litres"
    
    document.getElementById("mass-el").innerHTML = inputEl + " kilogram = " + resultMas1 + " pounds " + "|" + inputEl + " pounds = " + resultMas2 + " kilogram"
    
}


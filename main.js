
let tipEl = document.querySelector(".tip-el")
let totalEl = document.querySelector(".total-el")
let peopleZeroEl = document.getElementById("peoplezero")

tipEl.textContent = "$" + "0.00"
totalEl.textContent = "$" + "0.00"

let bill
let numOfPeople
let tipPercentage 

document.querySelector(".fivepercent").addEventListener("click", function() {
    tipPercentage = .05
}) 
document.querySelector(".tenpercent").addEventListener("click", function() {
    tipPercentage = .10
}) 
document.querySelector(".fifteenpercent").addEventListener("click", function() {
    tipPercentage = .15
}) 
document.querySelector(".twentyfivepercent").addEventListener("click", function() {
    tipPercentage = .25
}) 
document.querySelector(".fiftypercent").addEventListener("click", function() {
    tipPercentage = .50
}) 
document.querySelector(".custompercent").addEventListener("", function() {
    tipPercentage = document.querySelector(".custompercent").value
}) 





function assign() {
    bill = Number(document.getElementById("bill-el").value)
    numOfPeople = Number(document.getElementById("num-el").value)
    check()
}
function check() {
    if (bill == null || bill == Number(0)) {
        document.getElementById("bill-label").textContent = "Wait, ya got no bill?"
        calculate()
    } else if (bill !== null || bill !== Number(0)) {
         document.getElementById("bill-label").textContent = "Bill"
         calculate()
    } if (tipPercentage == null || tipPercentage == Number(0) || tipPercentage == 0) {
        tipPercentage = null
        document.getElementById("tip-select-label").textContent = "Please be generous for God's sake man! Put something in here!"
        document.getElementById("tip-select-label").style.color = "rgb(189, 86, 49)"
        tipPercentage = 0
        calculate()
        console.log("be like say no tip dey grond")
    } else {
        document.getElementById("tip-select-label").textContent = "Select Tip %"
        document.getElementById("tip-select-label").style.color = "hsl(186, 14%, 43%)"
        calculate()
    }
   
}

function calculate() {
    
    if (bill<= 0 & bill == null & numOfPeople == 0 & numOfPeople == null) {
        tipEl.textContent = "$0.00"
        totalEl.textContent = "$0.00"
        totalEl.text
    }else if (bill<= 0) {
        document.getElementById("bill-el").textContent = "Wait, ya got no bill?"
    } else if (numOfPeople <= 0 || numOfPeople == null) {
        peopleZeroEl.textContent = "Can't be zero"
        document.getElementById("num-el").style.border = "2px solid rgb(189, 86, 49)";

    } else if (numOfPeople > 0) {
        peopleZeroEl.textContent = ""
        document.getElementById("num-el").style.border = "none";

        let tipAmount = (bill * tipPercentage) / numOfPeople;
        tipEl.textContent = "$" + tipAmount.toFixed(2)
        console.log("Tip Amount: " + tipAmount)    

        let total = (bill / numOfPeople) + tipAmount;
        totalEl.textContent = "$" + total.toFixed(2)
        console.log("Total: " + total)
    }
}
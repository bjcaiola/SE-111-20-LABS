
var pay = prompt("Enter your hourly wage: ")
var hours = prompt("Enter your hours worked: ")
var taxRate = .20

function grossPay(pay, hours){
    gross = Number(pay) * Number(hours)
    console.log(`gross pay: ${gross.toFixed(2)}`)
    return gross
}

var grossPayAmount = grossPay(pay, hours) 

function tax(grossPay, tax){
    taxDeduction = Number(grossPay) * Number(tax)
    console.log(`tax deduction ${taxDeduction.toFixed(2)}`)
    return taxDeduction
}

var taxAmount = tax(grossPayAmount, taxRate)

function netPay(gross, tax){
    netPay = Number(gross) - Number(tax)
    console.log(`net pay: ${netPay.toFixed(2)}`)
    return netPay
}

var netAmount = netPay(grossPayAmount,taxAmount)


alert(`Your gross pay is: $${grossPayAmount.toFixed(2)}\nUncle Sam's Share: $${taxAmount.toFixed(2)}\nYour net pay is $${netAmount.toFixed(2)}`)
console.log(`Your gross pay is: $${grossPayAmount.toFixed(2)}\nUncle Sam's Share: $${taxAmount.toFixed(2)}\nYour net pay is $${netAmount.toFixed(2)}`)



// You want to develop a JavaScript program that gathers the user’s hourly pay (use $14.50), hours worked (32/week), and tax rate for a two-week period. You will use the prompt() function in order to gather this information. Use 20% for the tax rate.
// IMPORTANT: The prompt() function only returns strings. Numbers collected from the prompt will need to be cast as a Number() in order to be calculated. In addition, messages in the prompt can utilize escape characters such as `\n` to create a new line.
// Once you have this information, you will to display the user’s GrossPay, Uncle Sam’s Share, and the User’s Net Pay. You will use one alert() function as well as three console.log() calls to display this information. This will allow you to view the totals both in a pop up as well as the browsers console debugging tool.
// The output within the console and alert box should be formatted to read:
// Gross Pay: $1000.00
// Uncle Sam's Share: $200.00
// Net Pay: $800.00
// All calculations should be limited to run once, rather than numerous times.  
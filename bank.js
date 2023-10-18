
const Deposit = document.getElementById("increament");
const Withdraw = document.getElementById("decreament");
const Enter = document.getElementById("ENTER");
const Counter = document.getElementById("counter");

function enterB(){
    
    var getVal = document.getElementById("option").value;
    getVal = Number(getVal);
    var count = Number(Counter.innerHTML);
    if(Deposit.checked)
    
    if(Deposit.checked)
    {

    count += getVal;
    }
    else if(Withdraw.checked)
    {
    
    count -= getVal;
    }
    Counter.innerHTML = count;

}
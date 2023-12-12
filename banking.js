function  getInput (inputId){
    const inputField = document.getElementById(inputId);
    //console.log(inputField);
   
    const inputText = inputField.value;
    const inputAmmount =  parseFloat(inputText)
    inputField.value = '';
    //console.log(inputAmmount);
    return inputAmmount;
}

document.getElementById('deposit-button').addEventListener('click',function() {

   const newdepositAmmount =  getInput('deposit-input');
   console.log(newdepositAmmount);
     
    
   const depositTotal =  document.getElementById('deposit-total');
   const priviousDepositText = depositTotal.innerText;
   const priviousDepositAmmount = parseFloat(priviousDepositText)

   //privious ammount + new input ammount add
   const newDepositTotal = priviousDepositAmmount + newdepositAmmount;
   depositTotal.innerText = newDepositTotal;
   //update balance
   const balanceTotal = document.getElementById("balance-input");
   const balanceTotalText = balanceTotal.innerText;
   const balanceTotalAmmount = parseFloat(balanceTotalText);
   const newBalanceTotal = balanceTotalAmmount + newdepositAmmount;
   balanceTotal.innerText = newBalanceTotal;
 
//clear 
   depositInput.value = "";
   
}) ;
document.getElementById("withdraw-button").addEventListener('click', function(){
    //console.log("hello");
     const withdrawInput = document.getElementById('Withdraw-input');
    const  withdrawInputText = withdrawInput.value;
    const withdrawInputAmmount = parseFloat(withdrawInputText);

    //update withdraw

    const withdrawTotal = document.getElementById('withdraw-total');
    const priviouswithdrawTotalText = withdrawTotal.innerText;

    const priviouswithdrawTotalAmmount = parseFloat(priviouswithdrawTotalText);

    const newWithdrawTotal = priviouswithdrawTotalAmmount + withdrawInputAmmount;

    //set the value
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance 
    const  balanceTotal  = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const priviousBalanceTotalAmmount = parseFloat(balanceTotalText)
    const newBalanceTotal = priviousBalanceTotalAmmount - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;
    // clear the value 
    withdrawInput.value = '';

});


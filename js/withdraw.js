/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field 
2.5. also make sure to convert the input into a number by using parseFloat
3.get previous withdraw total
4.Calculate total withdraw amount
4.5 set total withdraw amount

5.get the previous balance total 
6.calculate new balance total
6.5. set the new balance total
7.clear the input field

*/
//step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
  //step-2
  const withDrawField = document.getElementById('withdraw-input');
  const newWithDrawAmountString = withDrawField.value
  const newWithdrawAmount = parseFloat(newWithDrawAmountString);
  if(newWithdrawAmount ==='' || newWithdrawAmount===null || isNaN(newWithdrawAmount) || newWithdrawAmount<=0){
    alert("Please Provide Any Valid Input");
  }
  else{
    const withDrawTotalElement = document.getElementById('withdraw');
    const previousWithDrawTotalString = withDrawTotalElement.innerText;
    const previousWithDrawTotal = parseFloat(previousWithDrawTotalString);
    //step-4:
     const currentWithDrawTotal = previousWithDrawTotal + newWithdrawAmount;
     withDrawTotalElement.innerText = currentWithDrawTotal;
  
    //step-5:
  const balanceTotalElement = document.getElementById('current-balance');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  //step-6: 
  const newBalanceTotal =  previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
  
  
  
    //step-7:
  
  withDrawField.value = null;
  }
 

})
//step-1: add event liostner to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-2: get the deposit amount from the deposit input field
    //for input field use .value to get the value inside the input field
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountSrting = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountSrting);
    if(newDepositAmount==='' || newDepositAmount ===null || isNaN(newDepositAmount) || newDepositAmount<=0){
        alert('Please Provide Any Valid Data');


    }
    else{
        const depositTotalElement = document.getElementById('deposit-amount');
        const previousDepositTotalString = depositTotalElement.innerText;
        const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // step-4: add numbers to set the total deposit   
        const currentDepositTotal = previousDepositTotal + newDepositAmount;
         //set the deposit total
        depositTotalElement.innerText = currentDepositTotal;
        // step-5: get balance current total 
        const balanceTotalElement = document.getElementById('current-balance');
        const previousTotalString = balanceTotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousTotalString);
    
        //step-6: calculate current total balance
        const currentBlanceTotal = previousBalanceTotal + newDepositAmount;
       //set the balance total
       balanceTotalElement.innerText = currentBlanceTotal;
       //step-7: clear the deposit field
       depositField.value = null;
    }
})
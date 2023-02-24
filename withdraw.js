//1 add event handler with the withdraw button
//2 get the withdraw amount from the withdraw input field
//2.5 also make sure to convert the input into a number using by parseFloat
//3 get previous withdraw total
// 4 calculate total withdraw amount
// 4.5 set the total withdraw amount
// 5 get the previous balance total
// 6 calculate new balance total
// 6.5 set new balance total

// 7 clear the input field

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);
    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previoudWithdrawTotalString = withdrawTotalElement.innerText;
    previousWithdrawTotal = parseFloat(previoudWithdrawTotalString);


//  step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    withdrawField.value = '';

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap er bank khali hoye gese ar taka nai');
        return;
    }
    //    step-4
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;

//   step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    // step-7

  

})
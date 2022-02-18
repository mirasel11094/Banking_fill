//input deposit
function getInputValue(fieldId){
    const inputfieldId = document.getElementById(fieldId);
    const valueInText = inputfieldId.value;
    const valu = parseFloat(valueInText);
    inputfieldId.value = '';
    return valu;
    
}
//input deposit
function updateTotal(fieldId, amount) {
    // console.log(fieldId, amount);
    const totalTag = document.getElementById(fieldId);
    const previousTotalInTex = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInTex);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
    return newTotal;

}
//input deposit
document.getElementById('deposit-button').addEventListener('click', function(){
const amount = getInputValue('deposit-input');
// console.log(amount);
updateTotal('deposit-total', amount);
updateBalance(amount, true);

});
// update Balance
function updateBalance(amount, isAdding) {
    const balanceTag = document.getElementById('balance-total');
    const balanceInTex = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInTex);
    let newBalance;
    if(isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
         newBalance = previousBalance - amount;
    }
    balanceTag.innerText = newBalance;
      
}
//handle whitdrol
document.getElementById('withdraw-button').addEventListener('click', function (){
    const amount = getInputValue('withdraw-input');
    updateTotal('withdraw-total', amount);
    updateBalance(amount, false);
});

function updateProductNumber(product, price,isIncrease) {
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;

    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total case
    const productTotal = document.getElementById(product +'-total');
    productTotal.innerText = productNumber * price;
    ///calculate total
    calculateTotal();

};
function getInputValue(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;

};
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax; 
    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;


};
// handle case increase decrease event

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case',59,true);


    // const inputNumber = document.getElementById('case-number');
    // const caseNumber = inputNumber.value;
    // inputNumber.value = parseInt(caseNumber) + 1;
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case',59,false);


    // const inputNumber = document.getElementById('case-number');
    // const caseNumber = inputNumber.value;
    // // if (caseNumber > 0){
    // //     inputNumber.value = parseInt(caseNumber) - 1;
    // // }
    // console.log(caseNumber);

});
// handle phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone',1219,true);



    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = phoneInput.value;
    // phoneInput.value = parseInt(phoneNumber) + 1;
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone',1219,false);






    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = phoneInput.value;
    // if (phoneNumber > 0){
    //     phoneInput.value = parseInt(phoneNumber) - 1;
    // }
       

})
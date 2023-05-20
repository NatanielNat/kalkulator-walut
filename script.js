
const onFormSubmit = (e) => {
e.preventDefault();

const amount = document.querySelector(".js-amount");
let currency = document.querySelector(".js-exchangeValue");

let amountValue = amount.value;

if(amountValue == "" || amountValue == "0"){
    amount.value = "1";
    amountValue = 1;
}

let result = (amountValue / 4.42).toFixed(2);

currency.innerHTML = `${result} EURO`
}

const init = () => {
    const formElement = document.querySelector(".js-form")

    formElement.addEventListener("submit",onFormSubmit);
}
init();



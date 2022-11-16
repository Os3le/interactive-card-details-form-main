let name = document.getElementById("name")
let card = document.getElementById("card")
let cardValueAsA_Number = Number.isInteger(Number(card.value.replace(/\s+/g, '')));
let date = document.getElementById("date")
let year = document.getElementById("year")
let cvc = document.getElementById("cvcInput")
let confirm = document.getElementById("confirm")
let form = document.getElementsByTagName("form")
let arrayInputs = Array.from(document.getElementsByClassName("alert"))
let inputs = document.querySelectorAll(".alert")



card.addEventListener("keyup", function checkInputType() {
    if (cardValueAsA_Number) {
        console.log("this is a number")
        const cleave = new Cleave("#card", {
            creditCard: true,
            delimiter: " ",
            onCreditCardTypeChanged: function(type) {
                console.log(type);
            }
        })
        promptDataType("")
    }
})


// onsubmit="checkEmptyInputs"

// let ticker = false;
// confirm.addEventListener("click", function checkEmptyInputs(event) {
//     console.log('this button was clicked');

//     cardLength()
//     cvcLength()
//     submit()
// })
let submitForm;

function checkEmptyInputs() {
    console.log('this button was clicked');
    for (const input of inputs) {
        if (input.value == "") {
            emptyInputsPrompt(input, "This field cant be blank")
        }
    }
    cardLength();
    cvcLength();


}

let inputTags = document.getElementsByTagName('input')

document.getElementById('formTag').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submitted');
    document.getElementById("thank-you").classList.toggle("thank-you-submitted");
    document.getElementById("formTag").style.display = "none"
})


document.getElementById('thank-you').addEventListener('click', () => {
    console.log('submitted');
    document.getElementById("thank-you").className = "thank-you"
    document.getElementById("formTag").style.display = "unset";



    for (const input of inputs) {
        input.value = ""
    }

})


function cardLength() {
    if (card.value.length < 16 && card.value.length > 0) {
        promptDataType(`<br> must be 16 characters`)
    }

}

function cvcLength() {
    if (cvc.value.length < 3 && cvc.value.length > 0) {
        cvcCheck(`<br> must be 3 characters`)
    }
}



function promptDataType(error) {
    let warning = card.parentNode.querySelector("#number");
    warning.innerHTML = error
}

function cvcCheck(error) {
    let warning = cvc.parentNode.querySelector("#cvcprompt");
    warning.innerHTML = error;
}

document.querySelectorAll(".alert").forEach((e) => {
    e.addEventListener("keyup", function changeAfterSubmitting() {
        emptyInputsPrompt(e, "")
    })
})


function emptyInputsPrompt(inputTag, warning) {
    let warnings = inputTag.parentNode.querySelector(".prompt");
    warnings.innerHTML = warning;
}

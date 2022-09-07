let name = document.getElementById("name")
let card = document.getElementById("card")
let cardValueAsA_Number = Number.isInteger(Number(card.value.replace(/\s+/g, '')));
let date = document.getElementById("date")
let year = document.getElementById("year")
let cvc = document.getElementById("cvcInput")
let confirm = document.getElementById("confirm")
let form = document.getElementsByTagName("form")
let arrayInputs = Array.from(document.getElementsByClassName("alert"))



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







confirm.addEventListener("click", function checkEmptyInputs() {
    document.querySelectorAll(".alert").forEach((e) => {
        if (!e.value === "") {
            emptyInputs(e, "")

        } else if (e.value === "") {
            let warningMessage = "<br>" + "This field cant be blank"
            emptyInputs(e, warningMessage)

        } else if (card.value.length < 16 & card.value.length > 0) {
            let warningMessage = "<br>" + "must be 16 characters"
            promptDataType(warningMessage)
        } else if (cvc.value.length < 3 && cvc.value.length > 0) {
            cvcCheck("this field requires 3 values")
        } else {
            document.getElementById("thank-you").classList.toggle("thank-you-submitted");
            document.getElementById("form").style.display = "none"
        }
    })
})

function promptDataType(error) {
    let warning = card.parentNode.querySelector("#number");
    warning.innerHTML = error
}

function cvcCheck(e) {
    let warning = cvc.parentNode.querySelector("#cvcAlert");
    warning.innerHTML = e
}

document.querySelectorAll(".alert").forEach((e) => {
    e.addEventListener("keyup", function changeAfterSubmitting() {
        emptyInputs(e, "")
    })
})


function emptyInputs(inputTag, warning) {
    let warnings = inputTag.parentNode.querySelector(".prompt");
    warnings.innerHTML = warning
}
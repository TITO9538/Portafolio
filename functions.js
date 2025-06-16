// SPINNER FORM

const spinnerForm = document.querySelector("#spinnerForm");
const formSubmitedM = document.querySelector("#formSubmited");

function showSpinnerForm() {
    spinnerForm.classList.remove("hidden");
    spinnerForm.classList.add("flex");
}

function hideSpinnerForm() {
    spinnerForm.classList.remove("flex");
    spinnerForm.classList.add("hidden");
}

function formSubmited() {
    formSubmitedM.classList.remove("hidden");
    formSubmitedM.classList.add("flex");
}

function formSubmitedOut() {
    formSubmitedM.classList.remove("flex");
    formSubmitedM.classList.add("hidden");
}

export {showSpinnerForm, hideSpinnerForm, formSubmited, formSubmitedOut};
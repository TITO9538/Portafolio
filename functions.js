// SPINNER FORM

const spinnerForm = document.querySelector("#spinnerForm");
const formSubmited = document.querySelector("#formSubmited");

function showSpinnerForm() {
    spinnerForm.classList.remove("hidden");
    spinnerForm.classList.add("flex");
}

function hideSpinnerForm() {
    spinnerForm.classList.remove("flex");
    spinnerForm.classList.add("hidden");
}

function formSubmited() {
    spinnerForm.classList.remove("hidden");
    spinnerForm.classList.add("flex");
}

function formSubmitedOut() {
    spinnerForm.classList.remove("flex");
    spinnerForm.classList.add("hidden");
}

export {showSpinnerForm, hideSpinnerForm, formSubmited, formSubmitedOut};
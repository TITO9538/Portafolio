import { myProyects } from "./proyects.js";
import { showSpinnerForm, hideSpinnerForm, formSubmited, formSubmitedOut } from "./functions.js";

//MENU DESPLEGABLE
const botonMenu = document.querySelector("#botonMenu");
const menu = document.querySelector("#navbar-sticky");

botonMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

let proyects = document.querySelector("#proyects");

for (let i = 0; i < myProyects.length; i++) {
  proyects.innerHTML += ` <div
             class="h-full w-full flex flex-col items-center justify-center rounded-md bg-slate-300 dark:bg-slate-700 p-3 shadow-xl">
             <img src="${myProyects[i].img}" alt="La Libreria de Nefi" class="h-[60%]" />
             <h4 class="font-bold lg:text-2xl">${myProyects[i].nombre}</h4>
             <p class="text-xs lg:text-base">${myProyects[i].descripcion}</p>
           </div>`;
}

//FORM

const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  showSpinnerForm();
  let nameForm = form.elements["name"].value;
  let emailForm = form.elements["email"].value;

  console.log(`
    Nombre ingresado: ${nameForm}
    Email ingresado: ${emailForm}
    `);

  setTimeout(() => {
    hideSpinnerForm();
    formSubmited();
    form.reset();
  }, 1000);
  setTimeout(() => {
    formSubmitedOut();
  }, 3000);

});

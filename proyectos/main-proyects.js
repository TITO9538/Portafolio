import { myProyects } from "../proyects.js";

let imgs = [
  {
    img: "../img/La libreria de Nefi.png",
  },
  {
    img: "../img/Concierto.png",
  },
  {
    img: "../img/Botones.png",
  },
  {
    img: "../img/Blog.png",
  },
  {
    img: "../img/Formulario.png",
  },
  {
    img: "../img/Pagina jesus.png",
  },
];


let proyectsId = document.querySelector("#proyects");

function renderProyects(proyect, whereToShow) {
    for (let i = 0; i < proyect.length; i++) {
  whereToShow.innerHTML += `<div class="bg-[#84a98c] m-3 p-5 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-110">
                <img src="${imgs[i].img}" alt="Proyecto" class="rounded-xl shadow-2xl">
                <h2 class="pt-3 font-bold text-xl text-transparent bg-clip-text bg-[#2f3e46]">${myProyects[i].nombre}</h2>
                <h3 class="text-[#354f52] text-sm">${myProyects[i].descripcion}</h3>
            </div>`;
}
}
renderProyects(myProyects, proyectsId);
// SKILLS
const skills = document.querySelector("#skills");
let habilidades = [
    { nombre: "HTML", nivel: "Funval" },
    { nombre: "CSS", nivel: "Funval" },
    { nombre: "JS", nivel: "Funval" },
    { nombre: "Tailwind", nivel: "Funval" }
];
function skill(index) {
    return skills.innerHTML += `
    <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">${habilidades[index].nombre} ${habilidades[index].nivel}</span>
    `;
}
for (let index = 0; index < habilidades.length; index++) {
    skill(index);
}

//MENU DESPLEGABLE
const botonMenu = document.querySelector("#botonMenu");
const menu = document.querySelector("#navbar-sticky");

botonMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
// SKILLS
const skills = document.querySelector("#skills");
let habilidades = [
  { nombre: "HTML", nivel: "Funval" },
  { nombre: "CSS", nivel: "Funval" },
  { nombre: "JS", nivel: "Funval" },
  { nombre: "Tailwind", nivel: "Funval" },
];
function skill(index) {
  return (skills.innerHTML += `
    <div class="w-35 h-7 bg-indigo-100 text-indigo-800 text-xs text-center font-medium px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400 lg:text-base lg:w-45">
    ${habilidades[index].nombre}
    Niv. ${habilidades[index].nivel}
    </div>
    `);
}
for (let index = 0; index < habilidades.length; index++) {
  skill(index);
}
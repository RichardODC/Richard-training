document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada correctamente.");

  // Funcionalidad para cambiar el color de fondo al hacer clic en el encabezado
  const header = document.querySelector("header");
  header.addEventListener("click", () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "white" ? "#f4f4f4" : "white";
  });

  // Funcionalidad para mostrar un mensaje al hacer clic en los enlaces del menú
  const menuLinks = document.querySelectorAll("nav ul li a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      alert(`Has hecho clic en ${link.textContent}`);
    });
  });

  // Funcionalidad para cambiar a modo oscuro
  const modoOscuroBtn = document.getElementById("modoOscuroBtn");
  modoOscuroBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
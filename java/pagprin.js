const toggleBtn = document.getElementById('toggleBtn');
const closeBtn = document.getElementById('closeBtn');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

toggleBtn.addEventListener('click', () => {
  sideMenu.classList.add('active');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
});
// 🖼️ Ruta del GIF de la araña (debe estar en la carpeta /imagenes/)
  const gifSrc = "gifs/24Rx.gif";

  // 🕷️ Función para crear una araña en un tramo específico (borde)
  function crearTramo(clase, delay) {
    setTimeout(() => {
      const img = document.createElement("img");
      img.src = gifSrc;
      img.className = "spider " + clase;
      document.body.appendChild(img);

      // ❌ Elimina la araña después de 8 segundos (cuando termina el recorrido)
      setTimeout(() => img.remove(), 8000);
    }, delay);
  }

  // 🔁 Inicia una vuelta completa por los 4 bordes
  function iniciarRuta() {
    crearTramo("borde-inferior", 0);        // Parte inferior: izq → der
    crearTramo("borde-derecho", 8000);      // Lado derecho: abajo → arriba
    crearTramo("borde-superior", 16000);    // Parte superior: der → izq
    crearTramo("borde-izquierdo", 24000);   // Lado izquierdo: arriba → abajo
  }

  // ♻️ Ejecuta una vuelta cada 32 segundos
  setInterval(iniciarRuta, 32000);

  // ▶️ Ejecuta la primera vuelta apenas carga la página
  iniciarRuta();
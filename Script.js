function Validar() {
    const nombre = document.querySelector('input[type="text"]').value;
    const edad = document.querySelector('input[type="number"]').value;

    if (edad >= 18) {
        alert(`${nombre} puede votar., ya que ${nombre} tiene ${edad} años.`);
    } else {
        alert(`${nombre} no puede votar., ya que ${nombre} tiene ${edad} años.`);
    }
}


function crearBurbuja() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Tamaño aleatorio
    const size = Math.random() * 40 + 10;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    // Posición horizontal aleatoria
    bubble.style.left = Math.random() * window.innerWidth + "px";

    // Duración aleatoria
    bubble.style.animationDuration = (Math.random() * 5 + 3) + "s";

    document.getElementById("bubbles").appendChild(bubble);

    // Eliminar burbuja después de animación
    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(crearBurbuja, 200);
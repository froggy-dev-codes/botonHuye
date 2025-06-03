let boton = document.getElementById("botonHuye");

boton.addEventListener("mouseenter", (e) => {
    let x = Math.random() * (window.innerWidth - boton.offsetWidth);

    let y = Math.random() * (window.innerHeight - boton.offsetHeight)

    boton.style.left = `${x}px`;
    boton.style.top = `${y}px`;
})



let mouseTimer;
const tiempoInactivo = 2000; // 2 segundos sin moverse = quieto

document.addEventListener("mousemove", () => {
    clearTimeout(mouseTimer); // Reinicia el temporizador si se mueve

    mouseTimer = setTimeout(() => {
        boton.style.left = `50vw`;
        boton.style.top = `50vh`;
    }, tiempoInactivo);
});
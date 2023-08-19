function objectsAnimation() {
  const airplane = document.getElementById("plane");
  anime({
    targets: airplane,
    translateX: "+=1700", // Mover hacia la derecha
    translateY: "-=390", // Mantener la misma coordenada Y
    easing: "linear",
    duration: 5000,
    loop: true,
    duration: 30000,
    begin: function (anim) {
      airplane.style.transform = "translate(-10, -250px)"; // Reiniciar la posición Y
    },
  });
}

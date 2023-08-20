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

  const clouds = document.getElementById("cloud");
  const clouds1 = document.getElementById("cloud1");
  const clouds2 = document.getElementById("cloud2");
  const clouds3 = document.getElementById("cloud3");
  const clouds4 = document.getElementById("cloud4");

  anime({
    targets: clouds,
    translateY: -5,
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
  });
  anime({
    targets: clouds1,
    translateY: 5,
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
  });
  anime({
    targets: clouds2,
    translateY: -5,
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
  });
  anime({
    targets: clouds3,
    translateY: -5,
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
  });
  anime({
    targets: clouds4,
    translateY: 5,
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
  });

  const spiderman = document.getElementById("spiderman");

  anime({
    targets: spiderman,
    rotate: [-15, 15], // Cambiar el ángulo de rotación de -15 a 15 grados
    easing: "easeInOutSine",
    direction: "alternate",
    loop: true,
  });

  const crows = document.getElementById("container-crow");
  anime({
    targets: crows,
    translateX: 900,
    easing: "linear",
    duration: 30000,
    loop: true,
  });

  const crows2 = document.getElementById("container-crow2");
  anime({
    targets: crows2,
    translateY: -900,
    translateX: 900,
    delay:2000,
    easing: "linear",
    duration: 20000,
    loop: true,
  });
}

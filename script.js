function isDay() {
  const backgroundImg = document.getElementById("backgroundImg");
  backgroundImg.src = "img/sunny2.jpg.png";

  const airplane = document.getElementById("plane");
  airplane.src = "img/plane-silhouette-th.png";
  anime({
    targets: airplane,
    translateX: "+=1700", // Mover hacia la derecha
    translateY: "-=600", // Mantener la misma coordenada Y
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
  const clouds3 = document.getElementById("cloud3");
  const clouds4 = document.getElementById("cloud4");

  clouds.src = "img/cloud.png";
  clouds1.src = "img/cloud 2.png";
  clouds3.src = "img/cloud.png";
  clouds4.src = "img/cloud 2.png";

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
  spiderman.src = "img/spiderman2.png";

  anime({
    targets: spiderman,
    rotate: [-15, 15], // Cambiar el ángulo de rotación de -15 a 15 grados
    easing: "easeInOutSine",
    direction: "alternate",
    loop: true,
  });

  const crows = document.getElementById("container-crow");
  const crow = document.getElementById("crow");
  const crow1 = document.getElementById("crow1");
  const crow2 = document.getElementById("crow2");
  const crow3 = document.getElementById("crow3");

  crow.src = "img/crow1.gif";
  crow1.src = "img/crow1.gif";
  crow2.src = "img/crow1.gif";
  crow3.src = "img/crow1.gif";

  anime({
    targets: crows,
    translateX: 900,
    easing: "linear",
    duration: 30000,
    loop: true,
  });

  const crows2 = document.getElementById("container-crow2");

  crows2.innerHTML =
    '<div><img id="crow" src="img/crow1.gif" alt="" /><img id="crow1" src="img/crow1.gif" alt="" /></div><div><img id="crow2" src="img/crow1.gif" alt="" /><img id="crow3" src="img/crow1.gif" alt="" /></div>';

  anime({
    targets: crows2,
    translateY: -900,
    translateX: 900,
    delay: 2000,
    easing: "linear",
    duration: 20000,
    loop: true,
  });
}

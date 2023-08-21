function isDay() {
  const backgroundImg = document.getElementById("backgroundImg");
  backgroundImg.src = "img/sky3.jpg";

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

  //Adding style clouds
  cloud.style.width = "30%";
  cloud.style.position = "absolute";
  cloud.style.marginTop = "5%";
  cloud.style.marginLeft = "26%";
  cloud.style.zIndex = "1";

  cloud1.style.width = "25%";
  cloud1.style.marginTop = "12%";
  cloud1.style.position = "absolute";
  cloud1.style.zIndex = "1";

  cloud3.style.width = "30%";
  cloud3.style.marginTop = "19%";
  cloud3.style.marginLeft = "49%";
  cloud3.style.position = "absolute";
  cloud3.style.zIndex = "0";

  cloud4.style.width = "40%";
  cloud4.style.marginTop = "-10%";
  cloud4.style.marginLeft = "70%";
  cloud4.style.position = "absolute";
  cloud4.style.zIndex = "1";

  const crows = document.getElementById("container-crow");
  const crow = document.getElementById("crow");
  const crow1 = document.getElementById("crow1");
  const crow2 = document.getElementById("crow2");
  const crow3 = document.getElementById("crow3");

  crow.src = "img/crow1.gif";
  crow1.src = "img/crow1.gif";
  crow2.src = "img/crow1.gif";
  crow3.src = "img/crow1.gif";

  crows.style.position = "absolute";
  crows.style.zIndex = "0";
  crows.style.display = "flex";
  crows.style.flexDirection = "column";
  crows.style.marginTop = "-25%";

  anime({
    targets: crows,
    translateX: 1500,
    easing: "linear",
    duration: 30000,
    loop: true,
  });

  const crows2 = document.getElementById("container-crow2");

  crows2.innerHTML =
    '<div><img id="crow" src="img/crow1.gif" alt="" /><img id="crow1" src="img/crow1.gif" alt="" /></div><div><img id="crow2" src="img/crow1.gif" alt="" /><img id="crow3" src="img/crow1.gif" alt="" /></div>';
  crows2.style.position = "absolute";

  crows2.style.display = "flex";
  crows2.style.flexDirection = "column";
  crows2.style.marginLeft = "50%";
  crows2.style.width = "100%";

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

function isSunset() {
  const backgroundImg = document.getElementById("backgroundImg");
  backgroundImg.src = "img/sunset.png";

  const clouds = document.getElementById("cloud");
  const clouds1 = document.getElementById("cloud1");
  const clouds3 = document.getElementById("cloud3");
  const clouds4 = document.getElementById("cloud4");

  clouds.src = "img/pink cloud3.png";
  clouds1.src = "img/pink cloud3.png";
  clouds3.src = "img/pink cloud3.png";
  clouds4.src = "img/pink cloud3.png";

  //Adding style clouds
  clouds.style.width = "20%";
  clouds.style.position = "absolute";
  clouds.style.marginTop = "-5%";
  clouds.style.marginLeft = "26%";
  clouds.style.zIndex = "1";

  clouds1.style.width = "25%";
  clouds1.style.marginTop = "12%";
  clouds1.style.position = "absolute";
  clouds1.style.zIndex = "1";

  clouds3.style.width = "30%";
  clouds3.style.marginTop = "20%";
  clouds3.style.marginLeft = "49%";
  clouds3.style.position = "absolute";
  clouds3.style.zIndex = "0";

  clouds4.style.width = "40%";
  clouds4.style.marginTop = "-10%";
  clouds4.style.marginLeft = "70%";
  clouds4.style.position = "absolute";
  clouds4.style.zIndex = "1";

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

  //Adding Smoke
  const smoke = document.getElementById("smoke");
  smoke.src = "img/smoke.png";
  //Adding fire
  const fire = document.getElementById("fire");
  fire.src = "img/fire (2).png";

  anime({
    targets: fire,
    scale: 1.2,
    loop: true,
    easing: "linear",
    direction: "alternate",
  });
  //Adding windows
  const containers = [
    { id: "container-windows", topMargin: "25.8%", leftMargin: "40.9%" },
    { id: "container-windows-2", topMargin: "27.8%", leftMargin: "41.3%" },
    { id: "container-windows-3", topMargin: "29.8%", leftMargin: "40.8%" },
    { id: "container-windows-4", topMargin: "31.8%", leftMargin: "40.8%" },
    { id: "container-windows-5", topMargin: "33.8%", leftMargin: "40.8%" },
    { id: "container-windows-6", topMargin: "35.8%", leftMargin: "40.8%" },
    { id: "container-windows-7", topMargin: "37.8%", leftMargin: "40.8%" },
    { id: "container-windows-8", topMargin: "37.8%", leftMargin: "50.3%" },
    { id: "container-windows-9", topMargin: "35.8%", leftMargin: "49.8%" },
    { id: "container-windows-10", topMargin: "33.8%", leftMargin: "49.9%" },
    { id: "container-windows-11", topMargin: "31.8%", leftMargin: "51.3%" },
    { id: "container-windows-12", topMargin: "29.8%", leftMargin: "51.3%" },
    { id: "container-windows-13", topMargin: "27.8%", leftMargin: "51.3%" },
    { id: "container-windows-14", topMargin: "33.8%", leftMargin: "61.3%" },
    { id: "container-windows-15", topMargin: "35.8%", leftMargin: "61.3%" },
    { id: "container-windows-16", topMargin: "37.8%", leftMargin: "61.3%" },
    { id: "container-windows-17", topMargin: "39.8%", leftMargin: "61.3%" },
    { id: "container-windows-18", topMargin: "41.8%", leftMargin: "61.3%" },
    { id: "container-windows-19", topMargin: "43.8%", leftMargin: "61.3%" },
    { id: "container-windows-20", topMargin: "41.8%", leftMargin: "69.3%" },
    { id: "container-windows-21", topMargin: "39.8%", leftMargin: "69.3%" },
    { id: "container-windows-22", topMargin: "37.8%", leftMargin: "69.3%" },
    { id: "container-windows-23", topMargin: "35.8%", leftMargin: "69.3%" },
    { id: "container-windows-24", topMargin: "33.8%", leftMargin: "69.3%" },
    { id: "container-windows-25", topMargin: "30.8%", leftMargin: "30.3%" },
    { id: "container-windows-26", topMargin: "34.8%", leftMargin: "30.3%" },
    { id: "container-windows-27", topMargin: "34.8%", leftMargin: "4.9%" },
    { id: "container-windows-28", topMargin: "36.8%", leftMargin: "4.9%" },
    { id: "container-windows-29", topMargin: "38.8%", leftMargin: "4.9%" },

    // Agrega más objetos aquí para cada contenedor adicional
  ];

  const imagePath = "img/window.png";

  function setWindowImages(element, imagePath) {
    element.src = imagePath;
  }

  function applyContainerStyles(containerElement, topMargin, leftMargin) {
    containerElement.style.zIndex = "2";
    containerElement.style.position = "absolute";
    containerElement.style.display = "flex";
    containerElement.style.flexDirection = "row";
    containerElement.style.height = "0.8%";
    containerElement.style.marginLeft = leftMargin;
    containerElement.style.marginTop = topMargin;
    containerElement.style.gap = "5px";
  }

  containers.forEach((containerInfo) => {
    const container = document.getElementById(containerInfo.id);
    const windows = container.querySelectorAll(".window");

    windows.forEach((window) => {
      setWindowImages(window, imagePath);
    });

    applyContainerStyles(
      container,
      containerInfo.topMargin,
      containerInfo.leftMargin
    );
  });

  //Adding seagulls
  const containerBirds = document.getElementById("container-birds");
  const seagulls = document.getElementById("group-birds");
  const seagulls2 = document.getElementById("group-birds2");
  const seagulls3 = document.getElementById("group-birds3");
  const seagulls4 = document.getElementById("group-birds4");
  const seagulls5 = document.getElementById("group-birds5");
  const seagulls6 = document.getElementById("group-birds6");
  const seagulls7 = document.getElementById("group-birds7");

  seagulls.src = "img/seagulls.gif";
  seagulls2.src = "img/seagulls.gif";
  seagulls3.src = "img/seagulls.gif";
  seagulls4.src = "img/seagulls.gif";
  seagulls5.src = "img/seagulls.gif";
  seagulls6.src = "img/seagulls.gif";
  seagulls7.src = "img/seagulls.gif";
  //Style seagulls1
  seagulls.style.position = "absolute";
  seagulls.style.width = "4%";
  seagulls.style.marginLeft = "92%";
  seagulls.style.marginTop = "4%";
  seagulls.style.zIndex = "2";
  //Style seagulls2
  seagulls2.style.position = "absolute";
  seagulls2.style.width = "4%";
  seagulls2.style.marginLeft = "90%";
  seagulls2.style.marginTop = "3%";
  seagulls2.style.zIndex = "0";
  //Style seagulls3
  seagulls3.style.width = "4%";
  seagulls3.style.position = "absolute";
  seagulls3.style.marginLeft = "93%";
  seagulls3.style.marginTop = "5%";
  seagulls3.style.zIndex = "2";
  //Style seagulls4
  seagulls4.style.position = "absolute";
  seagulls4.style.width = "4%";
  seagulls4.style.marginLeft = "95%";
  seagulls4.style.marginTop = "5%";
  seagulls4.style.zIndex = "2";
  //Style seagulls5
  seagulls5.style.position = "absolute";
  seagulls5.style.width = "5%";
  seagulls5.style.marginLeft = "93%";
  seagulls5.style.marginTop = "7.2%";
  seagulls5.style.zIndex = "0";
  //Style seagulls6
  seagulls6.style.position = "absolute";
  seagulls6.style.width = "5%";
  seagulls6.style.marginLeft = "93%";
  seagulls6.style.marginTop = "6%";
  seagulls6.style.zIndex = "2";
  //Style seagulls7
  seagulls7.style.position = "absolute";
  seagulls7.style.width = "5%";
  seagulls7.style.marginLeft = "87%";
  seagulls7.style.marginTop = "8%";
  seagulls7.style.zIndex = "0";

  anime({
    targets: seagulls,
    translateX: -1500,
    loop: true,
    easing: "linear",
    duration: 120000,
  });
  anime({
    targets: seagulls2,
    translateX: -1500,
    loop: true,
    easing: "linear",
    duration: 120000,
  });
  anime({
    targets: seagulls3,
    translateX: -1500,
    loop: true,
    easing: "linear",
    duration: 120000,
  });
  anime({
    targets: seagulls4,
    translateX: -1500,
    loop: true,
    easing: "linear",
    duration: 120000,
  });
  anime({
    targets: seagulls5,
    translateX: -1500,
    loop: true,
    easing: "linear",
    duration: 120000,
  });
  anime({
    targets: seagulls6,
    translateX: -1500,
    loop: true,
    easing: "linear",
    duration: 120000,
  });
  anime({
    targets: seagulls7,
    translateX: -1500,
    loop: true,
    easing: "linear",
    duration: 120000,
  });
  // Adding cars
  const car = document.getElementById("car");
  car.src = "img/caar2.png";

  anime({
    targets: car,
    translateX: -280,
    easing: "linear",
    duration: 5000,
    loop: true,
  });
  const car2 = document.getElementById("car2");
  car2.src = "img/caar3.png";

  anime({
    targets: car2,
    translateX: 280,
    easing: "linear",
    delay: 2000,
    duration: 5000,
    loop: true,
  });

  const car3 = document.getElementById("car3");
  car3.src = "img/taxi.png";

  anime({
    targets: car3,
    translateX: -280,
    easing: "linear",
    delay: 3000,
    duration: 5000,
    loop: true,
  });

  //Turning from off to on
  const lightsOn = document.querySelectorAll(".turnLight");

  lightsOn.forEach((light, index) => {
    const delay = Math.random() * 60000;
    anime({
      targets: light,
      opacity: 1,
      delay: delay,
    });
  });
}

function isNight() {
  const backgroundImg = document.getElementById("backgroundImg");
  backgroundImg.src = "img/night.jpg";

  //Adding red lights
  const redLight1 = document.getElementById("redLight");
  const redLight2 = document.getElementById("redLight2");
  const redLight3 = document.getElementById("redLight3");
  const redLight4 = document.getElementById("redLight4");
  const redLight5 = document.getElementById("redLight5");
  const redLight6 = document.getElementById("redLight6");
  const redLight7 = document.getElementById("redLight7");
  const redLight8 = document.getElementById("redLight8");

  redLight1.src = "img/redLight.png";
  redLight1.style.marginTop = "31.3%";
  redLight1.style.marginLeft = "2.4%";

  redLight2.src = "img/redLight.png";
  redLight2.style.marginTop = "39%";
  redLight2.style.marginLeft = "15.7%";

  redLight3.src = "img/redLight.png";
  redLight3.style.marginTop = "23%";
  redLight3.style.marginLeft = "27.9%";

  redLight4.src = "img/redLight.png";
  redLight4.style.marginTop = "9%";
  redLight4.style.marginLeft = "38.6%";
  redLight4.style.width = "7%";

  redLight5.src = "img/redLight.png";
  redLight5.style.marginTop = "15%";
  redLight5.style.marginLeft = "49.5%";
  redLight5.style.width = "5%";

  redLight6.src = "img/redLight.png";
  redLight6.style.marginTop = "26%";
  redLight6.style.marginLeft = "67.9%";

  redLight7.src = "img/redLight.png";
  redLight7.style.marginTop = "30.6%";
  redLight7.style.marginLeft = "59.1%";

  redLight8.src = "img/redLight.png";
  redLight8.style.marginTop = "40.6%";
  redLight8.style.marginLeft = "85.3%";

  const redLightClass = document.querySelectorAll(".redLightClass");

  redLightClass.forEach((flash) => {
    const delay = Math.random() * 5000;
    anime({
      targets: flash,
      opacity: 0,
      delay: delay,
      loop: true,
      direction: "alternate",
      duration: 2000,
    });
  });
  //Adding blue lights
  const blueLight1 = document.getElementById("blueLight1");
  const blueLight2 = document.getElementById("blueLight2");
  const blueLight3 = document.getElementById("blueLight3");
  const blueLight4 = document.getElementById("blueLight4");
  const blueLight5 = document.getElementById("blueLight5");
  const blueLight6 = document.getElementById("blueLight6");

  blueLight1.src = "img/blueLight.png";
  blueLight1.style.marginLeft = "10%";
  blueLight1.style.marginTop = "44.8%";

  blueLight2.src = "img/blueLight.png";
  blueLight2.style.marginLeft = "12%";
  blueLight2.style.marginTop = "43%";

  blueLight3.src = "img/blueLight.png";
  blueLight3.style.marginLeft = "14%";
  blueLight3.style.marginTop = "40.9%";

  blueLight4.src = "img/blueLight.png";
  blueLight4.style.marginLeft = "16.8%";
  blueLight4.style.marginTop = "40.9%";

  blueLight5.src = "img/blueLight.png";
  blueLight5.style.marginLeft = "19%";
  blueLight5.style.marginTop = "43%";

  blueLight6.src = "img/blueLight.png";
  blueLight6.style.marginLeft = "21%";
  blueLight6.style.marginTop = "44.8%";

  const blueLightClass = document.querySelectorAll(".blueLightClass");
  blueLightClass.forEach((flashBlue) => {
    anime({
      targets: flashBlue,
      opacity: 0,
      easing: "linear",
      loop: true,
      direction: "alternate",
      duration: 1500,
    });
  });

  //Adding helicopter
  const helicopter = document.getElementById("helicopter");
  helicopter.src = "img/helicopter.gif";
  helicopter.style.position = "absolute";
  helicopter.style.width = "5%";
  helicopter.style.marginLeft = "100%";
  helicopter.style.marginTop = "20%";
  helicopter.style.zIndex = 1;

  anime({
    targets: helicopter,
    translateX: -1800,
    easing: "linear",
    duration: 20000,
    loop: true,
  });

  //Adding comet
  const comet = document.getElementById("comet");
  comet.src = "img/comet.png";
  comet.style.position = "absolute";
  comet.style.width = "10%";
  comet.style.marginTop = "28%";
  comet.style.marginLeft = "-15%";
  comet.style.zIndex = 1;

  anime({
    targets: comet,
    translateX: 1700,
    translateY: -600,
    easing: "linear",
    duration: 5000,
    loop: true,
    delay: 4000,
  });
  //Adding moon
  const moon = document.getElementById("moon");
  moon.src = "img/moon.png";
  moon.style.position = "absolute";
  moon.style.width = "10%";
  moon.style.marginLeft = "85%";
  moon.style.marginTop = "3%";
  moon.style.zIndex = 0;

  anime({
    targets:moon,
    translateY:10,
    rotate:"1turn",
    duration:30000,
    easing:"linear",
    loop:true,
    direction:"alternate"
  })

  //Adding windows
  const containers = [
    { id: "container-windows", topMargin: "25.8%", leftMargin: "40.9%" },
    { id: "container-windows-2", topMargin: "27.8%", leftMargin: "41.3%" },
    { id: "container-windows-3", topMargin: "29.8%", leftMargin: "40.8%" },
    { id: "container-windows-4", topMargin: "31.8%", leftMargin: "40.8%" },
    { id: "container-windows-5", topMargin: "33.8%", leftMargin: "40.8%" },
    { id: "container-windows-6", topMargin: "35.8%", leftMargin: "40.8%" },
    { id: "container-windows-7", topMargin: "37.8%", leftMargin: "40.8%" },
    { id: "container-windows-8", topMargin: "37.8%", leftMargin: "50.3%" },
    { id: "container-windows-9", topMargin: "35.8%", leftMargin: "49.8%" },
    { id: "container-windows-10", topMargin: "33.8%", leftMargin: "49.9%" },
    { id: "container-windows-11", topMargin: "31.8%", leftMargin: "51.3%" },
    { id: "container-windows-12", topMargin: "29.8%", leftMargin: "51.3%" },
    { id: "container-windows-13", topMargin: "27.8%", leftMargin: "51.3%" },
    { id: "container-windows-14", topMargin: "33.8%", leftMargin: "61.3%" },
    { id: "container-windows-15", topMargin: "35.8%", leftMargin: "61.3%" },
    { id: "container-windows-16", topMargin: "37.8%", leftMargin: "61.3%" },
    { id: "container-windows-17", topMargin: "39.8%", leftMargin: "61.3%" },
    { id: "container-windows-18", topMargin: "41.8%", leftMargin: "61.3%" },
    { id: "container-windows-19", topMargin: "43.8%", leftMargin: "61.3%" },
    { id: "container-windows-20", topMargin: "41.8%", leftMargin: "69.3%" },
    { id: "container-windows-21", topMargin: "39.8%", leftMargin: "69.3%" },
    { id: "container-windows-22", topMargin: "37.8%", leftMargin: "69.3%" },
    { id: "container-windows-23", topMargin: "35.8%", leftMargin: "69.3%" },
    { id: "container-windows-24", topMargin: "33.8%", leftMargin: "69.3%" },
    { id: "container-windows-25", topMargin: "30.8%", leftMargin: "30.3%" },
    { id: "container-windows-26", topMargin: "34.8%", leftMargin: "30.3%" },
    { id: "container-windows-27", topMargin: "34.8%", leftMargin: "4.9%" },
    { id: "container-windows-28", topMargin: "36.8%", leftMargin: "4.9%" },
    { id: "container-windows-29", topMargin: "38.8%", leftMargin: "4.9%" },

    // Agrega más objetos aquí para cada contenedor adicional
  ];

  const imagePath = "img/window.png";

  function setWindowImages(element, imagePath) {
    element.src = imagePath;
  }

  function applyContainerStyles(containerElement, topMargin, leftMargin) {
    containerElement.style.zIndex = "2";
    containerElement.style.position = "absolute";
    containerElement.style.display = "flex";
    containerElement.style.flexDirection = "row";
    containerElement.style.height = "0.8%";
    containerElement.style.marginLeft = leftMargin;
    containerElement.style.marginTop = topMargin;
    containerElement.style.gap = "5px";
  }

  containers.forEach((containerInfo) => {
    const container = document.getElementById(containerInfo.id);
    const windows = container.querySelectorAll(".window");

    windows.forEach((window) => {
      setWindowImages(window, imagePath);
    });

    applyContainerStyles(
      container,
      containerInfo.topMargin,
      containerInfo.leftMargin
    );
  });
  //Turning from on to off
  const lightsOn = document.querySelectorAll(".turnLight");

  lightsOn.forEach((element) => {
    element.style.opacity = 1;
  });

  lightsOn.forEach((light) => {
    const delay = Math.random() * 30000;
    anime({
      targets: light,
      opacity: 0,
      delay: delay,
    });
  });
}

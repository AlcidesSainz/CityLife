function airplaneFlying() {
  const airplane = document.getElementById("plane");

  anime({
    targets: airplane,
    translateX: 100,
    translateY: -200,
    easing: "easeInOutExpo",
    duration: 5000,
    loop: true,


  });
}

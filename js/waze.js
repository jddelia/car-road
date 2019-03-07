let car = document.getElementById('car');
let carPosition = (window.innerHeight / 2.5) + window.pageYOffset;
car.setAttribute("style", `top: ${carPosition}px;`);

function driveCar() {
  carPosition = (window.innerHeight / 2.5) + window.pageYOffset;
  car.setAttribute("style", `top: ${carPosition}px;`);
}

window.addEventListener('scroll', driveCar);
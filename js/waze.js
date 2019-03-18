let car = document.getElementById('car');
let carPosition = (window.innerHeight / 2.5) + window.pageYOffset;
car.setAttribute("style", `transform: translateY(${carPosition}px);`);

function driveCar() {
  carPosition = (window.innerHeight / 2.5) + window.pageYOffset;
  car.setAttribute("style", `transform: translateY(${carPosition}px);`);
}

window.addEventListener('scroll', driveCar);
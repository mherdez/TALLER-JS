
// Seleccionamos el contenedor del DOM
const container = document.querySelector('.container');

// Revolvemos el arreglo del memorama
const suffle = (arr) => arr.sort(() => Math.random() - 0.5);

// Figuras del memorama
const figuras = ['🐶', '🐱', '🦁', '🐼', '🐮', '🐰'];

// Creamos el arreglo a traves de la funcion suffle
const animales = suffle([...figuras, ...figuras]);

// Visualizar las tarjetas del memorama
animales.forEach((animal, index) => container.innerHTML += `<div class="box" onclick="handleClick(${index})">?</div>`);

let parejas = [];
let parejasEncontradas = [];

// Funcion handleClick()
const handleClick = (id) => {

  const boxes = document.querySelectorAll('.box');

  boxes[id].textContent = animales[id];
  parejas.push(id);
  if (parejas.length == 2) {
    if (animales[parejas[0]] === animales[parejas[1]]) {
      parejasEncontradas.push(animales[parejas[0]]);
      console.log(parejasEncontradas);
      parejas = [];
      if (parejasEncontradas.length === 6) {
        var end = Date.now() + (5 * 1000);
        // go Buckeyes!
        var colors = ['#000', '#ff0000', '#f3f3f3'];
        (function frame() {
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: {
              x: 0
            },
            colors: colors
          });
          confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: {
              x: 1
            },
            colors: colors
          });
          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());
      }
    } else {
      setTimeout(() => {
        boxes[parejas[0]].textContent = '?';
        boxes[parejas[1]].textContent = '?';
        parejas = [];
      }, 500);
    }
  }
}



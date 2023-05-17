const container = document.querySelector('.container');

const suffle = ( arr ) => arr.sort( () => Math.random() - 0.5)

const figuras = ['🐶', '🐱', '🦁', '🐼', '🐮', '🐰']

const animales = suffle([...figuras, ...figuras]);

animales.forEach( animal => container.innerHTML +=  `<div class="box">${animal}</div>`)



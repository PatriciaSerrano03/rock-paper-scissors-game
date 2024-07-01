// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const PaperElement = document.getElementById('paper');
const ScissorsElement = document.getElementById('scissors');
const RockElement = document.getElementById('rock');

let userElection = '';

function play(userElection) {
  // Definir las opciones disponibles por medio de un Arreglo
  let options = [RockElement, PaperElement, ScissorsElement];

  // Generar la elección aleatoria de la máquina con metodos
  let computerElection = options[Math.floor(Math.random() * options.length)];

  // Verificar el resultado del juego con condicional if
  if (userElection === computerElection) {
    // Empate
    console.log('Empate. Ambos eligieron ' + eleccionUsuario + '.');
  } else if (
    (userElection === RockElement && computerElection === ScissorsElement) ||
    (userElection === PaperElement && computerElection === RockElement) ||
    (userElection === ScissorsElement && computerElection === PaperElement)
  ) {
    // El usuario gana
    console.log('¡Ganaste! Tú eliges ' + userElection + ' y la máquina elige ' + computerElection + '.');
  } else {
    // El usuario pierde
    console.log('Perdiste. Tú eliges ' + userElection + ' y la máquina elige ' + computerElection + '.');
  }
}

// Verificar si la elección del usuario es válida y jugar el juego
if (userElection === 'rock' || userElection === 'paper' || userElection === 'scissors') {
  play(userElection);
} else {
  console.log('Elección inválida. Por favor, elige rock, paper o scissors.');
}

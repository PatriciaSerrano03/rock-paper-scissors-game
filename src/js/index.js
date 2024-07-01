// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const gameItemsElement = document.getElementById('game-items');
/* const userElectionElement = document.getElementById('user-picked');
const computerElectionElement = document.getElementById('computer-picked'); */
const gameResultElement = document.getElementById('game-results');
const pointsUserElement = document.getElementById('points-user');
const pointsComputerElement = document.getElementById('points-pc');

const options = ['rock', 'paper', 'scissors'];

let userElection = null;
let computerElection = null;
let userPoints = 0;
let computerPoints = 0;

// Objeto con las reglas del juego
const gameOptions = {
  rock: {
    scissors: true,
    lizard: true,
    paper: false,
    spock: false,
  },
  scissors: {
    paper: true,
    lizard: true,
    rock: false,
    spock: false,
  },
  paper: {
    rock: true,
    spock: true,
    scissors: false,
    lizard: false,
  },
  lizard: {
    rock: true,
    spock: true,
    scissors: false,
    paper: false,
  },
  spock: {
    rock: true,
    scissors: true,
    paper: false,
    lizard: false,
  },
};

//Puntuaciones
const updateScore = () => {
  pointsUserElement.textContent = userPoints;
  pointsComputerElement.textContent = computerPoints;
};

//Empate, Ganar, Perder
const checkWinner = () => {
  console.log(userElection + ' - ' + computerElection);
  if (userElection === computerElection) {
    console.log('Empate');
    return;
  }

  if (gameOptions[userElection][computerElection]) {
    console.log('WIN');
    userPoints++;
  } else {
    console.log('LOSE');
    computerPoints++;
  }

  updateScore();
};

//Elección del ordenador
const getcomputerSelection = () => {
  const randomNumber = Math.floor(Math.random() * options.length);
  computerElection = options[randomNumber];
  checkWinner();
  //console.log(computerElection);
};

//Elección del usuario
const getuserSelection = selection => {
  userElection = selection;
  getcomputerSelection();
  //console.log(userElection);
};

// Escuchar el objeto que he pulsado
gameItemsElement.addEventListener('click', event => {
  if (!event.target.classList.contains('game-item')) return;
  getuserSelection(event.target.dataset.item);
});

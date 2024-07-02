// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const gameItemsElement = document.getElementById('game-items');
const gameResultElement = document.getElementById('game-results');
const pointsUserElement = document.getElementById('points-user');
const pointsComputerElement = document.getElementById('points-pc');
const playAgainElement = document.getElementById('play-again');
const modalElement = document.getElementById('modal');
const buttonRulesElement = document.getElementById('button-rules');

const options = ['rock', 'paper', 'scissors'];

let userElection = null;
let computerElection = null;
let userPoints = 0;
let computerPoints = 0;
//let showResults = false;

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

//Objeto Imágenes
const gameImages = {
  rock: './assets/images/icon-rock.svg',
  paper: './assets/images/icon-paper.svg',
  scissors: './assets/images/icon-scissors.svg',
  lizard: './assets/images/icon-lizard.svg',
  spock: './assets/images/icon-spock.svg',
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

/* //Enseñar Modal
const showModal = () => {
  modalElement.classList.add('modal--show');
};

//Ocultar Modal
const hideModal = () => {
  modalElement.classList.remove('modal--show');
};

//Aparecen los elementos escondidos en advanced
if (document.body.dataset.mode === 'advanced') {
  gameOptions.push('lizard', 'spock');
} */

/* //Cambiar la pantalla de los resultados
const changeScreen = () => {
  if (showResults) {
    gameItemsElement.classList.add('hide');
    gameResultElement.classList.remove('hide');
  } else {
    gameItemsElement.classList.remove('hide');
    gameResultElement.classList.add('hide');
  }
};

const printResultsImage = () => {
  const userOldClass = pickedUserImageElement.parentElement.classList[2];
  const pcOldClass = pickedPcImageElement.parentElement.classList[2];

  pickedUserImageElement.src = gameImages[userSelection];
  pickedPcImageElement.src = gameImages[pcSelection];

  if (userOldClass && pcOldClass) {
    pickedUserImageElement.parentElement.classList.replace(userOldClass, `game-item--${userSelection}`);
    pickedPcImageElement.parentElement.classList.replace(pcOldClass, `game-item--${pcSelection}`);
  } else {
    pickedUserImageElement.parentElement.classList.add(`game-item--${userSelection}`);
    pickedPcImageElement.parentElement.classList.add(`game-item--${pcSelection}`);
  }

  showResults = true;

  changeScreen();
};

playAgainElement.addEventListener('click', () => {
  showResults = false;
  changeScreen();
});

buttonRulesElement.addEventListener('click', showModal);

modalElement.addEventListener('click', hideModal);
 */

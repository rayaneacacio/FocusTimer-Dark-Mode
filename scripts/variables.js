const body = document.querySelector('body')

//variables modes
let darkMode = document.querySelector('.buttonDarkMode')
let lightMode = document.querySelector('.buttonLightMode')
const modes = {
  darkMode,
  lightMode
}

//variables timer display
let minutesDisplay = document.querySelector('.minutesDisplay')
let secondsDisplay = document.querySelector('.secondsDisplay')
const timer = {
  minutesDisplay,
  secondsDisplay
}

//variables buttons display
let playButton = document.querySelector('.playDisplay')
let stopButton = document.querySelector('.stopDisplay')
let increase5Button = document.querySelector('.increase5Display')
let increase5AfterPlayButton = document.querySelector('.increase5DisplayAfterPlay')
let decrease5Button = document.querySelector('.decrease5Display')
let decrease5AfterPlayButton = document.querySelector('.decrease5DisplayAfterPlay')
const buttons = {
  playButton,
  stopButton,
  increase5Button,
  increase5AfterPlayButton,
  decrease5Button,
  decrease5AfterPlayButton
}

//variables cards display
let cardForest = document.querySelector('.forestCardDisplay div');
let cardRain = document.querySelector('.rainCardDisplay div');
let cardCoffeeShop = document.querySelector('.coffeeShopCardDisplay div');
let cardFireplace = document.querySelector('.fireplaceCardDisplay div');
const cards = {
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFireplace
};

//variables inputs cards display
let cardInputForest = document.querySelector('.cardInputForest')
let cardInputRain = document.querySelector('.cardInputRain')
let cardInputCoffeeShop = document.querySelector('.cardInputCoffeeShop')
let cardInputFireplace = document.querySelector('.cardInputFireplace')
const inputs = {
  cardInputForest,
  cardInputRain,
  cardInputCoffeeShop,
  cardInputFireplace
}

export {
  body,
  modes,
  timer,
  buttons,
  cards,
  inputs
};
import {body, modes, buttons, cards, inputs} from "./variables.js";
import timerEvents from './events-timer.js'
import sounds from './sounds.js'
import controlSounds from './events-sounds.js'

const chronometer = timerEvents()
const sound = sounds()
let inputsOfVolume  = document.querySelectorAll('input')
inputsOfVolume = {
  inputForest: inputsOfVolume[0],
  inputRain: inputsOfVolume[1],
  inputCoffeeShop: inputsOfVolume[2],
  inputFireplace: inputsOfVolume[3]
}

//modes
modes.darkMode.addEventListener('click', function(){
  modes.darkMode.classList.add('hide')
  modes.lightMode.classList.remove('hide')
  body.classList.remove('darkMode')
  body.classList.add('lightMode')
})

modes.lightMode.addEventListener('click', function(){
  modes.darkMode.classList.remove('hide')
  modes.lightMode.classList.add('hide')
  body.classList.add('darkMode')
  body.classList.remove('lightMode')
})

//buttons
buttons.playButton.addEventListener('click', function(){
  buttons.playButton.classList.add('playTimer')
  chronometer.play()
})

buttons.stopButton.addEventListener('click', function(){
  buttons.playButton.classList.remove('playTimer')
  chronometer.stop()
})

buttons.increase5Button.addEventListener('click', function(){
  buttons.playButton.classList.remove('playTimer')
  chronometer.increase5()
})

buttons.decrease5Button.addEventListener('click', function(){
  buttons.playButton.classList.remove('playTimer')
  chronometer.decrease5()
})

//cards
cards.cardForest.addEventListener('click', function(){
  controlSounds().clickCard(sound.forestSound, inputsOfVolume.inputForest, cards.cardForest, inputs.cardInputForest)
  controlSounds().stopCards(cards, cards.cardForest, inputs)
  controlSounds().stopAudios(sound, sound.forestSound, inputsOfVolume)
})
inputsOfVolume.inputForest.oninput = function(){
  controlSounds().clickInput(sound.forestSound, inputsOfVolume.inputForest, cards.cardForest, inputs.cardInputForest, sound, inputsOfVolume, inputs, cards)
}


cards.cardRain.addEventListener('click', function(){
  controlSounds().clickCard(sound.rainSound, inputsOfVolume.inputRain, cards.cardRain, inputs.cardInputRain)
  controlSounds().stopCards(cards, cards.cardRain, inputs)
  controlSounds().stopAudios(sound, sound.rainSound, inputsOfVolume)
})
inputsOfVolume.inputRain.oninput = function(){
  controlSounds().clickInput(sound.rainSound, inputsOfVolume.inputRain, cards.cardRain, inputs.cardInputRain, sound, inputsOfVolume, inputs, cards)
}


cards.cardCoffeeShop.addEventListener('click', function(){
  controlSounds().clickCard(sound.coffeeShopSound, inputsOfVolume.inputCoffeeShop, cards.cardCoffeeShop, inputs.cardInputCoffeeShop)
  controlSounds().stopCards(cards, cards.cardCoffeeShop, inputs)
  controlSounds().stopAudios(sound, sound.coffeeShopSound, inputsOfVolume)
})
inputsOfVolume.inputCoffeeShop.oninput = function(){
  controlSounds().clickInput(sound.coffeeShopSound, inputsOfVolume.inputCoffeeShop, cards.cardCoffeeShop, inputs.cardInputCoffeeShop, sound, inputsOfVolume, inputs, cards)
}


cards.cardFireplace.addEventListener('click', function(){
  controlSounds().clickCard(sound.fireplaceSound, inputsOfVolume.inputFireplace, cards.cardFireplace, inputs.cardInputFireplace)
  controlSounds().stopCards(cards, cards.cardFireplace, inputs)
  controlSounds().stopAudios(sound, sound.fireplaceSound, inputsOfVolume)
})
inputsOfVolume.inputFireplace.oninput = function(){
  controlSounds().clickInput(sound.fireplaceSound, inputsOfVolume.inputFireplace, cards.cardFireplace, inputs.cardInputFireplace, sound, inputsOfVolume, inputs, cards)
}
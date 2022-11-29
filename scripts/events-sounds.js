export default function controlSounds(){

  function clickCard(sound, inputsOfVolume, card, cardInput){
    card.classList.toggle('cardSelected')
    cardInput.classList.toggle('cardSelected')

    if(card.classList.contains('cardSelected')){
      inputsOfVolume.value = 5
      sound.play()
    } else {
      inputsOfVolume.value = 0
      sound.pause()
    }
  }

  function stopCards(cardList, card, inputs){
    let arrayCardList = Object.keys(cardList)
    let inputList = Object.values(inputs)

    for(let position = 0; position < arrayCardList.length; position++){
      let nameCard = Object.keys(cardList)[position]
      
      if(cardList[nameCard] != card){
        cardList[nameCard].classList.remove('cardSelected')
        inputList[position].classList.remove('cardSelected')
      }
    }
  }

  function stopAudios(audioList, audio, inputsOfVolume){
    let arrayAudioList = Object.keys(audioList)
    let arrayInputsOff = Object.values(inputsOfVolume)

    for(let position = 0; position < arrayAudioList.length; position++){
      let newAudio = Object.values(audioList)[position]
      let inputOff = arrayInputsOff[position]

      if(newAudio != audio){
        newAudio.pause()
        inputOff.value = 0
      }
    } 
  }
  
  function clickInput(audio, inputVolumeSound, card, cardInput, audioList, inputsOfVolume, inputs, cardList){
    stopAudios(audioList, audio, inputsOfVolume)
    stopCards(cardList, card, inputs)

    if(inputVolumeSound.value==0){
      card.classList.remove('cardSelected')
      cardInput.classList.remove('cardSelected')
      audio.pause()
    } else if(inputVolumeSound.value>0){
      card.classList.add('cardSelected')
      cardInput.classList.add('cardSelected')
      audio.volume = (inputVolumeSound.value/10)
      audio.play()
    }
  }

  return{
    clickCard,
    stopCards,
    stopAudios,
    clickInput
  }
}
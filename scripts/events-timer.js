import {timer} from "./variables.js";

export default function timerEvents(){

  let clock = null

  function play(){
    clock = setTimeout(function(){

      let minutes = timer.minutesDisplay.textContent
      let seconds = timer.secondsDisplay.textContent

      if(minutes <= 0){
        timer.minutesDisplay.textContent = '00'
        timer.secondsDisplay.textContent = '00'
        return
      }

      if(seconds==0){
        if(minutes==0){
          return
        }

        --minutes
        seconds = 60
      }

      timer.minutesDisplay.textContent = String(minutes).padStart(2, '0')
      timer.secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

      play()
    }, 1000)
  }

  function stop(){
    clearTimeout(clock)
  }

  function increase5(){
    timer.minutesDisplay.textContent = String(Number(timer.minutesDisplay.textContent) + 5).padStart(2, '0')
  }

  function decrease5(){
    if(timer.minutesDisplay.textContent>0){
      timer.minutesDisplay.textContent = String(Number(timer.minutesDisplay.textContent) - 5).padStart(2, '0')
    }
  }

  return{
    play,
    stop,
    increase5,
    decrease5
  }
}
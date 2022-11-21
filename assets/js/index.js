//Importações
import Controls from "./controls.js"

import Timer from "./timer.js"

import Sound from "./sounds.js"

import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"


//Variáveis
const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

const sound =  Sound()

//Botão de Play
buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
})

//Botão de Pause
buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
})
  
//Botão de Stop
buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
})

//Botão de alterar o tempo
buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})


//Botão de tirar o som
buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.pause()
})

//Botão de colocar o som
buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.play()
})
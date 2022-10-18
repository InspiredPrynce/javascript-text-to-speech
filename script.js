const text = document.getElementById('text'),
      voiceSelectBox = document.getElementById('voice'),
      volume = document.getElementById('volume'),
      rate = document.getElementById('rate'),
      pitch = document.getElementById('pitch'),
      playBtn = document.getElementById('play'),
      pauseBtn = document.getElementById('pause'),
      resumeBtn = document.getElementById('resume'),
      resetBtn = document.getElementById('reset'),
      volume_amount = document.getElementById('volume_amount'),
      range_amount = document.getElementById('range_amount'),
      pitch_amount = document.getElementById('pitch_amount');

let speech = new SpeechSynthesisUtterance(text.value);
speech.lang = 'en'

let voicesOptions = [];
window.speechSynthesis.onvoiceschanged = function(){
    voicesOptions = window.speechSynthesis.getVoices();
    speech.voice = voicesOptions[0];
    voicesOptions.forEach(function(systemVoice, index){
        voiceSelectBox.options[index] = new Option(systemVoice.name, index)
    })
}

//event listeners
voiceSelectBox.addEventListener('change', () => {
    speech.voice = voicesOptions[voiceSelectBox.value]
})

volume.addEventListener('input', () => {
    speech.volume = volume.value;
    volume_amount.innerText = volume.value
})

rate.addEventListener('input', () => {
    speech.rate = rate.value;
    rate_amount.innerText = rate.value
})

pitch.addEventListener('input', () => {
    speech.pitch = pitch.value;
    pitch_amount.innerText = pitch.value
})

playBtn.addEventListener('click', () => {
    speech.text = text.value;
    window.speechSynthesis.speak(speech)
})

pauseBtn.addEventListener('click', () => window.speechSynthesis.pause())
resumeBtn.addEventListener('click', () => window.speechSynthesis.resume())
resetBtn.addEventListener('click', () => window.speechSynthesis.cancel())
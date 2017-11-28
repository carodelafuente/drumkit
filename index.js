window.addEventListener('keydown', playSound);

function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0 //this rewinds the audio so it can play immediately after continuously pressed
  audio.play();
  key.classList.add('playing');
};

function removeTransition(e) {
  if (e.propertyName != 'transform') return;
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

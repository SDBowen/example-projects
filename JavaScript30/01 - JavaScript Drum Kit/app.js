// Get array of all keys
const keys = document.querySelectorAll('.key');

// Add window event listener
window.addEventListener('keydown', playSound);

// Add event listener for transition end
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function playSound(e) {
  // Match pressed keycode with audio
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) {
    // If no audio attached to keycode
    return;
  }
  // If audio is currently palying, reset.
  audio.currentTime = 0;
  // Play key audio and apply class
  audio.play();
  key.classList.add('playing');
}

// At end of transition, reset button class
function removeTransition(e) {
  if (e.propertyName != 'transform') {
    return;
  }
  this.classList.remove('playing');
}

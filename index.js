window.addEventListener('keydown', function(e) {
  console.log(document.querySelector(`audio[data-key="${e.keyCode}"]`));
})

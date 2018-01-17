  // e is for event
  // 1. Add an event listener on the window.
  // The event is on keydown, and when we listen to it, we run a function
  window.addEventListener('keydown', function (e) {
    // Test for the console : key - code
    console.log(e.keyCode);
    // 2. Find if any matching audio element.
    // We want to select one audio element
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    //  Test for the console : key - audio element
    console.log(audio);
    if (!audio) return; // stop the function all together.
    // 3. Play the audio element.
    audio.currentTime = 0; // rewind the sound to the start to play repeatidly
    audio.play();
    // 4. Select the corresponding key.
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    // Test for the console : key - key div
    console.log(key);
    // 5. Add the class playing to get the animation
    key.classList.add('playing');
  });

  // 6. End the animation
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  // We need to loop to attach an event listener on each key.
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

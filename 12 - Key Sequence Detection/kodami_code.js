const pressed = [];
const secretCode = '38384040373937396665';
const body = document.querySelector('body');

window.addEventListener('keyup', (e) => {
  // Test to see what is pressed and if it goes into the empty array
  console.log(e.key);
  pressed.push(e.keyCode);
  console.log(pressed);

  // Only allow a certain number of chars into []
  pressed.splice(-secretCode.length - 1, pressed.length - (secretCode.length / 2));

  // Check it matches the kodami code
  if (pressed.join('').includes(secretCode)) {
    console.log('DING! DING! DING!');
    body.insertAdjacentHTML("beforeend", `<h2 id="win">YOU WON!</h2>`);
  }
});

// Grab each hand of the clock (sec, min, hour)
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// 1. Set the date
function setDate() {
  // 2. Grab the date
  const now = new Date();
  // 3. Get the seconds, mins, hours
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  // 4. Translate each sec, min, hour into a degree
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minsDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + 90;
  // divided by 60 or 12 gives percentage
  // times 360 is the full, 100%
  // +90 do match the initial offset 90 degrees
  // 5. Apply style on each hand
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  // Test to check seconds match rotation
  console.log(seconds);
}

// 6. Run the function every second
setInterval(setDate, 1000);


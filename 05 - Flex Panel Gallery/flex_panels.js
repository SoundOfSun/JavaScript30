// 1. Grab all the panels
const panels = document.querySelectorAll('.panel');

// 2. Create function for toggle open
function toggleOpen() {
  this.classList.toggle('open');
}

// 3. Create function for toggle active
function toggleActive(e) {
  // Check which properties change: font and flex
  console.log(e.propertyName);
  // We only care about flex
  // Safari - flex, Chrome, flext-grow, so we use includes instead of ===
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

// 4. On each panel, listen for a click: open
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// 5. Listen to the end of previous event: active
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// 1. Grab all checkboxes
const checkboxes = document.querySelectorAll('input');
console.log(checkboxes);
// 2. Listen for when checked
checkboxes.forEach(box => {
  // console.log(box);
  box.addEventListener('click', isChecked);
});

// 3. Create function to check all in a range
let lastChecked; // one before current one

function isChecked(e) {
  console.log(e);
  let inBetween = false;

  // was shift key down ?
  // was it checked or unchecked ?
  if (e.shiftKey && this.checked) {
    console.log('condition met');

    // Loop over each box to find 1st and last (range)
    checkboxes.forEach( checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween; // reverse value true/false
        console.log('This is the inBetween');
      }

      // Now manually check all inside range
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

// 1. Select all inputs which will be affected
const inputs = document.querySelectorAll('.controls input');

// 2. Create function to apply style changes
function handleUpdate() {
  // Show the input value on the console
  console.log(this.value);
  // dataset is an object with all the data attrs
  const suffix = this.dataset.sizing || '';
  // Select CSS variables
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

// 3. Listen to a change of value and mouse move in the inputs and call function
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

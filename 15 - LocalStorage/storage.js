// Grab the form
const addItems = document.querySelector('.add-items');
// Grab the list of created meals
const itemsList = document.querySelector('.plates');
// local storage, check on pageload if there's something in storage --> persist the list
let items = JSON.parse(localStorage.getItem('items')) || [];

// CHALLENGES : Check All / Uncheck All / Clear All
check = document.querySelector('[name=check]');
uncheck = document.querySelector('[name=uncheck]');
clear = document.querySelector('[name=clear]');

function addItem(e) {
  // prevent the page from reloading after submit
  e.preventDefault();
  // 'this' is the formtag
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  }
  // store item in empty array items
  items.push(item);
  // get the items to generate the <li>
  populateList(items, itemsList);
  // we can only put strings inside localStorage (inspect > Application > Local Storage > file://) so we use JSON.stringify
  localStorage.setItem('items', JSON.stringify(items));
  // reset / clear the form
  this.reset();
}

// default empty array to avoid bearking mapping if we pass nothing
function populateList(plates = [], platesList) {
  // for the innerHTML we need a big string, so we use .join
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
      <label for="item${i}">${plate.text}</label>
    </li>
    `;
  }).join('');
}

// To persist the done status
function toggleDone(e) {
  // skip this unless its an input
  if (!e.target.matches('input')) return;

  const el = e.target;
  const index = el.dataset.index;
  // change the property
  items[index].done = !items[index].done;

  // save in localstorage
  localStorage.setItem('items', JSON.stringify(items));
  // visually update
  populateList(items, itemsList);
}

// CHALLENGES
function checkAll(){
  items.map(item => item.done = true);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function uncheckAll(){
  items.map(item => item.done = false);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function clearAll(){
  localStorage.removeItem('items');
  items = JSON.parse(localStorage.getItem('items')) || [];
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
// CHALLENGES
check.addEventListener('click', checkAll);
uncheck.addEventListener('click', uncheckAll);
clear.addEventListener('click', clearAll);

populateList(items, itemsList);

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// 1. Empty array to store subset of cities (results)
const cities = [];

// 2. Fetch the data (fetch returns a promise because it doesn't know the type of data yet)
fetch(endpoint)
  // specify the data is a json to parse
  .then(blob => blob.json())
  // push the data into the empty array /w spread ...
  .then(data => cities.push(...data))

// 3. Match input to a subset of results
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // Need to figure out if city/state matches the search
    // g = global, i = insensitive
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  })
}

// BONUS: function to display numbers with commas (pretty !)
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 4. Create a display function to show the results
function displayMatches() {
  console.log(this.value); // test 1
  const matchArray = findMatches(this.value, cities)
  const html = matchArray.map(place => {
    // Find what was typed, replace it by highlighted text
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex,`<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regex,`<span class="hl">${this.value}</span>`)
    // Return the li
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join(''); // change matchArray into a string
  suggestions.innerHTML = html;
}

// 5. Get the search input
const searchInput = document.querySelector('.search');
// 6. Get the ul where the results will be displayed
const suggestions = document.querySelector('.suggestions');

// 7. Listen the keyup and change (when click outside) on the input
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

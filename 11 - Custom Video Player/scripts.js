/* Get the elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]'); // [] because attr
const ranges = player.querySelectorAll('.player__slider');


/* Build the functions */

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset.skip);

  // parseFloat transforms string into number
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  // console.log(this.value);
  // console.log(this.name);
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  console.log(e); // look for offsetX
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  // offsetWidth is the total width of the div.
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */

// 1. Hook togglePlay to a click, or the play button
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipBtn => skipBtn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

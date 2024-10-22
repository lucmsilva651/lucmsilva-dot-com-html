// Song selector logic
// Adapted to modern standards from
// https://stackoverflow.com/questions/10792163/change-audio-src-with-javascript#10792564

const list = document.getElementById("song-list");
const audio = document.getElementById("song-player");
const stop = document.getElementById("song-stop");
const source = document.getElementById('song-src');
const progress = document.getElementById('song-progress');

list.onclick = function (e) {
  e.preventDefault();
  const element = e.target;

  if (element.hasAttribute('song')) {
    source.src = element.getAttribute('song');
    audio.load();
    audio.play();
  }
};

stop.addEventListener("click", () => {
  audio.pause();
});

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  progress.textContent = `${currentTime.toFixed(2)}s / ${duration.toFixed(2)}s`;
});

const songs = [
  {
    title: "Gehra Hua",
    artist: "Arijit Singh",
    src: "music/song1.mp3",
    cover: "cover/cover.photo.jpg"
  },
  {
    title: "Lutt le Gaya",
    artist: "Shashwat Sachdev",
    src: "music/song2.mp3",
    cover: "cover/cover.photo.jpg"
  },
  {
    title: "Naal Nachna",
    artist: "Shashwat Sachdev, Farhana Khan",
    src: "music/song3.mp3",
    cover: "cover/cover.photo.jpg"
  }
];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");


// Load selected song
function loadSong() {
  audio.src = songs[index].src;
  title.textContent = songs[index].title;
  artist.textContent = songs[index].artist;
  cover.src = songs[index].cover;
}


// Play / Pause button
playBtn.onclick = function () {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
};


// Next song
nextBtn.onclick = function () {
  index = index + 1;
  if (index >= songs.length) index = 0;

  loadSong();
  audio.play();
  playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
};


// Previous song
prevBtn.onclick = function () {
  index = index - 1;
  if (index < 0) index = songs.length - 1;

  loadSong();
  audio.play();
  playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
};


// total duration
audio.onloadedmetadata = function () {
  duration.textContent = formatTime(audio.duration);
};


// Update progress and current time
audio.ontimeupdate = function () {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
    current.textContent = formatTime(audio.currentTime);
  }
};


// progress bar
progress.oninput = function () {
  audio.currentTime = (progress.value / 100) * audio.duration;
};


// Auto next 
audio.onended = function () {
  nextBtn.onclick();
};


// Convert seconds → mm:ss
function formatTime(time) {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);

  if (sec < 10) sec = "0" + sec;

  return min + ":" + sec;
}

loadSong();

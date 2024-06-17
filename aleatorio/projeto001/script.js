const togglePlayPause = document.getElementById("play-pause");
const buttonLater = document.getElementById("later");
const buttonPrevious = document.getElementById("previous");
const audios = document.getElementById("audio");
const description = document.getElementById("chapter");
const title = document.getElementById("title");
const chapters = 10;

let isPlaying = false;
let currentChapter = 1;

function playTrack() {
  audios.play();
  togglePlayPause.innerHTML = '<i class="bx bx-pause-circle"></i>';
  title.style.color = "white";
}

function pauseTrack() {
  audios.pause();
  togglePlayPause.innerHTML = '<i class="bx bx-play-circle"></i>';
  title.style.color = "#d6d6ea";
}

function toggleTrack() {
  if (isPlaying === false) {
    playTrack();
    isPlaying = true;
  } else {
    pauseTrack();
    isPlaying = false;
  }
}

function changeDescription() {
  description.innerText = "Capítulo " + currentChapter;
}

function nextTrack() {
  if (currentChapter === chapters) {
    currentChapter = 1;
  } else {
    currentChapter = currentChapter + 1;
  }

  audios.src = "audios/" + currentChapter + ".mp3";
  playTrack();
  isPlaying = true;
  changeDescription();
}

function returnTrack() {
  if (currentChapter === 1) {
    currentChapter = chapters;
  } else {
    currentChapter = currentChapter - 1;
  }

  audios.src = "audios/" + currentChapter + ".mp3";
  playTrack();
  isPlaying = true;
  changeDescription();
}

togglePlayPause.addEventListener("click", toggleTrack);
buttonLater.addEventListener("click", nextTrack);
buttonPrevious.addEventListener("click", returnTrack);

title.style.transition = "0.5s";

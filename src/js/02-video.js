import throttle from "lodash.throttle";
// import vimeo from "@vimeo/player";

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

loadPage();

function loadPage() {
  const savedSeconds = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedSeconds) {
    player.setCurrentTime(savedSeconds);
  }
}

player.on("timeupdate", throttle(setLocalStorage, 1000));

function setLocalStorage(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
}


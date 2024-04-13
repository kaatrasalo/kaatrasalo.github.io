let playing = false;
const song = new Audio(
  `https://r2.guns.lol/d94c745f-7191-4858-be9b-a5477bae2474.mp3`
);
const video = document.getElementById("videobg");

const preclickDom = document.getElementById("pre-click");
const postclickDom = document.getElementById("post-click");

function calculateAge() {
  var ageDifMs = Date.now() - new Date("Mon, 06 Mar 2006 00:00:00 +0200");
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function init() {
  preclickDom.classList.remove("hidden");
  postclickDom.classList.add("hidden");
}
async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function main() {
  if (playing) return;
  playing = true;
  preclickDom.classList.add("hidden");
  song.currentTime = 21.7;
  video.currentTime = 20.8;
  song.play();
  video.play();
  await wait(2000);
  postclickDom.classList.remove("hidden");
}

init();

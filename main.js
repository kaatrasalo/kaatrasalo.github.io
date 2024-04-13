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

let waiter = 0;
function init() {
  preclickDom.classList.add("hidden");
  postclickDom.classList.add("hidden");

  waiter = setInterval(() => {
    if (video.readyState == 4 && song.readyState == 4) {
      clearInterval(waiter);
      waiter = null;
      preclickDom.classList.remove("hidden");
      console.log("Everything ready!");
    }
  }, 10);
}
async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function main() {
  if (playing) return;
  if (waiter) return;
  playing = true;
  preclickDom.classList.add("hidden");
  song.currentTime = 21.7;
  video.currentTime = 20.8;
  song.volume = 0.1;
  song.loop = true;
  song.play();
  video.play();
  await wait(2000);
  postclickDom.classList.remove("hidden");
}

init();

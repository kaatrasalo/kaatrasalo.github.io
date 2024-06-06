let playing = false;
const song = document.getElementById("song");

const preclickDom = document.getElementById("pre-click");
const postclickDom = document.getElementById("post-click");

const description = document.getElementById("description");
const credits = document.getElementById("credits");

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
    if (song.readyState == 4) {
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
  song.currentTime = 0;
  song.volume = 0.2;
  song.loop = true;
  song.play();
  postclickDom.classList.remove("hidden");
}
init();

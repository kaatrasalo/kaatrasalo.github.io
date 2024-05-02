let playing = false;
const song = document.getElementById("song");

const preclickDom = document.getElementById("pre-click");
const postclickDom = document.getElementById("post-click");

const description = document.getElementById("description");
const credits = document.getElementById("credits");

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
  // Set up FlipDown
  var flipdown = new FlipDown(1714654800)
    // Start the countdown
    .start()
    // Do something when the countdown ends
    .ifEnded(() => {
      window.location.href = "https://youtu.be/5JqY-6q-RNA?si=H9p6Ie2xZCzVKJbU";
    });
}
async function togglecredits() {
  description.classList.toggle("hidden");
  description.classList.toggle("gone");
  credits.classList.toggle("gone");
  credits.classList.toggle("hidden");
}
init();

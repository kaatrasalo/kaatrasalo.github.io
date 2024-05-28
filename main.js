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
  credits.classList.add("hidden");
  credits.classList.add("gone");

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
  song.currentTime = 19;
  song.volume = 0.2;
  song.loop = true;
  song.play();
  postclickDom.classList.remove("hidden");
  setInterval(emoHandler, 10);
}

let emoStage = 0;
const replaceSymbol = "forget";
async function emoHandler() {
  if (song.currentTime >= 23.5 && emoStage == 0) {
    emoStage = 1;
    document.querySelector(
      "#logo"
    ).src = `https://placehold.co/128?text=${replaceSymbol}`;
    audioMotion.setOptions({
      gradient: "emo",
      smoothing: 0.9,
      roundBars: true,
    });
    document.querySelector("#intro > h1").innerText = `${replaceSymbol}`;
    document.querySelector(
      "#intro > p"
    ).innerText = `${replaceSymbol} ${replaceSymbol}/${replaceSymbol}`;
    document.querySelector(
      "#description > p:nth-child(1)"
    ).innerText = `${replaceSymbol} ${replaceSymbol} ${replaceSymbol} ${replaceSymbol}`;
    document.querySelector(
      "#description > p:nth-child(2)"
    ).innerText = `${replaceSymbol} ${replaceSymbol} ${replaceSymbol} ${replaceSymbol} ${replaceSymbol} ${replaceSymbol} ${replaceSymbol}`;
    document.querySelector(
      "#social-links > a:nth-child(1)"
    ).innerText = `${replaceSymbol}`;
    document.querySelector(
      "#social-links > a:nth-child(2)"
    ).innerText = `${replaceSymbol}`;
    document.querySelector(
      "#social-links > a:nth-child(3)"
    ).innerText = `${replaceSymbol}`;
    return;
  }
  if (song.currentTime >= 26.1 && emoStage == 1) {
    emoStage = 2;
    document.querySelector("#social-links > a:nth-child(3)").hidden = true;
    return;
  }
  if (song.currentTime >= 30.1 && emoStage == 2) {
    emoStage = 3;
    document.querySelector("#social-links > a:nth-child(2)").hidden = true;
    return;
  }
  if (song.currentTime >= 33.8 && emoStage == 3) {
    emoStage = 4;
    document.querySelector("#social-links > a:nth-child(1)").hidden = true;
    document.querySelector("#social-links-container").hidden = true;
    return;
  }
  if (song.currentTime >= 37.5 && emoStage == 4) {
    emoStage = 5;
    document.querySelector("#description > p:nth-child(2)").hidden = true;
    return;
  }
  if (song.currentTime >= 41.5 && emoStage == 5) {
    emoStage = 6;
    document.querySelector("#description > p:nth-child(1)").hidden = true;
    document.querySelector("#description").hidden = true;
    return;
  }
  if (song.currentTime >= 45 && emoStage == 6) {
    emoStage = 7;
    document.querySelector("#intro > p").hidden = true;
    return;
  }
  if (song.currentTime >= 49 && emoStage == 7) {
    emoStage = 8;
    document.querySelector("#intro > h1").hidden = true;
    document.querySelector("#intro").hidden = true;
    return;
  }
  if (song.currentTime >= 52.5 && emoStage == 8) {
    emoStage = 9;
    document.querySelector("#logo").hidden = true;
    return;
  }
  if (song.currentTime >= 56.6 && emoStage == 9) {
    emoStage = 10;
    document.querySelector("#post-click").classList.add("hidden");
    return;
  }
  if (song.currentTime >= 68.5 && emoStage == 10) {
    emoStage = 11;
    song.volume = 0.3;
    audioMotion.setOptions({
      gradient: "blood",
      lumiBars: true,
      smoothing: 0,
    });
    return;
  }
}
async function togglecredits() {
  description.classList.toggle("hidden");
  description.classList.toggle("gone");
  credits.classList.toggle("gone");
  credits.classList.toggle("hidden");
}
init();

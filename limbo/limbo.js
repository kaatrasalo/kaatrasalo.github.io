function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const song = new Audio("./limbo.mp3");
song.currentTime = 180;
let timeStep = 0;
const stepMap = {
  0: { 0: 4, 1: 5, 2: 6, 3: 7, 4: 0, 5: 1, 6: 2, 7: 3 },
  1: { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 0 },
  2: { 0: 7, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6 },
  3: { 0: 5, 1: 4, 4: 1, 5: 0, 2: 7, 3: 6, 6: 3, 7: 2 },
  4: { 0: 3, 1: 2, 2: 1, 3: 0, 4: 7, 5: 6, 6: 5, 7: 4 },
  5: { 0: 7, 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1, 7: 0 },
  6: { 0: 1, 1: 5, 5: 4, 4: 0, 2: 3, 3: 7, 7: 6, 6: 2 },
  7: { 1: 0, 5: 1, 4: 5, 0: 4, 3: 2, 7: 3, 6: 7, 2: 6 },
  8: { 1: 0, 5: 1, 4: 5, 0: 4, 2: 3, 3: 7, 7: 6, 6: 2 },
  9: { 0: 6, 1: 7, 2: 4, 3: 5, 4: 2, 5: 3, 6: 0, 7: 1 },
  10: { 0: 5, 1: 6, 2: 7, 3: 3, 4: 4, 5: 0, 6: 1, 7: 2 },
  11: { 0: 0, 1: 4, 2: 5, 3: 6, 4: 1, 5: 2, 6: 3, 7: 7 },
};

let mapToScreenPixels = {};

function mapPixels() {
  let x =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  let y =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  console.log(`${x} x ${y}`);

  let horizontalDivisions = [];
  for (let i = 0; i < 8; i++) {
    horizontalDivisions.push((x / 8) * i);
  }

  let verticalDivisions = [];
  for (let i = 0; i < 8; i++) {
    verticalDivisions.push((y / 8) * i);
  }
  console.log(verticalDivisions);

  mapToScreenPixels = {
    0: { x: horizontalDivisions[2], y: verticalDivisions[2] },
    1: { x: horizontalDivisions[3], y: verticalDivisions[2] },
    2: { x: horizontalDivisions[4], y: verticalDivisions[2] },
    3: { x: horizontalDivisions[5], y: verticalDivisions[2] },

    4: { x: horizontalDivisions[2], y: verticalDivisions[4] },
    5: { x: horizontalDivisions[3], y: verticalDivisions[4] },
    6: { x: horizontalDivisions[4], y: verticalDivisions[4] },
    7: { x: horizontalDivisions[5], y: verticalDivisions[4] },
  };
  //   for (let i = 0; i < 4; i++) {
  //     mapToScreenPixels[i + 4] = { x: (x / 4) * i, y: (y / 4) * 2 };
  //   }

  console.log(mapToScreenPixels);
}

function getKeyPosition(keyId) {
  let stepMapped = stepMap[timeStep][keyId];
  let screenMapped = mapToScreenPixels[stepMapped];
  return screenMapped;
}
function setKeyPosition(keyId, { x, y }) {
  let element = document.getElementById(`key${keyId}`);
  element.style.left = x + "px";
  element.style.top = y + "px";
}

function setKeyPositions() {
  for (let i = 0; i < 8; i++) {
    let pos = getKeyPosition(i);
    setKeyPosition(i, pos);
  }
}

function toggleColors() {
  for (let i = 0; i < 8; i++) {
    let element = document.getElementById(`key${i}`);
    element.classList.toggle("showcolor");
  }
}

function toggleShowCorrectKey() {
  let element = document.getElementById(`key${correctKey}`);
  element.classList.toggle("correct");
}

let correctKey = getRandomInt(0, 7);
function init() {
  mapPixels();
  setKeyPositions();
  toggleShowCorrectKey();
}

function start() {
  song.play();
  setTimeout(() => {
    setInterval(mainLoop, 300);
  }, 500);
}
function mainLoop() {
  if (song.currentTime < 191) {
    timeStep++;
    if (timeStep > 11) {
      timeStep = getRandomInt(0, 11);
    }
    setKeyPositions();
  } else {
    if (timeStep == -1) return;
    timeStep = -1;
    setTimeout(() => {
      toggleColors();
    }, 500);
  }
}
let hasGuessed = false;
function tryKey(n) {
  if (timeStep == -1 && !hasGuessed) {
    hasGuessed = true;
    if (correctKey == n) {
      alert("Correct key!");
    } else {
      alert("You suck.");
    }
    toggleColors();
    toggleShowCorrectKey();
  }
}

init();
let playing = false;
document.onclick = () => {
  if (playing) return;
  playing = true;
  start();
  toggleShowCorrectKey();
};

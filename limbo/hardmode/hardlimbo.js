function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const song = new Audio("./troll_limbo.mp3");
// song.currentTime = 169;

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
  for (let i = 0; i < 5; i++) {
    verticalDivisions.push((y / 5) * i);
  }
  console.log(verticalDivisions);

  mapToScreenPixels = {
    0: { x: horizontalDivisions[2], y: verticalDivisions[1] },
    1: { x: horizontalDivisions[3], y: verticalDivisions[1] },
    2: { x: horizontalDivisions[4], y: verticalDivisions[1] },
    3: { x: horizontalDivisions[5], y: verticalDivisions[1] },

    4: { x: horizontalDivisions[2], y: verticalDivisions[2] },
    5: { x: horizontalDivisions[3], y: verticalDivisions[2] },
    6: { x: horizontalDivisions[4], y: verticalDivisions[2] },
    7: { x: horizontalDivisions[5], y: verticalDivisions[2] },

    8: { x: horizontalDivisions[2], y: verticalDivisions[3] },
    9: { x: horizontalDivisions[3], y: verticalDivisions[3] },
    10: { x: horizontalDivisions[4], y: verticalDivisions[3] },
    11: { x: horizontalDivisions[5], y: verticalDivisions[3] },

    12: { x: horizontalDivisions[1], y: verticalDivisions[1] },
    13: { x: horizontalDivisions[6], y: verticalDivisions[1] },
    14: { x: horizontalDivisions[1], y: verticalDivisions[2] },
    15: { x: horizontalDivisions[6], y: verticalDivisions[2] },
    16: { x: horizontalDivisions[1], y: verticalDivisions[3] },
    17: { x: horizontalDivisions[6], y: verticalDivisions[3] },
  };
  console.log(mapToScreenPixels);
}

let keyGrid = {
  0: null,
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
  10: null,
  11: null,
  12: null,
  13: null,
  14: null,
  15: null,
  16: null,
  17: null,
};

function getKeyPosition(keyId) {
  let seed = getRandomInt(0, 17);
  let found = false;
  if (keyGrid[seed] == null) {
    keyGrid[seed] = keyId;
    found = true;
  }

  while (!found) {
    seed++;
    if (seed > 17) seed = 0;
    if (keyGrid[seed] == null) {
      keyGrid[seed] = keyId;
      found = true;
      break;
    }
  }

  return mapToScreenPixels[seed];
}
function setKeyPosition(keyId, { x, y }) {
  let element = document.getElementById(`key${keyId}`);
  element.style.left = x + "px";
  element.style.top = y + "px";
}

function setKeyPositions() {
  keyGrid = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
    13: null,
    14: null,
    15: null,
    15: null,
    16: null,
    17: null,
  };
  for (let i = 0; i < 18; i++) {
    let pos = getKeyPosition(i);
    setKeyPosition(i, pos);
  }
}

function toggleColors() {
  for (let i = 0; i < 18; i++) {
    let element = document.getElementById(`key${i}`);
    element.classList.toggle("showcolor");
  }
}
function toggleHideExtra() {
  for (let i = 8; i < 18; i++) {
    let element = document.getElementById(`key${i}`);
    element.classList.toggle("hide");
  }
}
function toggleHideExtraSpicy() {
  for (let i = 8; i < 18; i++) {
    setTimeout(() => {
      let element = document.getElementById(`key${i}`);
      element.classList.toggle("hide");
    }, i * 300);
  }
}

function toggleShowCorrectKey() {
  let element = document.getElementById(`key${correctKey}`);
  element.classList.toggle("correct");
}

function setInitialKeyPositions() {
  for (let i = 0; i < 18; i++) {
    let pos = mapToScreenPixels[i];
    setKeyPosition(i, pos);
  }
}

let correctKey;
function init() {
  correctKey = getRandomInt(0, 8);
  mapPixels();
  toggleHideExtra();
  toggleShowCorrectKey();
  setInitialKeyPositions();
}

function toggleKeySpinSpicy() {
  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      let element = document.getElementById(`key${i}`);
      element.classList.toggle("spin");
    }, i * 300);
  }
}

function toggleKeySpin() {
  for (let i = 0; i < 18; i++) {
    let element = document.getElementById(`key${i}`);
    element.classList.toggle("spin");
  }
}

function start() {
  song.play();
  toggleShowCorrectKey();
  setInterval(mainLoop, 400);
  toggleKeySpinSpicy();
  toggleHideExtraSpicy();
  setTimeout(toggleKeySpin, 15.3 * 1000);
}
function mainLoop() {
  if (song.currentTime < 5) return;
  if (song.currentTime < 15) {
    setKeyPositions();
  } else {
    toggleColors();
  }
  console.log(song.currentTime);
}
let hasGuessed = false;
function tryKey(n) {
  if (song.currentTime > 15 && !hasGuessed) {
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
};

import AudioMotionAnalyzer from "https://cdn.skypack.dev/audiomotion-analyzer?min";
let height = window.screen.height;
let width = window.screen.width;
const audioMotion = new AudioMotionAnalyzer(document.getElementById("bg"), {
  source: document.getElementById("song"),
  width: width,
  colorMode: "gradient",
  showScaleX: false,
  radial: true,
  mode: 5,
  frequencyScale: "log",
  maxFreq: 4000,
  channelLayout: "single",
  smoothing: 0.2,
  bgAlpha: 1,
  overlay: true,
  showPeaks: false,
  roundBars: true,
  mirror: 1,
  radius: 0.6,
});

audioMotion.registerGradient("emo", {
  bgColor: "#090909",
  colorStops: ["#FFFFFF"],
});

audioMotion.setOptions({
  gradient: "emo",
});

window.audioMotion = audioMotion;

let deferring = null;
function resizeFunny() {
  if (deferring) {
    clearTimeout(deferring);
  }

  deferring = setTimeout(() => {
    height = window.screen.height;
    width = window.screen.width;
    audioMotion.setOptions({
      width: width,
    });
    setTimeout(() => {
      document.querySelector("#bg > canvas").height = 0;
      setTimeout(() => {
        audioMotion.setOptions({
          width: width,
        });
      }, 25);
    }, 25);
    deferring = null;
  }, 500);
}
window.onresize = () => {
  resizeFunny();
};

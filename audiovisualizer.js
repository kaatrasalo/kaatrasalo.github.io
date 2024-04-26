import AudioMotionAnalyzer from "https://cdn.skypack.dev/audiomotion-analyzer?min";
let height = window.screen.height;
let width = window.screen.width;
const audioMotion = new AudioMotionAnalyzer(document.getElementById("bg"), {
  source: document.getElementById("song"),
  height: height,
  colorMode: "gradient",
  showScaleX: false,
  lumiBars: true,
  mode: 1,
  frequencyScale: "log",
  channelLayout: "single",
  smoothing: 0,
  bgAlpha: 1,
  overlay: true,
});

audioMotion.registerGradient("phoenix", {
  colorStops: ["#c77335"],
});

audioMotion.setOptions({
  gradient: "phoenix",
});

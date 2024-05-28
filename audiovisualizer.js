import AudioMotionAnalyzer from "https://cdn.skypack.dev/audiomotion-analyzer?min";
let height = window.screen.height;
let width = window.screen.width;
const audioMotion = new AudioMotionAnalyzer(document.getElementById("bg"), {
  source: document.getElementById("song"),
  height: height,
  colorMode: "bar-level",
  roundBars: false,
  showScaleX: false,
  lumiBars: false,
  mode: 1,
  frequencyScale: "log",
  channelLayout: "single",
  smoothing: 0,
  showPeaks: false,
  bgAlpha: 1,
  overlay: true,
});
window.audioMotion = audioMotion;

audioMotion.registerGradient("phoenix", {
  bgColor: "#090909",
  colorStops: ["#c77335"],
});
audioMotion.registerGradient("emo", {
  bgColor: "#090909",
  colorStops: ["#6900FF", "#FFFFFF", "#FFFFFF"],
});
audioMotion.registerGradient("blood", {
  bgColor: "#090909",
  colorStops: [
    "#8A0303", // Dark Blood Red
    "#7E0000", // Deep Blood Red
    "#9A0505", // Rich Blood Red
    "#B22222", // Firebrick
    "#8B0000", // Dark Red
    "#A52A2A", // Brownish Red
    "#DC143C", // Crimson
    "#770000", // Deep Dark Red
    "#990000", // Strong Red
    "#660000", // Very Dark Red
    "#5C0000", // Almost Black Red
  ],
});

audioMotion.setOptions({
  gradient: "phoenix",
});

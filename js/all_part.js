const mySVG = document.querySelector('svg');
const viewBox = mySVG.getAttribute("viewBox").split(" ")
let [minX, minY, width, height] = viewBox
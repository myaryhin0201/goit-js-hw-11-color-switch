import colors from "../data/colors";
const refs = {
  startButton: document.querySelector('[data-action="start"]'),
  stopButton: document.querySelector('[data-action="stop"]'),
};
refs.stopButton.setAttribute('disabled', true);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const switchBodyColor = (color) => {
  console.log(color);
  document.body.style.backgroundColor = color;
};
let intervalColorChange = null;
const startSwitch = () => {
  intervalColorChange = setInterval(randomNumber => {
    randomNumber = randomIntegerFromInterval(0, colors.length-1);
    switchBodyColor(colors[randomNumber]);
  }, 1000);
  refs.stopButton.removeAttribute('disabled');
  refs.startButton.setAttribute('disabled', true);
};
const stopSwitch = () => {
  clearInterval(intervalColorChange);
  refs.startButton.removeAttribute('disabled');
  refs.stopButton.setAttribute('disabled', true);
};
refs.startButton.addEventListener('click', startSwitch);
refs.stopButton.addEventListener('click', stopSwitch);

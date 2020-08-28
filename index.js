const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton')
const timeArea = document.getElementById('time');

// 経過時間
let time = 0;

let timerId = null;

// startボタンを押した時
startButton.addEventListener('click', (e) => {
  if(timerId !== null) {return; }
  let pre = new Date();
  timerId = setInterval( () => {
    const now = new Date();
    time += now - pre;
    pre = now;
    formatTime();
  }, 10)
});

// stopボタンを押した時
stopButton.addEventListener('click', (e) => {
  clearInterval(timerId);
  timerId = null;
});

// resetボタンを押した時
resetButton.addEventListener('click', (e) => {
  time = 0;
  formatTime();
})

// 画面に反映させる
function formatTime() {
  const ms = time % 1000;
  const sec = Math.floor(time / 1000) % 60;
  const min = Math.floor(time / (1000*60)) % 60;
  const hour = Math.floor(time / (1000*60*60));

  const msStr = ms.toString().padStart(3, '0');
  const secStr = sec.toString().padStart(2, '0');
  const minStr = min.toString().padStart(2, '0');
  const hourStr = hour.toString().padStart(2, '0');

  timeArea.innerText = `${hourStr}:${minStr}:${secStr}.${msStr}`;
}
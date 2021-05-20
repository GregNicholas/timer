class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.intervalId === this.intervalCount) {
      this.tick();
      this.intervalId = setInterval(this.tick, 1000);
    }
  };

  pause = () => {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  };

  tick = () => {
    durationInput.value--;
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.getElementById("startButton");
const pauseButton = document.querySelector("#pauseButton");
durationInput.value = 30;
const timer = new Timer(durationInput, startButton, pauseButton);


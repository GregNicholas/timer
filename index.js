class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start() {
    console.log(this);
  }

  pause() {
    console.log("PAUSE");
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.getElementById("startButton");
const pauseButton = document.querySelector("#pauseButton");

const timer = new Timer(durationInput, startButton, pauseButton);
timer.start();

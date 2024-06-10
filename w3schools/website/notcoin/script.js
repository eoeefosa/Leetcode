document.addEventListener("DOMContentLoaded", () => {
  const tapButton = document.getElementById("tap-button");
  const scoreDisplay = document.getElementById("score");
  const countdownDisplay = document.getElementById("countdown");
  let score = 0;
  let timeLeft = 30; // 30 seconds countdown

  // Sound effect
  const tapSound = new Audio("tap-sound.mp3"); // Make sure you have a sound file named 'tap-sound.mp3'

  tapButton.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    tapSound.play();
  });

  const timer = setInterval(() => {
    timeLeft--;
    countdownDisplay.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      tapButton.disabled = true;
      alert(`Time's up! Your final score is: ${score}`);
    }
  }, 1000);
});

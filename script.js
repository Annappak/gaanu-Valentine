const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionCard = document.getElementById("questionCard");
const yesCard = document.getElementById("yesCard");
const music = document.getElementById("bgMusic");

// NO button shakes then escapes
noBtn.addEventListener("mouseenter", () => {
  noBtn.classList.add("shake");

  setTimeout(() => {
    noBtn.classList.remove("shake");

    const x = Math.random() * 220;
    const y = Math.random() * 40;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }, 300);
});

// YES clicked
yesBtn.addEventListener("click", () => {
  questionCard.classList.add("hidden");
  yesCard.classList.remove("hidden");

  music.play();

  confetti({
    particleCount: 180,
    spread: 80,
    origin: { y: 0.6 }
  });

  startHearts();
});

// Floating hearts generator
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }, 400);
}

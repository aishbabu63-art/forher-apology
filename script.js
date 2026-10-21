const cards = document.querySelectorAll(".apology-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const isOpen = card.classList.toggle("open");

    card.setAttribute("aria-expanded", String(isOpen));
  });
});

const revealButton = document.getElementById("reveal-button");
const personalLetter = document.getElementById("personal-letter");

revealButton.addEventListener("click", () => {
  const isHidden = personalLetter.hidden;

  personalLetter.hidden = !isHidden;

  revealButton.textContent = isHidden
    ? "Close my message ♡"
    : "Read my personal message 💗";

  if (isHidden) {
    personalLetter.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});

// Create a gentle stream of floating hearts.
const heartsContainer = document.querySelector(".hearts");
const heartSymbols = ["♡", "♥", "💕", "✧"];

function createHeart() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const heart = document.createElement("span");

  heart.className = "heart";
  heart.textContent =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = 12 + Math.random() * 18 + "px";
  heart.style.animationDuration = 7 + Math.random() * 7 + "s";

  heartsContainer.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(createHeart, 700);
}
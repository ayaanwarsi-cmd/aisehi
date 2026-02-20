function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 25 + 15) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
  heart.style.opacity = Math.random();

  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 160);

function heartBurst() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = (35 + Math.random() * 30) + "vw";
    heart.style.fontSize = (Math.random() * 40 + 20) + "px";
    heart.style.animationDuration = (Math.random() * 2 + 2) + "s";

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4500);
  }
}

function openLetter() {
  heartBurst();
  document.getElementById("envelopeWrapper").style.display = "none";
  const letter = document.getElementById("letterContainer");
  letter.classList.remove("hidden");
  setTimeout(() => {
    letter.style.opacity = "1";
    letter.style.transform = "translate(-50%, -50%) scale(1)";
  }, 100);
}

let currentPage = 0;

function nextPage() {
  const pages = document.querySelectorAll(".letter-page");
  pages[currentPage].classList.remove("active");
  currentPage++;
  pages[currentPage].classList.add("active");
}

function showSurprise() {
  const pages = document.querySelectorAll(".letter-page");
  pages[currentPage].classList.remove("active");
  document.getElementById("surprisePage").classList.remove("hidden");
  document.getElementById("surprisePage").classList.add("active");
}
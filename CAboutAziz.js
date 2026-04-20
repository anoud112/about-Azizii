const words = ["Kissing man", "Handsome", "Adviser"];
let i = 0, j = 0, currentWord = "", isDeleting = false;
const span = document.querySelector(".typing span");

function type() {
  currentWord = words[i];

  if (isDeleting) {
    span.textContent = currentWord.substring(0, j--);
  } else {
    span.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
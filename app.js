function createSnow () {
  const snowing = document.createElement('div');
  snowing.classList.add('snowing');
  snowing.style.left = Math.random() * 100 + "vw";
  snowing.style.animationDuration  = Math.random() * 2 + 3 + "s"
  snowing.innerText = '*';
  document.body.appendChild(snowing)
  setTimeout(() => {
    snowing.remove();
  }, 4000);
}

setInterval((createSnow), 400);
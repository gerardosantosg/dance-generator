// Getting elements by ID

const danceBtn = document.getElementById("danceBtn");
const removeBtn = document.getElementById("removeBtn");
const listRoot = document.getElementById("main");
const gifs = [];

// Adding Event Listeners

danceBtn.addEventListener("click", appearDance);
removeBtn.addEventListener("click", removeDance);

// Functions

function appearDance() {
  if (gifs.length < 12) {
    let gif = document.createElement("li");
    gif.innerHTML = `
    <img src="https://media3.giphy.com/media/MVDPX3gaKFPuo/200w.webp?cid=ecf05e47wmh7mbnslb0hc78z0d1bjehzb1qu15n9jpkq1vmd&rid=200w.webp" alt="animated" />
    `;
    listRoot.append(gif);
    gifs.push(Math.random());
  } else {
    alert("The dancefloor is full");
  }
}

function removeDance() {
  if (gifs.length >= 1) {
    listRoot.children[0].remove();
    gifs.pop();
  } else {
    alert("There are no items");
  }
}

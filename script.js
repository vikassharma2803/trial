let count = 0;

const counter = document.getElementById("counter");
const container = document.getElementById("ram-container");

document.getElementById("ramBtn").addEventListener("click", writeRAM);
document.getElementById("resetBtn").addEventListener("click", resetRAM);

function writeRAM() {
  count++;
  counter.innerText = "RAM Written: " + count;

  const span = document.createElement("span");
  span.innerText = " RAM ";

  // Random color for fun
  span.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);

  container.appendChild(span);
}

// Mouse movement trigger (light throttling)
let lastMove = 0;
document.addEventListener("mousemove", function() {
  const now = Date.now();
  if (now - lastMove > 200) {
    writeRAM();
    lastMove = now;
  }
});

function resetRAM() {
  count = 0;
  counter.innerText = "RAM Written: 0";
  container.innerHTML = "";
}

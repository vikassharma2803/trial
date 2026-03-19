let count = 0;

const counter = document.getElementById("counter");
const container = document.getElementById("ram-container");

document.getElementById("ramBtn").addEventListener("click", writeRAM);
document.getElementById("resetBtn").addEventListener("click", resetRAM);

// Load saved count
count = localStorage.getItem("ramCount") || 0;
counter.innerText = "राम लिखा गया: " + count;

function writeRAM() {
  count++;
  localStorage.setItem("ramCount", count);
  counter.innerText = "राम लिखा गया: " + count;

  const span = document.createElement("span");
  span.innerText = " राम ";

  // Optional: random color
  span.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);

  container.appendChild(span);
}

// Mouse movement trigger (controlled)
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
  localStorage.setItem("ramCount", 0);
  counter.innerText = "राम लिखा गया: 0";
  container.innerHTML = "";
}

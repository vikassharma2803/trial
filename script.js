let count = localStorage.getItem("ramCount") || 0;

const counter = document.getElementById("counter");
const container = document.getElementById("ram-container");

counter.innerText = "राम लिखा गया: " + count;

document.getElementById("ramBtn").addEventListener("click", writeRAM);
document.getElementById("resetBtn").addEventListener("click", resetRAM);

function writeRAM() {
  count++;
  localStorage.setItem("ramCount", count);
  counter.innerText = "राम लिखा गया: " + count;

  const span = document.createElement("span");
  span.innerText = "राम";

  container.appendChild(span);

  // Milestone
  if (count == 108) {
    alert("🙏 आपने 108 बार राम लिखा 🙏");
  }
}

// Mouse + Touch support
let lastMove = 0;
document.addEventListener("mousemove", trigger);
document.addEventListener("touchstart", writeRAM);

function trigger() {
  const now = Date.now();
  if (now - lastMove > 250) {
    writeRAM();
    lastMove = now;
  }
}

function resetRAM() {
  count = 0;
  localStorage.setItem("ramCount", 0);
  counter.innerText = "राम लिखा गया: 0";
  container.innerHTML = "";
}

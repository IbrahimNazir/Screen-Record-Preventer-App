// Focus detection
window.addEventListener("blur", () => {
  const content = document.getElementById("content");
  content.classList.add("hidden");
  //   alert("Warning: App lost focus. Content hidden to prevent capture.");
});

window.addEventListener("focus", () => {
  const content = document.getElementById("content");
  content.classList.remove("hidden");
});

// Dynamic watermark
function drawWatermark() {
  const canvas = document.getElementById("watermark");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous
  ctx.font = "12px Arial";
  ctx.fillStyle = "rgba(255, 0, 0, 0.7)"; // Red, semi-transparent
  const userId = "User123"; // Replace with dynamic user ID if needed
  const text = `${userId} - No Copy - ${new Date().toLocaleTimeString()}`;
  ctx.fillText(text, 0, 30);

  // Redraw every 5 seconds to update timestamp
  setTimeout(drawWatermark, 5000);
}

drawWatermark();

// Disable right-click (optional deterrent)
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// Attempt to detect print screen (limited effectiveness)
document.addEventListener("keydown", (e) => {
  if (e.key === "PrintScreen") {
    alert("Screenshots are not allowed!");
    // Can't fully block, but can notify
  }
});

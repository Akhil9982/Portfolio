// 1. Select the progress bar element
const scrollBar = document.getElementById("scrollBar");

// Function to calculate and set the scroll progress
function updateScrollProgress() {
  // Calculate the total scrollable height
  // (Total Document Height - Viewport Height)
  const totalHeight = document.body.scrollHeight - window.innerHeight;

  // Get the current scroll position
  const progress = window.scrollY;

  // Calculate percentage (0 to 100)
  // If totalHeight is 0 (page fits on screen), progress is 100%
  const percentage = totalHeight === 0 ? 100 : (progress / totalHeight) * 100;

  // Update the width
  scrollBar.style.width = percentage + "%";
}

// 2. Add event listeners for robustness on mobile and desktop
// Update on scroll
window.addEventListener("scroll", updateScrollProgress);

// Update on screen resize (crucial for mobile orientation changes/address bar changes)
window.addEventListener("resize", updateScrollProgress);

// Set initial progress state when the page loads
window.addEventListener("load", updateScrollProgress);
// Also call immediately in case of fast page load
updateScrollProgress();
const overlay = document.getElementById("overlay");
const target = document.getElementById("target");

// Hide overlay when page loads
overlay.style.display = "none";

// Card detected
target.addEventListener("targetFound", () => {
    console.log("Business card detected");
    overlay.style.display = "block";
});

// Card lost
target.addEventListener("targetLost", () => {
    console.log("Business card lost");
    overlay.style.display = "none";
});
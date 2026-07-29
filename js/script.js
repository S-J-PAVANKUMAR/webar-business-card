const overlay = document.getElementById("overlay");
const target = document.getElementById("target");

const websiteBtn = document.getElementById("websiteBtn");

// Hide overlay initially
overlay.style.display = "none";

// Card detected
target.addEventListener("targetFound", () => {
    console.log("Business Card Detected");
    overlay.style.display = "block";
});

// Card lost
target.addEventListener("targetLost", () => {
    console.log("Business Card Lost");
    overlay.style.display = "none";
});

// Website Button
websiteBtn.addEventListener("click", () => {
    console.log("Website button clicked");
    alert("Button clicked");
});
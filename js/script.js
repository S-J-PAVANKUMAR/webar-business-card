const overlay = document.getElementById("overlay");
const target = document.getElementById("target");

const websiteBtn = document.getElementById("websiteBtn");
const callBtn = document.getElementById("callBtn");

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
    window.open("https://www.google.com", "_blank");
});

// Call Button
callBtn.addEventListener("click", () => {
    window.location.href = "tel:+919876543210";
});
document.addEventListener("DOMContentLoaded", () => {
    const websiteButton = document.querySelector("#website-button");

    console.log("Button found:", websiteButton);

    websiteButton.addEventListener("click", () => {
        console.log("CLICK WORKED!");
    });
});
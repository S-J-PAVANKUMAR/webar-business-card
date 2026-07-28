document.addEventListener("DOMContentLoaded", () => {

    const websiteButton = document.querySelector("#website-button");

    if (!websiteButton) {
        console.log("Website button not found");
        return;
    }

    websiteButton.addEventListener("click", () => {

        console.log("Website button clicked");

        window.open("https://www.google.com", "_blank");

    });

});
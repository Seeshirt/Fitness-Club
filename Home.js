document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuButton = document.getElementById("toggle-menu-btn");
    const subMenu = document.querySelector(".sub-menu");

    toggleMenuButton.addEventListener("click", function () {
        if (subMenu.style.display === "none" || subMenu.style.display === "") {
            subMenu.style.display = "block"; // Show the sub-menu
        } else {
            subMenu.style.display = "none"; // Hide the sub-menu
        }
    });
});
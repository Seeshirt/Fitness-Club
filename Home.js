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



let slideIndex = 0;

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let totalSlides = slides.length;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = totalSlides - 0;
    }

    let offset = -slideIndex * 13 + '%';
    document.querySelector('.Slider-content').style.transform = 'translateX(' + offset + ')';
}

showSlides(); 

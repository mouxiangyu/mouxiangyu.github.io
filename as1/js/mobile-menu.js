const toggleButton = document.getElementById("menu-toggle");
const infobar = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", () => {
    infobar.classList.toggle("active");
    // Change icon
    if (infobar.classList.contains("active")) {
        toggleButton.innerHTML = "&times;"; // × (cross)
    } else {
        toggleButton.innerHTML = "&#9776;"; // ☰ (hamburger)
    }
});

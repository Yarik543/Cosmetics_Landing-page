// Burger Menu
const burgerBtn = document.querySelector(".Humburger_menu");
const burgerPanel = document.getElementById("burgerPanel");
const burgerOverlay = document.getElementById("burgerOverlay");
const burgerClose = document.getElementById("burgerClose");
const burgerLinks = document.querySelectorAll(".burger-link");

// Open burger menu
function openBurger() {
    burgerPanel.classList.add("active");
    burgerOverlay.classList.add("active");
    document.body.classList.add("burger-open");
}

// Close burger menu
function closeBurger() {
    burgerPanel.classList.remove("active");
    burgerOverlay.classList.remove("active");
    document.body.classList.remove("burger-open");
}

// Toggle burger menu
function toggleBurger() {
    if (burgerPanel.classList.contains("active")) {
        closeBurger();
    } else {
        openBurger();
    }
}

// Event listeners
if (burgerBtn) {
    burgerBtn.addEventListener("click", toggleBurger);
}

if (burgerClose) {
    burgerClose.addEventListener("click", closeBurger);
}

if (burgerOverlay) {
    burgerOverlay.addEventListener("click", closeBurger);
}

// Close on link click
burgerLinks.forEach((link) => {
    link.addEventListener("click", closeBurger);
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && burgerPanel.classList.contains("active")) {
        closeBurger();
    }
});

// Prevent scroll on touch when burger is open
burgerOverlay?.addEventListener("touchmove", (e) => {
    if (burgerPanel.classList.contains("active")) {
        e.preventDefault();
    }
}, { passive: false });

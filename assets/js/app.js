const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const closeMenu = document.querySelector("#closeMenu");
const hLinks = document.querySelectorAll("#hLink");

// Open menu when clicking the hamburger
hamburger.addEventListener("click", () => {
    menu.classList.remove("hidden");
});

// Close menu when clicking the "X" button
closeMenu.addEventListener("click", () => {
    menu.classList.add("hidden");
});

// Close menu when clicking any menu link
hLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("hidden");
    });
});



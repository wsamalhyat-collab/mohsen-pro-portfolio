/* ===================================
   Mohsen Pro Portfolio
   Main JavaScript
=================================== */

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Scroll To Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Website Loaded
console.log("Mohsen Pro Portfolio Loaded Successfully 🚀");// Dark Mode Toggle
const themeButton = document.createElement("button");

themeButton.innerHTML = "🌙";

themeButton.id = "themeButton";

document.body.appendChild(themeButton);

themeButton.style.position = "fixed";
themeButton.style.left = "20px";
themeButton.style.bottom = "20px";
themeButton.style.padding = "12px";
themeButton.style.borderRadius = "50%";
themeButton.style.border = "none";
themeButton.style.cursor = "pointer";

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

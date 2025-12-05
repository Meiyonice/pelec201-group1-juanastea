const navButtons = document.querySelectorAll('.nav-btn');
const currentPage = window.location.pathname.split("/").pop(); 

navButtons.forEach(btn => {
    const linkPage = btn.getAttribute("href");

    if (linkPage === currentPage) {
        btn.classList.add("active");
    }

    btn.addEventListener('click', function () {
        navButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // Scroll down → hide navbar
    if (currentScroll > lastScrollY + 1) {   // 2 scroll "clicks"
        navbar.classList.add("hide");
    }
    // Scroll up → show navbar
    else if (currentScroll < lastScrollY - 1) {  // 1 scroll "click"
        navbar.classList.remove("hide");
    }

    lastScrollY = currentScroll;
});
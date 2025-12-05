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
const navbar = document.getElementById("navbar");


window.addEventListener("scroll", () => {
if (window.scrollY > lastScrollY) {
// scrolling down
navbar.classList.add("hide");
} else {
// scrolling up
navbar.classList.remove("hide");
}
lastScrollY = window.scrollY;
});




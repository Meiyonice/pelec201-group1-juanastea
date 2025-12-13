/* ===================================
   HERO SLIDER DATA
=================================== */

let currentIndex = 0;

const slides = [

  /* ------------ SLIDE 1 — MILK TEA SERIES ------------ */
  {
    title: "MILK TEA<br>SERIES",
    desc: "Richly brewed tea meets silky milk and chewy pearls for the perfect blend of comfort and flavor in every sip.",

    main: {
      src: "assets/images/products/milk-tea/green-milk-tea.png",
      left: "32%",
      top: "34.8%",
      width: "402.29px",
      height: "665.49px",
      rotate: "9.33deg"
    },

    main2: {
      src: "assets/images/products/milk-tea/red-milk-tea.png",
      left: "53%",
      top: "-2%",
      width: "327.27px",
      height: "528.99px",
      rotate: "4.35deg"
    },

    main3: {
      src: "assets/images/products/milk-tea/blue-milk-tea.png",
      left: "64%",
      top: "41%",
      width: "400.79px",
      height: "678.5px",
      rotate: "-19.12deg"
    },

    elements: [
      { src: "assets/images/ingredients/milk-tea/pearls-1.png", left: "38.6%", top: "23.9%", width: "252px", height: "152px", rotate: "0deg" },
      { src: "assets/images/ingredients/milk-tea/pearls-2.png", left: "56.1%", top: "55.4%", width: "200px", height: "215px", rotate: "0deg" },
      { src: "assets/images/ingredients/milk-tea/pearls-3.png", left: "73%", top: "20.4%", width: "315px", height: "267px", rotate: "0deg" },
      { src: "assets/images/ingredients/milk-tea/boba-pearl.png", left: "26%", top: "68%", width: "113px", height: "113px", rotate: "0deg" },
      { src: "assets/images/ingredients/milk-tea/boba-pearl.png", left: "87%", top: "80%", width: "113px", height: "113px", rotate: "0deg" }
    ]
  },

  /* ------------ SLIDE 2 — FRUIT TEA SERIES ------------ */
  {
    title: "FRUIT TEA<br>SERIES",
    desc: "Freshly brewed tea meets juicy fruit and chewy jelly for a sweet, refreshing fusion in every sip.",

    main: {
      src: "assets/images/products/fruit-tea/fruit-tea-blue-red.png",
      left: "28.3%",
      top: "-0.9%",
      width: "608px",
      height: "608px",
      rotate: "-12.07deg"
    },

    main2: {
      src: "assets/images/products/fruit-tea/fruit-tea-blue-green.png",
      left: "48.1%",
      top: "33.5%",
      width: "552.25px",
      height: "552.25px",
      rotate: "-3.96deg"
    },

    main3: {
      src: "assets/images/products/fruit-tea/fruit-tea-blue-violet.png",
      left: "59.9%",
      top: "2.6%",
      width: "608.98px",
      height: "608.98px",
      rotate: "11.52deg"
    },

    elements: [
      { src: "assets/images/ingredients/fruit-tea/jelly-cubes-1.png", left: "34.9%", top: "52.5%", width: "407.43px", height: "297.5px", rotate: "0deg" },
      { src: "assets/images/ingredients/fruit-tea/jelly-cubes-2.png", left: "77.7%", top: "65%", width: "285.97px", height: "219.97px", rotate: "0deg" },
      { src: "assets/images/ingredients/fruit-tea/jelly-cubes-3.png", left: "61%", top: "8%", width: "228.98px", height: "270.28px", rotate: "0deg" },
      { src: "assets/images/ingredients/fruit-tea/white-jelly-cube.png", left: "38.6%", top: "27.1%", width: "110.69px", height: "110.69px", rotate: "-76.34deg" },
      { src: "assets/images/ingredients/fruit-tea/white-jelly-cube.png", left: "91.7%", top: "38.3%", width: "110.69px", height: "110.69px", rotate: "-166.76deg" }
    ]
  },

  /* ------------ SLIDE 3 — FRIES SERIES ------------ */
  {
    title: "FRIES<br>SERIES",
    desc: "Crispy golden fries coated in bold, savory flavors for the ultimate crunchy indulgence.",

    main: {
      src: "assets/images/products/fries/chili-bbq.png",
      left: "35.2%",
      top: "17.3%",
      width: "482px",
      height: "454px",
      rotate: "0deg"
    },

    main2: {
      src: "assets/images/products/fries/sour-cream.png",
      left: "61.6%",
      top: "8.3%",
      width: "379px",
      height: "357px",
      rotate: "0deg"
    },

    main3: {
      src: "assets/images/products/fries/cheese.png",
      left: "56.6%",
      top: "35.3%",
      width: "523px",
      height: "492px",
      rotate: "0deg"
    },

    elements: [
      { src: "assets/images/ingredients/fries/fries-1.png", left: "33.1%", top: "0.6%", width: "454.38px", height: "298.51px", rotate: "0deg" },
      { src: "assets/images/ingredients/fries/fries-2.png", left: "37.4%", top: "50.6%", width: "413.84px", height: "335.49px", rotate: "0deg" },
      { src: "assets/images/ingredients/fries/fries-3.png", left: "83.5%", top: "0.1%", width: "187.86px", height: "368.19px", rotate: "0deg" },
      { src: "assets/images/ingredients/fries/fries-4.png", left: "86.8%", top: "65.8%", width: "162px", height: "142px", rotate: "0deg" }
    ]
  },

  /* ------------ SLIDE 4 — BURGER SERIES ------------ */
  {
    title: "BURGER<br>SERIES",
    desc: "Juicy, stacked burgers layered with bold flavors, fresh toppings, and irresistible savory goodness.",

    main: {
      src: "assets/images/products/burger/ham-and-egg.png",
      left: "31.3%",
      top: "37.2%",
      width: "612px",
      height: "408px",
      rotate: "10.48deg"
    },

    main2: {
      src: "assets/images/products/burger/bacon.png",
      left: "51.6%",
      top: "4.3%",
      width: "646px",
      height: "431px",
      rotate: "-12.94deg"
    },

    elements: [
      { src: "assets/images/ingredients/burger/burgers-1.png", left: "38%", top: "1.6%", width: "356.21px", height: "491px", rotate: "0deg" },
      { src: "assets/images/ingredients/burger/burgers-2.png", left: "68.7%", top: "50%", width: "433.14px", height: "428.4px", rotate: "0deg" },
      { src: "assets/images/ingredients/burger/lettuce-leaf.png", left: "21.7%", top: "61.6%", width: "187.82px", height: "187.82px", rotate: "127.73deg" },
      { src: "assets/images/ingredients/burger/lettuce-leaf.png", left: "86.6%", top: "3.6%", width: "187.82px", height: "187.82px", rotate: "53.53deg" }
    ]
  },

  /* ------------ SLIDE 5 — GRAHAM BAR SERIES ------------ */
  {
    title: "GRAHAM BAR<br>SERIES",
    desc: "A sweet, layered treat with crunchy grahams, creamy fillings, and rich flavors in every bite.",

    main: {
      src: "assets/images/products/graham-bar/cookies.png",
      left: "36.3%",
      top: "11%",
      width: "435px",
      height: "596px",
      rotate: "0deg"
    },

    main2: {
      src: "assets/images/products/graham-bar/chocomallows.png",
      left: "66.9%",
      top: "11%",
      width: "450px",
      height: "617px",
      rotate: "0deg"
    },

    main3: {
      src: "assets/images/products/graham-bar/ube.png",
      left: "52.7%",
      top: "23%",
      width: "433px",
      height: "595px",
      rotate: "0deg"
    },

    elements: [
      { src: "assets/images/ingredients/graham-bar/grahams-1.png", left: "32.2%", top: "43.3%", width: "405.29px", height: "498.5px", rotate: "0deg" },
      { src: "assets/images/ingredients/graham-bar/grahams-2.png", left: "43.9%", top: "0.3%", width: "692.66px", height: "339.39px", rotate: "0deg" },
      { src: "assets/images/ingredients/graham-bar/grahams-3.png", left: "69.8%", top: "60.1%", width: "427.79px", height: "295.43px", rotate: "0deg" }
    ]
  }
];


/* ===================================
   HERO SLIDER LOGIC
=================================== */

const titleEl = document.querySelector('.hero-title');
const descEl = document.querySelector('.hero-desc');
const productLayer = document.getElementById("product-layer");

function createProductImage(item) {
  const img = document.createElement("img");
  img.src = item.src;
  img.className = "product";

  img.style.left = item.left;
  img.style.top = item.top;
  img.style.width = item.width;
  img.style.height = item.height;
  img.style.setProperty('--r', item.rotate);

  return img;
}

function animateProducts(slide) {
  productLayer.innerHTML = "";

  const allImages = [];

  if (slide.main) allImages.push(slide.main);
  if (slide.main2) allImages.push(slide.main2);
  if (slide.main3) allImages.push(slide.main3);
  if (slide.elements?.length) allImages.push(...slide.elements);

  allImages.forEach(item => {
    productLayer.appendChild(createProductImage(item));
  });
}

function animateText(el, delay = 0) {
  el.style.animation = "none";
  void el.offsetWidth;
  el.style.animation = `fadeInLeft 0.7s forwards ${delay}s`;
}

function updateSlide(index) {
  const slide = slides[index];

  titleEl.innerHTML = slide.title;
  animateText(titleEl);

  descEl.textContent = slide.desc;
  animateText(descEl, 0.3);

  animateProducts(slide);
}


/* ===================================
   SLIDER CONTROLS
=================================== */

document.querySelector('.arrow.left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(currentIndex);
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
});


/* ===================================
   PRODUCTS SECTION FADE IN
=================================== */

const productSection = document.querySelector(".products-section");

const productObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

if (productSection) {
  productObserver.observe(productSection);
}


/* ===================================
   ABOUT US FADE IN (CONTENT + BLOBS)
=================================== */

document.addEventListener("DOMContentLoaded", () => {
  const aboutContent = document.querySelector(".about-content");
  const ellipses = document.querySelectorAll(".ellipse");

  const aboutObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutContent.classList.add("show");

          ellipses.forEach(ellipse => {
            ellipse.classList.add("show");
          });

          aboutObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  if (aboutContent) {
    aboutObserver.observe(aboutContent);
  }
});


/* ===================================
   NAVBAR ACTIVE + AUTO HIDE
=================================== */

document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav-btn");
  const currentPage = window.location.pathname.split("/").pop();
  const navbar = document.getElementById("navbar");

  // Set active state
  navButtons.forEach(btn => {
    const linkPage = btn.getAttribute("href");

    if (linkPage === currentPage) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", function () {
      navButtons.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Hide / show on scroll
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("hide", window.scrollY > lastScrollY);
    lastScrollY = window.scrollY;
  });
});


/* ===================================
   INIT
=================================== */

updateSlide(currentIndex);


/* ===================================
   NAVBAR SCROLL CONNECTION
=================================== */

document.addEventListener("DOMContentLoaded", () => {

  // NAV BUTTONS
  const navButtons = document.querySelectorAll(".nav-btn");
  const contactBtn = document.querySelector(".contact-btn");

  // SECTIONS
  const sections = {
    "HOME": document.getElementById("hero"),
    "PRODUCTS": document.getElementById("products"),
    "ABOUT US": document.getElementById("about-us"),
    "CONTACT": document.querySelector("footer")
  };

  // Smooth scroll function
  function scrollToSection(section, extraOffset = 0) {
    if (!section) return;

    const navHeight = document.getElementById("navbar").offsetHeight;
    const sectionTop = section.offsetTop - navHeight + extraOffset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    });
  }

  // Remove active class
  function clearActive() {
    navButtons.forEach(btn => btn.classList.remove("active"));
  }

  // NAVBAR BUTTON CLICK
  navButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const text = button.textContent.trim().toUpperCase();

      clearActive();
      button.classList.add("active");

      // Lower landing ONLY for PRODUCTS
      scrollToSection(sections[text], text === "PRODUCTS" ? 340 : 0);
    });
  });

  // CONTACT US BUTTON (right side)
  contactBtn.addEventListener("click", () => {
    clearActive();
    scrollToSection(sections["CONTACT"]);
  });
});

/* ===================================
   FOOTER SCROLL CONNECTION
=================================== */

document.addEventListener("DOMContentLoaded", () => {

  const footerLinks = document.querySelectorAll(".footer-link");

  const sections = {
    "HOME": document.getElementById("hero"),
    "PRODUCTS": document.getElementById("products"),
    "ABOUT US": document.getElementById("about-us"),
    "CONTACT": document.querySelector("footer")
  };

  function scrollToSection(section, extraOffset = 0) {
    if (!section) return;

    const navHeight = document.getElementById("navbar").offsetHeight;
    const sectionTop = section.offsetTop - navHeight + extraOffset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    });
  }

  footerLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.dataset.target;
      scrollToSection(sections[target], target === "PRODUCTS" ? 120 : 0);
    });
  });

});

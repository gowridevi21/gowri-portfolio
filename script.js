const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

menuButton.addEventListener("click", () => {

  mobileNav.classList.toggle("open");

  const icon = menuButton.querySelector("i");

  if (mobileNav.classList.contains("open")) {

    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");

  } else {

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  }

});


document.querySelectorAll(".mobile-nav a").forEach((link) => {

  link.addEventListener("click", () => {

    mobileNav.classList.remove("open");

    const icon = menuButton.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});


const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".desktop-nav a");


window.addEventListener("scroll", () => {

  let currentSection = "home";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 130;

    if (window.scrollY >= sectionTop) {

      currentSection = section.getAttribute("id");

    }

  });


  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {

      link.classList.add("active");

    }

  });

});

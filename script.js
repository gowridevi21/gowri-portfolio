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


const mobileLinks = mobileNav.querySelectorAll("a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");

    const icon = menuButton.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});


const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.08
  }
);

sections.forEach((section) => {
  section.classList.add("fade-section");
  observer.observe(section);
});

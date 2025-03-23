// components/app-navigation-rail/app-navigation-rail.js

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navigation-rail a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      // 移除所有 active class
      navLinks.forEach(l => l.classList.remove("active"));
      e.currentTarget.classList.add("active");
    });
  });
});

// components/app-header/app-header.js

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menuButton");
  const navRail = document.querySelector(".navigation-rail");

  if (menuButton && navRail) {
    menuButton.addEventListener("click", () => {
      navRail.classList.toggle("expanded");
    });
  }

  // 搜尋功能（可選實作）
  const searchField = document.querySelector("md-outlined-text-field[type='search']");
  if (searchField) {
    searchField.addEventListener("input", (e) => {
      const keyword = e.target.value.trim().toLowerCase();
      // TODO: 根據 keyword 濾出 PDU 或 Grid（之後補上 API）
      console.log("搜尋中：", keyword);
    });
  }
});

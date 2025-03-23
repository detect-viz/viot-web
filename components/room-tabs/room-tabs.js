fetch("/api/room-list")
.then(res => res.json())
.then(rooms => {
  const tabContainer = document.querySelector(".room-tabs md-tabs");
  tabContainer.innerHTML = "";
  rooms.forEach((room, index) => {
    const tab = document.createElement("md-primary-tab");
    if (index === 0) tab.setAttribute("selected", "");
    tab.textContent = room;
    tab.addEventListener("click", async () => {
      document.querySelectorAll("md-primary-tab").forEach(t => t.removeAttribute("selected"));
      tab.setAttribute("selected", "");
      const res = await fetch(`/api/room/${room}`);
      const html = await res.text();
      document.querySelector(".pdu-grid").innerHTML = html;
    });
    tabContainer.appendChild(tab);
  });
});
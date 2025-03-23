
  fetch("/api/dc-list")
    .then(res => res.json())
    .then(data => {
      const container = document.querySelector(".dc-selector md-outlined-segmented-button-set");
      container.innerHTML = "";
      data.forEach((dc, index) => {
        const btn = document.createElement("md-outlined-segmented-button");
        if (index === 0) btn.setAttribute("selected", "");
        btn.innerHTML = `<div class="dc-label">${dc.name}</div><md-badge label="${dc.pending_count}"></md-badge>`;
        btn.addEventListener("click", async () => {
          document.querySelectorAll("md-outlined-segmented-button").forEach(b => b.removeAttribute("selected"));
          btn.setAttribute("selected", "");
          const res = await fetch(`/api/dc/${dc.name}`);
          const html = await res.text();
          document.getElementById("mainContent").innerHTML = html;
        });
        container.appendChild(btn);
      });
    });

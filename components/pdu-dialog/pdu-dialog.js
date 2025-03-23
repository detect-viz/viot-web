document.querySelector("#bindDialog")?.addEventListener("close", (e) => {
    if (e.target.returnValue === "confirm") {
      const ip = document.getElementById("bindIp").textContent;
      const rack = document.getElementById("bindRack").textContent;
      fetch("/api/bind", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ip, rack })
      })
        .then(res => res.json())
        .then(data => {
          console.log("綁定成功：", data);
  
          // 自動刷新畫面
          fetch("/api/pdu-grid")
            .then(res => res.text())
            .then(html => {
              document.querySelector(".pdu-grid").innerHTML = html;
            });
  
          fetch("/api/pdu-list")
            .then(res => res.text())
            .then(html => {
              document.querySelector(".pdu-list").innerHTML = html;
            });
        });
    }
  });
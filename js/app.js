// js/app.js

document.addEventListener("DOMContentLoaded", () => {
    // 全域綁定可擴充事件處理器
  
    // 綁定彈窗邏輯
    document.body.addEventListener("click", async (e) => {
      const target = e.target.closest(".pdu-cell");
      if (!target || target.hasAttribute("disabled")) return;
  
      const ip = target.dataset.ip;
      const rack = target.dataset.rack;
      const monitored = target.dataset.monitored === "1";
  
      // 更新彈窗資料
      const bindIpEl = document.getElementById("bindIp");
      const bindRackEl = document.getElementById("bindRack");
      if (bindIpEl) bindIpEl.textContent = ip;
      if (bindRackEl) bindRackEl.textContent = rack;
  
      const dialog = document.getElementById("bindDialog");
      if (dialog?.show) dialog.show();
  
      // 綁定事件
      const confirmBtn = document.getElementById("confirmBindBtn");
      if (confirmBtn) {
        confirmBtn.onclick = async () => {
          const api = monitored ? "/api/unbind" : "/api/bind";
          await fetch(api, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ip, rack })
          });
          dialog.close();
          location.reload();
        };
      }
    });
  
    // Search Event (from app-header)
    document.body.addEventListener("pdu-search", async (e) => {
      const keyword = e.detail.keyword;
      const res = await fetch(`/api/pdu-pending-list?search=${encodeURIComponent(keyword)}`);
      const html = await res.text();
      const list = document.querySelector(".pdu-list");
      if (list) list.innerHTML = html;
    });
  });
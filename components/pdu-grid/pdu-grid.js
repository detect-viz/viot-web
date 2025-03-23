fetch("/api/pdu-grid")
.then(res => res.text())
.then(html => {
  document.querySelector(".pdu-grid").innerHTML = html;
});
window.openBindDialog = (ip) => {
fetch(`/api/pdu/${ip}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("bindIp").textContent = data.ip;
    document.getElementById("bindRack").textContent = data.rack;
    document.querySelector("#bindDialog")?.show();
  });
};
window.openUnbindDialog = window.openBindDialog;
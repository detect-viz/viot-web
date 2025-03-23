fetch("/api/pdu-list")
.then(res => res.text())
.then(html => {
  document.querySelector(".pdu-list").innerHTML = html;
});
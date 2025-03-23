fetch("/api/pdu/detail")
.then(res => res.text())
.then(html => {
  document.querySelector(".pdu-sidebar").innerHTML = html;
});
function openMenu() {
  document.getElementById("sideMenu").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

function toggleSubLinks(id) {
  const el = document.getElementById(id);
  el.classList.toggle("open");
}

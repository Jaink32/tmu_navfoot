function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}
function openModal(src) {
  document.getElementById("modalImage").src = src;
  document.getElementById("imageModal").style.display = "block";
}
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Script for handling About Me modal
var aboutModal = document.getElementById("about-modal");
var aboutBtn = document.getElementById("about-btn");
var closeButtons = document.getElementsByClassName("close");

aboutBtn.onclick = function() {
  aboutModal.style.display = "flex";
}

Array.from(closeButtons).forEach(function(close) {
    close.onclick = function() {
      aboutModal.style.display = "none";
    }
});

window.onclick = function(event) {
  if (event.target == aboutModal) {
    aboutModal.style.display = "none";
  }
}
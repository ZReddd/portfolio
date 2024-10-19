// Get the modal
var modal = document.getElementById("projects-modal"); 
var btn = document.getElementById("projects-btn"); 
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex"; // Show the modal
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none"; // Hide the modal
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Hide the modal when clicking outside
  }
}

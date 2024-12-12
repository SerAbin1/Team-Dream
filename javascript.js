function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

// Close the dropdown if the user clicks outside of it
document.addEventListener("click", function(event) {
  var dropdown = document.querySelector(".dropdown");
  var dropdownContent = document.getElementById("dropdown-content");

  if (!dropdown.contains(event.target)) {
    dropdownContent.style.display = "none";
  }
});

// Close the dropdown when an option is selected
var links = document.querySelectorAll("#dropdown-content a");
links.forEach(link => {
  link.addEventListener("click", function() {
    document.getElementById("dropdown-content").style.display = "none";
  });
});

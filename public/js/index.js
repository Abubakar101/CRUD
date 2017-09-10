const body = document.querySelector("body");
const frame = document.querySelector(".frame");

body.addEventListener("click", function(e) {
  // Removing the "readonly" attribute from INPUT

  if (e.target.tagName === "INPUT") {
    e.target.removeAttribute("readonly");
  }
});

// Submitting the form
function addReadOnly(e) {
  e.parentElement.parentElement.submit();
}

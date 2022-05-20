var toggleMobile = document.querySelector("#toggleMobile");
function toggle() {
  if (toggleMobile.classList.contains("show-mobile-item")) {
    toggleMobile.classList.remove("show-mobile-item");
  } else {
    toggleMobile.classList.add("show-mobile-item");
  }
}
toggleMobile.addEventListener("click",toggle);


var toggle = document.getElementById("toggle");
toggle.onclick = function() {
  document.body.classList.toggle("darkTheme");
  if(document.body.classList.contains("darkTheme")){
    toggle.className = "bi bi-brightness-high-fill";
  }else{
    toggle.className="bi bi-moon-fill";
  }
}
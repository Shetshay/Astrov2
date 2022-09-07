var copybtn = document.getElementById("copy-btn");
var link = document.getElementById("link");

var copybtn2 = document.getElementById("copy-btn2");
var link2 = document.getElementById("link2");


copybtn.onclick = function() {
  navigator.clipboard.writeText(link.innerHTML);
  copybtn.innerHTML = "Copied"
  setTimeout(function() {
    copybtn.innerHTML = "Copy"
  }, 2000)
}
copybtn2.onclick = function() {
  navigator.clipboard.writeText(link.innerHTML);
  copybtn2.innerHTML = "Copied"
  setTimeout(function() {
    copybtn2.innerHTML = "Copy"
  }, 2000)
}

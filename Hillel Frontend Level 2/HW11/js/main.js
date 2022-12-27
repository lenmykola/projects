let divs = document.getElementsByTagName("div");
let randColor = function () {
  this.style.backgroundColor = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;
};
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", randColor, false);
}

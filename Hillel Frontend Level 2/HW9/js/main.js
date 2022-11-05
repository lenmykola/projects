function randcolor() {
    document.getElementById("changeable").style.backgroundColor="rgb("+Math.round(Math.random()*255)+", "+Math.round(Math.random()*255)+", "+Math.round(Math.random()*255)+")";
}

function visibility() {
    document.getElementById("invisible").style.opacity=1;
}
var rot = 90;
function rotate() {
    document.getElementById("rotating").style.transform="rotate("+rot+"deg)";
    rot+=90;
}

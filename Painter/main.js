let i=0
let clx, cly, ulx, uly
var rect = 0;
var circ=0
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.width=document.body.clientWidth*0.68,5
let size = document.querySelector('#size');
let output = document.querySelector('#size-output');
output.textContent = size.value;
size.addEventListener('input', function() {
  output.textContent = size.value;
});
let mouse = false;
let image=document.getElementById("imageInp")
image.innerText=""
var uploaded_image=""
image.addEventListener("change", function(){
  const reader=new FileReader()
  reader.addEventListener("load", ()=>{
    uploaded_image=reader.result
    c.style.backgroundImage=`url(${uploaded_image})`
  })
  reader.readAsDataURL(this.files[0])
})
let main = document.getElementById("canva")
main.addEventListener('mousedown',mousedown)
main.addEventListener('mouseup',mouseup)
main.addEventListener('mousemove', brushAndEraser)
main.addEventListener('mousedown',fill)
document.getElementById("clear").addEventListener("mousedown",clear)
let buttons=document.getElementsByClassName("buttons")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundImage=`url(icons/${ buttons[i].id}01.png)`
    // buttons[i].addEventListener('mousedown',clicked(this))
}
let prevClick=document.getElementById("brush")
prevClick.style.backgroundImage=`url(icons/${prevClick.id}02.png), linear-gradient(166deg, rgba(1,117,255,1) 48%, rgba(193,245,255,1) 100%)`
let color=document.querySelector('#color')
function clicked(btn) {
    prevClick.classList.remove('clicked')
    prevClick.style.backgroundImage=`url(icons/${prevClick.id}01.png)`
    prevClick.style.backgroundColor="white"
    btn.classList.add('clicked')
    btn.style.backgroundImage=`url(icons/${btn.id}02.png), linear-gradient(166deg, rgba(1,117,255,1) 48%, rgba(193,245,255,1) 100%)`
    prevClick=btn
}
let oldX = 0
let oldY = 0
function mousedown()
{
  mouse = true;
  oldX=0
  oldY=0
  brushAndEraser()
}
function mouseup()
{
  mouse =false;
}
// function brush()
// {
//  if(mouse && prevClick.id=="brush")
//  {
//     let paint=document.createElement('div')
//     paint.style.position="absolute"
//     paint.style.top = window.event.pageY+"px"
//     paint.style.left = window.event.pageX+"px" 
//     paint.style.margin="0px"
//     paint.style.backgroundColor=color.value
//     paint.style.width=size.value+"px"
//     paint.style.height=size.value+"px"
//     paint.style.borderRadius="50%"
//     paint.id=i
//     // paint.onclick= function() {
        
//         // if(prevClick.id=="eraser")
//         // {
//         //    paint.remove()
//         // }};
//     paint.addEventListener('mouseover', (event) => {
//         if(prevClick.id=="eraser" && mouse)
//         {
//            paint.remove()
//         }
//     })

//     main.append(paint)
//     i++
//  }
//  else
//  return;
// }
function fill() {
  if (mouse && prevClick.id=="fill") {
    c.style.backgroundImage=""
    c.style.backgroundColor=color.value
    
  } else 
    return
}
function rectangle() {
  if (rect == 0 && prevClick.classList[1]=="rects") {
    clx = window.event.clientX - c.offsetLeft;
    cly = window.event.clientY - c.offsetTop;
    ctx.moveTo(clx, cly);
    rect++;
  } else if (rect == 1 && prevClick.classList[1]=="rects"){
    ulx = window.event.clientX - c.offsetLeft;
    uly = window.event.clientY - c.offsetTop;
    ctx.beginPath();
    ctx.globalCompositeOperation="source-over";
    ctx.moveTo(ulx, uly);
    if (prevClick.id=="rectangle") {
      ctx.fillStyle = color.value
      ctx.fillRect(clx, cly, ulx - clx, uly - cly);
    } else if(prevClick.id=="rectStroke"){
      ctx.strokeStyle = color.value
      ctx.lineWidth = size.value
      ctx.strokeRect(clx, cly, ulx - clx, uly - cly);
      ctx.stroke();
    }
    rect = 0;
  }
}
// let canvas = document.getElementById('canvas')
//  let ctx = canvas.getContext('2d');
// canvas.onmousemove = onBrash;
// canvas.onmouseup = mouseup
// canvas.onmousedown = mousedown
// let isMouseUp = false
// let oldX = 0
// let oldY = 0



// function mousedown(){
//    isMouseUp = true
// }
// function mouseup(){
//    isMouseUp = false
//    oldX=0
//    oldY=0
// }
function brushAndEraser() {

   if(mouse && (prevClick.id=="brush" || prevClick.id=="eraser")){

      if (oldX!=0 && oldY!=0) {
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value
        ctx.beginPath();
        if (prevClick.id=="brush") {
          ctx.globalCompositeOperation="source-over";
        } else if(prevClick.id=="eraser"){
          ctx.globalCompositeOperation="destination-out";
        }
        ctx.lineCap = "round";
        ctx.moveTo(oldX, oldY);
         ctx.lineTo(window.event.clientX- c.offsetLeft, window.event.clientY- c.offsetTop); 
         ctx.stroke();
      }
      oldX = window.event.clientX - c.offsetLeft
      oldY = window.event.clientY- c.offsetTop
   }
}
function circle() {
  if (circ == 0 && prevClick.classList[1]=="circles") {
    clx = window.event.clientX - c.offsetLeft;
    cly = window.event.clientY - c.offsetTop;
    circ++;
  } else if (circ == 1 && prevClick.classList[1]=="circles"){
    ulx = window.event.clientX - c.offsetLeft;
    uly = window.event.clientY - c.offsetTop;
    ctx.beginPath()
    ctx.globalCompositeOperation="source-over"
    if (prevClick.id=="circFill") {
      ctx.fillStyle = color.value
      ctx.arc(clx, cly, Math.sqrt(Math.pow(clx-ulx, 2)+Math.pow(cly-uly, 2)), 0, 2 * Math.PI);
      ctx.fill()
    } else if(prevClick.id=="circStroke"){
      ctx.strokeStyle = color.value
      ctx.lineWidth = size.value
      ctx.arc(clx, cly, Math.sqrt(Math.pow(clx-ulx, 2)+Math.pow(cly-uly, 2)), 0, 2 * Math.PI);
      ctx.stroke();
    }
    circ = 0;
  }
}
function text() {
  if (prevClick.id=="text") {
    ctx.font = "30px Arial";
    ctx.fillStyle=color.value
    ctx.globalCompositeOperation="source-over"
    ctx.fillText(textInp.value, window.event.clientX - c.offsetLeft, window.event.clientY- c.offsetTop);
  } else 
    return
}
function clear() {
  ctx.globalCompositeOperation="destination-out";
  ctx.fillRect(0, 0, c.width, c.height)
  c.style.backgroundImage=""
  c.style.backgroundColor="white"
}
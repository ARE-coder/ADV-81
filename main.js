var canva = document.getElementById("Canvas");
console.log(canva);
var colors = "red"; 
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown", My_mousedown);

function My_mousedown(e){
     var color = document.getElementById("Color").value;
    console.log("color");

    var mouse_x = e.clientX - offsetLeft;
    var mouse_y = e.clientY - offsetRight;

    console.log("X = " + mouse_x + "Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}
function circle(mouse_y,mouse_x)
{
    ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = 3;
		ctx.arc(200, 200, 40 ,0 , 2 * Math.PI);
		ctx.stroke();
}

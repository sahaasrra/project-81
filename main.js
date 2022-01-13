canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
      
color = "blue";

ctx.beginPath();
ctx.strokestyle = "red";
ctx.lineWidth = 1;
ctx.rect(150,143,430,200);
ctx.stroke();

addEventListener("mouseDown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    console.log(color);
  
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
  
    console.log(" X - " + mouse_x + " , Y - " + mouse_y);
  
  }

      ctx.beginPath();
      ctx.strokeStyle = color ;
      ctx.lineWidth = 4;
      ctx.arc(250,210,40,0,2*Math.PI);
      ctx.stroke();
   
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = 4;
      ctx.arc(340,210,40,0,2*Math.PI);
      ctx.stroke();
   
      ctx.beginPath();
      ctx.strokeStyle = "red";
      ctx.lineWidth = 4;
      ctx.arc(430,210,40,0,2*Math.PI);
      ctx.stroke();
   
      ctx.beginPath();
      ctx.strokeStyle = "yellow";
      ctx.lineWidth = 4;
      ctx.arc(295,250,40,0,2*Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = "green";
      ctx.lineWidth = 4;
      ctx.arc(390,250,40,0,2*Math.PI);
      ctx.stroke();
const canv = document.getElementById('canv').getContext("2d");
document.getElementById('canv').width = window.innerWidth;
document.getElementById('canv').height = window.innerHeight;
const billypos = {x: 0,y:0};
const oldpos = {x: 0,y: 0};
let foodpos = {x:0,y:0};
let speed = 1;
function clearcanvas(){
  canv.clearRect(0, 0, canv.canvas.width, canv.canvas.height);
  projectfood(Math.random()*(canv.canvas.width-475)+475,Math.random()*(canv.canvas.height-475)+475);
}

function projectbilly(x,y){
  oldpos.x = billypos.x;
  oldpos.y = billypos.y;
  billypos.x = x;
  billypos.y = y;
  canv.beginPath();
  canv.fillRect(x,y,100,100);
  canv.moveTo(x+25,y+60);
  canv.strokeStyle = "white";
  canv.lineWidth = 5;
  canv.lineTo(x+50,y+75);
  canv.stroke()
  canv.moveTo(x+48,y+75);
  canv.lineTo(x+75,y+60);
  canv.stroke();
  canv.moveTo(x+32.5,y+25);
  canv.lineTo(x+32.5,y+50);
  canv.stroke();
  canv.moveTo(x+66.5,y+25);
  canv.lineTo(x+66.5,y+50);
  canv.stroke();
  canv.closePath();
}
function projectfood(x,y){
canv.fillStyle = "rgba(0,0,0,0.5)";
canv.fillRect(x,y,25,25)
canv.fillStyle = "black";
foodpos.x = x;foodpos.y = y;
}
projectbilly(0,0);
projectfood(Math.random()*(canv.canvas.width-475)+475,Math.random()*(canv.canvas.height-475)+475);
document.addEventListener("keydown",(key)=>{
  switch (key.code) {
    case 'KeyW':
      projectbilly(billypos.x,billypos.y - speed)
      speed = speed+(22-speed)*(0.000001)
      break;
    case 'KeyA':
      projectbilly(billypos.x - speed,billypos.y)
      speed = speed+(22-speed)*(0.000001)
      break;
    case 'KeyS':
      projectbilly(billypos.x,billypos.y + speed)
      speed = speed+(22-speed)*(0.000001)
      break;
    case 'KeyD':
      projectbilly(billypos.x + speed,billypos.y)
      speed = speed+(22-speed)*(0.000001)
      break;
    case 'KeyE':
        clearcanvas();
        projectbilly(0,0)
        break;
  }
});

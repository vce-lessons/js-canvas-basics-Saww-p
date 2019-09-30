let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');
canv.height = window.innerHeight;
canv.width = window.innerWidth;
document.body.appendChild(canv);
let playerX;
init();
function draw(){
ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
ctx.fillRect(playerX, 100, 100, 100);
playerX++;
}

function init(){
loop();
playerX=0;
}

function loop(){
	draw();
requestAnimationFrame(loop);
}
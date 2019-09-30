let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');
canv.height = window.innerHeight;
canv.width = window.innerWidth;
document.body.appendChild(canv);
init();
function draw(){
ctx.strokeStyle = 'black';	
ctx.fillRect(100, 100, 160, 120);
}

function init(){
loop();
}

function loop(){
	draw();
requestAnimationFrame(loop);
}
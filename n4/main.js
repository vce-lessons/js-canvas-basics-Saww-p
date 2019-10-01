let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');
let h = canv.height = window.innerHeight;
let w = canv.width = window.innerWidth;
document.body.appendChild(canv);


init();
function draw(){
	ctx.beginPath();
	ctx.moveTo(w/2 - 100, h/2 - 100);
	ctx.lineTo(w/2 + 100, h/2 - 100);
	ctx.lineTo(w/2 + 100, h/2 + 100);
	ctx.lineTo(w/2 - 100, h/2 + 100);
	ctx.lineTo(w/2 - 100, h/2 - 100);
	ctx.stroke();
	ctx.closePath();
}

function init(){
loop();
}

function loop(){
	draw();
requestAnimationFrame(loop);
}
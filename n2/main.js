let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');
canv.height = window.innerHeight;
canv.width = window.innerWidth;
document.body.appendChild(canv);
init();
function draw(){	
ctx.strokeRect(window.innerWidth/2-100, window.innerHeight/2-100, 200, 200 );

}

function init(){
loop();
}

function loop(){
	draw();
requestAnimationFrame(loop);
}
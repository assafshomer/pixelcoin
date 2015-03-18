var init_x = 0;
var init_y = 0;
var fin_x = 0;
var fin_y = 0;
var track = 0;
function getPos(e){
		if (track > 0) {
	    x=e.clientX- rect.left;
	    y=e.clientY- rect.top;
	    x_min = Math.min(init_x, x);
	    x_max = Math.max(init_x, x);
	    y_min = Math.min(init_y, y);
	    y_max = Math.max(init_y, y);
	    dx = x_max-x_min;
	    dy = y_max-y_min;
	    cursor="Your Mouse Position Is : " + x + " and " + y ;
	    document.getElementById("displayArea").innerHTML=cursor;
	    clearCanvas();
	    ctx.fillStyle='red';
			ctx.fillRect(x_min,y_min,dx,dy);  
		};  
};
function stopTracking(){
    document.getElementById("displayArea").innerHTML="";
    track = 0;
};

$( document ).ready(function() {  
	$("#billboard").mousedown(function(e) {
		track = 1;
    init_x=e.clientX- rect.left;
    init_y=e.clientY- rect.top;
    cursor="Your Mouse Position Is : " + init_x + " and " + init_y ;
    document.getElementById("initpos").innerHTML=cursor;    
	});
	$("#billboard").mouseup(function(e) {
		track = 0;
    fin_x=e.clientX- rect.left;
    fin_y=e.clientY- rect.top;
    cursor="Your Mouse Position Is : " + fin_x + " and " + fin_y ;
    document.getElementById("finpos").innerHTML=cursor;
	});
});

function clearCanvas(){
	ctx.fillStyle = '#bbb';
	ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
};

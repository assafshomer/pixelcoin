var init_x = 0;
var init_y = 0;
var fin_x = 0;
var fin_y = 0;
var track = 0;
var selectionColor='gray';
function getPos(e){
		if (track > 0) {
	    x=e.clientX- rect.left;
	    y=e.clientY- rect.top;
	    x_min = Math.floor(Math.min(init_x, x));
	    x_max = Math.ceil(Math.max(init_x, x));
	    y_min = Math.floor(Math.min(init_y, y));
	    y_max = Math.ceil(Math.max(init_y, y));
	    dx = x_max-x_min;
	    dy = y_max-y_min;
	    // cursor="Your REAL Mouse Position Is : " + e.clientX + " and " + e.clientY ;
	    // document.getElementById("debugArea").innerHTML=cursor;
	    clearCanvas();
	    ctx.fillStyle=selectionColor;
			ctx.fillRect(x_min,y_min,dx,dy);
			stampValues();
		};  
};
function stopTracking(){
    // document.getElementById("debugArea").innerHTML="";
    track = 0;
};

$( document ).ready(function() {  
	$("#millionbits").mousedown(function(e) {
		track = 1;
		$('#buypix').addClass('hidden');
    init_x=e.clientX- rect.left;
    init_y=e.clientY- rect.top;
	});
	$("body").mouseup(function(e) {
		track = 0;
		$('#buypix').removeClass('hidden');
	});
});

function clearCanvas(){
	ctx.fillStyle = '#bbb';
	ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
};
function stampValues(){
  $('#x_min')[0].value=Math.max(1,x_min+1);
  $('#y_min')[0].value=Math.max(1,y_min+1);
  $('#x_max')[0].value=Math.min(ctx.canvas.width, x_max+1);
  $('#y_max')[0].value=Math.min(ctx.canvas.height,y_max+1);	
};

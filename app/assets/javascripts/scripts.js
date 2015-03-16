$( document ).ready(function() {  
  $('.forcenter_horiz').horiz_center_scroll();
});

function getSelectionCoords() {
    var sel = document.selection, range, rects, rect;
    var x = 0, y = 0;
    if (sel) {
        if (sel.type != "Control") {
            range = sel.createRange();
            range.collapse(true);
            x = range.boundingLeft;
            y = range.boundingTop;
        }
    } else if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0).cloneRange();
            if (range.getClientRects) {
                range.collapse(true);
                rects = range.getClientRects();
                if (rects.length > 0) {
                    rect = range.getClientRects()[0];
                }
                x = rect.left;
                y = rect.top;
            }
            // Fall back to inserting a temporary element
            if (x == 0 && y == 0) {
                var span = document.createElement("span");
                if (span.getClientRects) {
                    // Ensure span has dimensions and position by
                    // adding a zero-width space character
                    span.appendChild( document.createTextNode("\u200b") );
                    range.insertNode(span);
                    rect = span.getClientRects()[0];
                    x = rect.left;
                    y = rect.top;
                    var spanParent = span.parentNode;
                    spanParent.removeChild(span);

                    // Glue any broken text nodes back together
                    spanParent.normalize();
                }
            }
        }
    }
    return { x: x, y: y };
}
$("td.pixel").mousedown(function() {
    var on = 1;
    var start_x = $(this).attr('col');
    var start_y = $(this).attr('row');
    var end_x = $(this).attr('col');
    var end_y = $(this).attr('row');        
    $(this).css('background-color','white');
		$("td.pixel").hover(function() {
		  if (on == 1) {
              var end_x = $(this).attr('col');
              var end_y = $(this).attr('row');
              for (x = parseInt(start_x); x < parseInt(end_x)+1; x++) { 
                  for (y = parseInt(start_y); y < parseInt(end_y)+1; y++) {                
                    $('td.pixel[col='+x+'][row='+y+']').css('background-color','white');
                  };
              };              
		  };
		});
	$("td.pixel").mouseup(function() {	  
	  on = 0;
      // console.log('sx['+start_x+'], sy['+start_y+'], ex['+end_x+'], ey['+end_y+']');
	});
});



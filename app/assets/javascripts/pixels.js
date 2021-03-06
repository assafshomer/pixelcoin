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
};
var select = 0;
var targetcolor='white';
$( document ).ready(function() {  
	$("td.pixel").mousedown(function() {
	    select++;
	    var start_x = $(this).attr('col');
	    var start_y = $(this).attr('row');
	    var end_x = $(this).attr('col');
	    var end_y = $(this).attr('row');
	    var x_min = Math.min(end_x, start_x);
	    var x_max = Math.max(end_x, start_x);
	    var y_min = Math.min(end_y, start_y);
	    var y_max = Math.max(end_y, start_y);
	    if (select == 1) {$(this).css('background-color',targetcolor);};        
	        $("td.pixel").hover(function() {
	          if (select == 1) {
	              end_x = $(this).attr('col');
	              end_y = $(this).attr('row');
	              x_min = Math.min(end_x, start_x);
	              x_max = Math.max(end_x, start_x);
	              y_min = Math.min(end_y, start_y);
	              y_max = Math.max(end_y, start_y);
	                $('td.pixel').filter(function() {
	                  return $(this).attr("col") >= x_min && $(this).attr("col") <= x_max && $(this).attr("row") >= y_min && $(this).attr("row") <= y_max;
	                }).addClass('hover');
	                $('td.pixel').filter(function() {
	                  return $(this).attr("col") < x_min || $(this).attr("col") > x_max || $(this).attr("row") < y_min || $(this).attr("row") > y_max;
	                }).removeClass('hover');                    
	            };
	        });
	    $("td.pixel").mouseup(function() {    
	      select++;
	      $('td.pixel.hover').removeClass("hover");
	      x_min = Math.min(end_x, start_x);
	      x_max = Math.max(end_x, start_x);
	      y_min = Math.min(end_y, start_y);
	      y_max = Math.max(end_y, start_y);          
	        $('td.pixel').filter(function() {
	          return $(this).attr("col") >= x_min && $(this).attr("col") <= x_max && $(this).attr("row") >= y_min && $(this).attr("row") <= y_max;
	        }).css('background-color',targetcolor);
	        $('#x_min')[0].value=x_min+1;
	        $('#y_min')[0].value=y_min+1;
	        $('#x_max')[0].value=x_max+1;
	        $('#y_max')[0].value=y_max+1;
	        $('#buypix').removeClass('hidden');
	      // console.log('sx['+start_x+'], sy['+start_y+'], ex['+end_x+'], ey['+end_y+']');
	    });
	});
});

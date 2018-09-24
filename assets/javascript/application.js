"use strict"

$(document).ready(function() {
	// Global var's
	var cellColor = '#000'; 
	// Default grid
	for (var i = 1; i <= 256; i++) {
		$('.grid-field').append('<div class="cell" style="width: 32px; height: 32px;"></div>');
	}
	$('.cell').mousemove(function() {
				if ($('.eraser').hasClass('but-toggle-on')) {
					$(this).css('background-color', '#fff');
				} else {
					$(this).css('background-color', cellColor);
				}

	});
//	painting(cellColor); - WARNING! dont use this function (ne lez' blyat, ona vse lomaet)
	
	$('#grid-size').change(function() {
		$('div').remove('.cell');
		var cell = ('<div class="cell"></div>');
		var gridSize = Math.pow(+$('#grid-size option:selected').val(), 2);
		var cellSize = (512/$('#grid-size option:selected').val()) + "px";
		
		for (var i = 1; i <= gridSize; i++) {
			$('.grid-field').append(cell);
		}
		$('.cell').css({'width': cellSize, 'height': cellSize});
		
		$('.cell').mousemove(function() {
				if ($('.eraser').hasClass('but-toggle-on')) {
					$(this).css('background-color', '#fff');
				} else {
					$(this).css('background-color', cellColor);
				}

		});
//		painting(cellColor); - WARNING! dont use this function (ne lez' blyat, ona vse lomaet)
		
	});
	
	//For all buttons	
	$('.button-field button').hover( 
		function(){
			$(this).addClass('buttonHover');
		}, function() {
			$(this).removeClass('buttonHover');
		}
	);
	
	$('.button-field').on('mousedown', 'button', function() {
		$(this).addClass('buttonClick');
	});
	
	$('.button-field').on('mouseup', 'button', function() {
		$(this).removeClass('buttonClick');
	});
	
	//For each button
	$('.eraser').on('click', function() {		
		eraserToggler();
	});
	
	$('html').keydown(function(eventObject) {
		if (eventObject.keyCode === 69) {
			eraserToggler();
		}
	}); //toggle eraser when press "E"
	
	$('.gridToggle').on('click', function(){
		$(this).toggleClass('but-toggle-off');
		
		if ($(this).hasClass('but-toggle-off')) {
			$('.cell').css('border', 'none');
			$('.grid-field').css('border', '1px solid #000');
		} else {
			$('.cell').css('border', '1px solid #000');
			$('.grid-field').css('border', 'none');
		}
	});
	
	$('.new-list').on('click', function() {
		$('.cell').css('background-color', '#fff');
	});
	
	$('.colorPickerTrigger').on('click', function() {
		$('#colorPicker').trigger('click');
	});
	
	$('#colorPicker').on('change', function() {
		cellColor = $(this).val();
	});
	//Functions
//	- !!!!!!!!WARNING!!!!!!! dont use this function (ne lez' blyat, ona vse lomaet)
//	function painting(a) { 
//		a = cellColor;
//			$('.cell').mousemove(function() {
//				if ($('.eraser').hasClass('but-toggle-on')) {
//					$(this).css('background-color', '#fff');
//				} else {
//					$(this).css('background-color', a);
//				}
//
//			});
//	}
	
	function eraserToggler() {
		if ($('.eraser').hasClass('but-toggle-off')) {
					$('.eraser').removeClass('but-toggle-off');
					$('.eraser').addClass('but-toggle-on');
				} else {
					$('.eraser').removeClass('but-toggle-on');
					$('.eraser').addClass('but-toggle-off');
				}
	}
	
});
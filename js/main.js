$(document).ready(function() {
	var contador = 0;
	$('.btnmichi').on('click', function(e) {
		contador++
		if(contador%2===0) {
			$(this).addClass('textred').html("O");
		} else {
			$(this).html("X");
		}
		//else {
		// 		if($(this).hasClass('textred')) {
	 //    		$(this).removeClass('textred');
		// 		};
		// 	$(this).html("O");
		// }

		

	});
	
});
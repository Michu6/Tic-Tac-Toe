$(document).ready(function() {
	var uno = $('#uno').text();
	var dos = $('#dos').text();
	var tres = $('#tres').text();
	var cuatro = $('#cuatro').text();
	var cinco = $('#cinco').text();
	var seis = $('#seis').text();
	var siete = $('#siete').text();
	var ocho = $('#ocho').text();
	var nueve = $('#nueve').text();

	var squares = [$('#uno'), $('#dos'), $('#tres'), $('#cuatro'), $('#cinco'), $('#seis'), $('#siete'), $('#ocho'), $('#nueve')];

	var contador = 0;
	$('.btnmichi').on('click', function(e) {
		contador++;
		if(contador%2===0) {
			$(this).addClass('textred').html("O").attr('disabled', true);
		} else {
			$(this).addClass('textred').html("X").attr('disabled', true);
		}

		if(contador>4) {
			if(uno != ' ' || dos != '' || tres != ' ' || cuatro != ' ' || cinco != ' ' || seis != ' ' || siete != ' ' || ocho != ' ' || nueve != ' '){
				console.log(uno,dos,tres);
				if(uno===dos && uno===tres && dos===tres) {
					alert('PRIMERA FILA');
				} else if(cuatro===cinco && cuatro===seis && cinco===seis) {
					alert('SEGUNDA FILA');
				} else if(siete===ocho && siete===nueve && ocho===nueve) {
					alert('TERCERA FILA');
				} else if(uno===cuatro && uno===siete && cuatro===siete) {
					alert('PRIMERA COLUMNA');
				} else if(dos===cinco && dos===siete && cinco===siete) {
					alert('SEGUNDA COLUMNA');
				} else if(tres===seis && tres===nueve && seis===nueve) {
					alert('TERCERA COLUMNA');
				} else if(uno===cinco && uno===nueve && cinco===nueve) {
					alert('DIAGONAL 111111111111');
				} else if(tres===cinco && tres===siete && cinco===siete) {
					alert('DIAGONAL 222222222222');
				}
			}
		}
	});

	$('#newgame').on('click', function () {
		contador = 0;
		squares.forEach(function (square) {
			square
				.text('+')
				.removeClass('textred');
		})
	})
	
});
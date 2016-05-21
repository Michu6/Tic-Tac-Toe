function allTheSameAndNotEmpty(e1, e2, e3) {
  return e1 === e2 && e1 === e3 && e1 !== '+';
}

$(document).ready(function() {
	var squares = [$('#uno'), $('#dos'), $('#tres'), $('#cuatro'), $('#cinco'), $('#seis'), $('#siete'), $('#ocho'), $('#nueve')];
	var contador = 0;

	$('.btnmichi').on('click', function(e) {
		contador++;
		if(contador%2===0) {
			$(this).addClass('textred').html("O");
		} else {
			$(this).addClass('textred').html("X");
		}
  var uno = $('#uno').text();
	var dos = $('#dos').text();
	var tres = $('#tres').text();
	var cuatro = $('#cuatro').text();
	var cinco = $('#cinco').text();
	var seis = $('#seis').text();
	var siete = $('#siete').text();
	var ocho = $('#ocho').text();
	var nueve = $('#nueve').text();
		if(contador > 4 && contador < 10) {
			if(allTheSameAndNotEmpty(uno, dos, tres)) {
				alert('GANASTEEEEE EN PRIMERA FILA');
			} else if(allTheSameAndNotEmpty(cuatro, cinco, seis)) {
				alert('GANASTEEEEE EN SEGUNDA FILA');
			} else if(allTheSameAndNotEmpty(siete, ocho, nueve)) {
				alert('GANASTEEEEE EN TERCERA FILA');
			} else if(allTheSameAndNotEmpty(uno, cuatro, siete)) {
				alert('GANASTEEEEE EN PRIMERA COLUMNA');
			} else if(allTheSameAndNotEmpty(dos, cinco, siete)) {
				alert('GANASTEEEEE EN SEGUNDA COLUMNA');
			} else if(allTheSameAndNotEmpty(tres, seis, nueve)) {
				alert('GANASTEEEEE EN TERCERA COLUMNA');
			} else if(allTheSameAndNotEmpty(uno, cinco, nueve)) {
				alert('GANASTEEEEE EN DIAGONAL 111111111111');
			} else if(allTheSameAndNotEmpty(tres, cinco, siete)) {
				alert('GANASTEEEEE EN DIAGONAL 222222222222');
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
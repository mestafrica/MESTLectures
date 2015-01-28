$(document).ready(function(){

	$('form').submit(function(e){
		e.preventDefault();
		
		var kittenOrder = $('select option:selected').text();
		$('#kitten-order-share').html(kittenOrder);

		$('#modal-success').modal('show');

	})
})
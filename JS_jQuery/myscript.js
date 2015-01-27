var loveIcon = '<i class="fa fa-heart animated bounce infinite"></i>';

$(document).ready(function(){

	//Fade in content
	$('.container').addClass('animated zoomInDown')
	console.log('loaded');

	//Click events
	$('#title-submit').click(function(){
		title = $('#title-input').val()
		$('#title').html(title)
	})

	$('#kittens div').click(function(){
		$(this).append(loveIcon)
	})


	//Loop over kittens
	$('img').each(function(i){
		console.log(i);
		delay = 0.05;
		$(this).css('-webkit-animation-delay',(delay*i)+ 's')
	})



})
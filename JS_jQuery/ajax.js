url = 'https://www.googleapis.com/books/v1/volumes';

$(document).ready(function() {
    $('form').submit(function(e) {
    	e.preventDefault();
    	var query = $('input[name=query]').val();

    	//For styling of elements
    	$('body').addClass('loading');

	    $.ajax({
	        url: url,
	        data: {
	            q: query
	        },
	        success: function(data, s, t) {
	        	$('body').removeClass('loading');
	        	$('body').addClass('loaded');

	            console.log(data);
	            writeBooks(data.items);
	        },
	        error: function(XMLHttpRequest, textStatus, errorThrown) {
	            alert("Status: " + textStatus);
	            alert("Error: " + errorThrown);
	        }
	    })
    })
})

function writeBooks(items){

	//Define the selector where content will be updated
	var $b = $('#books tbody');

	var html = '';

	//Remove anything in the #books div
	$b.html('');
	for (i in items){
		item = items[i];

		var title = item.volumeInfo.title;
		var subtitle = item.volumeInfo.subtitle || ''; // returns '' if undefined
		var author = item.volumeInfo.authors[0];

		var row = '';
		row += wrapCell(title);
		row += wrapCell(subtitle);
		row += wrapCell(author);

		html += wrapRow(row);
	}

	$b.append(html);
}


function wrapCell(text){
	return '<td>' + text + '</td>';
}

function wrapRow(text){
	return '<tr>' + text + '</td>';
}
$(document).ready(function() {
    url = 'https://www.googleapis.com/books/v1/volumes?q=ghana';
    $.ajax({
        url: url,
        success: function(data,s,t) {
            console.log(data);
            console.log(data.items[0].volumeInfo.subtitle)
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    })
})
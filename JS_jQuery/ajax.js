$(document).ready(function() {
    url = 'https://www.googleapis.com/books/v1/volumes?q=ghana';
    $.ajax({
        url: url,
        success: function(data,status,settings) {
            console.log(data);
            console.log(status);
            console.log(settings);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    })
})
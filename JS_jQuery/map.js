var locations = [
	{
	    lat: 51.493355,
	    lng: -2.460937,
	    content: {
		    message: "I grew up in Bristol",
		    imgSrc: "http://www.victorianweb.org/technology/bridges/13.jpg"
	    }
	}, {
	    lat: 51.520707,
	    lng: -0.087891,
	    content: {
		    message: 'I went to university in London',
		    imgSrc: 'http://www.lse.ac.uk/study/SarahsImages/GroupStudents2013-Cropped-723x400.jpg'
	    }
	}, {
    	lat: -34.603723,
    	lng: -58.381593,
    	content: {
    		message: 'After graduating, I started a year long trip in South America',
    		imgSrc: 'http://snowbrains.com/wp-content/uploads/2013/07/Avenida-9-de-Julio-Buenos-Aires-Argentina1.jpg'
    	}
	}, {
    	lat: 13.756331,
    	lng: 100.501765,
    	content: {
    		message: 'I don`t like the cold, so I went to Bangkok for winter',
    		imgSrc: 'http://bangkok.peninsula.com/en/~/media/Images/Bangkok/Leaderboard/PBK_Landing_Leaderboard.ashx?mw=1280'
    	}
	}
]

function initialize() {
    var mapProp = {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var markers	= [];

    //Create info window
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });

    var polylineCoordinates = [];
    var polylineIcons = [];

    var bounds = new google.maps.LatLngBounds();


    //Loop through locations
    for (i in locations) {

    	//Set 'l' to a specific marker in the array
    	l = locations[i];

    	//Create Marker
    	console.log(l);
    	var marker = new google.maps.Marker({
    	    position: new google.maps.LatLng(l.lat,l.lng),
    	    content: l.content,
    	    map: map
    	});


    	//Listen to click event
    	google.maps.event.addListener(marker, 'click', function() {

    		var content = '';
    		content += '<h4>' + this.content.message + '</h4>';
    		content += '<img class="infobox-img" src="' + this.content.imgSrc + '" /img>';

    		infowindow.setContent(infowindow.getContent())
    		infowindow.setContent(content);
    	    infowindow.open(map, this);
    	});

    	markers.push(marker);

    	//Push coordinates into array for polyline
    	polylineCoordinates.push(new google.maps.LatLng(l.lat,l.lng));

    	//Create icons for polyline
    	polylineIcons.push(
    	{
    		icon: {
    			path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    		},
    		offset: ((100 / locations.length) * i) + '%'
    	})

    	//Extend bounds
    	bounds.extend(new google.maps.LatLng(l.lat,l.lng))

    }

    //Create polyline
    var polyline = new google.maps.Polyline({
      path: polylineCoordinates,
      geodesic: true,
      icons: polylineIcons,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
      map: map
    });

    //Fit map to markers
    map.fitBounds(bounds);

}
google.maps.event.addDomListener(window, 'load', initialize);
function initMap(){

    const centerMap = { 
        lat: 40.6795092, lng: -73.9972808
    }

    const markers = [
        {
            locationName:"Stoop Sal!",
            lat: 40.6795092,
            lng:-73.9972808,
            address: '2nd Pl & Court St,<br> Brooklyn,<br> NY 11231'
        }
    ];

    const jacket = 'jacket.png';

    const mapOptions ={
        center: centerMap,
        zoom: 15,
        disableDefaultUI: true,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 33
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2e5d4"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c5dac6"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c5c6c6"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e4d7c6"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fbfaf7"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#acbcc9"
                    }
                ]
            }
        ]
    }

    const map= new google.maps.Map(document.getElementById('google-map'), mapOptions);

    
    const marker = new google.maps.Marker({
        position: { lat: markers[0]['lat'], lng: markers[0]['lng']},
        map: map,
        icon: jacket
    });

    
    const infoWindow = new google.maps.InfoWindow({
        minWidth: 200,
        maxWidth: 200
    });

    
    const infoWindowContent = String(markers[0]['address']) ;;
    google.maps.event.addListener(marker, 'click', function(){
        infoWindow.setContent(infoWindowContent);
        infoWindow.open(map,marker);
    });

    infoWindow.addListener('closeclick', function() {
        map.fitbounds(bounds);
    });

    bounds.extend(new google.maps.LatLng(markers[0]['lat'], markers[0]['lng']));
    map.fitbounds(bounds);

    

    
        



    

}
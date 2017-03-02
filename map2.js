

  
var locations = [
    [
        "David Strong Building",
        48.464801,
         -123.313539
    ],
    [
    		"ECS",
        48.461188,
        -123.311802
    ]
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.463649,  -123.311951),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

     var infowindow = new google.maps.InfoWindow({
          content: '<p>Marker Location:' + marker.getPosition() + '</p>'
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
         
          infowindow.open(map, marker);
        }
      })(marker, i));
    }



  
  


    

    
      
    
    

       
        
    


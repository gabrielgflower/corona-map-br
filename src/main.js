      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -13.7443, lng: -49.1628},
          zoom: 4
        });

        var marker = new google.maps.Marker({
        position: {lat: -30, lng: -51},
        map: map,
        title: 'Hello World!'
         });


         var stateLimiters = [

]
        
         var statePolygon = new google.maps.Polygon({
           paths: stateLimiters,
           strokeColor: '#FF0000',
           strokeOpacity: 0.2,
           strokeWeight: 3,
           fillColor: '#FF0000',
           fillOpacity: 0.35,
         })

         statePolygon.setMap(map)
      }
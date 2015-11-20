jQuery(function($) {

    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAIAW3z8RyJAAq5KFcziTTMSk9fh42xyRc&callback=initialize";
    document.body.appendChild(script);
});
var map;
function initialize() {
  var mapOptions = {
    zoom: 18,
    center: {lat: 26.1284404722222, lng: -80.1458352777778},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  setMarkers(map);
  }

function setMarkers(map) {
    var json = (function () {
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': "/photos.json",
                'dataType': "json",
                'success': function (data) {
                     json = data;
                 }
            });
            return json;
        })();
        var json2 = Number(json[0].latitude);
        var json3 = -Number(json[0].longitude);
        var json4 = Number(json[6].latitude);
        var json5 = -Number(json[6].longitude);
        var json6 = Number(json[4].latitude);
        var json7 = -Number(json[4].longitude);
        var json8 = Number(json[1].latitude);
        var json9 = -Number(json[1].longitude);
        var json10 = Number(json[3].latitude);
        var json11 = -Number(json[3].longitude);
        console.log(json4);
        console.log(json5);
    for (var i = 0, length = json.length; i < length; i++) {
        var data = json[i],
          latLng = new google.maps.LatLng(Number(data.latitude), -Number(data.longitude));
          console.log(data);
          var marker = new google.maps.Marker({
                       position: latLng,
                       map: map,
                       title: data.title,
                       label: data.title
          });

          // var data2 = json[0],
          //   lineLatLng = new google.maps.LatLng(Number(data.latitude), -Number(data.longitude));
          //   var data3 = json[6],
          //     lineLatLng2 = new google.maps.LatLng(Number(data.latitude), -Number(data.longitude));
          //     console.log(lineLatLng2);
          //   var line = new google.maps.Polyline({
          //     path: [lineLatLng, lineLatLng2],
          //     geodesic: true,
          //     strokeColor: 'FF0000',
          //     strokeOpacity: 1.0,
          //     strokeWeight: 2
          //   });
          //   line.setMap(map);
    }
  var lineCoordinates = [
    new google.maps.LatLng(json4, json5),
    new google.maps.LatLng(json6, json7),
    new google.maps.LatLng(json2, json3),
    new google.maps.LatLng(json4, json5),
    new google.maps.LatLng(json8, json9),
    new google.maps.LatLng(json10, json11)
  ];
  var line = new google.maps.Polyline({
    path: lineCoordinates,
    geodesic: true,
    strokeColor: '#0000FF',
    strokeOpacity: 1.0,
    strokeWeight: 1.3
  });

  line.setMap(map);


}

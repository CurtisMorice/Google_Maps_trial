// console.log('Im here');
// const API = "AIzaSyDHHRhTzzE5wUoHuZKmTJdTzD7sBFxvXB0";
 


// User Data ____________________________________________
let map;
let marker;
let infowindow;
let messageWindow;

function initMap() {
 let minneapolis = {lat: 44.9778, lng: -93.2650};
  map = new google.maps.Map(document.getElementById('map'), {
    center: minneapolis,
    zoom: 13
  });

  infowindow = new google.maps.InfoWindow({
    content: document.getElementById('form')
  });

   messageWindow = new google.maps.InfoWindow({
    content: document.getElementById('message')
  });

  google.maps.event.addListener(map, 'click', function(event) {
    marker = new google.maps.Marker({
      position: event.latLng,
      map: map
    });


    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  });
}

function saveData() {
  let phase =  (document.getElementById('phase').value);
  let type = document.getElementById('type').value;  
  let article =  escape(document.getElementById('article').value);
  let articleLink =  escape(document.getElementById('articleLink').value);
  let researchLink =  escape(document.getElementById('researchLink').value);
  let info =  escape(document.getElementById('info').value);
  let name = escape(document.getElementById('name').value);
  let address = escape(document.getElementById('address').value);
  let latlng = marker.getPosition();
  let url = 'phpsqlinfo_addrow.php?phase=' + phase + '&type=' + type + '&article=' + article +
            '&articleLink=' + articleLink + '&researchLink=' + researchLink + '&info=' + info + 
            '&address=' + address + '&name=' + name +'&lat=' + latlng.lat() + '&lng=' + latlng.lng();

  downloadUrl(url, function(data, responseCode) {

    if (responseCode == 200 && data.length <= 1) {
      infowindow.close();
      messageWindow.open(map, marker);
    }
  });
}

function downloadUrl(url, callback) {
  let request = window.ActiveXObject ?
      new ActiveXObject('Microsoft.XMLHTTP') :
      new XMLHttpRequest;

  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      request.onreadystatechange = doNothing;
      callback(request.responseText, request.status);
    }
  };

  request.open('GET', url, true);
  request.send(null);
}

function doNothing () {
}






// function initMap() {
//     // The location of Uluru
//     let uluru = {lat: -28.024, lng: 140.887};
//     // The map, centered at Uluru
//     let map = new google.maps.Map(
//         document.getElementById('map'), {
//                                         zoom: 4, 
//                                         center: {lat: -28.024, lng: 140.887}
//                                     });
//     // The marker, positioned at Uluru
//     let marker = new google.maps.Marker({position: uluru, map: map});
 
//   let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//   // Add some markers to the map.
//   // Note: The code uses the JavaScript Array.prototype.map() method to
//   // create an array of markers based on a given "locations" array.
//   // The map() method here has nothing to do with the Google Maps API.
//   let markers = locations.map(function(location, i) {
//     return new google.maps.Marker({
//       position: location,
//       label: labels[i % labels.length]
//     });
//   });

//   // Add a marker clusterer to manage the markers.
//   let markerCluster = new MarkerClusterer(map, markers,
//       {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
//   }
// let locations = [
//   {lat: -31.563910, lng: 147.154312},
//   {lat: -33.718234, lng: 150.363181},
//   {lat: -33.727111, lng: 150.371124},
//   {lat: -33.848588, lng: 151.209834},
//   {lat: -33.851702, lng: 151.216968},
//   {lat: -34.671264, lng: 150.863657},
//   {lat: -35.304724, lng: 148.662905},
//   {lat: -36.817685, lng: 175.699196},
//   {lat: -36.828611, lng: 175.790222},
//   {lat: -37.750000, lng: 145.116667},
//   {lat: -37.759859, lng: 145.128708},
//   {lat: -37.765015, lng: 145.133858},
//   {lat: -37.770104, lng: 145.143299},
//   {lat: -37.773700, lng: 145.145187},
//   {lat: -37.774785, lng: 145.137978},
//   {lat: -37.819616, lng: 144.968119},
//   {lat: -38.330766, lng: 144.695692},
//   {lat: -39.927193, lng: 175.053218},
//   {lat: -41.330162, lng: 174.865694},
//   {lat: -42.734358, lng: 147.439506},
//   {lat: -42.734358, lng: 147.501315},
//   {lat: -42.735258, lng: 147.438000},
//   {lat: -43.999792, lng: 170.463352}
// ]
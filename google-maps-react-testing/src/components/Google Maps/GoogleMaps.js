// import React, {Component} from 'react';
// import axios from 'axios';
// import GoogleMapReact from 'google-map-react';
// import Map from '../Map/Map';




// let map;
// let marker;
// let infowindow;
// let messageWindow;
// const google=window.google
// const  AnyReactComponent = ({ text }) => <div>{ text }</div>;

// function downloadUrl(url, callback) {
//     let request = window.ActiveXObject ?
//         new WebGLActiveInfo('Microsoft.XMLHTTP') :
//         new XMLHttpRequest;
  
//     request.onreadystatechange = function() {
//       if (request.readyState == 4) {
//         request.onreadystatechange = doNothing;
//         callback(request.responseText, request.status);
//       }
//     };
  
//     request.open('GET', url, true);
//     request.send(null);
//   }


//   function doNothing () {
// }
// class GoogleMaps extends Component {



//  initMap = () => {
//  let minneapolis = {lat: 44.9778, lng: -93.2650};
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: minneapolis,
//     zoom: 13
//   });

//   infowindow = new google.maps.InfoWindow({
//     content: document.getElementById('form')
//   });

//    messageWindow = new google.maps.InfoWindow({
//     content: document.getElementById('message')
//   });

//   google.maps.event.addListener(map, 'click', function(event) {
//     marker = new google.maps.Marker({
//       position: event.latLng,
//       map: map
//     });


//     google.maps.event.addListener(marker, 'click', function() {
//       infowindow.open(map, marker);
//     });
//   });
// }

//  saveData = () => {
//   let phase =  (document.getElementById('phase').value);
//   let type = document.getElementById('type').value;  
//   let article =  escape(document.getElementById('article').value);
//   let articleLink =  escape(document.getElementById('articleLink').value);
//   let researchLink =  escape(document.getElementById('researchLink').value);
//   let info =  escape(document.getElementById('info').value);
//   let name = escape(document.getElementById('name').value);
//   let address = escape(document.getElementById('address').value);
//   let latlng = marker.getPosition();
//   let url = 'phpsqlinfo_addrow.php?phase=' + phase + '&type=' + type + '&article=' + article +
//             '&articleLink=' + articleLink + '&researchLink=' + researchLink + '&info=' + info + 
//             '&address=' + address + '&name=' + name +'&lat=' + latlng.lat() + '&lng=' + latlng.lng();

//   downloadUrl(url, function(data, responseCode) {

//     if (responseCode == 200 && data.length <= 1) {
//       infowindow.close();
//       messageWindow.open(map, marker);
//     }
//   });
// }




//  render(
//          // <!-- <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
//     // </script> -->
   
//     // <script async defer
//     // src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHHRhTzzE5wUoHuZKmTJdTzD7sBFxvXB0&callback=initMap">
//     // </script>
//  ){
//      return(
//         <div id="map" height="460" width="50%">

       
//     <div id="form">
//         <table>
//             <tbody>  
//             <tr><td></td><td><input placeholder="search" type="search" id="search"/></td></tr>
//             <tr><td>Phase:</td><td><select id="phase">+
//                     <option value='Cellular' selected> Cellular</option>
//                     <option value="Small Animal" >Small Animal</option>
//                     <option value="Large Animal" >Large Animal</option>
//                     <option value="Human">Human</option>
//                 </select></td></tr>
//             <tr><td>Type:</td><td><select id="type">+
//                 <option value='Stem Cell' selected> Stem Cell</option>
//                 <option value="Molecular" >Stem Cell</option>
//                 <option value="Gene" >Molecular</option>
//                 <option value="Pharmaceutical">Pharmaceutical</option>
//                 <option value="Device (stimulator,exoskeleton/ orthotic, other)">Device (stimulator,exoskeleton/ orthotic, other)</option>
//                 <option value="Rehabilitation/ Fitness">Rehabilitation/ Fitness</option>
//                 <option value="Survey">Survey</option>
//                 <option value="Other">Other</option>
//             </select></td></tr>
//             <tr><td>Name of Resource/Article:</td><td><input placeholder="name" type="textarea" id="article"/></td></tr>
//             <tr><td>Link To Article:</td><td><input placeholder="place link here" type="url" id="articleLink"/></td></tr>
//             <tr><td>Link To Research:</td><td><input placeholder="place link here" type="url" id="researchLink"/></td></tr>
//             <tr><td>Address:</td><td><input placeholder="Address" type="text" id="address"/></td></tr>
//             <tr><td></td><td><input type="text" id="article" placeholder="description of article or research"/></td></tr>
//             <tr><td></td><td><input type='button' value='Save' onClick={()=>this.saveData}/></td></tr>
//             </tbody>
//         </table>
    
//     </div>
    


// </div>
        
//      )
//  }

// }
// export default GoogleMaps;



// // <div id="form">
// //         <table>
// //             <tbody>  
// //             <tr><td></td><td><input placeholder="search" type="search" id="search"/></td></tr>
// //             <tr><td>Phase:</td><td><select id="phase">+
// //                     <option value='Cellular' selected> Cellular</option>
// //                     <option value="Small Animal" >Small Animal</option>
// //                     <option value="Large Animal" >Large Animal</option>
// //                     <option value="Human">Human</option>
// //                 </select></td></tr>
// //             <tr><td>Type:</td><td><select id="type">+
// //                 <option value='Stem Cell' selected> Stem Cell</option>
// //                 <option value="Molecular" >Stem Cell</option>
// //                 <option value="Gene" >Molecular</option>
// //                 <option value="Pharmaceutical">Pharmaceutical</option>
// //                 <option value="Device (stimulator,exoskeleton/ orthotic, other)">Device (stimulator,exoskeleton/ orthotic, other)</option>
// //                 <option value="Rehabilitation/ Fitness">Rehabilitation/ Fitness</option>
// //                 <option value="Survey">Survey</option>
// //                 <option value="Other">Other</option>
// //             </select></td></tr>
// //             <tr><td>Name of Resource/Article:</td><td><input placeholder="name" type="textarea" id="article"/></td></tr>
// //             <tr><td>Link To Article:</td><td><input placeholder="place link here" type="url" id="articleLink"/></td></tr>
// //             <tr><td>Link To Research:</td><td><input placeholder="place link here" type="url" id="researchLink"/></td></tr>
// //             <tr><td>Address:</td><td><input placeholder="Address" type="text" id="address"/></td></tr>
// //             <tr><td></td><td><input type="text" id="article" placeholder="description of article or research"/></td></tr>
// //             <tr><td></td><td><input type='button' value='Save' onClick={()=>this.saveData}/></td></tr>
// //             </tbody>
// //         </table>
    
// //     </div>
    

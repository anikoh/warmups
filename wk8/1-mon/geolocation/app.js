


var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
          {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
          {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
          {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
          {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
          {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]


var current = {name: "current location", location: {lat: 37.76652, long: -122.46}}


function calcDistance(loc1, loc2){
  //change all negative num to positive
  var lat = loc1.location.lat - loc2.location.lat;
  var long = loc1.location.long - loc2.location.long;
  var total = Math.pow(lat, 2) + Math.pow(long, 2);
  var distance = Math.sqrt(total);
  return Math.abs(distance);
}

function proximityOrder (locations, currentLocation){


  locations.sort(function(a, b) {
    var distA = calcDistance(a, currentLocation);
    var distB = calcDistance(b, currentLocation);
    if (distA < distB) {
      return -1;
    }
    if (distA > distB) {
      return 1;
    }

    return 0;
  });

  console.log(locations);

}

// proximityOrder(myResult, current);

//results[i].distance = distance


//var proximityList = [];
// for(var i=0; i< locations.length; i++){
//   closest = locations[0]
//   for (var j=0; j< locations.length; j++){
//     if (calcDistance(locations[j], currentLocation) < calcDistance(closest, currentLocation)){
//       closest = locations[j];
//     }
//     proximityList.push(closest);
//   }
// }

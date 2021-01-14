mapboxgl.accessToken = 'pk.eyJ1Ijoic3NzMTMwMiIsImEiOiJja2p2ZG9mYngwMWJqMnhxcTI2MnE5dnUwIn0.LRiet26VughFVxA0mXAGOw';
navigator.geolocation.getCurrentPosition(sucessLocation,errLocation,{enableHighAccuracy:true});
  function sucessLocation(position){
      console.log(position);
      setUpMap([position.coords.longitude,position.coords.latitude]);
  }
  function errLocation(){
      setUpMap([12.9794048,77.594624]);
  } 
function setUpMap(center){
    
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:center,
    zoom:14
  });
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
      accessToken:mapboxgl.accessToken
  });
  map.addControl(directions);

}


  
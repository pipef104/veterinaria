const nombre = "Felipe";

google.maps.event.addDomListener(window,"load",()=>{

const user_location = new UserLocation(()=>{
  //CArgados mapas y localizacion
  var travelMode = document.getElementById('travel-mode').value;

  if (travelMode == "0") {
    document.getElementById('travel-mode').addEventListener("change",()=>{
        document.getElementById('travel-screen').style.display = "none";
        travelMode = ev.target.value;
    });
  }else {
    document.getElementById('travel-screen').style.display = "none";
  }

  const mapOptions = {
    zoom: 15;
    center:{
      lat:user_location.latitude,
      lng:user_location.longitude
    }
  };
  const mapa_element = document.getElementById('map');
  const map = new google.maps.Map(mapa_element,mapOptions)

//Autocompletar texto al buscar
const search_input = document.getElementById('search-place');
const autocomplete = new google.maps.places.Autocomplete(search_input);

const marker = new google.maps.Marker({
  map: map
});

//Enlazar el boton
autocomplete.bindTo("bounds",map);
// Metodo para saber cuando el usuario cambia de lugar
google.maps.event.addDomListener(autocomplete,"place_changed",()=>{

  const place = autocomplete.getPlace();
//localización de centralización
  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  }else {
    map.setCenter(place.geometry.location);
    map.setZoom(15);
  }

  marker.setPlace({
    placeId: place.place_id,
    location: place.geometry.location
  });

  marker.setVisible(true);

  calculateDistance(place,user_location);
    });
  });
});

function calculateDistance(place,origen){
  var origin = new google.maps.LatLng(origen.Latitude,origen.longitude);

  var service = new google .maps.DistanceMatrixService();

  service.getDistanceMatrixService({
    origins:[origin],
    destinations: [place.geometry.location],
    travelMode: google.maps.TravelMode[travelMode]
  },(respuesta,status)=>{
    //Se ejecuta cuando el servicio de google nos responde
    const info = response.rows[0], elements[0];
    const distancia = info.distance.text; //Mostrar distancia
    const duracion = info.distance.text; //Mostrar distancia

    document.getElementById('info').innerHTML =  '
    Estás a ${distancia} y ${duracion} de dicho destino';
  })

}

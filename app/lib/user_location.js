class UserLocation {
  constructor(callback) {
    //Se ejecuta cuando se llama desde otra clase New UserLocation()
    if (navigator.geolocation) {
      //si tiene api de geolocalización
      navigator.geolocation.getCurrentPosition((localizacion)=>{
        //latitud y localizcion e n la que se encuentra el usuario
        this.latitude = localizcion.coords.latitude; //Variable para grabar latitud
        this.longitude= localizcion.coords.longitude; //Variable para grabar longitud
        callback()
      })
    }else{
      alert("Tu navegador no soporta las funciones de esta pagina");
    }
  }
}

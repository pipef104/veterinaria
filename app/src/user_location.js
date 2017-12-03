"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserLocation = function UserLocation(callback) {
  var _this = this;

  _classCallCheck(this, UserLocation);

  //Se ejecuta cuando se llama desde otra clase New UserLocation()
  if (navigator.geolocation) {
    //si tiene api de geolocalización
    navigator.geolocation.getCurrentPosition(function (localizacion) {
      //latitud y localizcion e n la que se encuentra el usuario
      _this.latitude = localizcion.coords.latitude; //Variable para grabar latitud
      _this.longitude = localizcion.coords.longitude; //Variable para grabar longitud
      callback();
    });
  } else {
    alert("Tu navegador no soporta las funciones de esta pagina");
  }
};

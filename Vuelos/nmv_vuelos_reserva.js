window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_vuelos_reserva",
  operacion:{
    id:"",
    dias_anticipacion: 10, //
  },

  precio:{
    moneda: "",
    precio_normal:"",
    precio_final:"",
  },

  usuario:{
    email:"",


  },
  origen: {
    nombre: "Cancún",
    codigo: "CUN",
    pais: "Mexico",
  },
  destino: {
    nombre: "Cusco",
    codigo: "CUZ",
    pais: "Peru",
  },
  vuelo: {
    clase: "economic", //business, first class
    tipo: "solo ida", // ida y vuelta, multidestino
    equipaje: "",
  },
  ruta: {
    aerolinea_salida: "LP",
    aerolinea_regreso: "AA",
  },
  pasajeros: {
    adultos: 5,
    ninos: 1,
    infantes: 0,
    total: 6,
  },
  fechas: {
    salida: "10/04/2023",
    retorno: "14/04/2023",
    estadia: 3, //número de noches
  },
});

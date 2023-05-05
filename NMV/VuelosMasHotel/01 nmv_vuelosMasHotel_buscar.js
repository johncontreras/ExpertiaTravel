// Evento Equivalente: 

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_vuelosMasHotel_buscar",
  operacion:{
    dias_anticipacion: 10, //
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
  hotel:{
    habitaciones: 2,
  },
  vuelo: {
    clase: "economic", //business, first class
  },
  pasajeros: {
    adultos: 5,
    ninos: 1,
    total: 6,
  },
  fechas: {
    salida: "2023-04-10", //Año-mes-día
    retorno: "2023-04-14", //Año-mes-día
    estadia: 3, //número de noches
  },
});

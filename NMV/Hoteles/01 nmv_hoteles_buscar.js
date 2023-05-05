// Evento Equivalente: 

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_hoteles_buscar",
  operacion:{
    dias_anticipacion: 10, //
  },
  destino: {
    nombre: "Cusco",
    codigo: "CUZ",
    pais: "Peru",
  },
  hotel:{
    habitaciones: 2,
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

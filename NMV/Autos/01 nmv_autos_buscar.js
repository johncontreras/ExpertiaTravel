// Evento Equivalente: 

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_autos_buscar",
  operacion:{
    dias_anticipacion: 10, //
  },
  destino: {
    nombre: "Aeropuerto Intl de Cancún",
    codigo: "CUN",
    pais: "México",
  },
  autos: {
    edad_conductor: "25+",
    lugar_devolucion: "Mismo Lugar", // ida y vuelta, multidestino
  },
  fechas: {
    salida: "2023-04-10", //Año-mes-día
    hora_salida: "12:00 PM",
    retorno: "2023-04-14", //Año-mes-día
    hora_retorno: "06:02 AM",
    estadia: 3, //número de noches
  },
});

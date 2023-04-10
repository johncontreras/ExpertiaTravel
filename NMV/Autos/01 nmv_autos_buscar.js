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
    salida: "10/04/2023",
    hora_salida: "12:00 PM",
    retorno: "14/04/2023",
    hora_retorno: "06:02 AM",
    estadia: 3, //número de noches
  },
});

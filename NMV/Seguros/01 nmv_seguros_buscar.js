window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_seguros_buscar",
  operacion: {
    dias_anticipacion: 10, //
  },
  origen: {
    nombre: "Perú",
    codigo: "PE",
    pais: "Perú",
  },
  destino: {
    nombre: "Europa",
  },
  pasajeros: {
    adultos: 5,
    ninos: 1,
    infantes: 0, // hasta 5 años
    total: 6,
  },
  fechas: {
    salida: "2023-04-10", //Año-mes-día
    retorno: "2023-04-14", //Año-mes-día
    estadia: 3, //número de noches
  },
});

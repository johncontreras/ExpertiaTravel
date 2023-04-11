//Evento Equivalente: 


window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_seguros_verResultados",
  precio: {
    moneda: "USD",
  },
  origen: {
    nombre: "Perú",
    codigo: "PE",
    pais: "Perú",
  },
  destino: {
    nombre: "Europa",
  },
  resultados:[
    {
    posicion: 1,
    precioFinal: 89.00,
    plan: "AC 100 NM DIARIA 5 A 30",
    codigo: "N3",
    opcion: "El Mejor Plan", // Flex
    emisor: "AssistCard",
    monto_asistencia: 100000.00, // Monto maxma de asistencia en dolares.
  },
  {
    posicion: 2,
    precioFinal: 90.00,
    plan: "AC 100 NM DIARIA 5 A 30",
    codigo: "N3",
    opcion: "Flex", // Flex
    emisor: "AssistCard",
    monto_asistencia: 150000.00, // Monto maxma de asistencia en dolares.
  },
  {
    posicion: 3,
    precioFinal: 95.00,
    plan: "AC 100 NM DIARIA 5 A 30",
    codigo: "N3",
    opcion: "El Mejor Plan", // Flex
    emisor: "AssistCard",
    monto_asistencia: 200000.00, // Monto maxma de asistencia en dolares.
  },
],
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

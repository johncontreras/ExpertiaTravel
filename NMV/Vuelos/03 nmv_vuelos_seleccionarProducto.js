// Evento Equivalente: 

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_vuelos_seleccionarProducto",
  operacion:{
    dias_anticipacion: 10, //
  },
  precio:{
    moneda: "USD",
    precioNormal:1000.00,
    precioFinal:964.00,
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
    equipaje_categoria: "no incluye equipaje de bodega", // sí incluye equipaje de bodega
    equipaje_label: "basic economy", // lite, standard, flex, business, business standard, business flex
    group_id: "37fdee5e-0733-4440-805b-04d58c439ca7",
    gds:"Amadeus",
    escalas: "directo", // 1 escala, 2 escalas, etc
  },
  ruta: {
    aerolinea_salida: "LP - LAN Perú",
    aerolinea_regreso: "AA - American Airlines",
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

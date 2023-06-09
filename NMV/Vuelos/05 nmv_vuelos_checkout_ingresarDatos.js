// Evento Equivalente: 

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_vuelos_checkout_ingresarDatos",
  precio:{
    moneda: "USD",
    precioNormal:1000.00,
    precioFinal:964.00,
  },
  usuario:{
    email:"annie_andrade@gmail.com",
    primerNombre:"Annie",
    primerApellido:"Andrade",
    fechaNacimiento:"1993-12-21", //Año-mes-día
    nacionalidad:"Peru",
    genero: "femenino",
    documento_tipo:"DNI",
    documento_numero:"70014526",
    telefono_tipo:"celular",
    telefono_codigo:"51",
    telefono_numero:"940663173",
    frecuencia:"pasajero-frecuente", // primera-reserva
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
    salida: "2023-04-10", //Año-mes-día
    retorno: "2023-04-14", //Año-mes-día
    estadia: 3, //número de noches
  },
});

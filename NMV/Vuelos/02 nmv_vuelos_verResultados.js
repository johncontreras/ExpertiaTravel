// Evento Equivalente: 

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_vuelos_verResultados",
  precio:{
    moneda: "USD",
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
resulados:[ //Este Array debe contener al menos 5 objetos.
  {
    posicion:"1",
    precioFinal:940.00,
    gds:"Amadeus",
    group_id:"96kjpk9x-0733-4440-805b-04d58c439ca7",
    aerolinea_salida:"LP",
    aerolinea_regreso:"AA",
    equipaje_categoria: "no incluye equipaje de bodega", // sí incluye equipaje de bodega
    escalas: "directo", // 1 escala, 2 escalas, etc
  },
  {
    posicion:"2",
    precioFinal:960.00,
    gds:"Amadeus",
    group_id:"38hdfn8p-0733-4440-805b-04d58c439ca7",
    aerolinea_salida:"LP",
    aerolinea_regreso:"AA",
    equipaje_categoria: "no incluye equipaje de bodega", // sí incluye equipaje de bodega
    escalas: "directo", // 1 escala, 2 escalas, etc
  },
  {
    posicion:"3",
    precioFinal:1000.00,
    gds:"Sabre",
    group_id:"37fdee5e-0733-4440-805b-04d58c439ca7",
    aerolinea_salida:"LP",
    aerolinea_regreso:"AA",
    equipaje_categoria: "no incluye equipaje de bodega", // sí incluye equipaje de bodega
    escalas: "directo", // 1 escala, 2 escalas, etc
  },
]
});

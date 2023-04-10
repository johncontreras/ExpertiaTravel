// Evento Equivalente: 

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_vuelos_transaccionExitosa",
  operacion:{
    id:"1104036", // Código SRV
    dias_anticipacion: 10, //
  },
  precio:{
    moneda: "USD",
    precioNormal:1000.00,
    precioFinal:964.00,
  },
  venta_cruzada:{
    venta: "true",
    producto:"Seguro",
    precio:32.00,
  },
  metodo_pago:{
    opcion: "Safety Pay",
  },
  usuario:{
    email:"annie_andrade@gmail.com",
    primerNombre:"Annie",
    primerApellido:"Andrade",
    fechaNacimiento:"21/12/1993",
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

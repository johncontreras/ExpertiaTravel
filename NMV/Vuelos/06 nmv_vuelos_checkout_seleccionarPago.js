// Evento Equivalente: 

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_vuelos_checkout_seleccionarPago",
  operacion:{
    dias_anticipacion: 10, //
  },
  precio:{
    moneda: "USD",
    precioNormal:1000.00,
    precioFinal:964.00,
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
    equipaje: "", //lite, standard, flex, business standard, business flex
    group_id: "37fdee5e-0733-4440-805b-04d58c439ca7",
    gds:"Amadeus",
    escalas: 2,
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

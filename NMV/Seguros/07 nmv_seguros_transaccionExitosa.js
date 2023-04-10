//Evento Equivalente: 


window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_seguros_transaccionExitosa",
  operacion: {
    id: "1104456", // Código SRV o equivalente con el que se guarda esta transaccion.
    dias_anticipacion: 10, //
  },
  precio: {
    moneda: "USD",
    precioNormal: 32.00,
    precioFinal: 32.00,
  },
  metodo_pago: {
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
    nombre: "Perú",
    codigo: "PE",
    pais: "Perú",
  },
  destino: {
    nombre: "Europa",
  },
  seguro: {
    plan: "AC 100 NM DIARIA 5 A 30", //business, first class
    codigo: "N3", // ida y vuelta, multidestino
    opcion: "El Mejor Plan", // Flex
    emisor: "AssistCard", //lite, standard, flex, business standard, business flex
    monto_asistencia: 100000.00, // Monto maxma de asistencia en dolares.
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
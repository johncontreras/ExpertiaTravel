//Evento Equivalente: 


window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_seguros_checkout_cargarCheckout",
  operacion: {
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
    nombre: "Perú",
    codigo: "PE",
    pais: "Perú",
  },
  destino: {
    nombre: "Europa",
  },
  seguro: {
    plan: "AC 100 NM DIARIA 5 A 30",
    codigo: "N3", 
    opcion: "El Mejor Plan", // Flex
    emisor: "AssistCard",
    monto_asistencia: 100000.00, // Monto maxma de asistencia en dolares.
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

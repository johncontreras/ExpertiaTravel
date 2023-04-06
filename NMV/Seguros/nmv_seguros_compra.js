//Evento Equivalente: 


window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "nmv_seguros_compra",
  operacion: {
    id: "",
    dias_anticipacion: 10, //
  },
  precio: {
    moneda: "USD",
    precioNormal: 32.0,
    precioFinal: 32.0,
  },
  metodo_pago: {
    opcion: "Safety Pay",
  },
  usuario: {
    email: "",
    primerNombre: "",
    primerApellido: "",
    fechaNacimiento: "",
    nacionalidad: "",
    genero: "",
    documento_tipo: "",
    documento_numero: "",
    telefono_tipo: "",
    telefono_codigo: "",
    telefono_numero: "",
    frecuencia: "",
  },
  origen: {
    nombre: "Perú",
    codigo: "PE",
    pais: "Perú",
  },
  destino: {
    nombre: "Europa",
    codigo: "",
    pais: "",
  },
  seguro: {
    plan: "AC 100 NM DIARIA 5 A 30", //business, first class
    codigo: "N3", // ida y vuelta, multidestino
    opcion: "El Mejor Plan", // Flex
    emisor: "AssistCard", //lite, standard, flex, business standard, business flex
    monto_asistencia: 100000.0, // Monto maxma de asistencia en dolares.
    escalas: 2,
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

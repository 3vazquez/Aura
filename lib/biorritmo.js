/**
 * Calcula los ciclos de biorritmo para un número de días vividos.
 * Retorna los valores para físico, emocional e intelectual.
 */
export function calcularBiorritmo(diasVividos) {
  // Ciclos en días
  const CICLO_FISICO = 23;
  const CICLO_EMOCIONAL = 28;
  const CICLO_INTELECTUAL = 33;

  // Calcular senos
  const fisico = Math.sin((2 * Math.PI * diasVividos) / CICLO_FISICO);
  const emocional = Math.sin((2 * Math.PI * diasVividos) / CICLO_EMOCIONAL);
  const intelectual = Math.sin((2 * Math.PI * diasVividos) / CICLO_INTELECTUAL);

  return {
    fisico: fisico * 100, // porcentaje entre -100 y 100
    emocional: emocional * 100,
    intelectual: intelectual * 100,
  };
}

/**
 * Calcula los días vividos desde el nacimiento hasta hoy (o una fecha dada).
 */
export function calcularDiasVividos(fechaNacimiento, fechaHoy = new Date()) {
  const nacimiento = new Date(fechaNacimiento);
  // Diferencia en milisegundos
  const diff = fechaHoy.getTime() - nacimiento.getTime();
  // Convertir a días (86400000 ms por día)
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
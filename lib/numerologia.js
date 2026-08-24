/**
 * Calcula el número de vida (también llamado número del camino de vida)
 * Se obtiene sumando los dígitos de la fecha de nacimiento hasta reducirlos a un solo dígito (excepto 11, 22, 33 que son números maestros).
 */
export function calcularNumeroVida(fecha) {
  // fecha es un objeto Date o string 'YYYY-MM-DD'
  const dateObj = new Date(fecha);
  const dia = dateObj.getDate();
  const mes = dateObj.getMonth() + 1; // getMonth() devuelve 0-11
  const anio = dateObj.getFullYear();

  // Sumamos todos los dígitos
  let suma = sumarDigitos(dia) + sumarDigitos(mes) + sumarDigitos(anio);
  // Reducimos a un solo dígito o número maestro
  return reducirANumeroMaestro(suma);
}

function sumarDigitos(num) {
  return String(num).split('').reduce((acc, dig) => acc + parseInt(dig), 0);
}

function reducirANumeroMaestro(num) {
  // Si es 11, 22 o 33, no se reduce
  if (num === 11 || num === 22 || num === 33) return num;
  // Si es mayor que 9, seguimos sumando dígitos
  while (num > 9) {
    num = sumarDigitos(num);
  }
  return num;
}

/**
 * Calcula el número de expresión (a partir del nombre completo)
 * Esta función es un ejemplo simplificado; en la práctica se usan tablas de conversión letra->número.
 * Por ahora, devolvemos un valor fijo o lo dejamos opcional.
 */
export function calcularNumeroExpresion(nombre) {
  // Implementación básica: suma valores ASCII o podrías usar la tabla pitagórica
  // Para este ejemplo, devolvemos un placeholder
  return 5;
}
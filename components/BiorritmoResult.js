export default function BiorritmoResult({ fisico, emocional, intelectual }) {
  const interpretar = (valor, nombre) => {
    if (valor > 50) return `${nombre} en su punto más alto.`;
    if (valor > 0) return `${nombre} en ascenso.`;
    if (valor > -50) return `${nombre} en descenso.`;
    return `${nombre} en su punto más bajo.`;
  };

  return (
    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
      <h3 className="text-lg font-bold text-blue-800">Estado actual del Biorritmo</h3>
      <ul className="mt-2 space-y-1">
        <li><strong>Físico:</strong> {fisico.toFixed(2)}% - {interpretar(fisico, 'Físico')}</li>
        <li><strong>Emocional:</strong> {emocional.toFixed(2)}% - {interpretar(emocional, 'Emocional')}</li>
        <li><strong>Intelectual:</strong> {intelectual.toFixed(2)}% - {interpretar(intelectual, 'Intelectual')}</li>
      </ul>
    </div>
  );
}
export default function NumerologiaResult({ numeroVida, numeroExpresion }) {
  return (
    <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded">
      <h3 className="text-lg font-bold text-green-800">Resultados de Numerología</h3>
      <ul className="mt-2 space-y-1">
        <li><strong>Número de vida:</strong> {numeroVida}</li>
        <li><strong>Número de expresión:</strong> {numeroExpresion}</li>
      </ul>
      <p className="mt-2 text-sm text-gray-600">
        Interpretación: El número de vida {numeroVida} indica tu propósito principal...
        (Aquí podrías agregar descripciones más detalladas)
      </p>
    </div>
  );
}
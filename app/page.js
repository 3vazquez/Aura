'use client';

import { useState } from 'react';
import NumerologiaForm from '../components/NumerologiaForm';
import NumerologiaResult from '../components/NumerologiaResult';
import BiorritmoResult from '../components/BiorritmoResult';
import BiorritmoChart from '../components/BiorritmoChart';
import { calcularNumeroVida, calcularNumeroExpresion } from '../lib/numerologia';
import { calcularDiasVividos, calcularBiorritmo } from '../lib/biorritmo';

export default function Home() {
  const [resultados, setResultados] = useState(null);

  const handleCalculate = ({ fecha, nombre }) => {
    // Numerología
    const numeroVida = calcularNumeroVida(fecha);
    const numeroExpresion = calcularNumeroExpresion(nombre || 'Usuario');

    // Biorritmo
    const diasVividos = calcularDiasVividos(fecha);
    const biorritmo = calcularBiorritmo(diasVividos);

    setResultados({
      numeroVida,
      numeroExpresion,
      diasVividos,
      biorritmo,
    });
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Numerología y Biorritmo
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Descubre tu número de vida y el estado de tus ciclos biológicos.
        </p>

        <NumerologiaForm onCalculate={handleCalculate} />

        {resultados && (
          <div className="mt-8 space-y-6">
            <NumerologiaResult
              numeroVida={resultados.numeroVida}
              numeroExpresion={resultados.numeroExpresion}
            />

            <BiorritmoResult
              fisico={resultados.biorritmo.fisico}
              emocional={resultados.biorritmo.emocional}
              intelectual={resultados.biorritmo.intelectual}
            />

            <BiorritmoChart
              diasVividos={resultados.diasVividos}
              valoresActuales={resultados.biorritmo}
            />
          </div>
        )}
      </div>
    </main>
  );
}
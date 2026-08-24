'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function BiorritmoChart({ diasVividos, valoresActuales }) {
  // Generar datos para los próximos 30 días
  const dias = Array.from({ length: 30 }, (_, i) => i);
  const labels = dias.map((d) => `Día ${d + 1}`);

  // Simular valores futuros (en una app real podrías calcular cada día)
  // Para este ejemplo usamos los valores actuales y añadimos pequeñas variaciones
  // Pero lo correcto es recalcular con la función de biorritmo para cada día.
  // Aquí simplificamos: generamos una curva senoidal para cada ciclo.
  const { fisico, emocional, intelectual } = valoresActuales;

  // Función para obtener el valor de biorritmo en un día específico a partir de los días vividos
  // Usamos la misma función de biorritmo pero con díasVividos + offset
  const { calcularBiorritmo } = require('../lib/biorritmo');

  const dataFisico = dias.map((offset) => {
    const totalDias = diasVividos + offset;
    const { fisico } = calcularBiorritmo(totalDias);
    return fisico;
  });

  const dataEmocional = dias.map((offset) => {
    const totalDias = diasVividos + offset;
    const { emocional } = calcularBiorritmo(totalDias);
    return emocional;
  });

  const dataIntelectual = dias.map((offset) => {
    const totalDias = diasVividos + offset;
    const { intelectual } = calcularBiorritmo(totalDias);
    return intelectual;
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Físico',
        data: dataFisico,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Emocional',
        data: dataEmocional,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Intelectual',
        data: dataIntelectual,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Proyección de Biorritmo (próximos 30 días)',
      },
    },
    scales: {
      y: {
        min: -100,
        max: 100,
      },
    },
  };

  return (
    <div className="mt-8 p-4 bg-white shadow rounded">
      <Line data={chartData} options={options} />
    </div>
  );
}
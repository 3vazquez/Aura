'use client';

import { useState } from 'react';

export default function NumerologiaForm({ onCalculate }) {
  const [fecha, setFecha] = useState('');
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fecha) return;
    onCalculate({ fecha, nombre });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-white shadow rounded">
      <div>
        <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">
          Fecha de nacimiento
        </label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
          Nombre completo (opcional)
        </label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Ej: Juan Pérez"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Calcular
      </button>
    </form>
  );
}
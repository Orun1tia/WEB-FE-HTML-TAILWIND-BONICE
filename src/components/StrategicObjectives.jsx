import React from 'react';

const objectives = [
  { id: 1, goal: "Incrementar la Producción", target: 50000, progress: 15000, compliance: 30 },
  { id: 2, goal: "Expansión a Nuevos Mercados", target: 100000, progress: 40000, compliance: 40 },
  { id: 3, goal: "Reducción de Costos de Producción", target: 50000, progress: 35000, compliance: 70 },
  { id: 4, goal: "Aumento en Ventas Online", target: 200000, progress: 50000, compliance: 25 },
  { id: 5, goal: "Diversificación de Productos Saludables", target: 80000, progress: 64000, compliance: 80 },
];

function getStatus(compliance) {
  if (compliance <= 35) return <span class="text-red-600">Crítico</span>;
  if (compliance <= 75) return <span class="text-orange-600">Aceptable</span>;
  return <span class="text-green-600">Exitoso</span>;
}

function StrategicObjectives() {
  return (
    <section class="p-4">
      <h2 class="text-2xl font-bold mb-4">Objetivos Estratégicos - Bonice</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-white text-gray-600">
            <tr>
              <th class="py-2 px-4 border-b-[1px] border-gray text-left text-sm font-medium">Código</th>
              <th class="py-2 px-4 border-b-[1px] border-gray text-left text-sm font-medium">Objetivo</th>
              <th class="py-2 px-4 border-b-[1px] border-gray text-left text-sm font-medium">Meta</th>
              <th class="py-2 px-4 border-b-[1px] border-gray text-left text-sm font-medium">Avance</th>
              <th class="py-2 px-4 border-b-[1px] border-gray text-left text-sm font-medium">Cumplimiento</th>
              <th class="py-2 px-4 border-b-[1px] border-gray text-left text-sm font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {objectives.map((obj) => (
              <tr key={obj.id} class="hover:bg-gray-50 text-gray-700">
                <td class="py-2 px-4 text-sm">{obj.id}</td>
                <td class="py-2 px-4 text-sm">{obj.goal}</td>
                <td class="py-2 px-4 text-sm">{`$ ${obj.target}`}</td>
                <td class="py-2 px-4 text-sm">{`$ ${obj.progress}`}</td>
                <td class="py-2 px-4 text-sm">{`${obj.compliance}%`}</td>
                <td class="py-2 px-4 text-sm">{getStatus(obj.compliance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StrategicObjectives;

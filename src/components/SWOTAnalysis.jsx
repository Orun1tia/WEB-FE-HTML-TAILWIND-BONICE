import React from 'react';

const swotData = [
  {
    id: 1,
    type: "Debilidades",
    items: [
      { id: 1, title: "1. Inestabilidad de ingresos", description: "Dependencia estacional en la demanda de productos, lo que afecta la estabilidad de los ingresos durante todo el año." },
      { id: 2, title: "2. Alta competencioa", description: "Alta competencia en el sector de alimentos congelados, lo que reduce la participación en el mercado." },
      { id: 3, title: "3. Distribucion limitada", description: "Distribución limitada a ciertas áreas geográficas, lo que restringe el alcance de los productos a nivel nacional." },
    ],
  },
  {
    id: 2,
    type: "Oportunidades",
    items: [
      { id: 1, title: "1. Expansion", description: "Expansión a nuevos mercados internacionales, aprovechando la creciente demanda de productos congelados en otros países." },
      { id: 2, title: "2. Aumento de demanda", description: "Aumento en la demanda de productos saludables y naturales, lo que permite diversificar la oferta de productos." },
      { id: 3, title: "3. Colaboracioners", description: "Colaboraciones con cadenas de supermercados para mejorar la visibilidad y accesibilidad de los productos." },
    ],
  },
  {
    id: 3,
    type: "Fortalezas",
    items: [
      { id: 1, title: "1. Posicion actual", description: "Marca bien posicionada y reconocida en el mercado, lo que genera lealtad en los consumidores." },
      { id: 2, title: "2. Oferta de sabores", description: "Amplia gama de sabores y productos que satisfacen diversas preferencias del consumidor." },
      { id: 3, title: "3. Eficiencia en la produccion", description: "Capacidad de producción eficiente y de bajo costo, lo que permite competitividad en precios." },
    ],
  },
  {
    id: 4,
    type: "Amenazas",
    items: [
      { id: 1, title: "1. Regulaciones", description: "Cambios en las regulaciones alimentarias que podrían aumentar los costos de producción o limitar el acceso a ciertos mercados." },
      { id: 2, title: "2. Costos", description: "Aumento en los costos de producción debido a la inflación, lo que afecta la rentabilidad." },
      { id: 3, title: "3. Competencia", description: "Competencia de productos alternativos más saludables que puede reducir la participación en el mercado de los productos tradicionales." },
    ],
  },
];

function SWOTAnalysis() {
  return (
    <section class="p-4">
      <h2 class="text-2xl font-bold mb-2">Diagnóstico Actual (DOFA)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {swotData.map((swot) => (
          <div key={swot.id} class="border p-4 border-gray">
            <h3 class="text-xl font-bold mb-2">{swot.type}</h3>
            <ul>
              {swot.items.map((item) => (
                <li key={item.id} class="mb-4">
                  <h4 class="font-bold">{item.title}</h4>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SWOTAnalysis;

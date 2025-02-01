import React from 'react';

const Inventory = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerenciamento de Inventário</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Nova Entrada de Estoque
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Alertas de Estoque Baixo</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="text-red-700">Carregadores de Notebook</span>
                <span className="text-red-700 font-semibold">2 restantes</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Transações Recentes</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="p-3 border-b last:border-0">
                <p className="text-sm font-medium">Monitor Dell P2419H</p>
                <p className="text-xs text-gray-500">Adicionado 5 unidades • 2 horas atrás</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Visão Geral do Estoque</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-3 border-b last:border-0">
                <span>Teclados</span>
                <span className="font-semibold">15 unidades</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
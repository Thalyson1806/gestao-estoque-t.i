import React from 'react';
import { FileText, Download } from 'lucide-react';

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Relatórios</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Gerar Relatório
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Relatórios Disponíveis</h2>
          <div className="space-y-4">
            {[
              'Resumo do Inventário de Ativos',
              'Cronograma de Manutenção',
              'Utilização de Ativos',
              'Vencimento de Licenças'
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="text-gray-400" size={20} />
                  <span>{report}</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  <Download size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Configurações de Relatório</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Período
              </label>
              <select className="w-full border-gray-300 rounded-lg shadow-sm">
                <option>Últimos 7 dias</option>
                <option>Últimos 30 dias</option>
                <option>Últimos 3 meses</option>
                <option>Período personalizado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Relatório
              </label>
              <select className="w-full border-gray-300 rounded-lg shadow-sm">
                <option>PDF</option>
                <option>Excel</option>
                <option>CSV</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
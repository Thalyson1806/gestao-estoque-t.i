import React from 'react';
import { AlertTriangle, Clock, Calendar } from 'lucide-react';

const Alerts = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Alertas & Notificações</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Configurar Alertas
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Alertas Recentes</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
                  <AlertTriangle className="text-red-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-red-800">Licença Expirando em Breve</h3>
                    <p className="text-sm text-red-600 mt-1">
                      A licença do Adobe Creative Cloud irá expirar em 15 dias
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="flex items-center text-xs text-red-600">
                        <Clock size={14} className="mr-1" />
                        2 horas atrás
                      </span>
                      <span className="flex items-center text-xs text-red-600">
                        <Calendar size={14} className="mr-1" />
                        Vence em 15 Mar, 2024
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Configurações de Alerta</h2>
            <div className="space-y-4">
              {[
                'Expiração de Licença',
                'Manutenção Programada',
                'Estoque Baixo',
                'Atualizações de Segurança'
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{setting}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
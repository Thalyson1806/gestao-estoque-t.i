import React from 'react';
import { 
  Monitor, 
  HardDrive, 
  Wifi, 
  AlertTriangle,
  TrendingUp,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total de Ativos', value: '1.234', icon: Monitor, color: 'bg-blue-500' },
    { label: 'Hardware', value: '856', icon: HardDrive, color: 'bg-green-500' },
    { label: 'Dispositivos de Rede', value: '178', icon: Wifi, color: 'bg-purple-500' },
    { label: 'Manutenção Pendente', value: '12', icon: AlertTriangle, color: 'bg-yellow-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Utilização de Ativos</h2>
            <TrendingUp className="text-green-500" />
          </div>
          <div className="h-64 flex items-center justify-center text-gray-400">
            Gráfico será implementado aqui
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Atividades Recentes</h2>
            <Clock className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="text-sm">Ativo #1234 atribuído a João Silva</p>
                  <p className="text-xs text-gray-500">2 horas atrás</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
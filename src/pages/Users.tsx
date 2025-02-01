import React from 'react';
import { User } from 'lucide-react';

const Users = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Usuários</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Adicionar Usuário
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <User className="text-gray-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">João Silva</h3>
                <p className="text-sm text-gray-500">Departamento de TI</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Ativos Atribuídos</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-500">Última Atividade</span>
                <span className="font-semibold">2 horas atrás</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
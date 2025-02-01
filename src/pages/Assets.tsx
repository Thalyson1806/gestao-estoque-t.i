import React from 'react';
import type { Asset } from '../types/asset';

const Assets = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ativos</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Adicionar Novo Ativo
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-4">Nome</th>
                <th className="pb-4">Tipo</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Localização</th>
                <th className="pb-4">Atribuído a</th>
                <th className="pb-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((_, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-4">Notebook XPS 15</td>
                  <td className="py-4">Hardware</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Ativo
                    </span>
                  </td>
                  <td className="py-4">Escritório Principal</td>
                  <td className="py-4">João Silva</td>
                  <td className="py-4">
                    <button className="text-blue-600 hover:text-blue-800">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Assets;
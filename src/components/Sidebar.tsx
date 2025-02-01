import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Monitor, 
  Box, 
  Settings, 
  Users, 
  FileText, 
  Bell
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Painel', path: '/' },
    { icon: Monitor, label: 'Ativos', path: '/assets' },
    { icon: Box, label: 'Inventário', path: '/inventory' },
    { icon: Users, label: 'Usuários', path: '/users' },
    { icon: FileText, label: 'Relatórios', path: '/reports' },
    { icon: Bell, label: 'Alertas', path: '/alerts' },
    { icon: Settings, label: 'Configurações', path: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">Gerenciador de Ativos TI</h1>
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
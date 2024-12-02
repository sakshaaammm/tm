import React from 'react';
import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  ShoppingCart, 
  Truck,
  GraduationCap,
  Mail,
  MessageSquare,
  Calendar,
  Trello
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#232430] text-gray-300 p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-purple-500 rounded-lg"></div>
        <h1 className="text-xl font-semibold text-white">Vuexy</h1>
      </div>

      <nav className="space-y-2">
        <div className="mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 text-purple-400">
            <LayoutDashboard size={20} />
            <span>Dashboards</span>
          </div>
        </div>

        {[
          { icon: <BarChart2 size={20} />, label: 'Analytics' },
          { icon: <Users size={20} />, label: 'CRM' },
          { icon: <ShoppingCart size={20} />, label: 'eCommerce' },
          { icon: <Truck size={20} />, label: 'Logistics' },
          { icon: <GraduationCap size={20} />, label: 'Academy' },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-purple-500/10 cursor-pointer">
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}

        <div className="mt-8 pt-4 border-t border-gray-700">
          <p className="px-4 text-xs text-gray-500 uppercase mb-4">Apps & Pages</p>
          {[
            { icon: <Mail size={20} />, label: 'Email' },
            { icon: <MessageSquare size={20} />, label: 'Chat' },
            { icon: <Calendar size={20} />, label: 'Calendar' },
            { icon: <Trello size={20} />, label: 'Kanban' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-purple-500/10 cursor-pointer">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
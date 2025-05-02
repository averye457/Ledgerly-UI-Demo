import React from 'react';
import { HomeIcon, ArrowDownUpIcon, ReceiptIcon, BarChartIcon, SettingsIcon } from 'lucide-react';
export function Sidebar() {
  return <div className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Ledgerly</h1>
      </div>
      <nav className="flex-1 pt-4">
        <ul>
          <NavItem icon={<HomeIcon size={18} />} label="Home" />
          <NavItem icon={<ArrowDownUpIcon size={18} />} label="Transactions" active />
          <NavItem icon={<ReceiptIcon size={18} />} label="Taxes" />
          <NavItem icon={<BarChartIcon size={18} />} label="Reports" />
          <NavItem icon={<SettingsIcon size={18} />} label="Settings" />
        </ul>
      </nav>
    </div>;
}
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}
function NavItem({
  icon,
  label,
  active = false
}: NavItemProps) {
  return <li>
      <a href="#" className={`flex items-center px-4 py-3 text-sm ${active ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}>
        <span className="mr-3">{icon}</span>
        {label}
      </a>
    </li>;
}
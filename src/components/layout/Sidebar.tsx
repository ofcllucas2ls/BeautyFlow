import { 
  LayoutDashboard, 
  Calendar, 
  ClipboardList, 
  DollarSign, 
  Users, 
  Scissors, 
  FileText, 
  Settings,
  History,
  Wallet,
  UserCircle,
  Tag
} from 'lucide-react';

interface SidebarProps {
  userRole: 'owner' | 'receptionist' | 'professional';
  onNavigate: (route: string) => void;
  currentRoute: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  route: string | ((userRole: string) => string);
  roles: string[];
}

const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    route: 'dashboard',
    roles: ['owner', 'receptionist', 'professional']
  },
  {
    id: 'schedule',
    label: 'Agenda',
    icon: <Calendar className="w-5 h-5" />,
    route: 'schedule',
    roles: ['owner', 'receptionist', 'professional']
  },
  {
    id: 'appointments',
    label: 'Atendimentos',
    icon: <ClipboardList className="w-5 h-5" />,
    route: 'appointments-list',
    roles: ['owner', 'receptionist', 'professional']
  },
  {
    id: 'financial',
    label: 'Financeiro',
    icon: <DollarSign className="w-5 h-5" />,
    route: 'commissions',
    roles: ['owner', 'professional']
  },
  {
    id: 'cash-register',
    label: 'Caixa',
    icon: <Wallet className="w-5 h-5" />,
    route: 'cash-register',
    roles: ['owner']
  },
  {
    id: 'clients',
    label: 'Clientes',
    icon: <Users className="w-5 h-5" />,
    route: 'clients',
    roles: ['owner', 'receptionist']
  },
  {
    id: 'professionals',
    label: 'Profissionais',
    icon: <UserCircle className="w-5 h-5" />,
    route: 'professionals',
    roles: ['owner']
  },
  {
    id: 'services',
    label: 'Serviços',
    icon: <Scissors className="w-5 h-5" />,
    route: 'services',
    roles: ['owner', 'receptionist']
  },
  {
    id: 'categories',
    label: 'Categorias',
    icon: <Tag className="w-5 h-5" />,
    route: 'categories',
    roles: ['owner']
  },
  {
    id: 'reports',
    label: 'Relatórios',
    icon: <FileText className="w-5 h-5" />,
    route: 'report-financial',
    roles: ['owner']
  },
  {
    id: 'history',
    label: 'Histórico',
    icon: <History className="w-5 h-5" />,
    route: 'change-log',
    roles: ['owner']
  },
  {
    id: 'settings',
    label: 'Configurações',
    icon: <Settings className="w-5 h-5" />,
    route: (userRole: string) => userRole === 'owner' ? 'salon-settings' : 'professional-settings',
    roles: ['owner', 'professional']
  }
];

export function Sidebar({ userRole, onNavigate, currentRoute }: SidebarProps) {
  const filteredItems = menuItems.filter(item => item.roles.includes(userRole));

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
            <Scissors className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl">BeautyFlow</h1>
            <p className="text-xs text-gray-500">Gestão de Salão</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {filteredItems.map((item) => {
          const itemRoute = typeof item.route === 'function' ? item.route(userRole) : item.route;
          const isActive = currentRoute === itemRoute || 
                          (item.id === 'financial' && (currentRoute === 'commissions' || currentRoute === 'commission-details' || currentRoute === 'payments')) ||
                          (item.id === 'reports' && currentRoute.startsWith('report-')) ||
                          (item.id === 'history' && (currentRoute === 'change-log' || currentRoute === 'payment-history' || currentRoute === 'canceled-history')) ||
                          (item.id === 'settings' && (currentRoute === 'salon-settings' || currentRoute === 'professional-settings' || currentRoute === 'preferences'));
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(itemRoute)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          BeautyFlow v1.0.0
        </div>
      </div>
    </aside>
  );
}
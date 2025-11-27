import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

interface MainLayoutProps {
  children: ReactNode;
  userRole: 'owner' | 'receptionist' | 'professional';
  onNavigate: (route: string) => void;
  onLogout: () => void;
  currentRoute: string;
}

export function MainLayout({ children, userRole, onNavigate, onLogout, currentRoute }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userRole={userRole} onNavigate={onNavigate} currentRoute={currentRoute} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar userRole={userRole} onLogout={onLogout} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

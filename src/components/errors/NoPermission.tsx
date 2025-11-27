import { ShieldAlert, Home } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface NoPermissionProps {
  onNavigate: (route: string) => void;
}

export function NoPermission({ onNavigate }: NoPermissionProps) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="p-12 text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-4"><ShieldAlert className="w-10 h-10 text-red-600" /></div>
        <h1 className="mb-2">Acesso Negado</h1>
        <p className="text-gray-600 mb-6">Você não tem permissão para acessar esta página. Entre em contato com o administrador do sistema.</p>
        <Button onClick={() => onNavigate('dashboard')} className="bg-gradient-to-r from-pink-500 to-purple-600"><Home className="w-4 h-4 mr-2" />Voltar ao Dashboard</Button>
      </Card>
    </div>
  );
}

import { Clock, LogIn } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface SessionExpiredProps {
  onNavigate: (route: string) => void;
}

export function SessionExpired({ onNavigate }: SessionExpiredProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Card className="p-12 text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 mb-4"><Clock className="w-10 h-10 text-orange-600" /></div>
        <h1 className="mb-2">Sessão Expirada</h1>
        <p className="text-gray-600 mb-6">Sua sessão expirou por inatividade. Por favor, faça login novamente para continuar.</p>
        <Button onClick={() => onNavigate('login')} className="bg-gradient-to-r from-pink-500 to-purple-600"><LogIn className="w-4 h-4 mr-2" />Fazer Login</Button>
      </Card>
    </div>
  );
}

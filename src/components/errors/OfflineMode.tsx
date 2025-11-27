import { WifiOff, RefreshCw } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function OfflineMode() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Card className="p-12 text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4"><WifiOff className="w-10 h-10 text-gray-600" /></div>
        <h1 className="mb-2">Sem Conexão</h1>
        <p className="text-gray-600 mb-6">Não foi possível conectar ao servidor. Verifique sua conexão com a internet e tente novamente.</p>
        <Button onClick={() => window.location.reload()} className="bg-gradient-to-r from-pink-500 to-purple-600"><RefreshCw className="w-4 h-4 mr-2" />Tentar Novamente</Button>
        <p className="text-xs text-gray-500 mt-4">Algumas funcionalidades podem estar limitadas no modo offline</p>
      </Card>
    </div>
  );
}

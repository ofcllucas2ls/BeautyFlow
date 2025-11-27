import { Home, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface Error404Props {
  onNavigate: (route: string) => void;
}

export function Error404({ onNavigate }: Error404Props) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="p-12 text-center max-w-md">
        <div className="text-8xl mb-4">404</div>
        <h1 className="mb-2">Página Não Encontrada</h1>
        <p className="text-gray-600 mb-6">A página que você está procurando não existe ou foi movida.</p>
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={() => onNavigate('dashboard')}><Home className="w-4 h-4 mr-2" />Ir para Dashboard</Button>
        </div>
      </Card>
    </div>
  );
}

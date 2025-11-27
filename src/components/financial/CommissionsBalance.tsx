import { DollarSign, Eye, Filter, Calendar } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface CommissionsBalanceProps {
  onNavigate: (route: string) => void;
}

export function CommissionsBalance({ onNavigate }: CommissionsBalanceProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2">Comissões</h1>
        <p className="text-gray-600">Saldos e pagamentos dos profissionais</p>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="border border-gray-300 rounded-lg p-2">
            <option>Todos os profissionais</option>
            <option>Carla Santos</option>
            <option>Júlia Oliveira</option>
            <option>Ana Costa</option>
          </select>
          <select className="border border-gray-300 rounded-lg p-2">
            <option>Todas as comissões</option>
            <option>Pendentes</option>
            <option>Pagas</option>
          </select>
          <div className="flex gap-2">
            <input type="date" className="flex-1 border border-gray-300 rounded-lg p-2" />
            <input type="date" className="flex-1 border border-gray-300 rounded-lg p-2" />
          </div>
        </div>
      </Card>

      {/* Professional Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Carla Santos', pending: 'R$ 1.450,00', paid: 'R$ 3.200,00', services: 28 },
          { name: 'Júlia Oliveira', pending: 'R$ 980,00', paid: 'R$ 2.800,00', services: 24 },
          { name: 'Ana Costa', pending: 'R$ 720,00', paid: 'R$ 2.100,00', services: 20 },
        ].map((prof, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="mb-1">{prof.name}</h3>
                <p className="text-sm text-gray-600">{prof.services} atendimentos</p>
              </div>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                Pendente
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <span className="text-sm text-gray-600">A Receber</span>
                <span className="text-lg">{prof.pending}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-600">Já Pago</span>
                <span>{prof.paid}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t">
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1 gap-1"
                onClick={() => onNavigate('commission-details')}
              >
                <Eye className="w-4 h-4" />
                Ver Detalhes
              </Button>
              <Button size="sm" className="flex-1 gap-1 bg-gradient-to-r from-pink-500 to-purple-600">
                <DollarSign className="w-4 h-4" />
                Pagar
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Summary */}
      <Card className="p-6">
        <h3 className="mb-4">Resumo do Período</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Total Pendente</p>
            <p className="text-2xl">R$ 3.150,00</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Total Pago</p>
            <p className="text-2xl">R$ 8.100,00</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Total Comissões</p>
            <p className="text-2xl">R$ 11.250,00</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Atendimentos</p>
            <p className="text-2xl">72</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

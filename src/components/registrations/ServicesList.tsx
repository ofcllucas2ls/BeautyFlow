import { Plus, Edit, DollarSign, Clock } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface ServicesListProps {
  onNavigate: (route: string) => void;
}

export function ServicesList({ onNavigate }: ServicesListProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Serviços</h1>
          <p className="text-gray-600">Gerencie os serviços do salão</p>
        </div>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2" onClick={() => onNavigate('service-form')}>
          <Plus className="w-4 h-4" />
          Novo Serviço
        </Button>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm text-gray-600">Serviço</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Categoria</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Valor</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Duração</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Comissão Padrão</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Ações</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Manicure', category: 'Unhas', price: 'R$ 50,00', duration: '1h', commission: '70%', status: 'active' },
                { name: 'Pedicure', category: 'Unhas', price: 'R$ 60,00', duration: '1h', commission: '70%', status: 'active' },
                { name: 'Manicure e Pedicure', category: 'Unhas', price: 'R$ 90,00', duration: '1h 30min', commission: '70%', status: 'active' },
                { name: 'Corte de Cabelo', category: 'Cabelo', price: 'R$ 80,00', duration: '1h', commission: '65%', status: 'active' },
                { name: 'Escova', category: 'Cabelo', price: 'R$ 80,00', duration: '1h 30min', commission: '65%', status: 'active' },
                { name: 'Coloração', category: 'Cabelo', price: 'R$ 180,00', duration: '2h 30min', commission: '60%', status: 'active' },
                { name: 'Design de Sobrancelhas', category: 'Sobrancelhas', price: 'R$ 60,00', duration: '30min', commission: '70%', status: 'active' },
              ].map((service, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{service.name}</td>
                  <td className="py-3 px-4 text-sm">{service.category}</td>
                  <td className="py-3 px-4 text-sm flex items-center gap-1">
                    <DollarSign className="w-3 h-3 text-gray-400" />
                    {service.price}
                  </td>
                  <td className="py-3 px-4 text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    {service.duration}
                  </td>
                  <td className="py-3 px-4 text-sm">{service.commission}</td>
                  <td className="py-3 px-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Ativo
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Button size="sm" variant="ghost" onClick={() => onNavigate('service-form')}>
                      <Edit className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

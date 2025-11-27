import { Plus, Edit, DollarSign, Award } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface ProfessionalsListProps {
  onNavigate: (route: string) => void;
}

export function ProfessionalsList({ onNavigate }: ProfessionalsListProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Profissionais</h1>
          <p className="text-gray-600">Gerencie sua equipe</p>
        </div>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2" onClick={() => onNavigate('professional-form')}>
          <Plus className="w-4 h-4" />
          Novo Profissional
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Carla Santos', specialty: 'Manicure e Pedicure', commission: '70%', services: 28, revenue: 'R$ 4.500,00' },
          { name: 'Júlia Oliveira', specialty: 'Cabelo', commission: '65%', services: 24, revenue: 'R$ 3.800,00' },
          { name: 'Ana Costa', specialty: 'Sobrancelhas', commission: '70%', services: 20, revenue: 'R$ 2.900,00' },
        ].map((prof, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="mb-1">{prof.name}</h3>
                <p className="text-sm text-gray-600">{prof.specialty}</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Ativo
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Comissão</span>
                </div>
                <span>{prof.commission}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm text-gray-600">Atendimentos</span>
                <span>{prof.services}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Receita Mês</span>
                </div>
                <span>{prof.revenue}</span>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-4 gap-2" onClick={() => onNavigate('professional-form')}>
              <Edit className="w-4 h-4" />
              Editar
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

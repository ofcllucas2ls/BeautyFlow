import { Search, Filter, Eye, Plus } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';

interface AppointmentsListProps {
  onNavigate: (route: string) => void;
  userRole: 'owner' | 'receptionist' | 'professional';
}

export function AppointmentsList({ onNavigate, userRole }: AppointmentsListProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Atendimentos</h1>
          <p className="text-gray-600">Gerencie todos os atendimentos realizados</p>
        </div>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2" onClick={() => onNavigate('register-service')}>
          <Plus className="w-4 h-4" />
          Registrar Atendimento
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Buscar cliente..." className="pl-10" />
          </div>
          {userRole !== 'professional' && (
            <select className="border border-gray-300 rounded-lg p-2">
              <option>Todos os profissionais</option>
              <option>Carla Santos</option>
              <option>Júlia Oliveira</option>
              <option>Ana Costa</option>
            </select>
          )}
          <select className="border border-gray-300 rounded-lg p-2">
            <option>Todos os status</option>
            <option>Concluído</option>
            <option>Pendente</option>
            <option>Cancelado</option>
          </select>
          <Input type="date" />
        </div>
      </Card>

      {/* List */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm text-gray-600">Data/Hora</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Cliente</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Serviço</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Profissional</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Valor</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Ações</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: '13/11 09:00', client: 'Maria Silva', service: 'Manicure', professional: 'Carla Santos', value: 'R$ 50,00', status: 'completed' },
                { date: '13/11 10:00', client: 'Beatriz Costa', service: 'Escova', professional: 'Carla Santos', value: 'R$ 80,00', status: 'in-progress' },
                { date: '13/11 11:00', client: 'Juliana Souza', service: 'Sobrancelhas', professional: 'Ana Costa', value: 'R$ 60,00', status: 'confirmed' },
                { date: '13/11 11:30', client: 'Fernanda Lima', service: 'Pedicure', professional: 'Carla Santos', value: 'R$ 60,00', status: 'pending' },
                { date: '12/11 16:00', client: 'Patrícia Rocha', service: 'Coloração', professional: 'Júlia Oliveira', value: 'R$ 180,00', status: 'completed' },
              ].map((apt, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{apt.date}</td>
                  <td className="py-3 px-4 text-sm">{apt.client}</td>
                  <td className="py-3 px-4 text-sm">{apt.service}</td>
                  <td className="py-3 px-4 text-sm">{apt.professional}</td>
                  <td className="py-3 px-4 text-sm">{apt.value}</td>
                  <td className="py-3 px-4">
                    <Badge variant="secondary" className={
                      apt.status === 'completed' ? 'bg-green-100 text-green-700' :
                      apt.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      apt.status === 'confirmed' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    }>
                      {apt.status === 'completed' ? 'Concluído' :
                       apt.status === 'in-progress' ? 'Em Andamento' :
                       apt.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Button size="sm" variant="ghost" onClick={() => onNavigate('appointment-details')}>
                      <Eye className="w-4 h-4" />
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

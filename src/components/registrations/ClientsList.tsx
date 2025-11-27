import { Search, Plus, Eye, Edit, Phone, Mail } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';

interface ClientsListProps {
  onNavigate: (route: string) => void;
  userRole: 'owner' | 'receptionist' | 'professional';
}

export function ClientsList({ onNavigate }: ClientsListProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Clientes</h1>
          <p className="text-gray-600">Gerencie a base de clientes do salão</p>
        </div>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2" onClick={() => onNavigate('client-form')}>
          <Plus className="w-4 h-4" />
          Novo Cliente
        </Button>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Buscar por nome ou telefone..." className="pl-10" />
          </div>
          <select className="border border-gray-300 rounded-lg p-2">
            <option>Todos os clientes</option>
            <option>Ativos</option>
            <option>Inativos</option>
          </select>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-600 mb-1">Total de Clientes</p>
          <p className="text-2xl">248</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600 mb-1">Novos Este Mês</p>
          <p className="text-2xl">12</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600 mb-1">Aniversariantes</p>
          <p className="text-2xl">8</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600 mb-1">Inativos (30d)</p>
          <p className="text-2xl">15</p>
        </Card>
      </div>

      {/* Client List */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm text-gray-600">Nome</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Contato</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Último Atendimento</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Total Gasto</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Ações</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Maria Silva', phone: '(11) 99999-1111', email: 'maria@email.com', lastService: '13/11/2025', total: 'R$ 650,00', status: 'active' },
                { name: 'Ana Paula Santos', phone: '(11) 99999-2222', email: 'ana@email.com', lastService: '13/11/2025', total: 'R$ 1.200,00', status: 'active' },
                { name: 'Beatriz Costa', phone: '(11) 99999-3333', email: 'beatriz@email.com', lastService: '13/11/2025', total: 'R$ 890,00', status: 'active' },
                { name: 'Juliana Souza', phone: '(11) 99999-4444', email: 'juliana@email.com', lastService: '12/11/2025', total: 'R$ 450,00', status: 'active' },
                { name: 'Fernanda Lima', phone: '(11) 99999-5555', email: 'fernanda@email.com', lastService: '10/10/2025', total: 'R$ 320,00', status: 'inactive' },
              ].map((client, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div>
                      <div className="text-sm">{client.name}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {client.email}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm flex items-center gap-1">
                      <Phone className="w-3 h-3 text-gray-400" />
                      {client.phone}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">{client.lastService}</td>
                  <td className="py-3 px-4 text-sm">{client.total}</td>
                  <td className="py-3 px-4">
                    <Badge variant="secondary" className={client.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                      {client.status === 'active' ? 'Ativo' : 'Inativo'}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => onNavigate('client-form')}>
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
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

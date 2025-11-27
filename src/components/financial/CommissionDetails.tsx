import { ArrowLeft, DollarSign, Calendar } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface CommissionDetailsProps {
  onNavigate: (route: string) => void;
}

export function CommissionDetails({ onNavigate }: CommissionDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => onNavigate('commissions')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <div>
          <h1 className="mb-1">Comissões - Carla Santos</h1>
          <p className="text-gray-600">Detalhamento de comissões e pagamentos</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">A Receber</p>
              <p className="text-2xl">R$ 1.450,00</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Pago</p>
              <p className="text-2xl">R$ 3.200,00</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Atendimentos</p>
              <p className="text-2xl">28</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Commission List */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3>Atendimentos e Comissões</h3>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600">
            Gerar Pagamento
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm text-gray-600">Data</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Cliente</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Serviço</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Valor</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">%</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Comissão</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: '13/11', client: 'Maria Silva', service: 'Manicure', value: 'R$ 50,00', percent: '70%', commission: 'R$ 35,00', status: 'pending' },
                { date: '13/11', client: 'Beatriz Costa', service: 'Escova', value: 'R$ 80,00', percent: '70%', commission: 'R$ 56,00', status: 'pending' },
                { date: '12/11', client: 'Fernanda Lima', service: 'Pedicure', value: 'R$ 60,00', percent: '70%', commission: 'R$ 42,00', status: 'paid' },
                { date: '12/11', client: 'Camila Santos', service: 'Manicure', value: 'R$ 50,00', percent: '70%', commission: 'R$ 35,00', status: 'paid' },
                { date: '11/11', client: 'Paula Dias', service: 'Sobrancelhas', value: 'R$ 60,00', percent: '70%', commission: 'R$ 42,00', status: 'paid' },
              ].map((item, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{item.date}</td>
                  <td className="py-3 px-4 text-sm">{item.client}</td>
                  <td className="py-3 px-4 text-sm">{item.service}</td>
                  <td className="py-3 px-4 text-sm">{item.value}</td>
                  <td className="py-3 px-4 text-sm">{item.percent}</td>
                  <td className="py-3 px-4 text-sm">{item.commission}</td>
                  <td className="py-3 px-4">
                    <Badge variant="secondary" className={item.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}>
                      {item.status === 'paid' ? 'Pago' : 'Pendente'}
                    </Badge>
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

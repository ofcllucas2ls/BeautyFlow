import { DollarSign, Plus, FileText, Download } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface PaymentsListProps {
  onNavigate: (route: string) => void;
}

export function PaymentsList({ onNavigate }: PaymentsListProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Pagamentos</h1>
          <p className="text-gray-600">Histórico de pagamentos de comissões</p>
        </div>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2">
          <Plus className="w-4 h-4" />
          Gerar Pagamento
        </Button>
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
          <div className="flex gap-2">
            <input type="date" className="flex-1 border border-gray-300 rounded-lg p-2" />
            <input type="date" className="flex-1 border border-gray-300 rounded-lg p-2" />
          </div>
          <select className="border border-gray-300 rounded-lg p-2">
            <option>Todos os status</option>
            <option>Pago</option>
            <option>Pendente</option>
          </select>
        </div>
      </Card>

      {/* Payment List */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm text-gray-600">ID</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Data</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Profissional</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Período</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Atendimentos</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Valor</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Ações</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#PAG-001', date: '10/11/2025', professional: 'Carla Santos', period: '01/11 - 10/11', services: 15, value: 'R$ 1.200,00', status: 'paid' },
                { id: '#PAG-002', date: '10/11/2025', professional: 'Júlia Oliveira', period: '01/11 - 10/11', services: 12, value: 'R$ 980,00', status: 'paid' },
                { id: '#PAG-003', date: '10/11/2025', professional: 'Ana Costa', period: '01/11 - 10/11', services: 10, value: 'R$ 750,00', status: 'paid' },
                { id: '#PAG-004', date: '03/11/2025', professional: 'Carla Santos', period: '25/10 - 31/10', services: 18, value: 'R$ 1.450,00', status: 'paid' },
              ].map((payment, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{payment.id}</td>
                  <td className="py-3 px-4 text-sm">{payment.date}</td>
                  <td className="py-3 px-4 text-sm">{payment.professional}</td>
                  <td className="py-3 px-4 text-sm">{payment.period}</td>
                  <td className="py-3 px-4 text-sm">{payment.services}</td>
                  <td className="py-3 px-4 text-sm">{payment.value}</td>
                  <td className="py-3 px-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Pago
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Button size="sm" variant="ghost">
                      <Download className="w-4 h-4" />
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

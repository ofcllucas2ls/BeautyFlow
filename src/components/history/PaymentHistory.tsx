import { DollarSign, Download } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function PaymentHistory() {
  return (
    <div className="space-y-6">
      <div><h1 className="mb-2">Histórico de Pagamentos</h1><p className="text-gray-600">Todos os pagamentos realizados</p></div>
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="border border-gray-300 rounded-lg p-2"><option>Todos os profissionais</option><option>Carla Santos</option></select>
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
        </div>
      </Card>
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b"><th className="text-left py-3 px-4 text-sm text-gray-600">ID</th><th className="text-left py-3 px-4 text-sm text-gray-600">Data</th><th className="text-left py-3 px-4 text-sm text-gray-600">Profissional</th><th className="text-left py-3 px-4 text-sm text-gray-600">Período</th><th className="text-left py-3 px-4 text-sm text-gray-600">Valor</th><th className="text-left py-3 px-4 text-sm text-gray-600">Status</th><th className="text-left py-3 px-4 text-sm text-gray-600">Comprovante</th></tr></thead>
            <tbody>
              {['#PAG-001', '#PAG-002', '#PAG-003'].map((id, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{id}</td>
                  <td className="py-3 px-4 text-sm">10/11/2025</td>
                  <td className="py-3 px-4 text-sm">Carla Santos</td>
                  <td className="py-3 px-4 text-sm">01/11 - 10/11</td>
                  <td className="py-3 px-4 text-sm">R$ 1.200,00</td>
                  <td className="py-3 px-4"><Badge variant="secondary" className="bg-green-100 text-green-700">Pago</Badge></td>
                  <td className="py-3 px-4"><Button size="sm" variant="ghost"><Download className="w-4 h-4" /></Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

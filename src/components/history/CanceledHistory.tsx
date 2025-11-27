import { X } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export function CanceledHistory() {
  return (
    <div className="space-y-6">
      <div><h1 className="mb-2">Histórico de Cancelamentos</h1><p className="text-gray-600">Atendimentos cancelados</p></div>
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="border border-gray-300 rounded-lg p-2"><option>Todos os motivos</option><option>Cliente cancelou</option><option>Profissional cancelou</option><option>Remarcado</option></select>
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
        </div>
      </Card>
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b"><th className="text-left py-3 px-4 text-sm text-gray-600">Data Cancelamento</th><th className="text-left py-3 px-4 text-sm text-gray-600">Data Original</th><th className="text-left py-3 px-4 text-sm text-gray-600">Cliente</th><th className="text-left py-3 px-4 text-sm text-gray-600">Serviço</th><th className="text-left py-3 px-4 text-sm text-gray-600">Profissional</th><th className="text-left py-3 px-4 text-sm text-gray-600">Motivo</th></tr></thead>
            <tbody>
              {[
                {cancelDate: '12/11/2025', date: '15/11/2025', client: 'Paula Silva', service: 'Escova', prof: 'Júlia', reason: 'Cliente cancelou'},
                {cancelDate: '11/11/2025', date: '13/11/2025', client: 'Roberta Lima', service: 'Manicure', prof: 'Carla', reason: 'Remarcado'},
              ].map((item, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{item.cancelDate}</td>
                  <td className="py-3 px-4 text-sm">{item.date}</td>
                  <td className="py-3 px-4 text-sm">{item.client}</td>
                  <td className="py-3 px-4 text-sm">{item.service}</td>
                  <td className="py-3 px-4 text-sm">{item.prof}</td>
                  <td className="py-3 px-4"><Badge variant="secondary" className="bg-red-100 text-red-700">{item.reason}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

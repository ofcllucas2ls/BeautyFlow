import { History, Filter, Search } from 'lucide-react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';

export function ChangeLog() {
  return (
    <div className="space-y-6">
      <div><h1 className="mb-2">Histórico de Alterações</h1><p className="text-gray-600">Registro de todas as modificações no sistema</p></div>
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><Input placeholder="Buscar..." className="pl-10" /></div>
          <select className="border border-gray-300 rounded-lg p-2"><option>Todas as ações</option><option>Criação</option><option>Edição</option><option>Exclusão</option></select>
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
        </div>
      </Card>
      <Card className="p-6">
        <div className="space-y-4">
          {[
            {time: '13/11/2025 15:30', user: 'Maria Silva (Proprietária)', action: 'Editou', item: 'Serviço "Manicure"', detail: 'Alterou preço de R$ 45 para R$ 50'},
            {time: '13/11/2025 14:20', user: 'Ana Costa (Recepcionista)', action: 'Criou', item: 'Agendamento #1234', detail: 'Cliente: Beatriz Costa - Serviço: Escova'},
            {time: '13/11/2025 10:15', user: 'Maria Silva (Proprietária)', action: 'Pagou', item: 'Comissão', detail: 'Profissional: Carla Santos - R$ 1.200,00'},
            {time: '12/11/2025 16:45', user: 'Ana Costa (Recepcionista)', action: 'Cancelou', item: 'Agendamento #1230', detail: 'Motivo: Cliente solicitou cancelamento'}
          ].map((log, i) => (
            <div key={i} className="flex gap-4 p-4 border rounded-lg hover:bg-gray-50">
              <History className="w-5 h-5 text-gray-400 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary" className={log.action === 'Criou' ? 'bg-green-100 text-green-700' : log.action === 'Cancelou' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}>{log.action}</Badge>
                  <span className="text-sm">{log.item}</span>
                </div>
                <p className="text-sm text-gray-600">{log.detail}</p>
                <div className="text-xs text-gray-500 mt-2">{log.time} • {log.user}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

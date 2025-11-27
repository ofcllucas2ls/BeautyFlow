import { Download } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function CancellationReport() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="mb-2">Relatório de Cancelamentos</h1><p className="text-gray-600">Análise de agendamentos cancelados</p></div>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2"><Download className="w-4 h-4" />Exportar PDF</Button>
      </div>
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
        </div>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Total Cancelados</p><p className="text-2xl text-red-600">12</p></Card>
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Taxa Cancelamento</p><p className="text-2xl">7.5%</p></Card>
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Receita Perdida</p><p className="text-2xl">R$ 980,00</p></Card>
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Motivo Principal</p><p className="text-sm">Cliente</p></Card>
      </div>
      <Card className="p-6">
        <h3 className="mb-4">Cancelamentos Detalhados</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b"><th className="text-left py-3 px-4 text-sm text-gray-600">Data</th><th className="text-left py-3 px-4 text-sm text-gray-600">Cliente</th><th className="text-left py-3 px-4 text-sm text-gray-600">Serviço</th><th className="text-left py-3 px-4 text-sm text-gray-600">Profissional</th><th className="text-left py-3 px-4 text-sm text-gray-600">Motivo</th></tr></thead>
            <tbody><tr className="border-b"><td className="py-3 px-4 text-sm">12/11/2025</td><td className="py-3 px-4 text-sm">Paula Silva</td><td className="py-3 px-4 text-sm">Escova</td><td className="py-3 px-4 text-sm">Júlia Oliveira</td><td className="py-3 px-4"><Badge variant="secondary" className="bg-red-100 text-red-700">Cliente cancelou</Badge></td></tr></tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

import { Download } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

export function ServiceReport() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="mb-2">Relatório por Serviço</h1><p className="text-gray-600">Análise de serviços mais realizados</p></div>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2"><Download className="w-4 h-4" />Exportar PDF</Button>
      </div>
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
        </div>
      </Card>
      <Card className="p-6">
        <h3 className="mb-4">Serviços Mais Realizados</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">Gráfico de pizza - Distribuição de serviços</div>
      </Card>
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b"><th className="text-left py-3 px-4 text-sm text-gray-600">Serviço</th><th className="text-left py-3 px-4 text-sm text-gray-600">Quantidade</th><th className="text-left py-3 px-4 text-sm text-gray-600">Receita Total</th><th className="text-left py-3 px-4 text-sm text-gray-600">Ticket Médio</th></tr></thead>
            <tbody><tr className="border-b"><td className="py-3 px-4 text-sm">Manicure</td><td className="py-3 px-4 text-sm">45</td><td className="py-3 px-4 text-sm">R$ 2.250,00</td><td className="py-3 px-4 text-sm">R$ 50,00</td></tr></tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

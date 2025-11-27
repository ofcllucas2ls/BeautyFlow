import { Download } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

export function ProductivityReport() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="mb-2">Relatório de Produtividade</h1><p className="text-gray-600">Análise de eficiência da equipe</p></div>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2"><Download className="w-4 h-4" />Exportar PDF</Button>
      </div>
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
        </div>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Total Atendimentos</p><p className="text-2xl">156</p></Card>
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Média/Dia</p><p className="text-2xl">22</p></Card>
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Taxa Ocupação</p><p className="text-2xl">78%</p></Card>
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Duração Média</p><p className="text-2xl">1h 15min</p></Card>
      </div>
      <Card className="p-6">
        <h3 className="mb-4">Produtividade por Profissional</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">Gráfico de barras comparativo</div>
      </Card>
    </div>
  );
}

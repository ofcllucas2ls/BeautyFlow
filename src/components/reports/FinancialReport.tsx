import { Download } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

export function FinancialReport() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="mb-2">Relatório Financeiro</h1><p className="text-gray-600">Visão geral de receitas e despesas</p></div>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2"><Download className="w-4 h-4" />Exportar PDF</Button>
      </div>
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
        </div>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Receita Total</p><p className="text-2xl text-green-600">R$ 45.200,00</p></Card>
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Despesas</p><p className="text-2xl text-red-600">R$ 8.500,00</p></Card>
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Comissões Pagas</p><p className="text-2xl">R$ 28.600,00</p></Card>
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Lucro Líquido</p><p className="text-2xl text-blue-600">R$ 8.100,00</p></Card>
      </div>
      <Card className="p-6">
        <h3 className="mb-4">Evolução Financeira</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">Gráfico de linhas - Receitas vs Despesas</div>
      </Card>
    </div>
  );
}

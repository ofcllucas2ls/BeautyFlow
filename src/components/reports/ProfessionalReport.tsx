import { Download, Filter, FileText } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

export function ProfessionalReport() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Relatório por Profissional</h1>
          <p className="text-gray-600">Análise de desempenho individual</p>
        </div>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2">
          <Download className="w-4 h-4" />
          Exportar PDF
        </Button>
      </div>

      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="border border-gray-300 rounded-lg p-2">
            <option>Selecione o profissional</option>
            <option>Carla Santos</option>
            <option>Júlia Oliveira</option>
            <option>Ana Costa</option>
          </select>
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
          <input type="date" className="border border-gray-300 rounded-lg p-2" />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Total Atendimentos</p><p className="text-2xl">28</p></Card>
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Receita Total</p><p className="text-2xl">R$ 4.500,00</p></Card>
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Comissões</p><p className="text-2xl">R$ 3.150,00</p></Card>
        <Card className="p-6"><p className="text-sm text-gray-600 mb-1">Média/Atendimento</p><p className="text-2xl">R$ 160,71</p></Card>
      </div>

      <Card className="p-6">
        <h3 className="mb-4">Gráfico de Desempenho</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
          Gráfico de barras - Atendimentos por dia
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4">Detalhamento</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b">
              <th className="text-left py-3 px-4 text-sm text-gray-600">Data</th>
              <th className="text-left py-3 px-4 text-sm text-gray-600">Cliente</th>
              <th className="text-left py-3 px-4 text-sm text-gray-600">Serviço</th>
              <th className="text-left py-3 px-4 text-sm text-gray-600">Valor</th>
              <th className="text-left py-3 px-4 text-sm text-gray-600">Comissão</th>
            </tr></thead>
            <tbody>
              <tr className="border-b"><td className="py-3 px-4 text-sm">13/11/2025</td><td className="py-3 px-4 text-sm">Maria Silva</td><td className="py-3 px-4 text-sm">Manicure</td><td className="py-3 px-4 text-sm">R$ 50,00</td><td className="py-3 px-4 text-sm">R$ 35,00</td></tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

import { Plus, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function CashRegister() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Caixa</h1>
          <p className="text-gray-600">Controle de entradas e saídas</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <TrendingDown className="w-4 h-4" />
            Nova Despesa
          </Button>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2">
            <TrendingUp className="w-4 h-4" />
            Nova Receita
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Saldo Atual</p>
              <p className="text-2xl">R$ 12.450,00</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Receitas Hoje</p>
              <p className="text-2xl">R$ 3.450,00</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Despesas Hoje</p>
              <p className="text-2xl">R$ 380,00</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Saldo do Dia</p>
              <p className="text-2xl">R$ 3.070,00</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Transactions */}
      <Card className="p-6">
        <h3 className="mb-6">Movimentações do Dia</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm text-gray-600">Hora</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Tipo</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Descrição</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Categoria</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Valor</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Saldo</th>
              </tr>
            </thead>
            <tbody>
              {[
                { time: '15:30', type: 'receita', desc: 'Atendimento - Camila Santos', category: 'Serviço', value: 'R$ 90,00', balance: 'R$ 12.450,00' },
                { time: '14:00', type: 'receita', desc: 'Atendimento - Patrícia Rocha', category: 'Serviço', value: 'R$ 180,00', balance: 'R$ 12.360,00' },
                { time: '12:30', type: 'despesa', desc: 'Compra de material', category: 'Estoque', value: 'R$ 280,00', balance: 'R$ 12.180,00' },
                { time: '11:00', type: 'receita', desc: 'Atendimento - Juliana Souza', category: 'Serviço', value: 'R$ 60,00', balance: 'R$ 12.460,00' },
                { time: '10:00', type: 'receita', desc: 'Atendimento - Beatriz Costa', category: 'Serviço', value: 'R$ 80,00', balance: 'R$ 12.400,00' },
                { time: '09:30', type: 'despesa', desc: 'Pagamento de conta', category: 'Fixo', value: 'R$ 100,00', balance: 'R$ 12.320,00' },
                { time: '09:00', type: 'receita', desc: 'Atendimento - Maria Silva', category: 'Serviço', value: 'R$ 50,00', balance: 'R$ 12.420,00' },
              ].map((transaction, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{transaction.time}</td>
                  <td className="py-3 px-4">
                    <Badge variant="secondary" className={transaction.type === 'receita' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                      {transaction.type === 'receita' ? 'Receita' : 'Despesa'}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm">{transaction.desc}</td>
                  <td className="py-3 px-4 text-sm">{transaction.category}</td>
                  <td className={`py-3 px-4 text-sm ${transaction.type === 'receita' ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.type === 'receita' ? '+' : '-'} {transaction.value}
                  </td>
                  <td className="py-3 px-4 text-sm">{transaction.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

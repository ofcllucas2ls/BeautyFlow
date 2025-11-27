import { DollarSign, Calendar, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export function ProfessionalDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="mb-2">Olá, Carla!</h1>
        <p className="text-gray-600">Sua performance hoje</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <Badge variant="secondary" className="bg-green-50 text-green-700">
              +8%
            </Badge>
          </div>
          <div className="text-2xl mb-1">R$ 1.450,00</div>
          <p className="text-sm text-gray-600">Total a Receber</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <Badge variant="secondary">8 total</Badge>
          </div>
          <div className="text-2xl mb-1">5</div>
          <p className="text-sm text-gray-600">Atendimentos Hoje</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <Badge variant="secondary" className="bg-purple-50 text-purple-700">
              Esta semana
            </Badge>
          </div>
          <div className="text-2xl mb-1">R$ 3.280,00</div>
          <p className="text-sm text-gray-600">Ganhos da Semana</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-orange-600" />
            </div>
            <Badge variant="secondary">65%</Badge>
          </div>
          <div className="text-2xl mb-1">28</div>
          <p className="text-sm text-gray-600">Atendimentos no Mês</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Earnings Chart */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3>Ganhos Semanais</h3>
              <p className="text-sm text-gray-600">Últimos 7 dias</p>
            </div>
            <div className="text-right">
              <div className="text-2xl">R$ 3.280</div>
              <div className="text-sm text-green-600 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +12% vs semana anterior
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end gap-2">
            {[
              { day: 'Seg', value: 420 },
              { day: 'Ter', value: 380 },
              { day: 'Qua', value: 520 },
              { day: 'Qui', value: 450 },
              { day: 'Sex', value: 680 },
              { day: 'Sáb', value: 830 },
              { day: 'Dom', value: 0 },
            ].map((item, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end">
                <div className="text-center mb-2 text-xs text-gray-600">
                  {item.value > 0 ? `R$ ${item.value}` : '-'}
                </div>
                <div
                  className={`${
                    item.value > 0
                      ? 'bg-gradient-to-t from-pink-500 to-purple-600'
                      : 'bg-gray-200'
                  } rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer`}
                  style={{ height: `${(item.value / 830) * 100}%` || '10%' }}
                />
                <div className="text-xs text-gray-500 text-center mt-2">{item.day}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Today's Schedule */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-purple-600" />
            <h3>Sua Agenda Hoje</h3>
          </div>
          <div className="space-y-3">
            {[
              { time: '10:00', client: 'Beatriz Costa', service: 'Escova', status: 'current' },
              { time: '11:30', client: 'Fernanda Lima', service: 'Pedicure', status: 'next' },
              { time: '15:00', client: 'Camila Santos', service: 'Manicure', status: 'scheduled' },
              { time: '16:30', client: 'Paula Dias', service: 'Design Sobrancelhas', status: 'scheduled' },
              { time: '17:30', client: 'Lucia Mendes', service: 'Manicure', status: 'scheduled' },
            ].map((apt, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg border ${
                  apt.status === 'current'
                    ? 'bg-blue-50 border-blue-200'
                    : apt.status === 'next'
                    ? 'bg-purple-50 border-purple-200'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-3 h-3 text-gray-500" />
                  <span className="text-sm">{apt.time}</span>
                  {apt.status === 'current' && (
                    <Badge className="ml-auto bg-blue-600">Em andamento</Badge>
                  )}
                  {apt.status === 'next' && (
                    <Badge className="ml-auto bg-purple-600">Próximo</Badge>
                  )}
                </div>
                <div className="text-sm">{apt.client}</div>
                <div className="text-xs text-gray-500">{apt.service}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Services */}
      <Card className="p-6">
        <h3 className="mb-6">Atendimentos Recentes</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm text-gray-600">Data/Hora</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Cliente</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Serviço</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Valor</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Comissão</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  date: '13/11 09:00',
                  client: 'Maria Silva',
                  service: 'Manicure',
                  value: 'R$ 50,00',
                  commission: 'R$ 35,00',
                  status: 'paid',
                },
                {
                  date: '13/11 09:30',
                  client: 'Ana Paula',
                  service: 'Escova',
                  value: 'R$ 80,00',
                  commission: 'R$ 56,00',
                  status: 'paid',
                },
                {
                  date: '12/11 16:00',
                  client: 'Juliana Souza',
                  service: 'Manicure e Pedicure',
                  value: 'R$ 90,00',
                  commission: 'R$ 63,00',
                  status: 'pending',
                },
                {
                  date: '12/11 14:30',
                  client: 'Fernanda Lima',
                  service: 'Design de Sobrancelhas',
                  value: 'R$ 60,00',
                  commission: 'R$ 42,00',
                  status: 'pending',
                },
                {
                  date: '11/11 15:00',
                  client: 'Patrícia Rocha',
                  service: 'Manicure',
                  value: 'R$ 50,00',
                  commission: 'R$ 35,00',
                  status: 'paid',
                },
              ].map((service, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{service.date}</td>
                  <td className="py-3 px-4 text-sm">{service.client}</td>
                  <td className="py-3 px-4 text-sm">{service.service}</td>
                  <td className="py-3 px-4 text-sm">{service.value}</td>
                  <td className="py-3 px-4 text-sm">{service.commission}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="secondary"
                      className={
                        service.status === 'paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }
                    >
                      {service.status === 'paid' ? 'Pago' : 'Pendente'}
                    </Badge>
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

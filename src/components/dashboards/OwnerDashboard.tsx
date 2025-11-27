import { DollarSign, TrendingUp, Users, Calendar, AlertCircle, Award } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export function OwnerDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="mb-2">Dashboard</h1>
        <p className="text-gray-600">Visão geral do seu salão</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <Badge variant="secondary" className="bg-green-50 text-green-700">
              +12%
            </Badge>
          </div>
          <div className="text-2xl mb-1">R$ 3.450,00</div>
          <p className="text-sm text-gray-600">Receita Hoje</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <Badge variant="secondary">15 total</Badge>
          </div>
          <div className="text-2xl mb-1">12</div>
          <p className="text-sm text-gray-600">Atendimentos Hoje</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
            <Badge variant="secondary" className="bg-orange-50 text-orange-700">
              Pendente
            </Badge>
          </div>
          <div className="text-2xl mb-1">R$ 1.200,00</div>
          <p className="text-sm text-gray-600">Pagamentos Pendentes</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <Badge variant="secondary">+3 novos</Badge>
          </div>
          <div className="text-2xl mb-1">248</div>
          <p className="text-sm text-gray-600">Clientes Ativos</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3>Receita do Mês</h3>
              <p className="text-sm text-gray-600">Novembro 2025</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm rounded-lg bg-purple-100 text-purple-700">
                Semana
              </button>
              <button className="px-3 py-1 text-sm rounded-lg hover:bg-gray-100">
                Mês
              </button>
              <button className="px-3 py-1 text-sm rounded-lg hover:bg-gray-100">
                Ano
              </button>
            </div>
          </div>
          <div className="h-64 flex items-end gap-2">
            {[65, 45, 80, 55, 70, 85, 60, 75, 90, 70, 65, 80].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end">
                <div
                  className="bg-gradient-to-t from-pink-500 to-purple-600 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                  style={{ height: `${height}%` }}
                />
                <div className="text-xs text-gray-500 text-center mt-2">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Professional Ranking */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-purple-600" />
            <h3>Ranking de Profissionais</h3>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Carla Santos', revenue: 'R$ 4.500', percentage: 85 },
              { name: 'Júlia Oliveira', revenue: 'R$ 3.800', percentage: 70 },
              { name: 'Ana Costa', revenue: 'R$ 3.200', percentage: 60 },
              { name: 'Maria Silva', revenue: 'R$ 2.900', percentage: 55 },
            ].map((prof, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-sm">
                      {i + 1}º
                    </div>
                    <div>
                      <div className="text-sm">{prof.name}</div>
                      <div className="text-xs text-gray-500">{prof.revenue}</div>
                    </div>
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full"
                    style={{ width: `${prof.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Performed Services */}
        <Card className="p-6">
          <h3 className="mb-6">Serviços Mais Realizados</h3>
          <div className="space-y-4">
            {[
              { name: 'Manicure e Pedicure', count: 45, color: 'bg-pink-500' },
              { name: 'Corte de Cabelo', count: 32, color: 'bg-purple-500' },
              { name: 'Escova', count: 28, color: 'bg-blue-500' },
              { name: 'Design de Sobrancelhas', count: 24, color: 'bg-green-500' },
              { name: 'Coloração', count: 18, color: 'bg-orange-500' },
            ].map((service, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">{service.name}</span>
                    <span className="text-sm text-gray-600">{service.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${service.color} h-2 rounded-full`}
                      style={{ width: `${(service.count / 45) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Notifications */}
        <Card className="p-6">
          <h3 className="mb-6">Notificações do Sistema</h3>
          <div className="space-y-4">
            {[
              {
                type: 'warning',
                title: 'Pagamento pendente',
                message: 'Comissão de Carla Santos aguardando pagamento',
                time: 'Há 2 horas',
              },
              {
                type: 'info',
                title: 'Novo agendamento',
                message: 'Cliente Beatriz Silva agendou para amanhã às 14h',
                time: 'Há 3 horas',
              },
              {
                type: 'success',
                title: 'Pagamento confirmado',
                message: 'Comissão de Ana Costa foi paga',
                time: 'Há 5 horas',
              },
              {
                type: 'warning',
                title: 'Estoque baixo',
                message: 'Produto "Esmalte Vermelho" está acabando',
                time: 'Ontem',
              },
            ].map((notif, i) => (
              <div key={i} className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    notif.type === 'warning'
                      ? 'bg-orange-100'
                      : notif.type === 'success'
                      ? 'bg-green-100'
                      : 'bg-blue-100'
                  }`}
                >
                  <AlertCircle
                    className={`w-5 h-5 ${
                      notif.type === 'warning'
                        ? 'text-orange-600'
                        : notif.type === 'success'
                        ? 'text-green-600'
                        : 'text-blue-600'
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm mb-1">{notif.title}</p>
                    <span className="text-xs text-gray-500 flex-shrink-0">{notif.time}</span>
                  </div>
                  <p className="text-xs text-gray-600">{notif.message}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

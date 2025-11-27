import { Calendar, Clock, Plus, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function ReceptionistDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Bem-vinda, Ana!</h1>
          <p className="text-gray-600">Quinta-feira, 13 de Novembro de 2025</p>
        </div>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2">
          <Plus className="w-4 h-4" />
          Novo Agendamento
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <Badge className="bg-blue-50 text-blue-700">Hoje</Badge>
          </div>
          <div className="text-2xl mb-1">15</div>
          <p className="text-sm text-gray-600">Agendamentos do Dia</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
            <Badge className="bg-orange-50 text-orange-700">Atenção</Badge>
          </div>
          <div className="text-2xl mb-1">3</div>
          <p className="text-sm text-gray-600">Pendentes de Confirmação</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <Badge className="bg-green-50 text-green-700">Concluídos</Badge>
          </div>
          <div className="text-2xl mb-1">8</div>
          <p className="text-sm text-gray-600">Atendimentos Finalizados</p>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-600" />
            <h3>Agenda de Hoje</h3>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm rounded-lg hover:bg-gray-100">
              Ver Semana
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {[
            {
              time: '09:00',
              client: 'Maria Silva',
              service: 'Manicure',
              professional: 'Carla Santos',
              status: 'completed',
            },
            {
              time: '09:30',
              client: 'Ana Paula',
              service: 'Corte de Cabelo',
              professional: 'Júlia Oliveira',
              status: 'completed',
            },
            {
              time: '10:00',
              client: 'Beatriz Costa',
              service: 'Escova',
              professional: 'Carla Santos',
              status: 'in-progress',
            },
            {
              time: '11:00',
              client: 'Juliana Souza',
              service: 'Design de Sobrancelhas',
              professional: 'Ana Costa',
              status: 'confirmed',
            },
            {
              time: '11:30',
              client: 'Fernanda Lima',
              service: 'Pedicure',
              professional: 'Carla Santos',
              status: 'pending',
            },
            {
              time: '14:00',
              client: 'Patrícia Rocha',
              service: 'Coloração',
              professional: 'Júlia Oliveira',
              status: 'confirmed',
            },
            {
              time: '15:00',
              client: 'Camila Santos',
              service: 'Manicure e Pedicure',
              professional: 'Carla Santos',
              status: 'confirmed',
            },
            {
              time: '16:00',
              client: 'Rodrigo Silva',
              service: 'Corte Masculino',
              professional: 'Ana Costa',
              status: 'pending',
            },
          ].map((appointment, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-4 rounded-lg border-l-4 ${
                appointment.status === 'completed'
                  ? 'bg-gray-50 border-gray-300'
                  : appointment.status === 'in-progress'
                  ? 'bg-blue-50 border-blue-500'
                  : appointment.status === 'confirmed'
                  ? 'bg-green-50 border-green-500'
                  : 'bg-orange-50 border-orange-500'
              }`}
            >
              <div className="text-sm w-16 text-center">
                <Clock className="w-4 h-4 mx-auto mb-1 text-gray-600" />
                {appointment.time}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span>{appointment.client}</span>
                  <Badge
                    variant="secondary"
                    className={
                      appointment.status === 'completed'
                        ? 'bg-gray-200'
                        : appointment.status === 'in-progress'
                        ? 'bg-blue-200 text-blue-800'
                        : appointment.status === 'confirmed'
                        ? 'bg-green-200 text-green-800'
                        : 'bg-orange-200 text-orange-800'
                    }
                  >
                    {appointment.status === 'completed'
                      ? 'Concluído'
                      : appointment.status === 'in-progress'
                      ? 'Em Andamento'
                      : appointment.status === 'confirmed'
                      ? 'Confirmado'
                      : 'Pendente'}
                  </Badge>
                </div>
                <div className="text-sm text-gray-600">
                  {appointment.service} • {appointment.professional}
                </div>
              </div>
              {appointment.status === 'pending' && (
                <Button size="sm" variant="outline">
                  Confirmar
                </Button>
              )}
              {appointment.status === 'in-progress' && (
                <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600">
                  Finalizar
                </Button>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-purple-600" />
            <h3>Ações Rápidas</h3>
          </div>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Plus className="w-4 h-4" />
              Novo Cliente
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Calendar className="w-4 h-4" />
              Ver Agenda Completa
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Users className="w-4 h-4" />
              Lista de Clientes
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <h3>Lembretes</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-sm mb-1">Confirmações pendentes</p>
              <p className="text-xs text-gray-600">
                3 clientes aguardando confirmação para hoje
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm mb-1">Aniversariantes do mês</p>
              <p className="text-xs text-gray-600">
                12 clientes fazem aniversário este mês
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

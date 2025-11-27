import { ArrowLeft, Edit, X, DollarSign, User, Calendar, Clock, FileText } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface AppointmentDetailsProps {
  onNavigate: (route: string) => void;
  userRole: 'owner' | 'receptionist' | 'professional';
}

export function AppointmentDetails({ onNavigate, userRole }: AppointmentDetailsProps) {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => onNavigate('appointments-list')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <div className="flex-1">
          <h1 className="mb-1">Detalhes do Atendimento</h1>
          <p className="text-gray-600">Visualize informações completas</p>
        </div>
        {userRole !== 'professional' && (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => onNavigate('edit-appointment')}>
              <Edit className="w-4 h-4 mr-2" />
              Editar
            </Button>
            <Button variant="outline" size="sm" className="text-red-600 border-red-600">
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3>Informações do Atendimento</h3>
              <Badge className="bg-green-100 text-green-700">Concluído</Badge>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Cliente</p>
                  <p>Maria Silva</p>
                  <p className="text-sm text-gray-500">(11) 99999-1111</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Data e Horário</p>
                  <p>13 de Novembro de 2025</p>
                  <p className="text-sm text-gray-500">09:00 - 10:00 (1h)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Serviço</p>
                  <p>Manicure</p>
                  <p className="text-sm text-gray-500">Duração: 1 hora</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Profissional</p>
                  <p>Carla Santos</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Valor</p>
                  <p>R$ 50,00</p>
                  <p className="text-sm text-gray-500">Comissão: R$ 35,00 (70%)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t">
            <h4 className="mb-4">Histórico de Alterações</h4>
            <div className="space-y-3">
              {[
                { date: '13/11/2025 10:05', user: 'Ana Costa', action: 'Atendimento concluído' },
                { date: '13/11/2025 09:00', user: 'Ana Costa', action: 'Atendimento iniciado' },
                { date: '12/11/2025 15:30', user: 'Ana Costa', action: 'Agendamento confirmado' },
                { date: '12/11/2025 14:00', user: 'Ana Costa', action: 'Agendamento criado' },
              ].map((log, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-600">{log.date}</p>
                    <p>{log.action} por {log.user}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Status do Pagamento</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Valor Total:</span>
                <span>R$ 50,00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Comissão:</span>
                <span>R$ 35,00</span>
              </div>
              <div className="flex justify-between text-sm border-t pt-2">
                <span className="text-gray-600">Salão:</span>
                <span>R$ 15,00</span>
              </div>
              <div className="pt-3">
                <Badge className="w-full justify-center bg-green-100 text-green-700">
                  Pagamento Concluído
                </Badge>
              </div>
            </div>
          </Card>

          {userRole === 'owner' && (
            <Card className="p-6">
              <h3 className="mb-4">Ações Administrativas</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Corrigir Valor
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-red-600 border-red-600">
                  <X className="w-4 h-4 mr-2" />
                  Cancelar Atendimento
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                ⚠️ Alterações requerem justificativa e ficam registradas no histórico
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

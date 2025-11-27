import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Plus, List, Grid } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface ScheduleViewProps {
  onNavigate: (route: string) => void;
  userRole: 'owner' | 'receptionist' | 'professional';
}

export function ScheduleView({ onNavigate, userRole }: ScheduleViewProps) {
  const [viewMode, setViewMode] = useState<'day' | 'week'>('day');
  const [currentDate] = useState(new Date());

  const timeSlots = Array.from({ length: 11 }, (_, i) => `${8 + i}:00`);
  
  const professionals = userRole === 'professional' 
    ? ['Carla Santos']
    : ['Carla Santos', 'Júlia Oliveira', 'Ana Costa'];

  const appointments = [
    { time: '09:00', duration: 1, professional: 'Carla Santos', client: 'Maria Silva', service: 'Manicure', status: 'completed' },
    { time: '10:00', duration: 1.5, professional: 'Carla Santos', client: 'Beatriz Costa', service: 'Escova', status: 'in-progress' },
    { time: '11:30', duration: 1, professional: 'Carla Santos', client: 'Fernanda Lima', service: 'Pedicure', status: 'confirmed' },
    { time: '09:30', duration: 2, professional: 'Júlia Oliveira', client: 'Ana Paula', service: 'Coloração', status: 'confirmed' },
    { time: '14:00', duration: 1.5, professional: 'Júlia Oliveira', client: 'Patrícia Rocha', service: 'Corte', status: 'pending' },
    { time: '11:00', duration: 0.5, professional: 'Ana Costa', client: 'Juliana Souza', service: 'Sobrancelhas', status: 'confirmed' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="mb-2">Agenda</h1>
          <p className="text-gray-600">Gerencie os agendamentos do salão</p>
        </div>
        <Button 
          className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2"
          onClick={() => onNavigate('create-appointment')}
        >
          <Plus className="w-4 h-4" />
          Novo Agendamento
        </Button>
      </div>

      {/* Controls */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Date Navigation */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2 min-w-[200px] justify-center">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-sm">
                Quinta-feira, 13 de Novembro de 2025
              </span>
            </div>
            <Button variant="outline" size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'day' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('day')}
              className="gap-2"
            >
              <List className="w-4 h-4" />
              Dia
            </Button>
            <Button
              variant={viewMode === 'week' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('week')}
              className="gap-2"
            >
              <Grid className="w-4 h-4" />
              Semana
            </Button>
          </div>
        </div>
      </Card>

      {/* Schedule Grid */}
      {viewMode === 'day' && (
        <Card className="p-6 overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-[100px_repeat(3,1fr)] gap-4">
              {/* Header */}
              <div></div>
              {professionals.map((prof) => (
                <div key={prof} className="text-center p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
                  <div className="font-medium">{prof}</div>
                  <div className="text-xs text-gray-600 mt-1">
                    {appointments.filter(a => a.professional === prof).length} agendamentos
                  </div>
                </div>
              ))}

              {/* Time Slots */}
              {timeSlots.map((time) => (
                <>
                  <div key={time} className="text-sm text-gray-600 py-4 text-right pr-2">
                    {time}
                  </div>
                  {professionals.map((prof) => {
                    const apt = appointments.find(
                      a => a.time === time && a.professional === prof
                    );
                    
                    return (
                      <div
                        key={`${time}-${prof}`}
                        className="min-h-[80px] border-2 border-dashed border-gray-200 rounded-lg p-2 hover:border-purple-300 cursor-pointer transition-colors"
                      >
                        {apt && (
                          <div
                            className={`p-3 rounded-lg h-full ${
                              apt.status === 'completed'
                                ? 'bg-gray-100 border border-gray-300'
                                : apt.status === 'in-progress'
                                ? 'bg-blue-100 border border-blue-300'
                                : apt.status === 'confirmed'
                                ? 'bg-green-100 border border-green-300'
                                : 'bg-orange-100 border border-orange-300'
                            }`}
                            style={{ minHeight: `${apt.duration * 80}px` }}
                          >
                            <div className="text-sm mb-1">{apt.client}</div>
                            <div className="text-xs text-gray-700 mb-2">{apt.service}</div>
                            <Badge
                              variant="secondary"
                              className={
                                apt.status === 'completed'
                                  ? 'bg-gray-200 text-gray-700'
                                  : apt.status === 'in-progress'
                                  ? 'bg-blue-200 text-blue-800'
                                  : apt.status === 'confirmed'
                                  ? 'bg-green-200 text-green-800'
                                  : 'bg-orange-200 text-orange-800'
                              }
                            >
                              {apt.status === 'completed'
                                ? 'Concluído'
                                : apt.status === 'in-progress'
                                ? 'Em Andamento'
                                : apt.status === 'confirmed'
                                ? 'Confirmado'
                                : 'Pendente'}
                            </Badge>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </>
              ))}
            </div>
          </div>
        </Card>
      )}

      {/* Week View */}
      {viewMode === 'week' && (
        <Card className="p-6 overflow-x-auto">
          <div className="min-w-[1000px]">
            <div className="grid grid-cols-8 gap-2">
              <div></div>
              {['Dom 10', 'Seg 11', 'Ter 12', 'Qua 13', 'Qui 14', 'Sex 15', 'Sáb 16'].map((day) => (
                <div key={day} className="text-center p-3 bg-gray-100 rounded-lg">
                  <div className="text-sm">{day}</div>
                </div>
              ))}
              
              {professionals.map((prof) => (
                <>
                  <div key={prof} className="text-sm py-2 flex items-center">
                    {prof.split(' ')[0]}
                  </div>
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="min-h-[100px] border-2 border-dashed border-gray-200 rounded-lg p-2 hover:border-purple-300 cursor-pointer transition-colors"
                    >
                      {i === 3 && (
                        <div className="space-y-1">
                          <div className="text-xs bg-green-100 border border-green-300 rounded p-1">
                            09:00 • Maria Silva
                          </div>
                          <div className="text-xs bg-blue-100 border border-blue-300 rounded p-1">
                            10:00 • Beatriz Costa
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>
        </Card>
      )}

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <span className="text-gray-600">Status:</span>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-200 border border-gray-300"></div>
          <span>Concluído</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-200 border border-blue-300"></div>
          <span>Em Andamento</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-200 border border-green-300"></div>
          <span>Confirmado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-orange-200 border border-orange-300"></div>
          <span>Pendente</span>
        </div>
      </div>
    </div>
  );
}

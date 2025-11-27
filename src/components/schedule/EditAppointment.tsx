import { ArrowLeft, Save, Trash2 } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface EditAppointmentProps {
  onNavigate: (route: string) => void;
}

export function EditAppointment({ onNavigate }: EditAppointmentProps) {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => onNavigate('schedule')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <div>
          <h1 className="mb-1">Editar Agendamento</h1>
          <p className="text-gray-600">Modifique as informações do atendimento</p>
        </div>
      </div>

      <Card className="p-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="client">Cliente *</Label>
            <select id="client" className="w-full border border-gray-300 rounded-lg p-2">
              <option>Maria Silva - (11) 99999-1111</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Serviço *</Label>
            <select id="service" className="w-full border border-gray-300 rounded-lg p-2">
              <option>Manicure - R$ 50,00 (1h)</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="professional">Profissional *</Label>
            <select id="professional" className="w-full border border-gray-300 rounded-lg p-2">
              <option>Carla Santos</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Data *</Label>
              <Input id="date" type="date" defaultValue="2025-11-13" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Horário *</Label>
              <Input id="time" type="time" defaultValue="09:00" />
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button type="button" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 gap-2">
              <Trash2 className="w-4 h-4" />
              Cancelar Agendamento
            </Button>
            <Button type="submit" className="ml-auto bg-gradient-to-r from-pink-500 to-purple-600 gap-2">
              <Save className="w-4 h-4" />
              Salvar Alterações
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

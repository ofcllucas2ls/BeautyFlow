import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Scissors, FileText, Save } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

interface CreateAppointmentProps {
  onNavigate: (route: string) => void;
}

export function CreateAppointment({ onNavigate }: CreateAppointmentProps) {
  const [formData, setFormData] = useState({
    client: '',
    service: '',
    professional: '',
    date: '',
    time: '',
    notes: '',
  });

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => onNavigate('schedule')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <div>
          <h1 className="mb-1">Novo Agendamento</h1>
          <p className="text-gray-600">Preencha as informações do atendimento</p>
        </div>
      </div>

      <Card className="p-6">
        <form className="space-y-6">
          {/* Client Selection */}
          <div className="space-y-2">
            <Label htmlFor="client" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Cliente *
            </Label>
            <select
              id="client"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={formData.client}
              onChange={(e) => setFormData({ ...formData, client: e.target.value })}
              required
            >
              <option value="">Selecione um cliente</option>
              <option value="1">Maria Silva - (11) 99999-1111</option>
              <option value="2">Ana Paula - (11) 99999-2222</option>
              <option value="3">Beatriz Costa - (11) 99999-3333</option>
              <option value="4">Juliana Souza - (11) 99999-4444</option>
            </select>
            <p className="text-xs text-gray-500">
              Cliente não encontrado? <button type="button" className="text-purple-600 hover:underline">Cadastrar novo cliente</button>
            </p>
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <Label htmlFor="service" className="flex items-center gap-2">
              <Scissors className="w-4 h-4" />
              Serviço *
            </Label>
            <select
              id="service"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              required
            >
              <option value="">Selecione um serviço</option>
              <option value="1">Manicure - R$ 50,00 (1h)</option>
              <option value="2">Pedicure - R$ 60,00 (1h)</option>
              <option value="3">Manicure e Pedicure - R$ 90,00 (1h 30min)</option>
              <option value="4">Corte de Cabelo - R$ 80,00 (1h)</option>
              <option value="5">Escova - R$ 80,00 (1h 30min)</option>
              <option value="6">Coloração - R$ 180,00 (2h 30min)</option>
              <option value="7">Design de Sobrancelhas - R$ 60,00 (30min)</option>
            </select>
          </div>

          {/* Professional Selection */}
          <div className="space-y-2">
            <Label htmlFor="professional" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profissional *
            </Label>
            <select
              id="professional"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={formData.professional}
              onChange={(e) => setFormData({ ...formData, professional: e.target.value })}
              required
            >
              <option value="">Selecione um profissional</option>
              <option value="1">Carla Santos (Disponível)</option>
              <option value="2">Júlia Oliveira (Disponível)</option>
              <option value="3">Ana Costa (Disponível)</option>
            </select>
            <p className="text-xs text-gray-500">
              Profissionais disponíveis para o serviço selecionado
            </p>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Data *
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Horário *
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Available Time Slots */}
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm mb-3">Horários disponíveis:</p>
            <div className="flex flex-wrap gap-2">
              {['09:00', '09:30', '10:00', '10:30', '11:00', '14:00', '14:30', '15:00', '16:00'].map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setFormData({ ...formData, time })}
                  className={`px-4 py-2 rounded-lg text-sm border transition-colors ${
                    formData.time === time
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-white border-gray-300 hover:border-purple-400'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Observações (Opcional)
            </Label>
            <Textarea
              id="notes"
              placeholder="Adicione informações adicionais sobre o agendamento..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={4}
            />
          </div>

          {/* Summary */}
          {formData.service && formData.professional && formData.date && formData.time && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm mb-2">Resumo do Agendamento:</p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Cliente: {formData.client ? 'Maria Silva' : '-'}</li>
                <li>• Serviço: Manicure (R$ 50,00)</li>
                <li>• Profissional: Carla Santos</li>
                <li>• Data/Hora: {formData.date} às {formData.time}</li>
                <li>• Duração estimada: 1h</li>
              </ul>
            </div>
          )}

          {/* Required Fields Warning */}
          {(!formData.client || !formData.service || !formData.professional || !formData.date || !formData.time) && (
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-sm text-orange-700">
                ⚠️ Faltam dados obrigatórios. Preencha todos os campos marcados com *
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => onNavigate('schedule')}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2"
              disabled={!formData.client || !formData.service || !formData.professional || !formData.date || !formData.time}
            >
              <Save className="w-4 h-4" />
              Confirmar Agendamento
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

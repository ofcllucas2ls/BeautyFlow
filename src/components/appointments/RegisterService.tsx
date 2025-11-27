import { ArrowLeft, Save, Check } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface RegisterServiceProps {
  onNavigate: (route: string) => void;
}

export function RegisterService({ onNavigate }: RegisterServiceProps) {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => onNavigate('appointments-list')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <div>
          <h1 className="mb-1">Registrar Atendimento</h1>
          <p className="text-gray-600">Finalize e registre o atendimento realizado</p>
        </div>
      </div>

      <Card className="p-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="client">Cliente *</Label>
            <select id="client" className="w-full border border-gray-300 rounded-lg p-2">
              <option value="">Selecione um cliente</option>
              <option value="1">Maria Silva</option>
              <option value="2">Beatriz Costa</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Serviço *</Label>
            <select id="service" className="w-full border border-gray-300 rounded-lg p-2">
              <option value="">Selecione um serviço</option>
              <option value="1">Manicure - R$ 50,00</option>
              <option value="2">Pedicure - R$ 60,00</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="value">Valor do Serviço *</Label>
            <Input id="value" type="text" defaultValue="R$ 50,00" />
            <p className="text-xs text-gray-500">Valor padrão do serviço selecionado</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="professional">Profissional *</Label>
            <select id="professional" className="w-full border border-gray-300 rounded-lg p-2">
              <option value="1">Carla Santos</option>
            </select>
          </div>

          {/* Commission Info */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-sm mb-2">Comissão do Profissional</h4>
            <div className="text-sm space-y-1 text-gray-700">
              <div className="flex justify-between">
                <span>Valor do Serviço:</span>
                <span>R$ 50,00</span>
              </div>
              <div className="flex justify-between">
                <span>Taxa de Comissão (70%):</span>
                <span className="text-green-600">R$ 35,00</span>
              </div>
              <div className="flex justify-between border-t pt-1">
                <span>Salão recebe:</span>
                <span>R$ 15,00</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => onNavigate('appointments-list')}>
              Cancelar
            </Button>
            <Button type="submit" className="ml-auto bg-gradient-to-r from-pink-500 to-purple-600 gap-2">
              <Check className="w-4 h-4" />
              Concluir Atendimento
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

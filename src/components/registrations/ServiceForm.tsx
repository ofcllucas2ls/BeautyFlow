import { ArrowLeft, Save, Scissors, DollarSign, Clock, Tag } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface ServiceFormProps {
  onNavigate: (route: string) => void;
}

export function ServiceForm({ onNavigate }: ServiceFormProps) {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => onNavigate('services')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <div>
          <h1 className="mb-1">Novo Serviço</h1>
          <p className="text-gray-600">Cadastre um novo serviço</p>
        </div>
      </div>

      <Card className="p-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <Scissors className="w-4 h-4" />
              Nome do Serviço *
            </Label>
            <Input id="name" placeholder="Ex: Manicure" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Categoria *
            </Label>
            <select id="category" className="w-full border border-gray-300 rounded-lg p-2" required>
              <option value="">Selecione uma categoria</option>
              <option>Unhas</option>
              <option>Cabelo</option>
              <option>Sobrancelhas</option>
              <option>Maquiagem</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price" className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Preço Base *
              </Label>
              <Input id="price" type="number" placeholder="50.00" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Duração (minutos) *
              </Label>
              <Input id="duration" type="number" placeholder="60" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="commission">Comissão Padrão (%)</Label>
            <Input id="commission" type="number" placeholder="70" defaultValue="70" />
            <p className="text-xs text-gray-500">
              Deixe em branco para usar a comissão padrão do profissional
            </p>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-sm mb-2">Exemplo de Cálculo</h4>
            <div className="text-sm space-y-1 text-gray-700">
              <div className="flex justify-between">
                <span>Valor do Serviço:</span>
                <span>R$ 50,00</span>
              </div>
              <div className="flex justify-between">
                <span>Comissão (70%):</span>
                <span className="text-green-600">R$ 35,00</span>
              </div>
              <div className="flex justify-between border-t pt-1">
                <span>Salão recebe:</span>
                <span>R$ 15,00</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => onNavigate('services')}>
              Cancelar
            </Button>
            <Button type="submit" className="ml-auto bg-gradient-to-r from-pink-500 to-purple-600 gap-2">
              <Save className="w-4 h-4" />
              Salvar Serviço
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

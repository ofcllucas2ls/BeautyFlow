import { ArrowLeft, Save, User, Phone, Mail, DollarSign, Award } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface ProfessionalFormProps {
  onNavigate: (route: string) => void;
}

export function ProfessionalForm({ onNavigate }: ProfessionalFormProps) {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => onNavigate('professionals')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <div>
          <h1 className="mb-1">Novo Profissional</h1>
          <p className="text-gray-600">Cadastre um novo membro da equipe</p>
        </div>
      </div>

      <Card className="p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Nome Completo *
              </Label>
              <Input id="name" placeholder="Nome do profissional" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Telefone *
              </Label>
              <Input id="phone" type="tel" placeholder="(11) 99999-9999" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                E-mail *
              </Label>
              <Input id="email" type="email" placeholder="email@exemplo.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="commission" className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Comissão Padrão (%) *
              </Label>
              <Input id="commission" type="number" placeholder="70" required />
              <p className="text-xs text-gray-500">Porcentagem que o profissional recebe por serviço</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialty" className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Especialidade
              </Label>
              <select id="specialty" className="w-full border border-gray-300 rounded-lg p-2">
                <option value="">Selecione...</option>
                <option>Manicure e Pedicure</option>
                <option>Cabelo</option>
                <option>Sobrancelhas</option>
                <option>Maquiagem</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Serviços que realiza</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Manicure', 'Pedicure', 'Corte', 'Escova', 'Coloração', 'Sobrancelhas'].map((service) => (
                <label key={service} className="flex items-center gap-2 p-2 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input type="checkbox" />
                  <span className="text-sm">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => onNavigate('professionals')}>
              Cancelar
            </Button>
            <Button type="submit" className="ml-auto bg-gradient-to-r from-pink-500 to-purple-600 gap-2">
              <Save className="w-4 h-4" />
              Salvar Profissional
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

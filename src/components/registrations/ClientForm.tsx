import { ArrowLeft, Save, User, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface ClientFormProps {
  onNavigate: (route: string) => void;
}

export function ClientForm({ onNavigate }: ClientFormProps) {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => onNavigate('clients')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <div>
          <h1 className="mb-1">Novo Cliente</h1>
          <p className="text-gray-600">Cadastre um novo cliente</p>
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
              <Input id="name" placeholder="Nome do cliente" required />
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
                E-mail
              </Label>
              <Input id="email" type="email" placeholder="email@exemplo.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthdate" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Data de Nascimento
              </Label>
              <Input id="birthdate" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" placeholder="000.000.000-00" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Endereço
              </Label>
              <Input id="address" placeholder="Rua, número, bairro" />
            </div>
          </div>

          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm text-gray-700">
              ℹ️ Os dados marcados com * são obrigatórios
            </p>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => onNavigate('clients')}>
              Cancelar
            </Button>
            <Button type="submit" className="ml-auto bg-gradient-to-r from-pink-500 to-purple-600 gap-2">
              <Save className="w-4 h-4" />
              Salvar Cliente
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

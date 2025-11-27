import { Save, User, Phone, Mail, Building2 } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function ProfessionalSettings() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div><h1 className="mb-2">Meu Perfil</h1><p className="text-gray-600">Gerencie suas informações pessoais</p></div>
      
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6"><User className="w-5 h-5 text-purple-600" /><h3>Informações Pessoais</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 md:col-span-2"><Label htmlFor="name">Nome Completo</Label><Input id="name" defaultValue="Carla Santos" /></div>
          <div className="space-y-2"><Label htmlFor="phone"><Phone className="w-4 h-4 inline mr-1" />Telefone</Label><Input id="phone" defaultValue="(11) 99999-1111" /></div>
          <div className="space-y-2"><Label htmlFor="email"><Mail className="w-4 h-4 inline mr-1" />E-mail</Label><Input id="email" defaultValue="carla@email.com" /></div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6"><Building2 className="w-5 h-5 text-purple-600" /><h3>Especialidades</h3></div>
        <div className="space-y-2">
          <Label>Serviços que realizo</Label>
          <div className="grid grid-cols-2 gap-3">
            {['Manicure', 'Pedicure', 'Corte', 'Escova', 'Coloração', 'Sobrancelhas'].map((service, i) => (
              <label key={service} className="flex items-center gap-2 p-2 border rounded-lg"><input type="checkbox" defaultChecked={i < 2} /><span className="text-sm">{service}</span></label>
            ))}
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4">Dados Bancários</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2"><Label>Banco</Label><Input placeholder="Nome do banco" /></div>
          <div className="space-y-2"><Label>Agência</Label><Input placeholder="0000" /></div>
          <div className="space-y-2"><Label>Conta</Label><Input placeholder="00000-0" /></div>
          <div className="space-y-2"><Label>Tipo</Label><select className="w-full border border-gray-300 rounded-lg p-2"><option>Corrente</option><option>Poupança</option></select></div>
        </div>
        <p className="text-xs text-gray-500 mt-3">Informações para recebimento de comissões</p>
      </Card>

      <div className="flex gap-3 pt-4">
        <Button className="ml-auto bg-gradient-to-r from-pink-500 to-purple-600 gap-2"><Save className="w-4 h-4" />Salvar Alterações</Button>
      </div>
    </div>
  );
}

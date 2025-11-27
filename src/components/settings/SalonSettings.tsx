import { Save, Building, Clock, DollarSign, Users } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function SalonSettings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div><h1 className="mb-2">Configurações do Salão</h1><p className="text-gray-600">Gerencie as informações e configurações do estabelecimento</p></div>
      
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6"><Building className="w-5 h-5 text-purple-600" /><h3>Informações do Salão</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 md:col-span-2"><Label htmlFor="salonName">Nome do Salão</Label><Input id="salonName" defaultValue="Salão Beleza Pura" /></div>
          <div className="space-y-2"><Label htmlFor="phone">Telefone</Label><Input id="phone" defaultValue="(11) 99999-9999" /></div>
          <div className="space-y-2"><Label htmlFor="email">E-mail</Label><Input id="email" defaultValue="contato@salaobelezapura.com.br" /></div>
          <div className="space-y-2 md:col-span-2"><Label htmlFor="address">Endereço</Label><Input id="address" defaultValue="Rua das Flores, 123 - Centro" /></div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6"><Clock className="w-5 h-5 text-purple-600" /><h3>Horário de Funcionamento</h3></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2"><Label>Abertura</Label><Input type="time" defaultValue="09:00" /></div>
          <div className="space-y-2"><Label>Fechamento</Label><Input type="time" defaultValue="18:00" /></div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6"><DollarSign className="w-5 h-5 text-purple-600" /><h3>Comissões e Taxas</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2"><Label>Comissão Padrão (%)</Label><Input type="number" defaultValue="70" /><p className="text-xs text-gray-500">Porcentagem padrão para novos profissionais</p></div>
          <div className="space-y-2"><Label>Taxa de Serviço (%)</Label><Input type="number" defaultValue="0" /><p className="text-xs text-gray-500">Taxa adicional cobrada do cliente</p></div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6"><Users className="w-5 h-5 text-purple-600" /><h3>Permissões de Usuário</h3></div>
        <div className="space-y-3">
          {['Recepcionistas podem editar valores', 'Profissionais visualizam apenas suas comissões', 'Permitir cancelamento de agendamentos'].map((perm, i) => (
            <label key={i} className="flex items-center gap-2"><input type="checkbox" defaultChecked /><span className="text-sm">{perm}</span></label>
          ))}
        </div>
      </Card>

      <div className="flex gap-3 pt-4">
        <Button className="ml-auto bg-gradient-to-r from-pink-500 to-purple-600 gap-2"><Save className="w-4 h-4" />Salvar Alterações</Button>
      </div>
    </div>
  );
}
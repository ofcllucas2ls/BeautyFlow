import { Save, Moon, Bell, Globe } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

export function Preferences() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div><h1 className="mb-2">Preferências</h1><p className="text-gray-600">Personalize sua experiência no sistema</p></div>
      
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6"><Moon className="w-5 h-5 text-purple-600" /><h3>Aparência</h3></div>
        <div className="space-y-3">
          <label className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <span>Tema Claro</span>
            <input type="radio" name="theme" defaultChecked />
          </label>
          <label className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <span>Tema Escuro</span>
            <input type="radio" name="theme" />
          </label>
          <label className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <span>Automático (Sistema)</span>
            <input type="radio" name="theme" />
          </label>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6"><Bell className="w-5 h-5 text-purple-600" /><h3>Notificações</h3></div>
        <div className="space-y-3">
          {['Novos agendamentos', 'Cancelamentos', 'Lembretes de atendimentos', 'Pagamentos de comissões', 'Aniversários de clientes'].map((notif) => (
            <label key={notif} className="flex items-center gap-2"><input type="checkbox" defaultChecked /><span className="text-sm">{notif}</span></label>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6"><Globe className="w-5 h-5 text-purple-600" /><h3>Idioma e Região</h3></div>
        <div className="space-y-2">
          <label className="text-sm">Idioma</label>
          <select className="w-full border border-gray-300 rounded-lg p-2">
            <option>Português (Brasil)</option>
            <option>English</option>
            <option>Español</option>
          </select>
        </div>
      </Card>

      <div className="flex gap-3 pt-4">
        <Button className="ml-auto bg-gradient-to-r from-pink-500 to-purple-600 gap-2"><Save className="w-4 h-4" />Salvar Preferências</Button>
      </div>
    </div>
  );
}

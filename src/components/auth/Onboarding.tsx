import { useState } from 'react';
import { Scissors, ChevronRight, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card } from '../ui/card';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const [salonName, setSalonName] = useState('');
  const [openTime, setOpenTime] = useState('09:00');
  const [closeTime, setCloseTime] = useState('18:00');

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 mb-4">
            <Scissors className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl mb-2">Bem-vinda ao BeautyFlow!</h1>
          <p className="text-gray-600">Vamos configurar seu salão em 3 passos simples</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  s <= step
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {s < step ? <Check className="w-4 h-4" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 h-1 mx-2 ${
                    s < step ? 'bg-purple-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Salon Name */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl mb-2">Informações do Salão</h2>
              <p className="text-gray-600">Como podemos chamar seu salão?</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="salonName">Nome do Salão *</Label>
              <Input
                id="salonName"
                placeholder="Ex: Salão Beleza Pura"
                value={salonName}
                onChange={(e) => setSalonName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Endereço (Opcional)</Label>
              <Input
                id="address"
                placeholder="Rua, número, bairro"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone (Opcional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>
        )}

        {/* Step 2: Hours */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl mb-2">Horário de Funcionamento</h2>
              <p className="text-gray-600">Defina o horário padrão do seu salão</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="openTime">Abertura *</Label>
                <Input
                  id="openTime"
                  type="time"
                  value={openTime}
                  onChange={(e) => setOpenTime(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="closeTime">Fechamento *</Label>
                <Input
                  id="closeTime"
                  type="time"
                  value={closeTime}
                  onChange={(e) => setCloseTime(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Dias de Funcionamento</Label>
              <div className="grid grid-cols-7 gap-2">
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                  <button
                    key={day}
                    type="button"
                    className="px-3 py-2 border rounded-lg hover:bg-gray-100"
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Complete */}
        {step === 3 && (
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl mb-2">Tudo Pronto!</h2>
              <p className="text-gray-600">
                Seu salão <strong>{salonName}</strong> está configurado. 
                Agora você pode começar a agendar atendimentos!
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-sm text-left">
              <p className="mb-2">✨ <strong>Próximos passos sugeridos:</strong></p>
              <ul className="space-y-1 text-gray-700">
                <li>• Cadastre seus profissionais</li>
                <li>• Configure os serviços oferecidos</li>
                <li>• Adicione seus primeiros clientes</li>
                <li>• Comece a agendar!</li>
              </ul>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          {step > 1 && step < 3 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              Voltar
            </Button>
          )}
          <Button
            onClick={handleNext}
            className="ml-auto bg-gradient-to-r from-pink-500 to-purple-600"
            disabled={step === 1 && !salonName}
          >
            {step === 3 ? 'Começar a Usar' : 'Continuar'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
}

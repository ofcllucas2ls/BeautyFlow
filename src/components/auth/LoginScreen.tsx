import { useState } from 'react';
import { Scissors, Mail, Lock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card } from '../ui/card';

interface LoginScreenProps {
  onLogin: (role: 'owner' | 'receptionist' | 'professional') => void;
  onNavigate: (route: string) => void;
}

export function LoginScreen({ onLogin, onNavigate }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 mb-4">
            <Scissors className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl mb-2">BeautyFlow</h1>
          <p className="text-gray-600">Sistema de Gestão para Salões de Beleza</p>
        </div>

        {/* Login Form */}
        <form onSubmit={(e) => { e.preventDefault(); onLogin('owner'); }} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-600">Lembrar-me</span>
            </label>
            <button
              type="button"
              onClick={() => onNavigate('password-recovery')}
              className="text-purple-600 hover:underline"
            >
              Esqueceu a senha?
            </button>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600">
            Entrar
          </Button>
        </form>

        {/* Demo buttons */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center mb-4">
            Demo - Entrar como:
          </p>
          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => onLogin('owner')}
            >
              Proprietária
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => onLogin('receptionist')}
            >
              Recepcionista
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => onLogin('professional')}
            >
              Profissional
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

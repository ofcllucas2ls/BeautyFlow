import { useState } from 'react';
import { Volume2, VolumeX, Cloud, Waves, Trees, Wind } from 'lucide-react';
import { Card } from './ui/card';
import { Slider } from './ui/slider';

interface Sound {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

const sounds: Sound[] = [
  { id: 'rain', name: 'Rain', icon: <Cloud className="w-6 h-6" />, color: 'from-gray-400 to-blue-400' },
  { id: 'ocean', name: 'Ocean Waves', icon: <Waves className="w-6 h-6" />, color: 'from-blue-400 to-cyan-400' },
  { id: 'forest', name: 'Forest', icon: <Trees className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
  { id: 'wind', name: 'Wind', icon: <Wind className="w-6 h-6" />, color: 'from-slate-300 to-blue-300' },
];

export function NatureSounds() {
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const [volume, setVolume] = useState([70]);

  const toggleSound = (soundId: string) => {
    if (activeSound === soundId) {
      setActiveSound(null);
    } else {
      setActiveSound(soundId);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {activeSound ? (
            <Volume2 className="w-5 h-5 text-blue-500" />
          ) : (
            <VolumeX className="w-5 h-5 text-gray-400" />
          )}
          <span className="text-sm text-gray-600">
            {activeSound ? 'Playing' : 'Select a sound'}
          </span>
        </div>
        
        {activeSound && (
          <div className="flex items-center gap-3 w-32">
            <VolumeX className="w-4 h-4 text-gray-400" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="flex-1"
            />
            <Volume2 className="w-4 h-4 text-gray-600" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {sounds.map((sound) => (
          <Card
            key={sound.id}
            className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
              activeSound === sound.id
                ? 'ring-2 ring-blue-500 shadow-lg'
                : 'hover:ring-2 hover:ring-gray-300'
            }`}
            onClick={() => toggleSound(sound.id)}
          >
            <div className="flex flex-col items-center gap-3">
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${sound.color} flex items-center justify-center text-white shadow-md`}
              >
                {sound.icon}
              </div>
              <span className="text-center">{sound.name}</span>
              {activeSound === sound.id && (
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                  <div className="w-1 h-4 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                  <div className="w-1 h-4 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {activeSound && (
        <p className="text-xs text-center text-gray-500 italic">
          Note: Audio playback is simulated in this demo
        </p>
      )}
    </div>
  );
}

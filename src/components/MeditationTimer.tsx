import { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const presetTimes = [5, 10, 15, 20, 30];

export function MeditationTimer() {
  const [selectedTime, setSelectedTime] = useState(5);
  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handlePresetSelect = (minutes: number) => {
    setSelectedTime(minutes);
    setTimeLeft(minutes * 60);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(selectedTime * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((selectedTime * 60 - timeLeft) / (selectedTime * 60)) * 100;

  return (
    <Card className="p-6 space-y-6">
      <div className="flex items-center gap-2 text-gray-700">
        <Clock className="w-5 h-5" />
        <span>Meditation Timer</span>
      </div>

      <div className="flex justify-center gap-2">
        {presetTimes.map((minutes) => (
          <Button
            key={minutes}
            variant={selectedTime === minutes ? 'default' : 'outline'}
            size="sm"
            onClick={() => handlePresetSelect(minutes)}
            disabled={isRunning}
          >
            {minutes}m
          </Button>
        ))}
      </div>

      <div className="relative">
        <div className="text-center space-y-2">
          <div className="text-5xl tabular-nums">{formatTime(timeLeft)}</div>
          <div className="text-sm text-gray-500">
            {timeLeft === 0 ? 'Session complete!' : isRunning ? 'In progress...' : 'Ready to start'}
          </div>
        </div>
        
        {/* Progress ring */}
        <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
            transform="rotate(-90 50 50)"
            className="transition-all duration-1000"
          />
        </svg>
      </div>

      <div className="flex justify-center gap-2">
        <Button onClick={toggleTimer} size="lg" className="gap-2">
          {isRunning ? (
            <>
              <Pause className="w-4 h-4" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              Start
            </>
          )}
        </Button>
        <Button onClick={resetTimer} variant="outline" size="lg">
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}

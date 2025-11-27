import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';
import { Button } from './ui/button';

interface BreathingExerciseProps {
  isActive: boolean;
  onToggle: () => void;
}

export function BreathingExercise({ isActive, onToggle }: BreathingExerciseProps) {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'rest'>('inhale');
  const [count, setCount] = useState(4);

  useEffect(() => {
    if (!isActive) {
      setPhase('inhale');
      setCount(4);
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev > 1) return prev - 1;
        
        // Move to next phase
        setPhase((currentPhase) => {
          switch (currentPhase) {
            case 'inhale':
              setCount(4);
              return 'hold';
            case 'hold':
              setCount(4);
              return 'exhale';
            case 'exhale':
              setCount(4);
              return 'rest';
            case 'rest':
              setCount(4);
              return 'inhale';
            default:
              return 'inhale';
          }
        });
        
        return 4;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale':
        return 'Breathe In';
      case 'hold':
        return 'Hold';
      case 'exhale':
        return 'Breathe Out';
      case 'rest':
        return 'Rest';
    }
  };

  const getCircleScale = () => {
    switch (phase) {
      case 'inhale':
        return 1.5;
      case 'hold':
        return 1.5;
      case 'exhale':
        return 0.8;
      case 'rest':
        return 0.8;
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer glow circle */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-2xl"
          animate={{
            scale: isActive ? getCircleScale() : 1,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        />
        
        {/* Main breathing circle */}
        <motion.div
          className="relative w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl"
          animate={{
            scale: isActive ? getCircleScale() : 1,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        >
          <div className="text-center text-white">
            <div className="text-4xl mb-2">{count}</div>
            <div className="opacity-90">{getPhaseText()}</div>
          </div>
        </motion.div>
      </div>

      <Button
        onClick={onToggle}
        size="lg"
        className="gap-2"
        variant={isActive ? "secondary" : "default"}
      >
        {isActive ? (
          <>
            <Pause className="w-5 h-5" />
            Pause
          </>
        ) : (
          <>
            <Play className="w-5 h-5" />
            Start Breathing
          </>
        )}
      </Button>
    </div>
  );
}

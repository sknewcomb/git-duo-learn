import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Zap } from "lucide-react";

interface CelebrationModalProps {
  open: boolean;
  onClose: () => void;
  correctAnswers: number;
  totalQuestions: number;
  xpEarned: number;
}

export const CelebrationModal = ({ 
  open, 
  onClose, 
  correctAnswers, 
  totalQuestions,
  xpEarned 
}: CelebrationModalProps) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const isPerfect = correctAnswers === totalQuestions;

  useEffect(() => {
    if (open) {
      const audio = new Audio('/sounds/celebration.mp3');
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            {isPerfect ? '🎉 Perfect Score!' : '🎊 Great Job!'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-6 py-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center animate-pulse">
              <Trophy className="w-16 h-16 text-primary-foreground" />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-streak flex items-center justify-center animate-bounce">
              <Star className="w-6 h-6 text-streak-foreground fill-current" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-4xl font-bold">
              {correctAnswers}/{totalQuestions}
            </p>
            <p className="text-xl text-muted-foreground">
              {percentage}% Correct
            </p>
          </div>

          <div className="flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-bold text-lg">+{xpEarned} XP</span>
          </div>

          {isPerfect && (
            <p className="text-center text-muted-foreground px-6">
              Amazing! You got every question right! 🌟
            </p>
          )}
        </div>

        <Button onClick={onClose} size="lg" className="w-full">
          Continue Learning
        </Button>
      </DialogContent>
    </Dialog>
  );
};

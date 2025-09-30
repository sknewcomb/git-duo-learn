import { Card } from "@/components/ui/card";
import { Trophy, Target, Flame, TrendingUp } from "lucide-react";

interface StatsCardProps {
  totalXP: number;
  streak: number;
  correctAnswers: number;
  totalAnswered: number;
}

export const StatsCard = ({ totalXP, streak, correctAnswers, totalAnswered }: StatsCardProps) => {
  const accuracy = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;

  return (
    <div className="grid grid-cols-2 gap-3 w-full max-w-2xl mx-auto px-4">
      <Card className="p-4 flex items-center gap-3 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Trophy className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Total XP</p>
          <p className="text-xl font-bold">{totalXP}</p>
        </div>
      </Card>

      <Card className="p-4 flex items-center gap-3 bg-gradient-to-br from-streak/10 to-streak/5 border-streak/20">
        <div className="w-10 h-10 rounded-full bg-streak/20 flex items-center justify-center">
          <Flame className="w-5 h-5 text-streak" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Streak</p>
          <p className="text-xl font-bold">{streak}</p>
        </div>
      </Card>

      <Card className="p-4 flex items-center gap-3 bg-gradient-to-br from-success/10 to-success/5 border-success/20">
        <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
          <Target className="w-5 h-5 text-success" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Correct</p>
          <p className="text-xl font-bold">{correctAnswers}</p>
        </div>
      </Card>

      <Card className="p-4 flex items-center gap-3 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-accent" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Accuracy</p>
          <p className="text-xl font-bold">{accuracy}%</p>
        </div>
      </Card>
    </div>
  );
};

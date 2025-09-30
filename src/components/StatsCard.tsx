import { Card } from "@/components/ui/card";
import { Zap, Target, Flame, TrendingUp } from "lucide-react";

interface StatsCardProps {
  totalXP: number;
  streak: number;
  correctAnswers: number;
  totalAnswered: number;
}

export const StatsCard = ({ totalXP, streak, correctAnswers, totalAnswered }: StatsCardProps) => {
  const accuracy = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-in">
        <Card className="p-4 text-center space-y-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/95">
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">XP</p>
          </div>
          <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {totalXP}
          </p>
        </Card>

        <Card className="p-4 text-center space-y-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/95">
          <div className="flex items-center justify-center gap-2">
            <Flame className="w-5 h-5 text-streak" />
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Streak</p>
          </div>
          <p className="text-3xl font-bold text-streak">
            {streak}
          </p>
        </Card>

        <Card className="p-4 text-center space-y-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/95">
          <div className="flex items-center justify-center gap-2">
            <Target className="w-5 h-5 text-success" />
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Correct</p>
          </div>
          <p className="text-3xl font-bold text-success">
            {correctAnswers}
          </p>
        </Card>

        <Card className="p-4 text-center space-y-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/95">
          <div className="flex items-center justify-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Accuracy</p>
          </div>
          <p className="text-3xl font-bold text-primary">
            {accuracy}%
          </p>
        </Card>
      </div>
    </div>
  );
};

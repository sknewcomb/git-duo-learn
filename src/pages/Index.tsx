import { useState, useEffect } from "react";
import { QuizCard } from "@/components/QuizCard";
import { StatsCard } from "@/components/StatsCard";
import { CelebrationModal } from "@/components/CelebrationModal";
import { Button } from "@/components/ui/button";
import { questions } from "@/data/questions";
import { GithubIcon, RotateCcw } from "lucide-react";

const QUESTIONS_PER_SESSION = 10;

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sessionQuestions, setSessionQuestions] = useState<typeof questions>([]);
  const [totalXP, setTotalXP] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [sessionCorrect, setSessionCorrect] = useState(0);

  // Load saved progress
  useEffect(() => {
    const saved = localStorage.getItem('github-exam-progress');
    if (saved) {
      const data = JSON.parse(saved);
      setTotalXP(data.totalXP || 0);
      setStreak(data.streak || 0);
      setCorrectAnswers(data.correctAnswers || 0);
      setTotalAnswered(data.totalAnswered || 0);
    }
    startNewSession();
  }, []);

  // Save progress
  useEffect(() => {
    localStorage.setItem('github-exam-progress', JSON.stringify({
      totalXP,
      streak,
      correctAnswers,
      totalAnswered
    }));
  }, [totalXP, streak, correctAnswers, totalAnswered]);

  const startNewSession = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setSessionQuestions(shuffled.slice(0, QUESTIONS_PER_SESSION));
    setCurrentQuestionIndex(0);
    setSessionCorrect(0);
  };

  const handleAnswer = (correct: boolean) => {
    setTotalAnswered(prev => prev + 1);
    
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
      setSessionCorrect(prev => prev + 1);
      setTotalXP(prev => prev + 10);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }

    if (currentQuestionIndex < sessionQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Session complete
      setShowCelebration(true);
    }
  };

  const handleCloseCelebration = () => {
    setShowCelebration(false);
    startNewSession();
  };

  if (sessionQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b-2 border-border sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <GithubIcon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none">GitHub Exam</h1>
              <p className="text-xs text-muted-foreground">Foundation Prep</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={startNewSession}
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            New Set
          </Button>
        </div>
      </header>

      <div className="py-6 space-y-6">
        <StatsCard
          totalXP={totalXP}
          streak={streak}
          correctAnswers={correctAnswers}
          totalAnswered={totalAnswered}
        />

        <QuizCard
          question={sessionQuestions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={sessionQuestions.length}
          streak={streak}
        />
      </div>

      <CelebrationModal
        open={showCelebration}
        onClose={handleCloseCelebration}
        correctAnswers={sessionCorrect}
        totalQuestions={QUESTIONS_PER_SESSION}
        xpEarned={sessionCorrect * 10}
      />
    </div>
  );
};

export default Index;

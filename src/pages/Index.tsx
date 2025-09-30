import { useState, useEffect } from "react";
import { QuizCard } from "@/components/QuizCard";
import { StatsCard } from "@/components/StatsCard";
import { CelebrationModal } from "@/components/CelebrationModal";
import { TestResultsModal } from "@/components/TestResultsModal";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { questions } from "@/data/questions";
import { GithubIcon, RotateCcw, ClipboardCheck } from "lucide-react";

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
  const [testMode, setTestMode] = useState(false);
  const [testAnswers, setTestAnswers] = useState<(number | null)[]>([]);
  const [showTestResults, setShowTestResults] = useState(false);

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
    setTestAnswers(new Array(QUESTIONS_PER_SESSION).fill(null));
    setShowTestResults(false);
  };

  const handleAnswer = (answerIndex: number) => {
    if (testMode) {
      // In test mode, just record the answer
      const newAnswers = [...testAnswers];
      newAnswers[currentQuestionIndex] = answerIndex;
      setTestAnswers(newAnswers);
      
      if (currentQuestionIndex < sessionQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // Test complete - calculate results
        const correct = newAnswers.reduce((count, answer, idx) => {
          return count + (answer === sessionQuestions[idx].correctAnswer ? 1 : 0);
        }, 0);
        
        setTotalAnswered(prev => prev + sessionQuestions.length);
        setCorrectAnswers(prev => prev + correct);
        setTotalXP(prev => prev + (correct * 10));
        setShowTestResults(true);
      }
    } else {
      // Practice mode - immediate feedback
      const correct = answerIndex === sessionQuestions[currentQuestionIndex].correctAnswer;
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
        setShowCelebration(true);
      }
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
        <div className="max-w-2xl mx-auto px-4 py-4 space-y-3">
          <div className="flex items-center justify-between">
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
          
          <div className="flex items-center justify-center gap-3 pt-2 border-t border-border">
            <Label htmlFor="test-mode" className="flex items-center gap-2 cursor-pointer text-sm">
              <ClipboardCheck className="w-4 h-4" />
              <span className="font-medium">Test Mode</span>
            </Label>
            <Switch 
              id="test-mode"
              checked={testMode} 
              onCheckedChange={(checked) => {
                setTestMode(checked);
                startNewSession();
              }}
            />
            <span className="text-xs text-muted-foreground">
              {testMode ? '(No feedback until end)' : '(Instant feedback)'}
            </span>
          </div>
        </div>
      </header>

      <div className="py-6 space-y-6">
        {!testMode && (
          <StatsCard
            totalXP={totalXP}
            streak={streak}
            correctAnswers={correctAnswers}
            totalAnswered={totalAnswered}
          />
        )}

        <QuizCard
          question={sessionQuestions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={sessionQuestions.length}
          streak={streak}
          testMode={testMode}
        />
      </div>

      <CelebrationModal
        open={showCelebration}
        onClose={handleCloseCelebration}
        correctAnswers={sessionCorrect}
        totalQuestions={QUESTIONS_PER_SESSION}
        xpEarned={sessionCorrect * 10}
      />

      <TestResultsModal
        open={showTestResults}
        onClose={handleCloseCelebration}
        questions={sessionQuestions}
        userAnswers={testAnswers}
        xpEarned={testAnswers.reduce((sum, answer, idx) => 
          sum + (answer === sessionQuestions[idx]?.correctAnswer ? 10 : 0), 0
        )}
      />
    </div>
  );
};

export default Index;

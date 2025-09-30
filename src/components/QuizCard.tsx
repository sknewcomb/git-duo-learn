import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Question } from "@/data/questions";
import { CheckCircle2, XCircle, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizCardProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  currentQuestion: number;
  totalQuestions: number;
  streak: number;
  testMode?: boolean;
}

export const QuizCard = ({ 
  question, 
  onAnswer, 
  currentQuestion, 
  totalQuestions,
  streak,
  testMode = false
}: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number>(0);

  useEffect(() => {
    // Shuffle options when question changes
    const optionsWithIndex = question.options.map((option, index) => ({ option, originalIndex: index }));
    const shuffled = [...optionsWithIndex].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled.map(item => item.option));
    setCorrectAnswerIndex(shuffled.findIndex(item => item.originalIndex === question.correctAnswer));
    setSelectedAnswer(null);
    setShowResult(false);
  }, [question]);

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    
    if (testMode) {
      // In test mode, just record the answer and move on
      const originalAnswerIndex = shuffledOptions.findIndex(opt => opt === shuffledOptions[index]);
      onAnswer(originalAnswerIndex);
    } else {
      // In practice mode, show immediate feedback
      const correct = index === correctAnswerIndex;
      setIsCorrect(correct);
      setShowResult(true);

      // Play sound feedback
      const audio = new Audio(correct ? '/sounds/correct.mp3' : '/sounds/wrong.mp3');
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const handleNext = () => {
    const originalAnswerIndex = shuffledOptions.findIndex((_, idx) => idx === selectedAnswer);
    onAnswer(originalAnswerIndex);
  };

  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 space-y-8 mb-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Progress value={progress} className="h-3 transition-all duration-500" />
        </div>
        {!testMode && (
          <div className="ml-4 flex items-center gap-2 text-streak font-bold animate-scale-in">
            <Flame className="w-5 h-5 animate-pulse" />
            <span>{streak}</span>
          </div>
        )}
      </div>

      <Card className="p-6 space-y-6 bg-card border-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">
            Question {currentQuestion} of {totalQuestions}
          </p>
          <h2 className="text-2xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            {question.question}
          </h2>
        </div>

        <div className="space-y-3">
          {shuffledOptions.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === correctAnswerIndex;
            
            let buttonVariant: "outline" | "default" | "success" | "destructive" = "outline";
            
            // Only show colors in practice mode after submission
            if (!testMode && showResult) {
              if (isCorrectAnswer) {
                buttonVariant = "success";
              } else if (isSelected && !isCorrect) {
                buttonVariant = "destructive";
              }
            }

            return (
              <Button
                key={index}
                variant={buttonVariant}
                className={cn(
                  "w-full h-auto min-h-[60px] text-left justify-start text-base px-4 py-3 whitespace-normal transition-all duration-300",
                  !showResult && "hover:bg-transparent hover:border-primary/40 hover:text-foreground hover:shadow-md hover:-translate-y-0.5",
                  isSelected && testMode && "border-primary/60 bg-primary/5"
                )}
                onClick={() => handleAnswerSelect(index)}
                disabled={testMode ? isSelected : showResult}
              >
                <span className="flex items-start gap-3 w-full">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-muted flex items-center justify-center font-bold text-sm mt-0.5">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1 text-left leading-snug">{option}</span>
                  {!testMode && showResult && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  {!testMode && showResult && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                </span>
              </Button>
            );
          })}
        </div>

        {!testMode && showResult && (
          <div className="space-y-4 animate-slide-up">
            <div className={`p-5 rounded-lg border-2 ${isCorrect ? 'bg-success/10 border-success/30' : 'bg-destructive/10 border-destructive/30'}`}>
              <p className={`font-semibold mb-2 text-lg ${isCorrect ? 'text-success' : 'text-destructive'}`}>
                {isCorrect ? '🎉 Correct!' : '❌ Not quite...'}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{question.explanation}</p>
            </div>
            <Button 
              onClick={handleNext}
              className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              size="lg"
            >
              Next Question →
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

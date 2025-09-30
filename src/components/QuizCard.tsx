import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Question } from "@/data/questions";
import { CheckCircle2, XCircle, Flame } from "lucide-react";

interface QuizCardProps {
  question: Question;
  onAnswer: (correct: boolean) => void;
  currentQuestion: number;
  totalQuestions: number;
  streak: number;
}

export const QuizCard = ({ 
  question, 
  onAnswer, 
  currentQuestion, 
  totalQuestions,
  streak 
}: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
  }, [question]);

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    const correct = index === question.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    // Play sound feedback
    const audio = new Audio(correct ? '/sounds/correct.mp3' : '/sounds/wrong.mp3');
    audio.play().catch(e => console.log('Audio play failed:', e));

    // Auto-advance after showing result
    setTimeout(() => {
      onAnswer(correct);
    }, 2000);
  };

  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Progress value={progress} className="h-3" />
        </div>
        <div className="ml-4 flex items-center gap-2 text-streak font-bold">
          <Flame className="w-5 h-5" />
          <span>{streak}</span>
        </div>
      </div>

      <Card className="p-6 space-y-6 bg-card border-2">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Question {currentQuestion} of {totalQuestions}
          </p>
          <h2 className="text-2xl font-bold leading-tight">
            {question.question}
          </h2>
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === question.correctAnswer;
            
            let buttonVariant: "outline" | "default" | "success" | "destructive" = "outline";
            
            if (showResult) {
              if (isCorrectAnswer) {
                buttonVariant = "success";
              } else if (isSelected && !isCorrect) {
                buttonVariant = "destructive";
              }
            } else if (isSelected) {
              buttonVariant = "default";
            }

            return (
              <Button
                key={index}
                variant={buttonVariant}
                className="w-full h-auto min-h-[60px] text-left justify-start text-base px-6 py-4 transition-all"
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                <span className="flex items-center gap-3 w-full">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-background/20 flex items-center justify-center font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {showResult && isCorrectAnswer && (
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="w-6 h-6 flex-shrink-0" />
                  )}
                </span>
              </Button>
            );
          })}
        </div>

        {showResult && (
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-success/10' : 'bg-destructive/10'}`}>
            <p className={`font-semibold mb-2 ${isCorrect ? 'text-success' : 'text-destructive'}`}>
              {isCorrect ? '🎉 Correct!' : '❌ Not quite...'}
            </p>
            <p className="text-sm text-muted-foreground">{question.explanation}</p>
          </div>
        )}
      </Card>
    </div>
  );
};

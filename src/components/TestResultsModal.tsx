import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Question } from "@/data/questions";
import { CheckCircle2, XCircle, TrendingUp, TrendingDown } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface TestResultsModalProps {
  open: boolean;
  onClose: () => void;
  questions: Question[];
  userAnswers: (number | null)[];
  xpEarned: number;
}

export const TestResultsModal = ({ 
  open, 
  onClose, 
  questions, 
  userAnswers,
  xpEarned 
}: TestResultsModalProps) => {
  // Calculate results by category
  const categoryResults = questions.reduce((acc, question, index) => {
    const category = question.category;
    if (!acc[category]) {
      acc[category] = { correct: 0, total: 0 };
    }
    acc[category].total++;
    
    const isCorrect = userAnswers[index] === question.correctAnswer;
    if (isCorrect) {
      acc[category].correct++;
    }
    
    return acc;
  }, {} as Record<string, { correct: number; total: number }>);

  const totalCorrect = Object.values(categoryResults).reduce((sum, cat) => sum + cat.correct, 0);
  const totalQuestions = questions.length;
  const percentage = Math.round((totalCorrect / totalQuestions) * 100);
  const isPassing = percentage >= 70;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center">
            {isPassing ? "🎉 Test Complete!" : "📋 Test Complete"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Overall Score */}
          <Card className="p-6 space-y-4">
            <div className="text-center space-y-2">
              <div className="text-6xl font-bold text-primary">{percentage}%</div>
              <p className="text-lg text-muted-foreground">
                {totalCorrect} of {totalQuestions} correct
              </p>
              <p className={`text-sm font-semibold ${isPassing ? 'text-success' : 'text-destructive'}`}>
                {isPassing ? '✅ Passing Score (70%+)' : '❌ Below Passing Score (70%)'}
              </p>
            </div>
            <Progress value={percentage} className="h-3" />
            <p className="text-center text-sm text-muted-foreground">
              +{xpEarned} XP earned
            </p>
          </Card>

          {/* Category Breakdown */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Performance by Category</h3>
            {Object.entries(categoryResults)
              .sort(([, a], [, b]) => (a.correct / a.total) - (b.correct / b.total))
              .map(([category, results]) => {
                const categoryPercentage = Math.round((results.correct / results.total) * 100);
                const isStrong = categoryPercentage >= 70;
                
                return (
                  <Card key={category} className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          {isStrong ? (
                            <TrendingUp className="w-4 h-4 text-success" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-destructive" />
                          )}
                          <h4 className="font-semibold">{category}</h4>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              {results.correct} / {results.total} correct
                            </span>
                            <span className={`font-bold ${isStrong ? 'text-success' : 'text-destructive'}`}>
                              {categoryPercentage}%
                            </span>
                          </div>
                          <Progress value={categoryPercentage} className="h-2" />
                        </div>
                      </div>
                    </div>
                    {!isStrong && (
                      <p className="text-xs text-muted-foreground mt-2">
                        💡 Focus more study time here
                      </p>
                    )}
                  </Card>
                );
              })}
          </div>

          {/* Individual Answers */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Question Review</h3>
            {questions.map((question, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <Card key={question.id} className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1 space-y-2">
                        <p className="font-medium text-sm leading-snug">{question.question}</p>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">
                            <span className="font-semibold">Your answer:</span> {userAnswer !== null ? question.options[userAnswer] : 'Not answered'}
                          </p>
                          {!isCorrect && (
                            <p className="text-xs text-success">
                              <span className="font-semibold">Correct answer:</span> {question.options[question.correctAnswer]}
                            </p>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground italic bg-muted/50 p-2 rounded">
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Button 
            onClick={onClose}
            className="w-full h-12 text-base font-semibold"
            size="lg"
          >
            Start New Test
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

import { AlertTriangle, Beaker, Leaf, Shield, RotateCcw, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

interface Treatment {
  chemical: string;
  organic: string;
  preventive: string;
}

interface DetectionResultProps {
  disease: string;
  confidence: number;
  treatment: Treatment;
  imageUrl: string;
  onNewScan: () => void;
}

export function DetectionResult({
  disease,
  confidence,
  treatment,
  imageUrl,
  onNewScan,
}: DetectionResultProps) {
  const { t } = useLanguage();
  
  const isHealthy = disease.toLowerCase().includes('healthy');
  const confidenceColor = confidence >= 90 ? 'text-success' : confidence >= 70 ? 'text-accent' : 'text-destructive';

  return (
    <div className="w-full max-w-2xl mx-auto animate-slide-up">
      <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
        {/* Header */}
        <div className={cn(
          "p-6 text-center",
          isHealthy ? "bg-success/10" : "bg-destructive/10"
        )}>
          <div className={cn(
            "inline-flex h-16 w-16 items-center justify-center rounded-full mb-4",
            isHealthy ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"
          )}>
            {isHealthy ? (
              <CheckCircle2 className="h-8 w-8" />
            ) : (
              <AlertTriangle className="h-8 w-8" />
            )}
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            {t.result.title}
          </h2>
        </div>

        {/* Result Content */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="w-full sm:w-1/3">
              <img
                src={imageUrl}
                alt="Analyzed leaf"
                className="w-full h-32 sm:h-full object-cover rounded-xl border border-border"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {disease}
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-muted-foreground">{t.result.confidence}:</span>
                <span className={cn("text-2xl font-bold", confidenceColor)}>
                  {confidence.toFixed(1)}%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-1000",
                    confidence >= 90 ? "bg-success" : confidence >= 70 ? "bg-accent" : "bg-destructive"
                  )}
                  style={{ width: `${confidence}%` }}
                />
              </div>
            </div>
          </div>

          {/* Treatment Recommendations */}
          {!isHealthy && (
            <div className="space-y-4">
              <h4 className="font-display text-lg font-semibold text-foreground border-b border-border pb-2">
                {t.result.treatments}
              </h4>

              <div className="grid gap-4 sm:grid-cols-3">
                {/* Chemical */}
                <div className="rounded-xl border border-border p-4 bg-muted/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-info/20 flex items-center justify-center">
                      <Beaker className="h-4 w-4 text-info" />
                    </div>
                    <span className="font-semibold text-foreground text-sm">
                      {t.result.chemical}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {treatment.chemical}
                  </p>
                </div>

                {/* Organic */}
                <div className="rounded-xl border border-border p-4 bg-muted/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-success/20 flex items-center justify-center">
                      <Leaf className="h-4 w-4 text-success" />
                    </div>
                    <span className="font-semibold text-foreground text-sm">
                      {t.result.organic}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {treatment.organic}
                  </p>
                </div>

                {/* Preventive */}
                <div className="rounded-xl border border-border p-4 bg-muted/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <span className="font-semibold text-foreground text-sm">
                      {t.result.preventive}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {treatment.preventive}
                  </p>
                </div>
              </div>
            </div>
          )}

          <Button
            onClick={onNewScan}
            variant="outline"
            size="lg"
            className="w-full mt-6"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            {t.result.newScan}
          </Button>
        </div>
      </div>
    </div>
  );
}
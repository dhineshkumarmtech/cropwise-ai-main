import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Calendar, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import leafImage from '@/assets/leaf-healthy.jpg';

// Mock history data
const mockHistory = [
  {
    id: 1,
    date: '2025-02-04',
    disease: 'Tomato Leaf Blight',
    confidence: 94.6,
    isHealthy: false,
    crop: 'Tomato',
  },
  {
    id: 2,
    date: '2025-02-03',
    disease: 'Healthy Plant',
    confidence: 97.8,
    isHealthy: true,
    crop: 'Rice',
  },
  {
    id: 3,
    date: '2025-02-01',
    disease: 'Potato Early Blight',
    confidence: 89.2,
    isHealthy: false,
    crop: 'Potato',
  },
  {
    id: 4,
    date: '2025-01-28',
    disease: 'Healthy Plant',
    confidence: 95.4,
    isHealthy: true,
    crop: 'Wheat',
  },
];

const History = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              {t.nav.history}
            </h1>
            <p className="mt-3 text-muted-foreground">
              Track your crop health over time
            </p>
          </div>

          {mockHistory.length > 0 ? (
            <div className="space-y-4">
              {mockHistory.map((item) => (
                <div
                  key={item.id}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="h-16 w-16 overflow-hidden rounded-lg border border-border">
                    <img
                      src={leafImage}
                      alt="Scanned leaf"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {item.crop}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground truncate">
                      {item.disease}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-muted-foreground">
                        {item.confidence.toFixed(1)}% confidence
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      item.isHealthy ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
                    }`}>
                      {item.isHealthy ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <AlertTriangle className="h-5 w-5" />
                      )}
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Calendar className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">No scans yet</h3>
              <p className="text-muted-foreground mb-6">
                Start scanning your crops to build your health history
              </p>
              <Button asChild variant="hero">
                <Link to="/detect">{t.hero.cta}</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;
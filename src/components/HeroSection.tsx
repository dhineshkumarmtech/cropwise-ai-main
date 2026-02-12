import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import heroImage from '@/assets/hero-farm.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Farm field"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl animate-slide-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Detection</span>
          </div>
          
          <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/90 sm:text-xl">
            {t.hero.subtitle}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/detect">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/about">
                {t.hero.ctaSecondary}
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-primary-foreground/20 pt-8">
            <div>
              <p className="text-3xl font-bold text-primary-foreground">38+</p>
              <p className="text-sm text-primary-foreground/70">Diseases Detected</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">95%</p>
              <p className="text-sm text-primary-foreground/70">Accuracy Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">3</p>
              <p className="text-sm text-primary-foreground/70">Languages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
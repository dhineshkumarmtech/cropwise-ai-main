import { Cpu, Languages, Stethoscope, History } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card p-6 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        "border border-border/50"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {icon}
        </div>
        <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: t.features.ai.title,
      description: t.features.ai.desc,
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: t.features.multilingual.title,
      description: t.features.multilingual.desc,
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: t.features.treatment.title,
      description: t.features.treatment.desc,
    },
    {
      icon: <History className="h-6 w-6" />,
      title: t.features.history.title,
      description: t.features.history.desc,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background leaf-pattern">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {t.features.title}
          </h2>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full gradient-accent" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
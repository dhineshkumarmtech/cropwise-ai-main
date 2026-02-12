import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Leaf, Target, Users, Award } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Our Mission',
      description: 'To empower farmers with accessible AI technology that protects their crops and livelihoods through early disease detection and actionable treatment guidance.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'For Farmers',
      description: 'Built with farmers in mind - simple interface, local language support, works on low bandwidth, and provides practical solutions using both modern and traditional methods.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'AI Excellence',
      description: 'Our CNN-based model is trained on thousands of crop images, achieving 95%+ accuracy across 38 different plant diseases, continuously improving with new data.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
          <div className="container text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/20 mb-6">
              <Leaf className="h-8 w-8" />
            </div>
            <h1 className="font-display text-4xl font-bold sm:text-5xl">
              {t.nav.about}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/90">
              CropGuard AI combines cutting-edge artificial intelligence with agricultural expertise to help farmers identify and treat crop diseases quickly and effectively.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-card p-8 shadow-card"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center text-foreground mb-12">
              How CropGuard AI Works
            </h2>
            
            <div className="space-y-8">
              {[
                { step: 1, title: 'Capture', desc: 'Take a clear photo of the affected leaf using your smartphone camera.' },
                { step: 2, title: 'Upload', desc: 'Upload the image through our mobile-friendly interface - works even on slow connections.' },
                { step: 3, title: 'Analyze', desc: 'Our AI model processes the image and identifies the disease with high accuracy.' },
                { step: 4, title: 'Treat', desc: 'Receive treatment recommendations in your language - chemical, organic, and preventive options.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full gradient-accent flex items-center justify-center font-display font-bold text-lg text-accent-foreground">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
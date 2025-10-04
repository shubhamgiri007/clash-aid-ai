import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Upload, Target, Video, Users, Trophy, Crown,
  Zap, Shield, Swords, TrendingUp, CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-battlefield.jpg";
import premiumBadge from "@/assets/premium-badge.png";

const Index = () => {
  const features = [
    {
      icon: Upload,
      title: "Upload & Analyze",
      description: "Upload any base screenshot and get instant AI-powered analysis with multiple 3-star strategies.",
    },
    {
      icon: Target,
      title: "Visual Attack Roadmaps",
      description: "See step-by-step visual guides with troop paths, timings, and tactical markers for every strategy.",
    },
    {
      icon: Video,
      title: "Video & Text Guides",
      description: "Learn your way - watch video tutorials or read detailed text walkthroughs for each attack plan.",
    },
    {
      icon: Users,
      title: "Community & Sharing",
      description: "Save your favorite strategies, compete on leaderboards, and share attack plans with your clan.",
    },
  ];

  const strategies = [
    "Queen Walk + Zap Lalo",
    "Electro Dragon Spam",
    "P.E.K.K.A Smash",
    "Hybrid Attack",
    "Sui Lalo",
    "Barch Rush",
  ];

  const premiumFeatures = [
    "Unlimited base uploads and analysis",
    "Advanced insider tactics and strategies",
    "Priority access to new features",
    "No cooldowns or request limits",
    "Premium-only attack strategies",
    "Ad-free experience",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-attack flex items-center justify-center">
                <Swords className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Clash Attack AI
              </h1>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">Login</Link>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/analyze">Start Analyzing</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
        <img
          src={heroImage}
          alt="Battle Strategy"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-20 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Master Every Attack
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Upload any base, get AI-powered 3-star strategies instantly. From TH3 to TH17, dominate every battle with precision tactics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/analyze">
                  <Target className="mr-2" />
                  Analyze Base Now
                </Link>
              </Button>
              <Button variant="outline" size="xl">
                <Video className="mr-2" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>All Town Hall Levels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Multiple Strategies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Video Guides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Win</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful AI analysis combined with community-driven strategies to help you achieve consistent 3-star attacks.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="p-6 border-border bg-card hover:border-primary/50 transition-smooth shadow-[0_10px_40px_-10px_hsl(0_0%_0%/0.5)] hover:shadow-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Master All Attack Strategies</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From beginner-friendly rushes to advanced multi-stage attacks, we cover every strategy in the game.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {strategies.map((strategy, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-smooth flex items-center gap-3"
              >
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-medium">{strategy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-20 container mx-auto px-4">
        <Card className="overflow-hidden border-border bg-card shadow-[0_20px_60px_-10px_hsl(270_75%_55%/0.3)]">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <img src={premiumBadge} alt="Premium" className="w-20 h-20 mb-4" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Go Premium
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Unlock unlimited attacks, advanced strategies, and exclusive features to become the ultimate war champion.
                </p>
              </div>
              <div className="space-y-3 mb-8">
                {premiumFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="premium" size="xl" className="w-full sm:w-auto">
                <Crown className="mr-2" />
                Upgrade to Premium
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center p-8 rounded-xl bg-muted/50">
                <div className="text-5xl font-bold gradient-premium bg-clip-text text-transparent mb-2">
                  $9.99
                </div>
                <div className="text-muted-foreground mb-4">per month</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 justify-center">
                    <Trophy className="w-4 h-4 text-secondary" />
                    <span>Cancel anytime</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <TrendingUp className="w-4 h-4 text-secondary" />
                    <span>7-day free trial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Dominate?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of clan warriors crushing bases and climbing leaderboards with AI-powered strategies.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/analyze">
              <Target className="mr-2" />
              Start Your First Analysis
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Clash Attack AI. Master your attacks, dominate the battlefield.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

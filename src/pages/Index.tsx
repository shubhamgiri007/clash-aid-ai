import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Upload, Target, Video, Users, Trophy, Crown,
  Zap, Shield, Swords, Star, CheckCircle2, Gem
} from "lucide-react";
import { Link } from "react-router-dom";
import cocHero from "@/assets/coc-hero.jpg";
import wizardChar from "@/assets/wizard-char.png";
import barbarianChar from "@/assets/barbarian-char.png";
import trophyIcon from "@/assets/trophy-icon.png";
import dragonIcon from "@/assets/dragon-icon.png";

const Index = () => {
  const features = [
    {
      icon: Upload,
      emoji: "⚔️",
      title: "Upload & Analyze",
      description: "Drop any enemy base and our AI Chief instantly scouts multiple 3-star attack strategies!",
    },
    {
      icon: Target,
      emoji: "🎯",
      title: "Battle Roadmaps",
      description: "Visual attack plans with troop paths, timings, and tactical markers - like having a war general!",
    },
    {
      icon: Video,
      emoji: "🎬",
      title: "Video Battle Guides",
      description: "Watch video replays or read detailed walkthroughs - learn your way to victory!",
    },
    {
      icon: Users,
      emoji: "🏆",
      title: "Clan Leaderboards",
      description: "Save strategies, compete globally, and share winning plans with your clanmates!",
    },
  ];

  const strategies = [
    { name: "Queen Walk + Zap Lalo", emoji: "👑" },
    { name: "Electro Dragon Spam", emoji: "⚡" },
    { name: "P.E.K.K.A Smash", emoji: "🔨" },
    { name: "Hybrid Attack", emoji: "💪" },
    { name: "Sui Lalo", emoji: "🎈" },
    { name: "Barch Rush", emoji: "⚔️" },
  ];

  const premiumFeatures = [
    "Unlimited base uploads 🚀",
    "Advanced tactics & secrets 🎯",
    "Priority access to features ⭐",
    "No cooldowns or limits 💎",
    "Premium-only strategies 👑",
    "Ad-free experience ✨",
  ];

  return (
    <div className="min-h-screen gradient-stone">
      {/* Wooden Header */}
      <header className="gradient-wood shadow-wood sticky top-0 z-50 border-b-4 border-amber-900">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shadow-gold border-2 border-yellow-600">
                <Swords className="w-7 h-7 text-amber-900" />
              </div>
              <div>
                <h1 className="text-2xl text-white text-outline-light">Clash Attack AI</h1>
                <p className="text-xs text-amber-200">3-Star Strategy Master</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" asChild>
                <Link to="/auth">Login</Link>
              </Button>
              <Button variant="default" size="sm" asChild>
                <Link to="/analyze">⚔️ Start Battle</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10" />
        <img
          src={cocHero}
          alt="Battle Strategy"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-20 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center gap-4">
              <span className="text-6xl animate-bounce">⚔️</span>
              <span className="text-6xl animate-bounce" style={{ animationDelay: "0.1s" }}>🛡️</span>
              <span className="text-6xl animate-bounce" style={{ animationDelay: "0.2s" }}>👑</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground text-outline">
              Crush Every Base!
            </h2>
            <p className="text-xl md:text-2xl text-foreground font-bold mb-8 max-w-2xl mx-auto">
              Upload enemy bases, get AI-powered 3-star tactics instantly! From TH3 to TH17, dominate with precision!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="xl" asChild>
                <Link to="/analyze">
                  <Target className="mr-2" />
                  Analyze Base Now
                </Link>
              </Button>
              <Button variant="wood" size="xl">
                <Video className="mr-2" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm font-bold flex-wrap">
              <div className="flex items-center gap-2 bg-card/80 px-4 py-2 rounded-full shadow-stone">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>All TH Levels</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 px-4 py-2 rounded-full shadow-stone">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>AI Battle Plans</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 px-4 py-2 rounded-full shadow-stone">
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
          <h3 className="text-4xl md:text-5xl mb-4 text-outline">Everything to Dominate ⚔️</h3>
          <p className="text-lg font-semibold max-w-2xl mx-auto">
            AI power + clan wisdom = consistent 3-star attacks and war victories!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="p-6 border-3 border-border bg-card hover:border-primary transition-bounce cursor-pointer shadow-stone hover:shadow-gold hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground font-medium">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Character Section with Wizard */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="order-2 md:order-1">
              <img src={wizardChar} alt="Wizard" className="w-full max-w-md mx-auto drop-shadow-2xl" />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-5xl mb-4">🧙‍♂️</div>
              <h3 className="text-4xl md:text-5xl mb-4 text-outline">Master All Attacks!</h3>
              <p className="text-lg font-semibold mb-6">
                From beginner Barch rushes to advanced Queen Walk combos - we've got every strategy in your arsenal!
              </p>
              <div className="grid grid-cols-2 gap-3">
                {strategies.map((strategy, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-background border-2 border-border hover:border-primary transition-bounce flex items-center gap-2 shadow-stone"
                  >
                    <span className="text-2xl">{strategy.emoji}</span>
                    <span className="font-bold text-sm">{strategy.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Section with Barbarian */}
      <section className="py-20 container mx-auto px-4">
        <Card className="overflow-hidden border-4 border-secondary bg-card shadow-premium">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={trophyIcon} alt="Premium" className="w-16 h-16" />
                  <span className="text-5xl">👑</span>
                </div>
                <h3 className="text-4xl md:text-5xl mb-4 text-outline">
                  Go Premium!
                </h3>
                <p className="text-lg font-bold mb-6">
                  Unlock unlimited attacks, secret tactics, and exclusive perks to become the ultimate war legend!
                </p>
              </div>
              <div className="space-y-3 mb-8">
                {premiumFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 font-bold">
                    <Star className="w-5 h-5 text-secondary mt-0.5 fill-secondary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="secondary" size="xl" className="w-full sm:w-auto">
                <Crown className="mr-2" />
                Upgrade Now
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <img src={barbarianChar} alt="Barbarian" className="w-full max-w-sm drop-shadow-2xl" />
                <div className="absolute -top-8 -right-8 text-center p-6 rounded-2xl gradient-gold shadow-gold border-3 border-yellow-600">
                  <div className="text-4xl font-bold text-outline-light text-white">$9.99</div>
                  <div className="text-sm font-bold text-amber-900">per month</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section with Dragon */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img src={dragonIcon} alt="Dragon" className="w-24 h-24 mx-auto mb-6 drop-shadow-xl" />
          <h3 className="text-4xl md:text-5xl mb-4 text-outline">
            Ready to Dominate? ⚡
          </h3>
          <p className="text-lg font-bold mb-8">
            Join thousands of warriors crushing bases and climbing leaderboards with AI strategies! 🏆
          </p>
          <Button variant="default" size="xl" asChild>
            <Link to="/analyze">
              <Target className="mr-2" />
              Start First Analysis
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-wood border-t-4 border-amber-900 py-6 shadow-wood">
        <div className="container mx-auto px-4 text-center text-sm text-amber-100 font-bold">
          <p>© 2025 Clash Attack AI • Master attacks, dominate battles! ⚔️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

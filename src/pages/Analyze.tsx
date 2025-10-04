import { useState } from "react";
import { Upload, Zap, Target, Crown, Swords } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import strategyMap from "@/assets/strategy-map.jpg";
import { Link } from "react-router-dom";

const Analyze = () => {
  const [uploaded, setUploaded] = useState(false);

  const strategies = [
    {
      name: "Queen Walk + Zap Lalo",
      emoji: "👑",
      difficulty: "Advanced",
      success: "94%",
      icon: Crown,
      steps: 5,
      premium: false,
    },
    {
      name: "Electro Dragon Spam",
      emoji: "⚡",
      difficulty: "Intermediate",
      success: "89%",
      icon: Zap,
      steps: 4,
      premium: false,
    },
    {
      name: "P.E.K.K.A Smash",
      emoji: "🔨",
      difficulty: "Beginner",
      success: "87%",
      icon: Swords,
      steps: 4,
      premium: true,
    },
  ];

  return (
    <div className="min-h-screen gradient-stone">
      {/* Header */}
      <header className="gradient-wood shadow-wood sticky top-0 z-50 border-b-4 border-amber-900">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shadow-gold border-2 border-yellow-600">
                  <Swords className="w-7 h-7 text-amber-900" />
                </div>
                <div>
                  <h1 className="text-2xl text-white text-outline-light">Clash Attack AI</h1>
                  <p className="text-xs text-amber-200">3-Star Strategy Master</p>
                </div>
              </div>
            </Link>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" asChild>
                <Link to="/auth">Login</Link>
              </Button>
              <Button variant="secondary" size="sm">
                👑 Go Premium
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Upload Section */}
        {!uploaded ? (
          <Card className="p-8 md:p-12 text-center border-4 border-border bg-card shadow-stone">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="text-6xl mb-4">🎯</div>
                <h2 className="text-4xl font-bold mb-3 text-outline">Upload Enemy Base</h2>
                <p className="text-lg font-semibold">
                  Drop a screenshot of your opponent's base and let the AI Chief scout the perfect 3-star strategy! ⚔️
                </p>
              </div>

              <div className="border-4 border-dashed border-border rounded-2xl p-12 hover:border-primary transition-bounce cursor-pointer bg-muted/30 shadow-stone">
                <input type="file" className="hidden" id="file-upload" accept="image/*" />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-6xl mb-4">🛡️</div>
                  <p className="text-lg font-bold mb-2">Click to upload or drag base image</p>
                  <p className="text-sm font-semibold text-muted-foreground">PNG, JPG up to 10MB</p>
                </label>
              </div>

              <Button
                variant="default"
                size="xl"
                className="mt-6 w-full sm:w-auto"
                onClick={() => setUploaded(true)}
              >
                <Target className="mr-2" />
                Analyze Base
              </Button>
            </div>
          </Card>
        ) : (
          /* Analysis Results */
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">✅</span>
                  <h2 className="text-3xl font-bold text-outline">Base Analyzed!</h2>
                </div>
                <p className="text-lg font-bold">Town Hall 12 • 3 Attack Strategies Found 🎯</p>
              </div>
              <Button variant="outline" onClick={() => setUploaded(false)}>
                📤 Upload New Base
              </Button>
            </div>

            {/* Base Preview */}
            <Card className="overflow-hidden border-4 border-border bg-card shadow-stone">
              <img
                src={strategyMap}
                alt="Base Layout Analysis"
                className="w-full h-64 object-cover"
              />
            </Card>

            {/* Strategies */}
            <div className="grid gap-4">
              {strategies.map((strategy, idx) => (
                <Card
                  key={idx}
                  className="p-6 border-4 border-border bg-card hover:border-primary transition-bounce cursor-pointer shadow-stone hover:shadow-gold hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex gap-4 items-start flex-1">
                      <div className="text-5xl">{strategy.emoji}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <h3 className="text-xl font-bold">{strategy.name}</h3>
                          {strategy.premium && (
                            <span className="px-3 py-1 text-xs font-bold rounded-full gradient-premium text-white border-2 border-purple-700">
                              👑 PREMIUM
                            </span>
                          )}
                        </div>
                        <div className="flex gap-4 text-sm font-bold flex-wrap">
                          <span className="text-muted-foreground">{strategy.difficulty}</span>
                          <span>•</span>
                          <span className="text-muted-foreground">{strategy.steps} Steps</span>
                          <span>•</span>
                          <span className="text-primary">{strategy.success} Success 🎯</span>
                        </div>
                      </div>
                    </div>
                    <Button variant={strategy.premium ? "secondary" : "default"} size="sm">
                      View Strategy
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analyze;

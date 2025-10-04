import { useState } from "react";
import { Upload, Zap, Target, Shield, Swords, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import strategyMap from "@/assets/strategy-map.jpg";
import { Link } from "react-router-dom";

const Analyze = () => {
  const [uploaded, setUploaded] = useState(false);

  const strategies = [
    {
      name: "Queen Walk + Zap Lalo",
      difficulty: "Advanced",
      success: "94%",
      icon: Crown,
      steps: 5,
      premium: false,
    },
    {
      name: "Electro Dragon Spam",
      difficulty: "Intermediate",
      success: "89%",
      icon: Zap,
      steps: 4,
      premium: false,
    },
    {
      name: "P.E.K.K.A Smash",
      difficulty: "Beginner",
      success: "87%",
      icon: Swords,
      steps: 4,
      premium: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Clash Attack AI
              </h1>
            </Link>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">Login</Link>
              </Button>
              <Button variant="premium" size="sm">
                Go Premium
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Upload Section */}
        {!uploaded ? (
          <Card className="p-8 md:p-12 text-center border-border bg-card shadow-[0_10px_40px_-10px_hsl(0_0%_0%/0.5)]">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-3">Upload Your Base Layout</h2>
                <p className="text-muted-foreground text-lg">
                  Drop a screenshot or image of your enemy's base and let the AI find the perfect 3-star strategy
                </p>
              </div>

              <div className="border-2 border-dashed border-border rounded-lg p-12 hover:border-primary/50 transition-smooth cursor-pointer bg-muted/20">
                <input type="file" className="hidden" id="file-upload" accept="image/*" />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Shield className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-medium mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                </label>
              </div>

              <Button
                variant="hero"
                size="lg"
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
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">Base Analysis Complete</h2>
                <p className="text-muted-foreground">Town Hall 12 • 3 Attack Strategies Found</p>
              </div>
              <Button variant="outline" onClick={() => setUploaded(false)}>
                Upload New Base
              </Button>
            </div>

            {/* Base Preview */}
            <Card className="overflow-hidden border-border bg-card shadow-[0_10px_40px_-10px_hsl(0_0%_0%/0.5)]">
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
                  className="p-6 border-border bg-card hover:border-primary/50 transition-smooth cursor-pointer shadow-[0_10px_40px_-10px_hsl(0_0%_0%/0.5)] hover:shadow-glow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4 items-start flex-1">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <strategy.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">{strategy.name}</h3>
                          {strategy.premium && (
                            <span className="px-2 py-1 text-xs font-bold rounded gradient-premium">
                              PREMIUM
                            </span>
                          )}
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>{strategy.difficulty}</span>
                          <span>•</span>
                          <span>{strategy.steps} Steps</span>
                          <span>•</span>
                          <span className="text-primary font-medium">{strategy.success} Success Rate</span>
                        </div>
                      </div>
                    </div>
                    <Button variant={strategy.premium ? "premium" : "hero"} size="sm">
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

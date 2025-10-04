import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Swords } from "lucide-react";
import wizardChar from "@/assets/wizard-char.png";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen gradient-stone flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Link to="/" className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center shadow-gold border-2 border-yellow-600">
              <Swords className="w-8 h-8 text-amber-900" />
            </div>
            <div>
              <span className="text-3xl font-bold text-outline">Clash Attack AI</span>
              <p className="text-sm font-bold text-muted-foreground">3-Star Strategy Master</p>
            </div>
          </div>
        </Link>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Character */}
          <div className="hidden md:block">
            <img src={wizardChar} alt="Wizard" className="w-full max-w-md mx-auto drop-shadow-2xl" />
            <div className="text-center mt-4">
              <p className="text-2xl font-bold text-outline">Join the Battle! ⚔️</p>
            </div>
          </div>

          {/* Auth Form */}
          <Card className="p-6 md:p-8 border-4 border-border bg-card shadow-stone">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted border-2 border-border">
                <TabsTrigger value="login" className="font-bold">Login</TabsTrigger>
                <TabsTrigger value="signup" className="font-bold">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="font-bold">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="warrior@clash.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-2 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="font-bold">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-2 border-border"
                    />
                  </div>
                  <Button variant="default" className="w-full" size="lg">
                    ⚔️ Login to Battle
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="font-bold">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="warrior@clash.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-2 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="font-bold">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-2 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="font-bold">Confirm Password</Label>
                    <Input id="confirm-password" type="password" className="border-2 border-border" />
                  </div>
                  <Button variant="default" className="w-full" size="lg">
                    🛡️ Join the Clan
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 pt-6 border-t-2 border-border text-center text-sm font-bold text-muted-foreground">
              By continuing, you agree to battle with honor! ⚔️
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;

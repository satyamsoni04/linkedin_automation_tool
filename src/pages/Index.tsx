import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Target, BarChart3, Brain, Zap } from "lucide-react";
import { CampaignForm } from "@/components/CampaignForm";
import { Dashboard } from "@/components/Dashboard";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'campaign' | 'dashboard'>('home');

  const features = [
    {
      icon: Brain,
      title: "AI Profile Analysis",
      description: "Advanced NLP extracts insights from LinkedIn profiles, posts, and work history to identify perfect prospects."
    },
    {
      icon: MessageSquare,
      title: "Hyper-Personalized Messaging",
      description: "GPT-powered connection requests and follow-up sequences that feel authentic and human."
    },
    {
      icon: Target,
      title: "Smart Prospecting",
      description: "Filter leads by industry, role, company size, and contextual triggers like job changes or funding."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track connection rates, reply rates, and campaign ROI with detailed analytics dashboard."
    },
    {
      icon: Zap,
      title: "Automated Sequences",
      description: "Human-like delays and smart timing for connection requests and follow-up messages."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share campaigns, templates, and insights across your sales team for better results."
    }
  ];

  const stats = [
    { value: "5x", label: "Higher Response Rates" },
    { value: "80%", label: "Time Saved on Outreach" },
    { value: "200+", label: "Daily Personalized Messages" },
    { value: "95%", label: "Client Success Rate" }
  ];

  if (activeTab === 'campaign') {
    return <CampaignForm onBack={() => setActiveTab('home')} />;
  }

  if (activeTab === 'dashboard') {
    return <Dashboard onBack={() => setActiveTab('home')} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <Users className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">LinkedInAI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setActiveTab('home')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab('campaign')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Create Campaign
            </button>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Dashboard
            </button>
          </nav>
          <Button variant="default">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-mesh">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container px-4 py-24 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit animate-float shadow-primary/20">
                🚀 AI-Powered Sales Automation
              </Badge>
              <div className="space-y-6">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl leading-tight">
                  Automate LinkedIn Outreach with
                  <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent"> AI Precision</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                  Turn LinkedIn into your most powerful sales channel. Our AI analyzes profiles, crafts personalized messages, and automates sequences that actually get responses.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gradient-cta shadow-glow hover:shadow-hero transition-all duration-300 hover:scale-105 text-white font-semibold"
                  onClick={() => setActiveTab('campaign')}
                >
                  ✨ Start Free Campaign
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover-lift border-primary/20 hover:border-primary/40"
                  onClick={() => setActiveTab('dashboard')}
                >
                  📊 View Demo
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center hover-scale group">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:pl-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl animate-glow"></div>
              <img 
                src={heroImage} 
                alt="LinkedIn AI Automation Platform"
                className="relative rounded-2xl shadow-hero w-full animate-float hover:shadow-glow transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/5 rounded-2xl"></div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full animate-float blur-sm opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full animate-float blur-sm opacity-50" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 animate-float">
              ⚡ Powerful Features
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Everything you need to scale LinkedIn outreach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From AI-powered prospect analysis to automated follow-up sequences, we handle every aspect of LinkedIn sales automation with precision and elegance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 shadow-card hover:shadow-glow transition-all duration-500 gradient-card hover-lift group border-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <feature.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary-light/10"></div>
        <div className="absolute inset-0 gradient-mesh opacity-50"></div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                Ready to 5x your LinkedIn response rates?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of sales professionals who trust LinkedInAI to automate their outreach and generate more qualified leads. Start your success story today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="gradient-cta shadow-glow hover:shadow-hero transition-all duration-300 hover:scale-105 text-white font-semibold px-8 py-4 text-lg"
                onClick={() => setActiveTab('campaign')}
              >
                🚀 Create Your First Campaign
              </Button>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>✓ No credit card required</span>
                <span>•</span>
                <span>✓ 14-day free trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container px-4 py-8 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                <Users className="h-3 w-3 text-primary-foreground" />
              </div>
              <span className="font-semibold">LinkedInAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 LinkedInAI. Built for sales professionals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
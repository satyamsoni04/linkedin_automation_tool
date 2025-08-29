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
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50">
        <div className="container px-4 py-20 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                AI-Powered Sales Automation
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  Automate LinkedIn Outreach with
                  <span className="text-primary"> AI Precision</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Turn LinkedIn into your most powerful sales channel. Our AI analyzes profiles, crafts personalized messages, and automates sequences that actually get responses.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gradient-primary shadow-primary"
                  onClick={() => setActiveTab('campaign')}
                >
                  Start Free Campaign
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setActiveTab('dashboard')}
                >
                  View Demo
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="LinkedIn AI Automation Platform"
                className="rounded-lg shadow-card-hover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h2 className="text-3xl font-bold mb-4">Everything you need to scale LinkedIn outreach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From AI-powered prospect analysis to automated follow-up sequences, we handle every aspect of LinkedIn sales automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 gradient-card">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-primary-light/5">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to 5x your LinkedIn response rates?</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of sales professionals who trust LinkedInAI to automate their outreach and generate more qualified leads.
            </p>
            <Button 
              size="lg" 
              className="gradient-primary shadow-primary"
              onClick={() => setActiveTab('campaign')}
            >
              Create Your First Campaign
            </Button>
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
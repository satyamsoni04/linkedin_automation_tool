import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Users, MessageSquare, TrendingUp, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface DashboardProps {
  onBack: () => void;
}

export const Dashboard = ({ onBack }: DashboardProps) => {
  const campaigns = [
    {
      id: 1,
      name: "HR SaaS - SME Focus",
      status: "active",
      prospects: 72,
      sent: 45,
      responses: 12,
      responseRate: 26.7,
      industry: "SaaS & Technology",
      created: "2 days ago"
    },
    {
      id: 2,
      name: "EdTech - CTO Outreach", 
      status: "paused",
      prospects: 38,
      sent: 38,
      responses: 8,
      responseRate: 21.1,
      industry: "EdTech & Education",
      created: "1 week ago"
    },
    {
      id: 3,
      name: "Fintech - Growth Managers",
      status: "completed",
      prospects: 95,
      sent: 95,
      responses: 23,
      responseRate: 24.2,
      industry: "Fintech & Finance",
      created: "3 weeks ago"
    }
  ];

  const topProspects = [
    {
      name: "Anjali Mehta",
      role: "HR Manager",
      company: "HirePulse",
      score: 95,
      status: "responded",
      message: "Hi Anjali, loved your recent post on hybrid hiring. I work with startups helping HRs simplify onboarding with our AI tool. Thought it could be a great fit — open to a quick chat?",
      response: "Thanks for reaching out! This sounds interesting. Can you send me some more details about your AI tool?"
    },
    {
      name: "Rohit Kumar",
      role: "CTO",
      company: "TechVenture",
      score: 89,
      status: "sent",
      message: "Hi Rohit, noticed your team is scaling rapidly! I help CTOs reduce onboarding time by 60% with our automated HR platform. Worth a quick 15-min chat?",
      response: null
    },
    {
      name: "Priya Singh", 
      role: "Head of People",
      company: "GrowthCorp",
      score: 92,
      status: "pending",
      message: "Hi Priya, saw your LinkedIn post about hiring challenges. Our HR SaaS has helped companies like yours streamline their entire hiring process. Interested in a brief demo?",
      response: null
    }
  ];

  const stats = [
    {
      title: "Total Prospects",
      value: "205",
      change: "+12%",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Messages Sent",
      value: "178",
      change: "+8%", 
      icon: MessageSquare,
      color: "text-accent"
    },
    {
      title: "Response Rate",
      value: "24.3%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-warning"
    },
    {
      title: "Active Campaigns",
      value: "3",
      change: "0%",
      icon: Clock,
      color: "text-muted-foreground"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'responded':
        return <CheckCircle className="h-4 w-4 text-accent" />;
      case 'sent':
        return <Clock className="h-4 w-4 text-warning" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
      default:
        return <XCircle className="h-4 w-4 text-destructive" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-accent/10 text-accent">Active</Badge>;
      case 'paused':
        return <Badge variant="secondary">Paused</Badge>;
      case 'completed':
        return <Badge variant="outline">Completed</Badge>;
      default:
        return <Badge variant="destructive">Error</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-lg font-semibold">Campaign Dashboard</h1>
              <p className="text-sm text-muted-foreground">Monitor your LinkedIn outreach performance</p>
            </div>
          </div>
          <Button className="gradient-primary">New Campaign</Button>
        </div>
      </header>

      <div className="container px-4 py-8 mx-auto space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 gradient-card">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-primary/10`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {stat.change}
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Campaigns List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Active Campaigns</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="p-6 gradient-card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold">{campaign.name}</h3>
                        {getStatusBadge(campaign.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">{campaign.industry} • {campaign.created}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-lg font-semibold">{campaign.prospects}</p>
                      <p className="text-xs text-muted-foreground">Prospects</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold">{campaign.sent}</p>
                      <p className="text-xs text-muted-foreground">Messages Sent</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold">{campaign.responses}</p>
                      <p className="text-xs text-muted-foreground">Responses</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-accent">{campaign.responseRate}%</p>
                      <p className="text-xs text-muted-foreground">Response Rate</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Campaign Progress</span>
                      <span>{Math.round((campaign.sent / campaign.prospects) * 100)}%</span>
                    </div>
                    <Progress 
                      value={(campaign.sent / campaign.prospects) * 100} 
                      className="h-2"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Top Prospects */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Top Prospects</h2>
            
            <div className="space-y-4">
              {topProspects.map((prospect, index) => (
                <Card key={index} className="p-4 gradient-card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-sm">{prospect.name}</h4>
                        {getStatusIcon(prospect.status)}
                      </div>
                      <p className="text-xs text-muted-foreground">{prospect.role} at {prospect.company}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          Score: {prospect.score}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs font-medium mb-1">Your Message:</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {prospect.message}
                      </p>
                    </div>

                    {prospect.response && (
                      <div className="bg-accent/10 rounded-lg p-3">
                        <p className="text-xs font-medium mb-1 text-accent">Response:</p>
                        <p className="text-xs leading-relaxed">
                          {prospect.response}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end mt-3">
                    <Button variant="ghost" size="sm" className="text-xs">
                      View Profile
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <Button variant="outline" className="w-full">
              View All Prospects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
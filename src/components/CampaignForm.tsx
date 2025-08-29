import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Target, MessageSquare, Users, Globe, Briefcase, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface CampaignFormProps {
  onBack: () => void;
}

export const CampaignForm = ({ onBack }: CampaignFormProps) => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    productService: "",
    targetIndustry: "",
    jobRoles: "",
    companySize: "",
    region: "",
    outreachGoal: "",
    brandVoice: "",
    triggers: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerateCampaign = async () => {
    if (!formData.productService || !formData.targetIndustry || !formData.jobRoles) {
      toast({
        title: "Missing Information",
        description: "Please fill in the required fields to generate your campaign.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      toast({
        title: "Campaign Generated Successfully!",
        description: "Your AI-powered LinkedIn campaign is ready. Check the dashboard for prospects and messages."
      });
      setIsGenerating(false);
    }, 3000);
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
              <h1 className="text-lg font-semibold">Create New Campaign</h1>
              <p className="text-sm text-muted-foreground">Configure your LinkedIn outreach campaign</p>
            </div>
          </div>
          <Badge variant="secondary">Step 1 of 2</Badge>
        </div>
      </header>

      <div className="container px-4 py-8 mx-auto max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6 gradient-card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Campaign Target</h3>
                  <p className="text-sm text-muted-foreground">Define your ideal customer profile</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="product">Product/Service *</Label>
                  <Input
                    id="product"
                    placeholder="e.g., HR SaaS platform, Marketing automation tool"
                    value={formData.productService}
                    onChange={(e) => handleInputChange('productService', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Target Industry *</Label>
                  <Select onValueChange={(value) => handleInputChange('targetIndustry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saas">SaaS & Technology</SelectItem>
                      <SelectItem value="fintech">Fintech & Finance</SelectItem>
                      <SelectItem value="ecommerce">E-commerce & Retail</SelectItem>
                      <SelectItem value="healthcare">Healthcare & Biotech</SelectItem>
                      <SelectItem value="education">EdTech & Education</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="consulting">Consulting & Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="roles">Target Job Roles *</Label>
                  <Input
                    id="roles"
                    placeholder="e.g., CTO, Head of HR, Growth Manager"
                    value={formData.jobRoles}
                    onChange={(e) => handleInputChange('jobRoles', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="size">Company Size</Label>
                  <Select onValueChange={(value) => handleInputChange('companySize', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup (1-50 employees)</SelectItem>
                      <SelectItem value="sme">SME (51-200 employees)</SelectItem>
                      <SelectItem value="midsize">Mid-size (201-1000 employees)</SelectItem>
                      <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Campaign Message</h3>
                  <p className="text-sm text-muted-foreground">Configure your outreach strategy</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="goal">Outreach Goal</Label>
                  <Select onValueChange={(value) => handleInputChange('outreachGoal', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">Book a demo</SelectItem>
                      <SelectItem value="call">Schedule a call</SelectItem>
                      <SelectItem value="trial">Free trial signup</SelectItem>
                      <SelectItem value="hire">Hiring/Recruitment</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="network">Networking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="voice">Brand Voice</Label>
                  <Select onValueChange={(value) => handleInputChange('brandVoice', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="friendly">Friendly & Casual</SelectItem>
                      <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                      <SelectItem value="consultative">Consultative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region">Target Region</Label>
                  <Select onValueChange={(value) => handleInputChange('region', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="global">Global</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="apac">APAC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-1">
                  <Label htmlFor="triggers">Contextual Triggers</Label>
                  <Input
                    id="triggers"
                    placeholder="e.g., Job change, funding news, hiring posts"
                    value={formData.triggers}
                    onChange={(e) => handleInputChange('triggers', e.target.value)}
                  />
                </div>
              </div>
            </Card>

            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={onBack}>
                Cancel
              </Button>
              <Button 
                onClick={handleGenerateCampaign}
                disabled={isGenerating}
                className="gradient-primary shadow-primary min-w-[140px]"
              >
                {isGenerating ? "Generating..." : "Generate Campaign"}
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 gradient-card">
              <h3 className="font-semibold mb-4">Campaign Preview</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Product:</span>
                  <span className="font-medium">{formData.productService || "Not set"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Industry:</span>
                  <span className="font-medium">{formData.targetIndustry || "Not set"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Roles:</span>
                  <span className="font-medium">{formData.jobRoles || "Not set"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Region:</span>
                  <span className="font-medium">{formData.region || "Not set"}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card">
              <h3 className="font-semibold mb-4">AI Features</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Profile analysis & scoring</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Personalized message generation</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Smart timing optimization</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Response tracking & analytics</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
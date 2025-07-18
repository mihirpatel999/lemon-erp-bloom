


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useEffect} from "react";

import { 
  Users, 
  TrendingUp, 
  Calendar, 
  Mail, 
  Phone, 
  FileText, 
  BarChart3,
  Target,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  DollarSign,
  ClipboardList,
  PieChart,
  FileSearch
} from "lucide-react";

const CRM = () => {
  const features = [
    {
      icon: Users,
      title: "Customer Management",
      description: "Complete customer database with detailed profiles, interaction history, and preferences tracking."
    },
    {
      icon: TrendingUp,
      title: "Sales Pipeline",
      description: "Visual sales pipeline to track leads from prospect to closing with automated follow-ups."
    },
    {
      icon: Calendar,
      title: "Task & Appointment Scheduling",
      description: "Integrated calendar system for managing appointments, meetings, and task deadlines."
    },
    {
      icon: PieChart,
      title: "Expense Tracking",
      description: "Comprehensive expense management with categorization and reporting."
    },
    {
      icon: FileSearch,
      title: "Live Stock Reports",
      description: "Real-time inventory tracking and stock level monitoring."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive reports and analytics to track performance and identify growth opportunities."
    }
  ];

  const benefits = [
    { icon: Zap, text: "Increase sales productivity by 40%" },
    { icon: Shield, text: "Secure cloud-based data storage" },
    { icon: Clock, text: "Save 2+ hours daily on admin tasks" },
    { icon: CheckCircle, text: "99.9% uptime guarantee" }
  ];

  const stats = [
    { value: "500+", label: "Active Users" },
    { value: "50K+", label: "Leads Managed" },
    { value: "95%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  const appFeatures = [
    {
      title: "Comprehensive Dashboard",
      description: "Real-time overview of your business metrics and performance indicators.",
      image: "/crm/Dashbord.jpeg"
    },
    {
      title: "Expense Management",
      description: "Track and categorize all business expenses with detailed reporting.",
      image: "/crm/Expence.jpeg"
    },
    {
      title: "Task & Activity Tracking",
      description: "Manage daily tasks, visits, and customer interactions efficiently.",
      image: "/crm/pic.jpeg"
    },
    {
      title: "Inventory Management",
      description: "Live stock reports with detailed product information and tracking.",
      image: "/crm/Stock.jpeg"
    }
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Meta Tags
    document.title = "CRM Business Management Software | Sales Expense Inventory Gujarat";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'All-in-one CRM & business management software. Sales tracking, expense management, inventory control for tile manufacturers in Gujarat.');
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://lemonsoftwaresolution.com/crm');

    // Open Graph Tags
    const updateMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMetaTag('og:title', 'CRM Business Management Software | Sales Expense Inventory Gujarat');
    updateMetaTag('og:description', 'All-in-one CRM & business management software. Sales tracking, expense management, inventory control.');
    updateMetaTag('og:image', 'https://lemonsoftwaresolution.com/og-image-crm.jpg');
    updateMetaTag('og:url', 'https://lemonsoftwaresolution.com/crm');
    updateMetaTag('og:type', 'product');

    // Twitter Card Tags
    const updateTwitterTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', 'CRM Business Management Software | Sales Expense Inventory Gujarat');
    updateTwitterTag('twitter:description', 'All-in-one CRM & business management software. Sales tracking, expense management, inventory control.');
    updateTwitterTag('twitter:image', 'https://lemonsoftwaresolution.com/og-image-crm.jpg');

    // JSON-LD Structured Data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Lemon CRM Business Management Suite",
      "description": "All-in-one business management solution with CRM, sales tracking, expense management, and inventory control",
      "url": "https://lemonsoftwaresolution.com/crm",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based, Mobile",
      "featureList": [
        "Customer Management",
        "Sales Pipeline",
        "Task & Appointment Scheduling",
        "Expense Tracking",
        "Live Stock Reports",
        "Analytics & Reporting"
      ],
      "screenshot": [
        "https://lemonsoftwaresolution.com/crm/Dashbord.jpeg",
        "https://lemonsoftwaresolution.com/crm/Expence.jpeg",
        "https://lemonsoftwaresolution.com/crm/pic.jpeg",
        "https://lemonsoftwaresolution.com/crm/Stock.jpeg"
      ],
      "applicationSubCategory": "CRM Software",
      "provider": {
        "@type": "Organization",
        "name": "Lemon Software Solution"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "500"
      }
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Business Management Suite
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              All-in-One Business
              <span className="text-primary block">Management Solution</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Manage your sales, expenses, inventory, and customer relationships in one powerful platform designed for growing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Explore Our Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed to streamline your business operations and boost productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {appFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-64 object-contain bg-gray-50 p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Grow
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed for your business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Complete Business Toolkit
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick access to all the modules you need for daily operations.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <img 
              src="/crm/task.jpeg"
              alt="App Navigation Menu" 
              className="w-full h-auto rounded-lg border border-gray-200"
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Intuitive Navigation</h3>
              <p className="text-muted-foreground">Access all features with our clean and organized menu structure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Businesses Love Our Solution
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who trust our solution to manage their daily operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact" className="flex items-center">
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRM;
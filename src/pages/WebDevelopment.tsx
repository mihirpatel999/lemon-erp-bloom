import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect} from "react";
import { 
  Globe, 
  Smartphone, 
  Zap, 
  Shield, 
  Search,
  Palette,
  Code,
  Headphones,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: "Business Websites",
      description: "Professional corporate websites that showcase your tile manufacturing business and attract customers.",
      features: ["Company profile pages", "Product catalogs", "Contact forms", "Business information"]
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first websites that look perfect on all devices - desktop, tablet, and smartphone.",
      features: ["Mobile optimization", "Cross-device compatibility", "Touch-friendly interface", "Fast loading"]
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Unique designs tailored to your brand and the tile industry aesthetic.",
      features: ["Brand-focused design", "Industry-specific themes", "Custom graphics", "Professional layouts"]
    },
    {
      icon: Code,
      title: "Modern Technology",
      description: "Built using latest web technologies for performance, security, and reliability.",
      features: ["React.js development", "Fast performance", "Secure coding", "Modern frameworks"]
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Continuous maintenance and support to keep your website running smoothly.",
      features: ["Regular updates", "Technical support", "Content management", "Security monitoring"]
    }
  ];


  const webFeatures = [
    "Professional Domain & Hosting Setup",
    "SSL Certificate for Security",
    "Google Analytics Integration",
    "Contact Forms & Inquiry Management",
    "Social Media Integration",
    "Content Management System",
    "Search Engine Optimization",
    "Mobile-Responsive Design",
    "Fast Loading Speed",
    "Regular Backups & Updates"
  ];
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-yellow-300">Website Development</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Custom websites for tile manufacturers - showcase your products and grow your business online
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Your Website Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Website Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Your Tile Business Needs a Website
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Online Visibility</h3>
                    <p className="text-muted-foreground">Customers search online for tile suppliers. Be found when they need you.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expand Market Reach</h3>
                    <p className="text-muted-foreground">Reach customers beyond Morbi and Gujarat - expand your business nationwide.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Palette className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Showcase Products</h3>
                    <p className="text-muted-foreground">Display your tile collections with high-quality images and detailed specifications.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Build Credibility</h3>
                    <p className="text-muted-foreground">Professional website establishes trust and credibility with potential customers.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <Card className="shadow-large">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Complete Package Includes</h3>
                  <div className="space-y-3">
                    {webFeatures.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="gradient" size="lg" className="w-full mt-6" asChild>
                    <Link to="/contact">Start Your Website Project</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-br from-yellow-300/20 via-green-300/20 to-emerald-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Website Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web solutions designed specifically for tile and ceramic manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

 
      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Your Business Online?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join successful tile manufacturers who have boosted their business with professional websites. 
            Get a custom quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Free Website Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              Call +919979747563
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
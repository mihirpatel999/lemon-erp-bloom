import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Building, Shield, Zap, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Building,
      title: "10+ Years Experience",
      description: "Decade of expertise in ERP development for manufacturing industries"
    },
    {
      icon: Users,
      title: "Trusted by Major Factories",
      description: "Serving leading ceramic and tile manufacturers in Morbi region"
    },
    {
      icon: Shield,
      title: "Custom ERP Modules",
      description: "Tailored solutions designed for your specific business needs"
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Complete digital solutions including custom website development"
    },
    {
      icon: Zap,
      title: "Fast Deployment",
      description: "Quick implementation with minimal business disruption"
    },
    {
      icon: Award,
      title: "Secure & Trusted",
      description: "Enterprise-grade security and reliability for your data"
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "10+", label: "Happy Clients" },
    { number: "50+", label: "ERP Modules" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Leading ERP Solutions for
              <span className="block text-yellow-300">Tile & Ceramic Industry</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Trusted by major manufacturers in Morbi with 10+ years of experience. 
              Custom ERP modules designed for your business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
                <Link to="/erp-modules">View ERP Modules</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Lemon Software?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive ERP solutions tailored for the tile and ceramic industry,
              backed by years of experience and trusted by leading manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              Major ceramic and tile manufacturers in Morbi trust our ERP solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <Card className="shadow-medium">
  <CardContent className="p-6 text-center">
    {/* Logo Image */}
    <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow">
      <img
        src="/lovable-uploads/crystal.png"
        alt="Crystal Logo"
        className="w-16 h-16 object-contain"
      />
    </div>

    {/* Text Content */}
    <h3 className="text-xl font-semibold mb-2">Crystal Ceramic Industries</h3>
    <p className="text-muted-foreground">
      Leading ceramic manufacturer using our complete ERP solution
    </p>
  </CardContent>
</Card>

<Card className="shadow-medium">
  <CardContent className="p-6 text-center">
    {/* Logo Image Replacing "10+" */}
    <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow">
      <img
        src="/lovable-uploads/adicon.png"
        alt="Morbi Factories Logo"
        className="w-16 h-16 object-contain"
      />
    </div>

    {/* Text Content */}
    <h3 className="text-xl font-semibold mb-2">Morbi Factories</h3>
    <p className="text-muted-foreground">
      Tile and ceramic factories actively using our ERP systems
    </p>
  </CardContent>
</Card>

            <Card className="shadow-medium">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Success Rate</h3>
                <p className="text-muted-foreground">Every implementation delivered on time and within budget</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join Crystal Ceramic Industries and other leading tile manufacturers who trust Lemon Software for their ERP needs.
            Get a free consultation and see how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your ERP Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/clients">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
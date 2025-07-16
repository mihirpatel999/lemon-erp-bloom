import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Eye, Award, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect} from "react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide cutting-edge ERP solutions that streamline operations and drive growth for manufacturing businesses, especially in the tile and ceramic industry."
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To be the leading ERP solution provider in Gujarat, known for innovation, reliability, and exceptional customer service."
    },
    {
      icon: Award,
      title: "Values",
      description: "Quality, Innovation, Trust, and Customer Success drive everything we do at Lemon Software Solution."
    }
  ];

  const milestones = [
    { year: "2014", event: "Founded in Ahmedabad with vision to serve manufacturing sector" },
    { year: "2016", event: "First major client - Crystal Tiles implements our ERP solution" },
    { year: "2018", event: "Expanded to serve 25+ tile factories in Morbi region" },
    { year: "2020", event: "Launched website development services for existing clients" },
    { year: "2022", event: "Reached 50+ happy clients milestone" },
    { year: "2024", event: "10 years of excellence in ERP development" }
  ];

  const teamStats = [
    { number: "15+", label: "Expert Developers" },
    { number: "5+", label: "Industry Specialists" },
    { number: "24/7", label: "Technical Support" },
    { number: "10+", label: "Years Experience" }
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
              About <span className="text-yellow-300">Lemon Software Solution</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              10+ years of excellence in ERP development, serving the tile and ceramic 
              industry with innovative, reliable, and customized solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Journey Since 2014
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in Ahmedabad, Gujarat, Lemon Software Solution started with a simple yet powerful vision: 
                to create ERP solutions that truly understand the unique needs of the manufacturing sector, 
                particularly the tile and ceramic industry.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the past decade, we've grown from a small team of passionate developers to become 
                the trusted ERP partner for major manufacturers in Morbi. Our success is measured by the 
                success of our clients, including industry leaders like Crystal Tiles.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Est. 2014</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-semibold">50+ Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold">100% Success</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <Card className="shadow-large">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Company Milestones</h3>
                  <div className="space-y-4">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-16 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {milestone.year}
                        </div>
                        <p className="text-muted-foreground pt-1">{milestone.event}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles and values that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated professionals committed to your success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Experience You Can Trust
          </h2>
          <p className="text-xl mb-8 opacity-90">
            With 10+ years of proven expertise, we're ready to help your business achieve 
            new levels of efficiency and growth.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start Your Journey With Us
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
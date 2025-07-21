import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Building, MapPin, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect} from "react";

const Clients = () => {
  const testimonials = [
    {
      company: "Crystal Ceramic Industries Ltd",
      logo: "CCI",
      location: "Morbi, Gujarat",
      rating: 5,
      testimonial: "LEMON SOFTWARE SOLUTION's ERP solution completely transformed our production planning and inventory management. We've seen 30% improvement in efficiency since implementation.",
      contact: "J.R.Patel",
      designation: "Management Head",
      modules: ["Complete ERP Suite","Inventory", "Production", "Quality Control", "Sales"]
    },
    {
      company: "Adicon Ceramica Tiles Private Limited",
      logo: "ACTPL",
      location: "Morbi, Gujarat",
      rating: 5,
      testimonial: "The custom ERP modules perfectly fit our business needs. The support team is excellent and always available when needed. Highly recommended!",
      contact: "Sarthak Patel",
      designation: "M.D",
      modules: ["Complete ERP Suite", "Financial Management", "HR"]
    },
    {
      company: "Ara Tiles Private Limited",
      logo: "ATL",
      location: "Jaipur, Rajasthan",
      rating: 5,
      testimonial: "Fast deployment and minimal business disruption. The system was up and running within 2 weeks. ROI was visible within 3 months.",
      contact: "Subham Bajya",
      designation: "Management Head",
      modules: ["Complete ERP Suite","Sales", "Purchase", "Inventory", "Analytics"]
    }
  ];

  const clientStats = [
    { number: "50+", label: "Happy Clients", description: "Satisfied customers across Gujarat" },
    { number: "100%", label: "Success Rate", description: "Every project delivered successfully" },
    { number: "2 weeks", label: "Avg Deployment", description: "Quick implementation" },
    { number: "30%", label: "Efficiency Gain", description: "Average improvement reported" }
  ];

  const clientLogos = [
    { name: "Crystal Ceramic Industries Ltd", size: "medium", image: "/lovable-uploads/crystal.png" },
    { name: "Adicon Ceramica Tiles Private Limited", size: "medium", image: "/lovable-uploads/adicon.png" },
    { name: "Amazoone Ceramics Limited", size: "medium", image: "/lovable-uploads/Amazoone Ceramics Limited.png" },
    { name: "Bluezone Vitrified Pvt Ltd", size: "medium", image: "/lovable-uploads/Bluezone Vitrified Pvt Ltd.png" },
    { name: "Orinda Industries LLP", size: "medium", image: "/lovable-uploads/Orinda Industries LLP.png" },
    { name: "Ara Tiles Private Limited", size: "medium", image: "/lovable-uploads/ARA.png" }, // Replace with actual image if available
    { name: "Future Ceramic Pvt Ltd", size: "medium", image: "/lovable-uploads/future.png" },
    { name: "AGL Sanitaryware Pvt Ltd", size: "medium", image: "/lovable-uploads/AGL Sanitaryware Pvt Ltd.png" }, // Replace with actual image if available
    { name: "Sega Granito LLP", size: "medium", image: "/lovable-uploads/Sega Granito LLP.png" },
    { name: "Rey Cera Exim", size: "medium", image: "/lovable-uploads/Rey Cera Exim.png" },
  ];

  const benefits = [
    "Reduced manual errors by 90%",
    "Improved inventory accuracy to 99%",
    "Faster order processing by 50%",
    "Real-time production visibility",
    "Better cost control and profitability",
    "Enhanced customer satisfaction"
  ];


   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Meta Tags
    document.title = "Client Success Stories | Crystal Tiles Adicon & 50+ Happy Clients";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Real client success stories from Crystal Tiles, Adicon Ceramica & 50+ tile manufacturers. See how our ERP solutions transformed their business operations.');
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://lemonsoftwaresolution.com/clients');

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

    updateMetaTag('og:title', 'Client Success Stories | Crystal Tiles Adicon & 50+ Happy Clients');
    updateMetaTag('og:description', 'Real client success stories from Crystal Tiles, Adicon Ceramica & 50+ tile manufacturers.');
    updateMetaTag('og:image', 'https://lemonsoftwaresolution.com/og-image-clients.jpg');
    updateMetaTag('og:url', 'https://lemonsoftwaresolution.com/clients');
    updateMetaTag('og:type', 'website');

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
    updateTwitterTag('twitter:title', 'Client Success Stories | Crystal Tiles Adicon & 50+ Happy Clients');
    updateTwitterTag('twitter:description', 'Real client success stories from Crystal Tiles, Adicon Ceramica & 50+ tile manufacturers.');
    updateTwitterTag('twitter:image', 'https://lemonsoftwaresolution.com/og-image-clients.jpg');

    // JSON-LD Structured Data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Client Success Stories - Lemon Software Solution",
      "description": "Real testimonials and success stories from tile and ceramic manufacturers using our ERP solutions",
      "url": "https://lemonsoftwaresolution.com/clients",
      "review": [
        {
          "@type": "Review",
          "reviewBody": "LEMON SOFTWARE SOLUTION's ERP solution completely transformed our production planning and inventory management. We've seen 30% improvement in efficiency since implementation.",
          "author": {
            "@type": "Person",
            "name": "J.R.Patel"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "itemReviewed": {
            "@type": "Organization",
            "name": "Crystal Ceramic Industries Ltd"
          }
        },
        {
          "@type": "Review",
          "reviewBody": "The custom ERP modules perfectly fit our business needs. The support team is excellent and always available when needed.",
          "author": {
            "@type": "Person",
            "name": "Sarthak Patel"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "itemReviewed": {
            "@type": "Organization",
            "name": "Adicon Ceramica Tiles Private Limited"
          }
        }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "Lemon Software Solution"
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Client <span className="text-yellow-300">Success Stories</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Trusted by leading tile and ceramic manufacturers in Morbi and across Gujarat
            </p>
            <div className="flex items-center justify-center space-x-6 text-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span>50+ Happy Clients</span>
                </div>
              <div className="flex items-center space-x-2">
                <Building className="w-5 h-5 text-yellow-300" />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientStats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              Major tile and ceramic manufacturers across Gujarat trust our solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-24 h-24 flex items-center justify-center mx-auto mb-2 rounded-lg shadow border bg-white">
                  {client.image ? (
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-contain p-2"
                      onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.textContent = client.name[0]; }}
                    />
                  ) : (
                    <span className="text-3xl font-bold text-gray-500">{client.name[0]}</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from tile manufacturers who have transformed their operations with our ERP solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  {/* Company Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{testimonial.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.company}</h3>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="mb-4">
                    <Quote className="w-6 h-6 text-primary mb-2" />
                    <p className="text-muted-foreground italic">{testimonial.testimonial}</p>
                  </div>

                  {/* Contact */}
                  <div className="border-t border-border pt-4 mb-4">
                    <p className="font-semibold text-sm">{testimonial.contact}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
                  </div>

                  {/* Modules Used */}
                  <div>
                    <p className="text-sm font-medium mb-2">Modules Implemented:</p>
                    <div className="flex flex-wrap gap-1">
                      {testimonial.modules.map((module, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Achieved */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Benefits Our Clients Achieved
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Measurable improvements that our ERP solutions have delivered to tile manufacturers
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-soft animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Success Stories
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to transform your tile manufacturing business like Crystal Tiles and other industry leaders?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your Success Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/erp-modules">View ERP Modules</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
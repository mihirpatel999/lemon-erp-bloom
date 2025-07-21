import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Building,
  Users,
  Globe,
  CheckCircle,
  MessageCircle
} from "lucide-react";

// ... existing code ...
const API_URL = import.meta.env.VITE_API_URL || "https://lemon-software-website.onrender.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: ""
          });
        }, 3000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Ahmedabad, Gujarat, India", "Serving clients across India"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+919979747563", "Available 10 AM - 6 PM"],
      color: "text-secondary"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["lemonsoftinfo@gmail.com"],
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 10:00 AM - 6:00 PM", "Saturday,Sunday: By appointment"],
      color: "text-secondary"
    }
  ];

  const serviceOptions = [
    "Custom ERP Development",
    "ERP Module Implementation",
    "Website Development",
    "ERP Support & Maintenance",
    "Business Consultation",
    "Other"
  ];

  const quickStats = [
    { icon: Building, label: "10+ Years", desc: "Experience" },
    { icon: Users, label: "50+ Clients", desc: "Satisfied" },
    { icon: Globe, label: "100%", desc: "Success Rate" },
    { icon: CheckCircle, label: "24/7", desc: "Support" }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Meta Tags
    document.title = "Contact ERP Consultation | Call +91-9979747563 Ahmedabad Gujarat";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Contact Lemon Software for ERP consultation. Call +91-9979747563, email lemonsoftinfo@gmail.com. Free consultation for tile manufacturers in Gujarat.');
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://lemonsoftwaresolution.com/contact');

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

    updateMetaTag('og:title', 'Contact ERP Consultation | Call +91-9979747563 Ahmedabad Gujarat');
    updateMetaTag('og:description', 'Contact Lemon Software for ERP consultation. Call +91-9979747563, email lemonsoftinfo@gmail.com.');
    updateMetaTag('og:image', 'https://lemonsoftwaresolution.com/og-image-contact.jpg');
    updateMetaTag('og:url', 'https://lemonsoftwaresolution.com/contact');
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
    updateTwitterTag('twitter:title', 'Contact ERP Consultation | Call +91-9979747563 Ahmedabad Gujarat');
    updateTwitterTag('twitter:description', 'Contact Lemon Software for ERP consultation. Call +91-9979747563, email lemonsoftinfo@gmail.com.');
    updateTwitterTag('twitter:image', 'https://lemonsoftwaresolution.com/og-image-contact.jpg');

    // JSON-LD Structured Data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Lemon Software Solution",
      "description": "Get in touch with our ERP experts for consultation and custom software solutions",
      "url": "https://lemonsoftwaresolution.com/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Lemon Software Solution",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-9979747563",
            "contactType": "sales",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi", "Gujarati"]
          },
          {
            "@type": "ContactPoint",
            "email": "lemonsoftinfo@gmail.com",
            "contactType": "customer support"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        },
        "openingHours": "Mo-Fr 10:00-18:00",
        "serviceArea": {
          "@type": "Place",
          "name": "India"
        }
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
              Get In <span className="text-yellow-300">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Ready to transform your tile business with our ERP solutions? 
              Let's discuss your requirements and provide a custom solution.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-lg font-bold">{stat.label}</div>
                  <div className="text-sm opacity-75">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <Card className="shadow-large">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name *</label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            required
                            className="transition-all focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number *</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+919979747563"
                            required
                            className="transition-all focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Email Address *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                            className="transition-all focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Company Name</label>
                          <Input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your tile company"
                            className="transition-all focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Service Required *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Message *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your requirements..."
                          rows={4}
                          required
                          className="transition-all focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <Button type="submit" variant="gradient" size="lg" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Get in touch with our team for ERP solutions, website development, 
                    or any business consultation. We're here to help your tile business grow.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Contact */}
                <Card className="shadow-large bg-gradient-primary text-white">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                    <p className="mb-4 opacity-90">Call us directly for urgent requirements</p>
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 w-full"
                        asChild
                      >
                        <a href="https://wa.me/919979747563" target="_blank" rel="noopener noreferrer">
                          <Phone className="w-4 h-4 mr-2" />
                          +919979747563
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 w-full"
                        asChild
                      >
                        <a href="https://wa.me/919979747563" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp पर चैट करें
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Service Areas */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Based in Ahmedabad, we serve tile and ceramic manufacturers across Gujarat, 
              with special focus on the Morbi industrial region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-medium text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gujarat</h3>
                <p className="text-muted-foreground">Our headquarters and main development center</p>
              </CardContent>
            </Card>

            <Card className="shadow-medium text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rajasthan</h3>
                <p className="text-muted-foreground">Major client base in the ceramic capital of India</p>
              </CardContent>
            </Card>

            <Card className="shadow-medium text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">All India</h3>
                <p className="text-muted-foreground">Serving manufacturing businesses across the All Our India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How long does ERP implementation take?",
                a: "Typically 2-4 weeks depending on the modules and customization required. We ensure minimal business disruption."
              },
              {
                q: "Do you provide training for the ERP system?",
                a: "Yes, we provide comprehensive training for your team and ongoing support to ensure smooth operations."
              },
              {
                q: "Can you integrate with existing systems?",
                a: "Yes, our ERP can integrate with your existing systems and databases for seamless data migration."
              },
              {
                q: "What are the costs for ERP development?",
                a: "Costs vary based on modules and customization. Contact us for a detailed quote based on your requirements."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-medium">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
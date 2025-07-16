import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect} from "react";
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  Factory, 
  ClipboardCheck, 
  DollarSign,
  Users,
  BarChart3,
  Truck,
  FileText,
  Settings,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";



const ERPModules = () => {
  const coreModules = [
    {
      icon: Package,
      title: "Inventory Management",
      description: "Complete stock control with real-time tracking, automatic reorder points, and batch management for tiles and raw materials.",
      features: ["Real-time stock tracking", "Batch & serial number management", "Automatic reorder alerts", "Multi-location inventory"]
    },
    {
      icon: ShoppingCart,
      title: "Sales Management",
      description: "Comprehensive sales process from quotation to delivery with customer management and sales analytics.",
      features: ["Quote to order processing", "Customer relationship management", "Sales team performance tracking", "Price list management"]
    },
    {
      icon: TrendingUp,
      title: "Purchase Management",
      description: "Streamlined procurement process with vendor management, purchase orders, and cost optimization.",
      features: ["Vendor management", "Purchase order automation", "Cost comparison", "Approval workflows"]
    },
    {
      icon: Factory,
      title: "Production Planning",
      description: "Optimize production schedules, track work orders, and manage production capacity for tile manufacturing.",
      features: ["Production scheduling", "Work order management", "Capacity planning", "Production cost tracking"]
    },
   {
  icon: ClipboardCheck,
  title: "Account Management",
  description: "Manage your customer accounts, vendors, billing history, and outstanding balances all in one centralized ERP module.",
  features: [
    "Customer & vendor accounts",
    "Credit/debit note tracking",
    "Ledger summary",
    "Aging analysis reports"
  ]
},

    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Complete financial control with accounting, billing, payment tracking, and financial reporting.",
      features: ["Accounts payable/receivable", "Invoice management", "Payment tracking", "Financial reports"]
    }
  ];

  const additionalModules = [
    {
      icon: Users,
      title: "HR Management",
      description: "Employee management, payroll, attendance, and performance tracking."
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Advanced reporting and dashboard for business intelligence and decision making."
    },
    {
      icon: Truck,
      title: "Logistics & Dispatch",
      description: "Transportation management, delivery tracking, and logistics optimization."
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Digital document storage, workflow automation, and version control."
    },
    {
      icon: Settings,
      title: "System Administration",
      description: "User management, role-based access, system configuration, and security."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security, data backup, and compliance management."
    }
  ];

  const industries = [
    "Crystal Ceramic Industries Ltd",
    "Adicon Ceramica Tiles  Pvt Ltd", 
    "Ara Tiles Private Limited",
    "Agl Sanitaryware Pvt Ltd",
    "Future Ceramic Pvt Ltd",
    "Bluezone Vitrified Pvt Ltd"
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
              Lemon <span className="text-yellow-300">ERP Modules</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Complete ERP solution designed specifically for tile and ceramic manufacturing industry
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request Module Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core ERP Modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential modules that form the backbone of your ERP system, specifically designed for tile manufacturing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreModules.map((module, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                  <p className="text-muted-foreground mb-4">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
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

      {/* Additional Modules */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Extend your ERP capabilities with these powerful additional modules for complete business management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalModules.map((module, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-all duration-300 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                  <p className="text-muted-foreground">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our ERP modules are specifically designed for various segments of the tile and ceramic industry.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gradient-primary text-white p-4 rounded-lg text-center font-medium animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Our ERP Modules Stand Out
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Industry-Specific Design</h3>
                    <p className="text-muted-foreground">Built specifically for tile manufacturing with deep understanding of industry processes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Modular Architecture</h3>
                    <p className="text-muted-foreground">Choose only the modules you need and add more as your business grows.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Seamless Integration</h3>
                    <p className="text-muted-foreground">All modules work together seamlessly, sharing data and providing unified experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Customizable Workflows</h3>
                    <p className="text-muted-foreground">Adapt the system to match your unique business processes and requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <Card className="shadow-large">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today</h3>
                  <div className="space-y-4 text-center">
                    <p className="text-muted-foreground">
                      Ready to transform your tile manufacturing business with our comprehensive ERP modules?
                    </p>
                    <div className="space-y-3">
                      <Button variant="gradient" size="lg" className="w-full" asChild>
                        <Link to="/contact">Request Free Consultation</Link>
                      </Button>
                      <Button variant="outline" size="lg" className="w-full" asChild>
                        <Link to="/clients">View Success Stories</Link>
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Call us directly: <strong>+919723822139</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPModules;
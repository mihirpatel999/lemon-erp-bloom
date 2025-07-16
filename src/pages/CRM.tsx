// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Link } from "react-router-dom";
// import { 
//   Users, 
//   TrendingUp, 
//   Calendar, 
//   Mail, 
//   Phone, 
//   FileText, 
//   BarChart3,
//   Target,
//   Zap,
//   Shield,
//   Clock,
//   CheckCircle,
//   ArrowRight
// } from "lucide-react";

// const CRM = () => {
//   const features = [
//     {
//       icon: Users,
//       title: "Customer Management",
//       description: "Complete customer database with detailed profiles, interaction history, and preferences tracking."
//     },
//     {
//       icon: TrendingUp,
//       title: "Sales Pipeline",
//       description: "Visual sales pipeline to track leads from prospect to closing with automated follow-ups."
//     },
//     {
//       icon: Calendar,
//       title: "Task & Appointment Scheduling",
//       description: "Integrated calendar system for managing appointments, meetings, and task deadlines."
//     },
//     {
//       icon: Mail,
//       title: "Live Stock Report",
//       description: "Show Live Stock Reports."
//     },
//     {
//       icon: BarChart3,
//       title: "Analytics & Reporting",
//       description: "Comprehensive reports and analytics to track performance and identify growth opportunities."
//     },
//     {
//       icon: Target,
//       title: "Lead Management",
//       description: "Capture, qualify, and nurture leads with automated scoring and assignment systems."
//     }
//   ];

//   const benefits = [
//     { icon: Zap, text: "Increase sales productivity by 40%" },
//     { icon: Shield, text: "Secure cloud-based data storage" },
//     { icon: Clock, text: "Save 2+ hours daily on admin tasks" },
//     { icon: CheckCircle, text: "99.9% uptime guarantee" }
//   ];

//   const stats = [
//     { value: "500+", label: "Active Users" },
//     { value: "50K+", label: "Leads Managed" },
//     { value: "95%", label: "Customer Satisfaction" },
//     { value: "24/7", label: "Support Available" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
//       {/* Hero Section */}
//       <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-7xl">
//           <div className="text-center">
//             <Badge variant="secondary" className="mb-4">
//               Customer Relationship Management
//             </Badge>
//             <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
//               Powerful CRM
//               <span className="text-primary block">for Modern Business</span>
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
//               Streamline your customer relationships, boost sales performance, and grow your business with our comprehensive CRM solution.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" className="text-lg px-8 py-6">
//                 Start Free Trial
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button variant="outline" size="lg" className="text-lg px-8 py-6">
//                 View Demo
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
//         <div className="mx-auto max-w-7xl">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
//                 <div className="text-muted-foreground">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Screenshots Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//               See Our CRM in Action
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Explore the intuitive interface and powerful features that make our CRM the choice of industry leaders.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//             <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
//               <CardContent className="p-0">
//                 <div className="relative">
//                   <img 
//                     src="/lovable-uploads/48755310-2355-46f6-b14d-ef8b704884d0.png" 
//                     alt="CRM Dashboard Screenshot" 
//                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-foreground mb-2">Dashboard Overview</h3>
//                   <p className="text-muted-foreground">Get a complete view of your sales pipeline, customer interactions, and business metrics in one unified dashboard.</p>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
//               <CardContent className="p-0">
//                 <div className="relative">
//                   <img 
//                     src="/lovable-uploads/6b9a2d3b-c375-443d-890b-e8bbad34c31a.png" 
//                     alt="CRM Customer Management Screenshot" 
//                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-foreground mb-2">Customer Management</h3>
//                   <p className="text-muted-foreground">Manage customer profiles, track interactions, and maintain detailed records for personalized service delivery.</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
//         <div className="mx-auto max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//               Powerful Features for Every Business
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Everything you need to manage customer relationships and drive sales growth.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                 <CardContent className="p-8">
//                   <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
//                     <feature.icon className="h-6 w-6 text-primary" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
//                   <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//               Why Choose Our CRM?
//             </h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="flex items-center space-x-4 p-6 bg-white/50 rounded-lg backdrop-blur-sm">
//                 <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                   <benefit.icon className="h-5 w-5 text-primary" />
//                 </div>
//                 <span className="text-lg font-medium text-foreground">{benefit.text}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
//         <div className="mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
//             Ready to Transform Your Business?
//           </h2>
//           <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//             Join thousands of businesses who trust our CRM to manage their customer relationships and drive growth.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
//               Start Your Free Trial
//             </Button>
//             <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
//               <Link to="/contact" className="flex items-center">
//                 Contact Sales
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CRM;





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
      image: "/crm/Task.jpeg"
    },
    {
      title: "Inventory Management",
      description: "Live stock reports with detailed product information and tracking.",
      image: "/crm/Stock.jpeg"
    }
  ];
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
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
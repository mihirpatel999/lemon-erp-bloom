import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "ERP Modules", href: "/erp-modules" },
    { name: "CRM", href: "/crm" },
    { name: "Client Stories", href: "/clients" },
    { name: "Website Development", href: "/web-development" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/lovable-uploads/051503af-cba1-45fd-bd86-ed0bf15f35e8.png" 
                alt="Lemon Software Logo" 
                className="w-12 h-12 object-contain"
                style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' }}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Lemon Software Solution</h1>
              <p className="text-xs text-muted-foreground">Complete ERP Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="gradient" 
              size="sm"
              asChild
            >
              <a href="tel:+919979747563">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              asChild
            >
              <a href="https://wa.me/919979747563" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with us
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-accent rounded-md ${
                    isActive(item.href) ? "text-primary bg-accent" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button variant="gradient" size="sm" className="w-full" asChild>
                  <a href="tel:+919979747563">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://wa.me/919979747563" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
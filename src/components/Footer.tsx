import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg p-2">
                <img 
                  src="/lovable-uploads/051503af-cba1-45fd-bd86-ed0bf15f35e8.png" 
                  alt="Lemon Software Logo" 
                  className="w-10 h-10 object-contain"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Lemon Software Solution</h3>
                <p className="text-sm text-gray-400">Complete ERP Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Leading ERP software development company with 10+ years of experience, 
              specializing in solutions for tile and ceramic industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/erp-modules" className="text-gray-300 hover:text-primary transition-colors">ERP Modules</Link></li>
              <li><Link to="/clients" className="text-gray-300 hover:text-primary transition-colors">Client Stories</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Custom ERP Development</span></li>
              <li><span className="text-gray-300">Inventory Management</span></li>
              <li><span className="text-gray-300">Production Planning</span></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-primary transition-colors">Website Development</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">Ahmedabad, Gujarat</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 9979747563</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 9998815125</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">lemonsoftinfo@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">10+ Years Experience</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Lemon Software Solution. All rights reserved. Trusted by major tile manufacturers in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Lemon Software's assistant. Ask me about our ERP solutions, location, contact details, or services!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickResponses = {
    location: "Lemon Software is based in Ahmedabad, Gujarat.",
    contact: "You can reach us at +91  9979747563.",
    website: "Yes, we build custom websites for our clients along with ERP solutions.",
    erp: "Yes, we specialize in ERP solutions for tile factories and other manufacturing businesses.",
    experience: "We have 10+ years of experience in ERP development.",
    clients: "We serve major ceramic factories in Morbi, including Crystal Tiles.",
    modules: "Our ERP includes Inventory, Sales, Purchase, Production, Account Management, and more modules.",
    deployment: "We offer fast deployment with secure and trusted systems.",
   
  };

  const getResponse = (input: string): string => {
    const query = input.toLowerCase();
    
    if (query.includes("where") || query.includes("location") || query.includes("based")) {
      return quickResponses.location;
    }
    if (query.includes("contact") || query.includes("phone") || query.includes("number")) {
      return quickResponses.contact;
    }
    if (query.includes("website") || query.includes("web development") || query.includes("build websites")) {
      return quickResponses.website;
    }
    if (query.includes("erp") || query.includes("software") || query.includes("system")) {
      return quickResponses.erp;
    }
    if (query.includes("experience") || query.includes("years") || query.includes("old")) {
      return quickResponses.experience;
    }
    if (query.includes("client") || query.includes("customer") || query.includes("crystal") || query.includes("morbi")) {
      return quickResponses.clients;
    }
    if (query.includes("module") || query.includes("feature") || query.includes("inventory") || query.includes("sales")) {
      return quickResponses.modules;
    }
    if (query.includes("deployment") || query.includes("fast") || query.includes("secure")) {
      return quickResponses.deployment;
    }
     

    return "Thank you for your question! For detailed information, please call us at +91 9979747563  or visit our Contact page.";
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-xl z-50 animate-float ${
          isOpen ? "bg-destructive hover:bg-destructive/90" : "bg-gradient-primary"
        }`}
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-xl z-40 animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-primary text-white p-4 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <div>
                <h3 className="font-semibold">Lemon Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isBot
                      ? "bg-muted text-muted-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our services..."
                className="flex-1 px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button onClick={sendMessage} size="icon" className="shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatWidget;
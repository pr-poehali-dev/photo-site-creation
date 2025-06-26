import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const menuItems = [
    { name: "О НАС", href: "#about", id: "about" },
    { name: "НАШИ ПРЕИМУЩЕСТВА", href: "#advantages", id: "advantages" },
    { name: "ИНТЕРЬЕР", href: "#interior", id: "interior" },
    { name: "УСЛОВИЯ", href: "#conditions", id: "conditions" },
    { name: "ОТЗЫВЫ", href: "#reviews", id: "reviews" },
    { name: "АНКЕТА", href: "#form", id: "form" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "КОНТАКТЫ", href: "#contacts", id: "contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) =>
        document.getElementById(item.id),
      );
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm ${className}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="text-white font-bold text-lg">
                SAINTS & SINNERS
              </div>
              <div className="text-xs text-gray-400">WEB STUDIO</div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-pink-500"
                      : "text-gray-300 hover:text-pink-400"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-pink-400 transition-colors"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-16 left-4 right-4 bg-gray-900 rounded-lg border border-gray-800 shadow-2xl animate-fade-in">
            <div className="py-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleMenuClick}
                  className={`block px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-pink-500 bg-pink-500/10"
                      : "text-gray-300 hover:text-pink-400 hover:bg-gray-800"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

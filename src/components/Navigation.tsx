import React from "react";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const menuItems = [
    { name: "О НАС", href: "#about", active: true },
    { name: "НАШИ ПРЕИМУЩЕСТВА", href: "#advantages" },
    { name: "ИНТЕРЬЕР", href: "#interior" },
    { name: "УСЛОВИЯ", href: "#conditions" },
    { name: "ОТЗЫВЫ", href: "#reviews" },
    { name: "АНКЕТА", href: "#form" },
    { name: "FAQ", href: "#faq" },
    { name: "КОНТАКТЫ", href: "#contacts" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="text-white font-bold text-lg">SAINTS & SINNERS</div>
            <div className="text-xs text-gray-400">WEB STUDIO</div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  item.active
                    ? "text-pink-500"
                    : "text-gray-300 hover:text-pink-400"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Брендинг */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-white font-bold text-xl">
                SAINTS & SINNERS
              </div>
            </div>
            <div className="text-pink-500 text-sm font-medium">WEB STUDIO</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Создаем уникальные веб-решения с дерзким дизайном и безупречной
              функциональностью
            </p>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Icon name="Mail" size={16} />
                <span className="text-sm">hello@saintssinners.studio</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Icon name="Phone" size={16} />
                <span className="text-sm">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Icon name="MapPin" size={16} />
                <span className="text-sm">Москва, Россия</span>
              </div>
            </div>
          </div>

          {/* Социальные сети */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-gray-700 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-gray-700 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-gray-700 transition-colors"
              >
                <Icon name="Github" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Saints & Sinners Web Studio. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-pink-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

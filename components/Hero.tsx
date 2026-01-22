import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-rofan-dark">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Atmospheric Background" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rofan-dark via-rofan-dark/50 to-rofan-dark"></div>
      </div>

      {/* Content Image */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 animate-fade-in-up w-full max-w-5xl">
        <img 
          src="https://i.postimg.cc/qB22Ls70/Gemini-Generated-Image-qlnx8pqlnx8pqlnx-(6).png" 
          alt="The Grand Duke of Arze Title" 
          className="w-full h-auto object-contain drop-shadow-[0_4px_30px_rgba(212,175,55,0.2)]"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-rofan-gold" size={32} />
      </div>
    </div>
  );
};

export default Hero;
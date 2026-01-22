import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <span className="block text-rofan-gold text-sm tracking-[0.3em] uppercase mb-2 animate-pulse-slow">{title}</span>
      <h2 className="text-3xl md:text-5xl font-display font-bold text-white relative inline-block pb-4">
        {subtitle}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-rofan-gold/50 rounded-full"></span>
      </h2>
      <div className="mt-4 flex justify-center items-center space-x-2 text-rofan-gold/30">
        <div className="h-px w-12 bg-current"></div>
        <div className="w-2 h-2 rotate-45 border border-current"></div>
        <div className="h-px w-12 bg-current"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
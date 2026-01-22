import React from 'react';
import { SectionType, NavItem } from '../types';
import { Crown } from 'lucide-react';

interface NavigationProps {
  activeSection: SectionType;
}

const navItems: NavItem[] = [
  { id: SectionType.INTRO, label: '서막' },
  { id: SectionType.GEOGRAPHY, label: '제국' },
  { id: SectionType.WORLD, label: '세계관' },
  { id: SectionType.CHARACTER, label: '대공' },
  { id: SectionType.MANSION, label: '저택' },
  { id: SectionType.FAMILY, label: '아르제' },
];

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-rofan-dark/90 backdrop-blur-md border-b border-rofan-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollTo(SectionType.INTRO)}>
            <Crown className="text-rofan-gold" size={24} />
            <span className="font-display font-bold text-xl tracking-widest text-rofan-gold">ARZE</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 font-serif tracking-wider ${
                    activeSection === item.id
                      ? 'text-rofan-gold scale-105 border-b-2 border-rofan-gold'
                      : 'text-gray-300 hover:text-rofan-gold-light'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
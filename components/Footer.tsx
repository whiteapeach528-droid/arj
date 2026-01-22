import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rofan-dark border-t border-rofan-gold/20 py-12 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-display text-2xl text-rofan-gold mb-4">The Grand Duke of Arze</h2>
        <p className="text-gray-500 text-sm font-serif italic mb-8">
          "그는 파도 위에서 태어나, 파도 위에서 군림하였다."
        </p>
        <div className="text-xs text-gray-700 uppercase tracking-wider">
          &copy; {new Date().getFullYear()} made by 반달꽃. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
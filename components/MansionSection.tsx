import React from 'react';
import SectionTitle from './ui/SectionTitle';

const rooms = [
  { name: '대형 분수대', desc: '정원 정중앙, 저택의 상징', type: 'Exterior' },
  { name: '메인 홀', desc: '화려한 샹들리에와 높은 천고', type: 'Interior' },
  { name: '집무실', desc: '가주의 사적인 공간', type: 'Private' },
  { name: '비밀 통로', desc: '가주만 아는 비밀 공간', type: 'Secret' },
];

const MansionSection: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-rofan-navy/20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="The Mansion" subtitle="대공저" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Visual */}
          <div className="relative h-96 md:h-auto rounded-lg overflow-hidden border border-rofan-gold/30">
             <img 
                src="https://i.postimg.cc/htGqPGdx/masterpiece-best-quality-highly-detailed-fantasy-romance-novel-cover-style-c-s-3100865692.png" 
                alt="Mansion Exterior" 
                className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-rofan-dark to-transparent">
                <h3 className="text-2xl font-display text-white">외부 전경</h3>
                <p className="text-gray-300 text-sm mt-2">계절마다 바뀌는 꽃 정원과 저택 전경이 한눈에 보이는 입구</p>
              </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {rooms.map((room, idx) => (
               <div key={idx} className="bg-rofan-dark border border-rofan-gold/40 p-6 flex flex-col justify-center shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                 <span className="text-xs text-rofan-gold mb-2 uppercase tracking-widest opacity-100">{room.type}</span>
                 <h4 className="text-xl font-serif text-gray-200 mb-1">{room.name}</h4>
                 <p className="text-sm text-gray-500">{room.desc}</p>
               </div>
             ))}

             {/* Guest House */}
             <div className="col-span-1 bg-gradient-to-br from-rofan-navy to-rofan-dark border border-rofan-gold/10 p-6">
                <h4 className="text-lg font-serif text-rofan-gold-light mb-2">손님용 별채</h4>
                <p className="text-sm text-gray-400">대공 저택과 완벽히 분리된 독립 건물. 장기 체류 귀빈을 위한 특별한 공간.</p>
             </div>

             {/* Service Areas */}
             <div className="col-span-1 bg-gradient-to-br from-rofan-navy to-rofan-dark border border-rofan-gold/10 p-6">
                <h4 className="text-lg font-serif text-rofan-gold-light mb-2">그 외 장소</h4>
                <p className="text-sm text-gray-400">
                  주방, 창고, 하인 전용 통로, 하인 숙소<br/>
                  <span className="text-xs text-gray-600 mt-1 block">* 하인 숙소는 저택 내부 외진 곳에 위치</span>
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MansionSection;
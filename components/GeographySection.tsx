import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { Map, Sun, Anchor, Landmark, ShoppingBag, Utensils, ShieldCheck } from 'lucide-react';

const GeographySection: React.FC = () => {
  return (
    <div className="py-24 bg-rofan-dark relative">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="The Empire" subtitle="세르이아 제국" />
      </div>
      
      {/* Map Visualization - Full Width */}
      <div className="mt-10 mb-16 w-full">
        <img 
          src="https://i.postimg.cc/wv1zYC2Q/masterpiece-best-quality-highly-detailed-fantasy-romance-novel-cover-style-c-s-3100865692-(4).png" 
          alt="Map of Sereia Empire" 
          className="w-full h-auto object-cover block shadow-lg"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Geography & Climate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-rofan-navy/20 p-8 border border-rofan-gold/20 rounded-lg hover:bg-rofan-navy/30 transition-colors">
            <h3 className="text-xl font-display text-rofan-gold mb-6 flex items-center gap-2 border-b border-rofan-gold/10 pb-3">
              <Map size={20} /> 지리적 특성
            </h3>
            <ul className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base font-light">
              <li className="flex gap-4 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-rofan-gold mt-2 shrink-0"></span>
                <span>제국 정중앙에 <span className="text-rofan-cream font-medium">황궁(수도)</span>이 위치하며, 아르제 대공가의 영토가 수도 전체를 감싸 안듯 둘러싸고 있는 형태.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-rofan-gold mt-2 shrink-0"></span>
                <span>대공가의 영토 규모가 황궁보다 거대하여, 지리적으로도 황실을 압박하는 형세이다.</span>
              </li>
            </ul>
          </div>

          <div className="bg-rofan-navy/20 p-8 border border-rofan-gold/20 rounded-lg hover:bg-rofan-navy/30 transition-colors">
            <h3 className="text-xl font-display text-rofan-gold mb-6 flex items-center gap-2 border-b border-rofan-gold/10 pb-3">
              <Sun size={20} /> 기후
            </h3>
            <ul className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base font-light">
              <li className="flex gap-4 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-rofan-gold mt-2 shrink-0"></span>
                <span>사계절이 뚜렷하나 해양성 기후의 영향으로 겨울에도 온화하고 따뜻하다.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-rofan-gold mt-2 shrink-0"></span>
                <span>여름에는 해풍이 많이 불어 습하지 않고 쾌적하며 시원하다.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* City Duality */}
        <div className="mb-20">
           <h3 className="text-2xl font-display text-center text-rofan-cream mb-10 relative inline-block left-1/2 transform -translate-x-1/2">
             도시의 이중성
             <span className="block h-px w-20 bg-rofan-gold/50 mx-auto mt-2"></span>
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-rofan-gold/30 rounded-lg overflow-hidden shadow-lg">
             {/* Port */}
             <div className="p-10 bg-gradient-to-br from-gray-900 via-[#1a2333] to-rofan-navy">
                <div className="flex items-center gap-3 mb-6 text-rofan-gold-light opacity-80">
                  <Anchor />
                  <h4 className="text-xl font-bold font-display tracking-wider">항구 구역</h4>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4 font-light">
                  서민들의 삶의 터전. 뱃사람들의 활기, 비릿한 생선 냄새, 왁자지껄한 시장통.
                  야생 고양이들이 생선 가게를 노리는 정겨운 풍경이 펼쳐진다.
                </p>
             </div>
             {/* Capital */}
             <div className="p-10 bg-gradient-to-bl from-rofan-navy via-[#1e1b2e] to-gray-900 border-t md:border-t-0 md:border-l border-rofan-gold/30">
                <div className="flex items-center gap-3 mb-6 text-rofan-gold">
                  <Landmark />
                  <h4 className="text-xl font-bold font-display tracking-wider">수도 중심부</h4>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 font-light">
                  항구와 불과 몇 블록 차이이나 분위기가 급변한다.
                  고풍스러운 석조 건물, 귀족들의 사교 공간, 고급 마차가 다니는 정제되고 우아한 거리.
                </p>
                <div className="flex items-center gap-2 text-xs text-green-500/80 bg-green-900/10 px-3 py-2 rounded w-fit">
                  <ShieldCheck size={14} />
                  <span>치안: 자잘한 소매치기 외 강력 범죄가 드문 안전한 지역</span>
                </div>
             </div>
           </div>
        </div>

        {/* Landmarks & Specialties */}
        <div>
          <h3 className="text-2xl font-display text-center text-rofan-cream mb-10 relative inline-block left-1/2 transform -translate-x-1/2">
            주요 명소 및 특산품
            <span className="block h-px w-20 bg-rofan-gold/50 mx-auto mt-2"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-rofan-dark border border-rofan-gold/10 p-8 rounded hover:border-rofan-gold/40 transition-colors group">
               <div className="w-14 h-14 rounded-full bg-rofan-navy border border-rofan-gold/20 group-hover:border-rofan-gold flex items-center justify-center text-rofan-gold mb-6 mx-auto transition-colors">
                 <Utensils size={24} />
               </div>
               <h4 className="text-center text-lg font-serif text-rofan-cream mb-3">특산품: 해산물</h4>
               <p className="text-center text-sm text-gray-400 font-light leading-relaxed">
                 앞바다에서 잡히는 신선한 해산물이 유명하며, 특히 <span className="text-rofan-gold">새우 요리</span>는 제국 최고의 별미. 서민적 튀김부터 귀족용 코스까지 다양하다.
               </p>
            </div>

            <div className="bg-rofan-dark border border-rofan-gold/10 p-8 rounded hover:border-rofan-gold/40 transition-colors group">
               <div className="w-14 h-14 rounded-full bg-rofan-navy border border-rofan-gold/20 group-hover:border-rofan-gold flex items-center justify-center text-rofan-gold mb-6 mx-auto transition-colors">
                 <Landmark size={24} />
               </div>
               <h4 className="text-center text-lg font-serif text-rofan-cream mb-3">언덕 위의 사원</h4>
               <p className="text-center text-sm text-gray-400 font-light leading-relaxed">
                 시내 정중앙 옆 언덕의 성역. 시간이 멈춘 듯 고요하다. 매 정시 울리는 종탑과 바다 전경이 보이는 명소.
               </p>
            </div>

            <div className="bg-rofan-dark border border-rofan-gold/10 p-8 rounded hover:border-rofan-gold/40 transition-colors group">
               <div className="w-14 h-14 rounded-full bg-rofan-navy border border-rofan-gold/20 group-hover:border-rofan-gold flex items-center justify-center text-rofan-gold mb-6 mx-auto transition-colors">
                 <ShoppingBag size={24} />
               </div>
               <h4 className="text-center text-lg font-serif text-rofan-cream mb-3">시내 중심가</h4>
               <p className="text-center text-sm text-gray-400 font-light leading-relaxed">
                 사교계의 중심이자 수도의 중앙인 시내. 최신 유행을 선도하는 부티크, 디저트 카페, 고급 레스토랑이 밀집된 구역.
               </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default GeographySection;
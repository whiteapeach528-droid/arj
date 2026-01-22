import React from 'react';
import SectionTitle from './ui/SectionTitle';

const WorldSection: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-6xl mx-auto">
      <SectionTitle title="The World" subtitle="제국의 질서와 규율" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        
        {/* Left Col: Hierarchy */}
        <div className="bg-rofan-navy/30 border border-rofan-gold/20 p-8 rounded-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-rofan-gold/30 rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-rofan-gold/30 rounded-bl-3xl"></div>
          
          <h3 className="text-2xl font-display text-rofan-gold mb-8 text-center">계급 체계</h3>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full text-center py-4 bg-gradient-to-r from-transparent via-rofan-gold/20 to-transparent border-y border-rofan-gold/50 font-bold text-xl text-rofan-gold-light">
              황족
            </div>
            <div className="h-4 w-px bg-rofan-gold/30"></div>
            <div className="w-3/4 text-center py-3 bg-rofan-navy border border-rofan-gold/30 text-rofan-gold font-bold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              대공 <span className="text-xs font-normal text-gray-400 block mt-1">한 나라에 단 한 명 / 준황족 대우</span>
            </div>
            <div className="h-4 w-px bg-rofan-gold/30"></div>
            <div className="w-2/3 text-center py-2 bg-rofan-navy/50 border border-rofan-gold/20 text-gray-200">
              공작 <span className="text-xs text-gray-500 ml-2">(최대 5명)</span>
            </div>
            <div className="h-4 w-px bg-rofan-gold/30"></div>
            <div className="w-1/2 text-center py-2 bg-rofan-navy/50 border border-rofan-gold/20 text-gray-300">
              후작 <span className="text-xs text-gray-500 ml-2">(최대 10명)</span>
            </div>
            <div className="h-4 w-px bg-rofan-gold/30"></div>
            <div className="w-full flex justify-center space-x-2 text-sm text-gray-500">
              <span>백작</span> &gt; <span>자작</span> &gt; <span>남작</span>
            </div>
          </div>
        </div>

        {/* Right Col: Education & Butler */}
        <div className="space-y-8">
          {/* Education */}
          <div className="bg-rofan-navy/20 border-l-4 border-rofan-gold p-6 backdrop-blur-sm hover:bg-rofan-navy/40 transition-colors">
            <h3 className="text-xl font-display text-rofan-gold mb-4">가주 교육 제도</h3>
            <ul className="space-y-3 text-gray-300 list-disc list-inside marker:text-rofan-gold">
              <li>남성 가주 등극 전 <span className="text-rofan-gold-light font-medium">'가주 수업'</span> 필수 이수</li>
              <li>교육 내용: 가문 경영, 정치, 외교</li>
              <li className="leading-relaxed">
                <span className="text-rofan-gold/80">성교육:</span> 기초 이론부터 실전까지 포함. <br/>
                <span className="text-sm text-gray-500 italic ml-5">- 마지막 단계는 교육받는 영애와 합방 (원로 여성 참관)</span>
              </li>
              <li>졸업 후 정식 가주 자격 획득</li>
            </ul>
          </div>

          {/* Butler */}
          <div className="bg-rofan-navy/20 border-l-4 border-gray-500 p-6 backdrop-blur-sm hover:bg-rofan-navy/40 transition-colors">
            <h3 className="text-xl font-display text-gray-300 mb-4">집사 제도</h3>
            <p className="text-gray-400 mb-4 text-sm italic">"집사는 가신과 다르며, 평생 주인을 모신다."</p>
            <ul className="space-y-3 text-gray-300 list-disc list-inside marker:text-gray-500">
              <li><span className="font-bold text-gray-200">세습제:</span> 하위 가문 출신이 대대로 모심</li>
              <li>공작의 집사 = 후작 이하 출신</li>
              <li>후작의 집사 = 백작 이하 출신</li>
              <li>폐쇄적이며 절대적인 충성을 맹세함</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorldSection;
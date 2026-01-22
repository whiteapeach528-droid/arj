import React from 'react';
import SectionTitle from './ui/SectionTitle';

interface FamilyMemberProps {
  name: string;
  role: string;
  desc: string;
}

const FamilyMemberCard: React.FC<FamilyMemberProps> = ({ name, role, desc }) => (
  <div className="bg-rofan-dark/80 border border-rofan-gold/20 p-8 rounded-sm hover:border-rofan-gold/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] group h-full flex flex-col">
    <div className="mb-5 border-b border-rofan-gold/10 pb-4">
      <h3 className="text-2xl font-display text-rofan-cream group-hover:text-rofan-gold transition-colors mb-2">{name}</h3>
      <span className="text-sm text-rofan-gold-light/70 font-serif italic tracking-wide">{role}</span>
    </div>
    <p className="text-gray-400 leading-relaxed font-light whitespace-pre-line text-sm md:text-base">
      {desc}
    </p>
  </div>
);

const FamilySection: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <SectionTitle title="The House of Arze" subtitle="대공가 일원" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Father */}
        <FamilyMemberCard
          name="로데릭 드 아르제"
          role="전(前) 공작 / 부친"
          desc="비겁한 겁쟁이인 주제에 권력욕이 강하다. 자신도 환자이면서 아들을 혹독하게 훈련시켜 전쟁 대리인으로 세웠다. 현재는 아들의 높은 작위에 대한 질투와 공포에 짓눌려 지내고 있다."
        />

        {/* Mother */}
        <FamilyMemberCard
          name="이벨린 발리에르"
          role="모친"
          desc="남편의 학대와 아들에 대한 죄책감, 병 수발에 지쳐 이혼 후 타국으로 도피했다. 아들의 소식이 들려 올 때마다 자금과 편지를 보내지만 직접 만나지는 않는, 단절되었으나 끊어지지 않은 관계다."
        />

        {/* Butler (Edwin Gray) */}
        <FamilyMemberCard
          name="에드윈 그레이"
          role="대공의 집사"
          desc="카스피안의 멘탈 케어 담당. 대공의 손발이 되어 까다로운 요구나 뒤처리를 완벽히 수행한다. 177cm에 37세이며, 짧은 회색 머리와 회색눈에 항상 행색이 단정하다. 대대로 아르제 가문을 모셔온 백작 가문 출신이며, 이혼 경력이 있다. 평상시 이미지와 다르게 벌레만 보면 기절하거나 체통을 잃고 비명을 지른다."
        />

        {/* Vassals */}
        <FamilyMemberCard
          name="가신들"
          role="하이에나"
          desc="카스피안이 전쟁터에서 죽기만을 바라는 존재들. 전쟁 중엔 권력을 탐하다가, 대공이 살아 돌아오면 쥐 죽은 듯 엎드리는 비굴하고 이중적인 태도를 보인다."
        />

      </div>
    </div>
  );
};

export default FamilySection;
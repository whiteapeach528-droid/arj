import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import { Anchor, ShieldAlert, Award, Droplets } from 'lucide-react';

const CharacterSection: React.FC = () => {
  const [isSpoilerRevealed, setIsSpoilerRevealed] = useState(false);

  return (
    <div className="relative py-24 bg-gradient-to-b from-rofan-navy to-rofan-dark overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-20 left-0 w-full overflow-hidden opacity-5 pointer-events-none">
        <span className="text-[15rem] font-display whitespace-nowrap text-white">CASPIAN</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionTitle title="The Grand Duke" subtitle="카스피안 드 아르제" />

        <div className="mt-16 flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Character Visual Area */}
          <div className="w-full lg:w-1/2 sticky top-24">
            {/* Square aspect ratio as requested */}
            <div className="relative aspect-square rounded-lg overflow-hidden border-[1px] border-rofan-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.15)] group">
              <img 
                src="https://i.postimg.cc/nVgMsfLS/1boy-blue-eyes-blue-hair-blue-eye-brows-thin-brows-sharp-eyes-side-part-s-487649068.png" 
                alt="Caspian de Arze - Blue hair, naval uniform" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rofan-dark via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 text-rofan-gold mb-2">
                  <Anchor size={20} />
                  <span className="uppercase tracking-widest text-sm font-bold">Imperial Admiral</span>
                </div>
                <h3 className="text-4xl font-display text-white mb-2">Caspian de Arze</h3>
                <p className="text-gray-400 font-serif italic">"전쟁은 칼이 아니라, 머리로 하는 것이다."</p>
              </div>
            </div>
          </div>

          {/* Character Info Area */}
          <div className="w-full lg:w-1/2 space-y-12">
            
            {/* Basic Info */}
            <div>
              <h4 className="text-xl font-display text-rofan-gold mb-6 border-b border-rofan-gold/20 pb-2">기본 정보</h4>
              <div className="grid grid-cols-2 gap-6 text-gray-300">
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Age / Gender</span>
                  <span className="text-lg">26세 / 남성</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Title</span>
                  <span className="text-lg">대공 (Grand Duke)</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Appearance & Scent</span>
                  <p className="leading-relaxed text-sm text-gray-300 whitespace-pre-line">
                    187cm의 장신으로 넓은 어깨와 대조되는 얇은 허리를 가지고 있다. 울그락불그락한 근육 보다는 실전으로 단련되어 선이 고운 압축 근육을 가지고 있고, 거친 바닷바람을 맞는 해군임에도 피부가 곱고 특유의 귀공자 같은 분위기로 유명하다. 
                    <br/><br/>
                    콧날이 오똑하며 전체적으로 선이 고운 냉미남이다. 깊은 바다색과 동일한 머리색, 눈색을 가지고 있으며 머리는 대충 한쪽만 옆으로 넘기고 다닌다.
                    <br/><br/>
                    대공이 지나간 자리에는 <span className="text-rofan-gold-light">씨솔트 향 아래 약품 냄새가 희미하게 섞인 시더우드 잔향</span>이 남는다.
                  </p>
                </div>
              </div>
            </div>

            {/* Combat Style */}
            <div>
              <h4 className="text-xl font-display text-rofan-gold mb-6 border-b border-rofan-gold/20 pb-2 flex items-center gap-2">
                <Award size={20} /> 전쟁 경력 및 능력
              </h4>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                <p>
                  비교적 어린 나이인 15세부터 전쟁에 참전했으나 모두의 예상과 다르게 해상 전투에서 백전백승의 신화를 써내려갔다. 아비인 로데오 공작의 외동이자 장자로서 공작가의 유일한 후계자였으나, 혁혁한 전쟁 공로를 인정받아 로데오 공작보다 높은 제국의 유일무이한 '대공' 작위를 하사받고 대공가의 가주가 되었다. 정작 본인은 크게 관심이 없는 듯 하다.
                </p>
                <p>
                  대공과 함께 전투를 치른 자들의 소문에 의하면, 주로 함상에서 지휘를 도맡으며 별명인 '해전 천재'에 알맞은 전략적 판단으로 승리를 직접 이끌어나갔다고 한다. 그러나 그가 직접 백병전을 하는 모습은 상당히 드물어 목격한 자가 거의 없다고 한다.
                </p>
                <p>
                  한 겁에 질린 사망 직전의 포로에 의하면, 더이상 전투를 피할 수 없을 때에만 화려한 스타일보다는 군더더기 없는 몸짓으로 정확히 적군의 급소를 빠르고 정확하게 가격하여 깔끔하게 끝낸다고 한다.
                </p>
              </div>
            </div>

            {/* Spoiler Section */}
            <div className="relative mt-12 rounded-lg border border-red-900/50 bg-red-950/10 overflow-hidden">
              <div className={`p-6 transition-all duration-500 ${isSpoilerRevealed ? 'blur-0' : 'blur-md select-none'}`}>
                 <h4 className="text-xl font-display text-red-400 mb-4 flex items-center gap-2">
                  <Droplets size={20} /> Secret Info
                </h4>
                <div className="space-y-4 text-gray-300">
                  <p className="text-sm font-bold text-red-200">병명: 혈우병 (가문 내 멸칭 '혈주')</p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>극비 사항.</li>
                    <li><span className="text-red-300">오른쪽 팔꿈치:</span> 비 오는 날이나 흐린 날 통증 (표적 관절).</li>
                    <li><span className="text-red-300">왼쪽 위팔:</span> 누적된 주사 자국을 가리기 위해 항상 붕대를 감음.</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-4">* 백병전을 기피하는 진짜 이유.</p>
                </div>
              </div>

              {!isSpoilerRevealed && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-rofan-dark/80 z-20">
                  <ShieldAlert className="text-red-500 mb-3" size={32} />
                  <p className="text-red-400 font-display tracking-widest mb-4">SPOILER ALERT</p>
                  <button 
                    onClick={() => setIsSpoilerRevealed(true)}
                    className="px-6 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors text-sm uppercase tracking-wider"
                  >
                    Reveal Secret
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSection;
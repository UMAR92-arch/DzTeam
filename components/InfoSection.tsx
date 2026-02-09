
import React from 'react';
import { Users, Shield, Zap, Swords } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="space-y-12 py-12 w-full flex flex-col items-center">
      <div className="text-center space-y-4">
        <h2 className="font-minecraft text-2xl lg:text-4xl text-white tracking-tighter elegant-text-hover">
          DZ TEAM <span className="text-green-500">O'ZI KIM?</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
          Biz shunchaki o'yinchilar emasmiz. Biz Minecraft olamida eng qiziqarli va professional 
          kontent yaratishga bag'ishlangan Minecraft faxriylari hamjamiyatimiz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {[
          { icon: <Shield size={28} className="text-green-400" />, title: "Birlashgan Kuch", desc: "Birdamlik - bizning eng kuchli blokimiz." },
          { icon: <Zap size={28} className="text-yellow-400" />, title: "Pro Gaming", desc: "Yuqori malakali survival va PvP ekspertlari." },
          { icon: <Users size={28} className="text-blue-400" />, title: "Hamjamiyat", desc: "Dunyo bo'ylab 5 milliondan ortiq obunachilar oilasi." },
          { icon: <Swords size={28} className="text-red-400" />, title: "Epiq Urushlar", desc: "Eng yirik server urushlarida g'alaba qozonganmiz." }
        ].map((item, i) => (
          <div key={i} className="elegant-card glass p-8 rounded-[2.5rem] flex flex-col items-start gap-6 border border-white/5 group relative overflow-hidden h-full">
            {/* Dekorativ orqa fon nuri */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-white/5 blur-[45px] group-hover:bg-green-500/15 transition-all duration-1000 rounded-full pointer-events-none"></div>
            
            {/* Ikonka konteyneri - blokdan chiqishni oldini olish uchun maxsus joylashuv */}
            <div className="p-4 bg-black/50 rounded-2xl border border-white/10 transform group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out relative z-10 inline-flex items-center justify-center shadow-xl">
              <div className="w-8 h-8 flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            
            <div className="relative z-10 space-y-3">
              <h4 className="font-bold text-xl group-hover:text-green-400 transition-colors duration-1000 tracking-tight">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-all duration-1000">{item.desc}</p>
            </div>

            {/* Pastki o'ngdagi sekin animatsiyali dekoratsiya */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-10 transition-all duration-1000 scale-50 group-hover:scale-100">
               {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;

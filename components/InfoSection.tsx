
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Users, Shield, Zap, Swords } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="space-y-12 py-12">
      <div className="text-center space-y-4">
        <h2 className="font-minecraft text-2xl lg:text-4xl text-white tracking-tighter">
          WHO IS <span className="text-green-500">DZ TEAM</span>?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We are more than just gamers. We are a brotherhood of Minecraft veterans dedicated to creating
          the most immersive and entertaining content in the digital block universe.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Shield className="text-green-400" />, title: "United Force", desc: "Solidarity is our strongest block." },
          { icon: <Zap className="text-yellow-400" />, title: "Pro Gaming", desc: "Highly skilled survival and PvP experts." },
          { icon: <Users className="text-blue-400" />, title: "Community", desc: "A family of 5M+ subscribers globally." },
          { icon: <Swords className="text-red-400" />, title: "Epic Wars", desc: "Fought and won the greatest server wars." }
        ].map((item, i) => (
          <div key={i} className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors border border-white/5">
            <div className="mb-4">{item.icon}</div>
            <h4 className="font-bold mb-2">{item.title}</h4>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <h3 className="font-minecraft text-xl text-center text-green-400">CORE LEADERS</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl text-center group">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="rounded-full border-4 border-green-500 p-1 group-hover:scale-110 transition-transform"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 p-1 rounded-full border-2 border-black">
                  <Shield size={12} />
                </div>
              </div>
              <h4 className="font-minecraft text-[12px] mb-1">{member.name}</h4>
              <p className="text-green-400 text-xs font-bold mb-3 uppercase">{member.role}</p>
              <p className="text-xs text-gray-400 leading-relaxed italic">"{member.bio}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;

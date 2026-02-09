
import React, { useState } from 'react';
import { Gamepad2, Menu, X, Star, Crown, Shield, Youtube, Send } from 'lucide-react';
import InfoSection from './components/InfoSection';
import { TELEGRAM_URL, YOUTUBE_URL, DISCORD_URL, TEAM_MEMBERS, YOUTUBERS } from './constants';

const DiscordIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
  </svg>
);

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer overflow-hidden">
          <div className="dz-logo-brand text-xl sm:text-2xl tracking-tighter transition-all duration-1000">
            DZ TEAM
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {['Bosh Sahifa', 'Haqimizda', 'A\'zolar'].map((item) => (
            <a 
              key={item}
              href={`#${item === 'Bosh Sahifa' ? 'home' : item === 'Haqimizda' ? 'about' : 'members'}`} 
              className="text-sm font-medium hover:text-green-400 transition-all duration-700 uppercase tracking-widest elegant-text-hover"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-700 hover:scale-105 shadow-lg shadow-[#0088cc]/20"
          >
            <Send size={18} />
            <span className="hidden sm:inline">Telegram</span>
          </a>
          <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/98 p-8 flex flex-col gap-8 pt-24 animate-in fade-in duration-700">
          {['BOSH SAHIFA', 'HAQIMIZDA', 'A\'ZOLAR'].map((item) => (
            <a 
              key={item}
              href={`#${item === 'BOSH SAHIFA' ? 'home' : item === 'HAQIMIZDA' ? 'about' : 'members'}`}
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-2xl font-minecraft text-white hover:text-green-400 transition-all duration-700"
            >
              {item}
            </a>
          ))}
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-700">
            <X size={28} />
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-40 px-4 sm:px-6 lg:pl-32 max-w-[1400px] mx-auto flex-grow w-full relative z-10 flex flex-col items-center">
        
        {/* Hero Section */}
        <section id="home" className="w-full mb-40 flex flex-col items-center text-center space-y-12 animate-float-slow">
          <div className="inline-block px-6 py-3 rounded-full glass border border-green-500/20 text-green-400 text-[10px] sm:text-xs font-minecraft mb-2 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
            2023-YILDA ASOS SOLINGAN • MINECRAFT AFSONALARI
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-minecraft tracking-tighter leading-none dz-logo-brand drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]">
            DZ TEAM <br />
            <span className="text-white/90 hover:text-green-500 transition-all duration-1000 cursor-default">OLAMI</span>
          </h1>
          <p className="max-w-2xl text-gray-300 bg-black/40 p-10 rounded-[2.5rem] backdrop-blur-xl leading-relaxed text-base sm:text-xl border border-white/5 shadow-2xl">
            Minecraft olamidagi eng kuchli va birlashgan jamoaga xush kelibsiz! Bizning dunyomizda faqat eng yaxshilar jamlangan.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <button className="elegant-button px-10 sm:px-16 py-5 text-white font-minecraft text-xs sm:text-base flex items-center gap-4 group">
              <Gamepad2 size={24} className="group-hover:rotate-12 transition-transform duration-1000" /> SERVERGA KIRISH
            </button>
          </div>
        </section>

        {/* Info Section */}
        <section id="about" className="w-full mb-40 scroll-mt-32">
          <InfoSection />
        </section>

        {/* Asosiy Liderlar Section */}
        <section className="w-full mb-40 scroll-mt-32">
          <div className="text-center mb-20">
            <h2 className="font-minecraft text-2xl md:text-4xl text-white mb-6 uppercase tracking-widest elegant-text-hover">Asosiy Liderlar</h2>
            <div className="w-24 md:w-40 h-1.5 bg-green-500 mx-auto rounded-full shadow-[0_0_25px_#22c55e]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="elegant-card glass p-10 rounded-[2.5rem] text-center group">
                <div className="relative w-36 h-36 mx-auto mb-8">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="rounded-full border-4 border-green-500/50 p-1 skin-hover shadow-2xl"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-600 p-2.5 rounded-full border-4 border-black group-hover:scale-110 transition-all duration-1000">
                    <Shield size={20} className="text-white" />
                  </div>
                </div>
                <h4 className="font-minecraft text-xs mb-3 text-green-400 uppercase tracking-widest">{member.role}</h4>
                <p className="text-white text-2xl font-bold mb-4 tracking-tighter group-hover:text-green-400 transition-colors duration-700">{member.name}</p>
                <p className="text-sm text-gray-500 leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity duration-1000 px-4">"{member.bio}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Jamoa Yutuberlari Section */}
        <section className="w-full mb-40 glass p-12 rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-6 mb-16 justify-center">
            <Youtube className="text-red-600" size={40} />
            <h3 className="font-minecraft text-xl md:text-3xl text-green-400 uppercase tracking-tighter elegant-text-hover">
              Jamoa Yutuberlari
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {YOUTUBERS.map((yt) => (
              <a
                key={yt.id}
                href={yt.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="elegant-card glass p-6 rounded-3xl flex flex-col items-center gap-5 transition-all group"
              >
                <img
                  src={yt.avatar}
                  alt={yt.name}
                  className="w-20 h-20 rounded-full border-2 border-white/10 group-hover:border-green-500 transition-all duration-1000 shadow-lg"
                />
                <div className="text-center">
                  <span className="text-base font-bold block mb-1 group-hover:text-green-400 transition-colors duration-700">
                    {yt.name}
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
                    {yt.subscribers} Obunachi
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-16 p-8 glass rounded-3xl border border-yellow-500/20 text-center hover:bg-yellow-500/5 transition-all duration-1000">
            <p className="text-sm text-yellow-500 font-minecraft leading-relaxed uppercase tracking-[0.3em] opacity-80 hover:opacity-100 transition-opacity">
              BUGUN AFSONAVIY JAMOAGA QO'SHILING!
            </p>
          </div>
        </section>

        {/* Famous Members Section */}
        <section id="members" className="w-full mb-40 scroll-mt-32 glass p-8 md:p-16 rounded-[3.5rem] border border-white/5 shadow-2xl">
          <div className="text-center mb-20">
            <h2 className="font-minecraft text-2xl md:text-4xl text-white mb-6 uppercase tracking-widest elegant-text-hover">MASHHUR A'ZOLARIMIZ</h2>
            <div className="w-24 md:w-40 h-1.5 bg-green-500 mx-auto rounded-full shadow-[0_0_25px_#22c55e]"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
            <div className="elegant-card glass p-10 rounded-[2.5rem] flex flex-col items-center group">
              <div className="mb-8 relative h-56 w-full flex justify-center items-end">
                 <img src="https://mc-heads.net/body/ferremc/150" alt="shoxa_0001" className="h-full object-contain skin-hover drop-shadow-[0_15px_30px_rgba(239,68,68,0.3)]" />
              </div>
              <span className="style-shoxa text-xl md:text-2xl tracking-tighter text-center">shoxa_0001</span>
              <p className="mt-4 text-[11px] font-minecraft text-gray-500 uppercase tracking-[0.2em]">Asoschi / Lider</p>
            </div>

            <div className="elegant-card glass p-10 rounded-[2.5rem] flex flex-col items-center group">
              <div className="mb-8 relative h-56 w-full flex justify-center items-end">
                 <img src="https://mc-heads.net/body/DarkNight/150" alt="DarkNight" className="h-full object-contain skin-hover drop-shadow-[0_15px_30px_rgba(49,130,255,0.3)]" />
              </div>
              <span className="style-darknight text-xl md:text-2xl tracking-tighter text-center">DarkNight</span>
              <p className="mt-4 text-[11px] font-minecraft text-gray-500 uppercase tracking-[0.2em]">Asoschi / Admin</p>
            </div>

            <div className="elegant-card glass p-10 rounded-[2.5rem] flex flex-col items-center group">
              <div className="mb-8 relative h-56 w-full flex justify-center items-end">
                 <img src="https://mc-heads.net/body/Leo/150" alt="Leo" className="h-full object-contain skin-hover drop-shadow-[0_15px_30px_rgba(251,191,36,0.3)]" />
              </div>
              <span className="style-leo text-xl md:text-2xl tracking-tighter text-center">Leo</span>
              <p className="mt-4 text-[11px] font-minecraft text-gray-500 uppercase tracking-[0.2em]">Top A'zo</p>
            </div>

            <div className="elegant-card glass p-10 rounded-[2.5rem] flex flex-col items-center group">
              <div className="mb-8 relative h-56 w-full flex justify-center items-end">
                 <img src="https://mc-heads.net/body/Zen/150" alt="Zen" className="h-full object-contain skin-hover drop-shadow-[0_15px_30px_rgba(249,115,22,0.3)]" />
              </div>
              <span className="style-zen text-xl md:text-2xl tracking-tighter text-center">Zen</span>
              <p className="mt-4 text-[11px] font-minecraft text-gray-500 uppercase tracking-[0.2em]">Elita Quruvchi</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-24 px-6 glass border-t border-white/5 text-center relative z-20">
         <div className="max-w-5xl mx-auto space-y-16">
            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1"></div>
              <Crown className="text-yellow-500 animate-bounce transition-all duration-1000" size={40} />
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1"></div>
            </div>
            
            <div className="bg-black/60 p-12 sm:p-20 rounded-[3.5rem] border border-white/5 shadow-2xl mx-auto backdrop-blur-2xl elegant-card relative overflow-hidden">
              <div className="space-y-10 relative z-10">
                <p className="text-2xl sm:text-3xl md:text-5xl font-minecraft leading-tight tracking-tighter italic elegant-text-hover">
                  <span className="style-shoxa px-3 transition-all duration-1000">shoxa_0001</span> <span className="text-white/80">va</span> <span className="style-darknight px-3 transition-all duration-1000">DarkNight</span>
                </p>
                <div className="h-px bg-white/5 w-1/2 mx-auto"></div>
                <div className="flex flex-col gap-8 items-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-minecraft text-white/90 leading-relaxed">
                    <span className="style-shoxa">shoxa_0001</span> — PvPer bedwarser maxtanchoq negr
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-minecraft text-white/90 leading-relaxed">
                    <span className="style-darknight">DarkNight</span> — ultra promax negr youtuber
                  </p>
                </div>
                <p className="text-xl sm:text-2xl font-minecraft text-green-500/80 uppercase tracking-tighter mt-6">
                  Jamoaning ikki buyuk sardori!
                </p>
              </div>
              
              <div className="mt-16 text-gray-600 font-minecraft text-[9px] sm:text-[14px] uppercase tracking-[0.6em] px-4 opacity-40">
                DZ QIROLLIGINING TO'XTATIB BO'LMAS IKKI KUCHLI KUCHI
              </div>
            </div>

            {/* Social Media Buttons Bar */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              {/* Telegram Button */}
              <a 
                href={TELEGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 bg-black/40 px-10 py-5 rounded-2xl border border-[#24A1DE]/20 hover:border-[#24A1DE] transition-all duration-1000 hover:scale-105 hover:shadow-[0_0_30px_rgba(36,161,222,0.3)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#24A1DE]/0 via-[#24A1DE]/10 to-[#24A1DE]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]"></div>
                <Send size={24} className="text-[#24A1DE] group-hover:scale-125 transition-transform duration-1000" />
                <span className="font-minecraft text-sm text-white group-hover:text-[#24A1DE] transition-colors duration-1000 uppercase tracking-widest">Telegram</span>
              </a>

              {/* YouTube Button */}
              <a 
                href={YOUTUBE_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 bg-black/40 px-10 py-5 rounded-2xl border-[#FF0000]/20 border hover:border-[#FF0000] transition-all duration-1000 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/0 via-[#FF0000]/10 to-[#FF0000]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]"></div>
                <Youtube size={24} className="text-[#FF0000] group-hover:scale-125 transition-transform duration-1000" />
                <span className="font-minecraft text-sm text-white group-hover:text-[#FF0000] transition-colors duration-1000 uppercase tracking-widest">YouTube</span>
              </a>

              {/* Discord Button */}
              <a 
                href={DISCORD_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 bg-black/40 px-10 py-5 rounded-2xl border-[#5865F2]/20 border hover:border-[#5865F2] transition-all duration-1000 hover:scale-105 hover:shadow-[0_0_30px_rgba(88,101,242,0.3)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/0 via-[#5865F2]/10 to-[#5865F2]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]"></div>
                <DiscordIcon size={24} className="text-[#5865F2] group-hover:scale-125 transition-transform duration-1000" />
                <span className="font-minecraft text-sm text-white group-hover:text-[#5865F2] transition-colors duration-1000 uppercase tracking-widest">Discord</span>
              </a>
            </div>
            
            <div className="pt-16 opacity-30">
               <p className="text-[11px] sm:text-[13px] font-minecraft uppercase tracking-[0.4em]">
                 &copy; 2024 DZ TEAM • QURISH UCHUN TUG'ILGAN • AFSONALAR UCHUN YARATILGAN
               </p>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;

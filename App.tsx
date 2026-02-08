
import React, { useState } from 'react';
import { Gamepad2, Info, Menu, X, Star, Crown, Shield } from 'lucide-react';
import YoutuberSidebar from './components/YoutuberSidebar';
import InfoSection from './components/InfoSection';
import { TELEGRAM_URL } from './constants';

const Zap = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mc-block">
             <div className="w-6 h-6 flex flex-col justify-between items-center py-1">
                <div className="flex justify-between w-full">
                   <div className="w-1.5 h-1.5 bg-black"></div>
                   <div className="w-1.5 h-1.5 bg-black"></div>
                </div>
                <div className="w-3 h-1.5 bg-black"></div>
                <div className="flex justify-between w-full">
                   <div className="w-1.5 h-2 bg-black"></div>
                   <div className="w-1.5 h-2 bg-black"></div>
                </div>
             </div>
          </div>
          <h1 className="font-minecraft text-lg sm:text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            DZ TEAM
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:text-green-400 transition-colors uppercase tracking-widest">Bosh Sahifa</a>
          <a href="#about" className="text-sm font-medium hover:text-green-400 transition-colors uppercase tracking-widest">Haqimizda</a>
          <a href="#members" className="text-sm font-medium hover:text-green-400 transition-colors uppercase tracking-widest">A'zolar</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-[#0088cc]/20"
          >
            <span className="hidden sm:inline">Telegram Kanal</span>
            <span className="sm:hidden text-xs">TG</span>
          </a>
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 p-8 flex flex-col gap-6 pt-24 animate-in fade-in duration-300">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-minecraft text-white">HOME</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-minecraft text-white">ABOUT</a>
          <a href="#members" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-minecraft text-white">MEMBERS</a>
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 p-2 bg-white/10 rounded-full">
            <X size={24} />
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-32 px-4 sm:px-6 lg:pr-[320px] max-w-7xl mx-auto flex-grow w-full relative z-10">
        {/* Hero Section */}
        <section id="home" className="mb-24 sm:mb-32 flex flex-col items-center text-center space-y-8 animate-float">
          <div className="inline-block px-4 py-2 rounded-full glass border border-green-500/30 text-green-400 text-[10px] sm:text-xs font-minecraft mb-2">
            EST. 2023 • MINECRAFT LEGENDS
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-minecraft tracking-tighter leading-none shadow-black drop-shadow-2xl">
            DZ TEAM <br />
            <span className="text-green-500">OLAMI</span>
          </h1>
          <p className="max-w-xl text-gray-100 bg-black/50 p-6 rounded-2xl backdrop-blur-md leading-relaxed text-base sm:text-lg border border-white/10 mx-auto">
            Minecraft olamidagi eng kuchli va birlashgan jamoaga xush kelibsiz! Bizning dunyomizda faqat eng yaxshilar jamlangan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="mc-button px-6 sm:px-8 py-3 text-white font-minecraft text-xs sm:text-sm flex items-center gap-2">
              <Gamepad2 size={18} /> SERVERGA KIRISH
            </button>
          </div>
        </section>

        {/* Info Section */}
        <section id="about" className="mb-24 sm:mb-32 scroll-mt-24">
          <InfoSection />
        </section>

        {/* Members Section - Fixed Grid & Sizing */}
        <section id="members" className="mb-24 sm:mb-32 scroll-mt-24 glass p-6 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="font-minecraft text-xl md:text-3xl text-white mb-6">MASHHUR A'ZOLARIMIZ</h2>
            <div className="w-24 md:w-32 h-1.5 bg-green-500 mx-auto rounded-full shadow-[0_0_15px_#22c55e]"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {/* shoxa_0001 */}
            <div className="flex flex-col items-center p-6 sm:p-8 glass rounded-3xl hover:bg-white/5 transition-all border border-red-500/20 group h-full">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 bg-red-600/20 rounded-full flex items-center justify-center border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)] group-hover:scale-110 transition-transform">
                <Crown className="text-red-500" size={40} />
              </div>
              <div className="flex flex-col items-center flex-grow">
                <span className="style-shoxa text-lg md:text-xl tracking-tighter text-center">shoxa_0001</span>
                <p className="mt-4 text-[10px] font-minecraft text-gray-500 uppercase tracking-widest text-center">Founder / Leader</p>
              </div>
            </div>

            {/* DarkNight */}
            <div className="flex flex-col items-center p-6 sm:p-8 glass rounded-3xl hover:bg-white/5 transition-all border border-blue-500/20 group h-full">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 bg-blue-600/20 rounded-full flex items-center justify-center border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                <Shield className="text-blue-500" size={40} />
              </div>
              <div className="flex flex-col items-center flex-grow">
                <span className="style-darknight text-lg md:text-xl tracking-tighter text-center">DarkNight</span>
                <p className="mt-4 text-[10px] font-minecraft text-gray-500 uppercase tracking-widest text-center">Founder / Admin</p>
              </div>
            </div>

            {/* Leo */}
            <div className="flex flex-col items-center p-6 sm:p-8 glass rounded-3xl hover:bg-white/5 transition-all border border-yellow-500/20 group h-full">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 bg-yellow-600/20 rounded-full flex items-center justify-center border-2 border-yellow-500 shadow-[0_0_20px_rgba(251,191,36,0.3)] group-hover:scale-110 transition-transform">
                <Star className="text-yellow-500" size={40} />
              </div>
              <div className="flex flex-col items-center flex-grow">
                <span className="style-leo text-lg md:text-xl tracking-tighter text-center">Leo</span>
                <p className="mt-4 text-[10px] font-minecraft text-gray-500 uppercase tracking-widest text-center">Top Member</p>
              </div>
            </div>

            {/* Zen */}
            <div className="flex flex-col items-center p-6 sm:p-8 glass rounded-3xl hover:bg-white/5 transition-all border border-orange-500/20 group h-full">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 bg-orange-600/20 rounded-full flex items-center justify-center border-2 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)] group-hover:scale-110 transition-transform">
                <Zap size={40} className="text-orange-500" />
              </div>
              <div className="flex flex-col items-center flex-grow">
                <span className="style-zen text-lg md:text-xl tracking-tighter text-center">Zen</span>
                <p className="mt-4 text-[10px] font-minecraft text-gray-500 uppercase tracking-widest text-center">Elite Builder</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sidebars */}
      <YoutuberSidebar />

      {/* Footer Rhyme */}
      <footer className="mt-auto py-16 px-6 glass border-t border-white/10 text-center relative z-20">
         <div className="max-w-4xl mx-auto space-y-10">
            <div className="flex justify-center items-center gap-6 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
              <Crown className="text-yellow-500 animate-bounce" size={32} />
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
            </div>
            
            <div className="bg-black/40 p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 shadow-2xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl font-minecraft leading-relaxed tracking-tighter italic">
                <span className="style-shoxa px-2">shoxa_0001</span> va <span className="style-darknight px-2">DarkNight</span> — bu jamoaning asosi, <br className="hidden sm:block" />
                DZ TEAM olamining ikki buyuk sardori!
              </p>
              <p className="mt-6 text-gray-500 font-minecraft text-[8px] sm:text-[10px] uppercase tracking-[0.3em] px-4">
                The unstoppable dual force of the DZ kingdom
              </p>
            </div>
            
            <div className="pt-8 opacity-40">
               <p className="text-[8px] sm:text-[10px] font-minecraft uppercase tracking-widest">
                 &copy; 2024 DZ TEAM • BORN TO BUILD • CRAFTED FOR LEGENDS
               </p>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;

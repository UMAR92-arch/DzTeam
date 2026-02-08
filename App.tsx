
import React from 'react';
import { Gamepad2, Info, Menu, X, Star, Crown, Shield } from 'lucide-react';
import YoutuberSidebar from './components/YoutuberSidebar';
import InfoSection from './components/InfoSection';
import { TELEGRAM_URL } from './constants';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden pb-10">
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
          <h1 className="font-minecraft text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
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
            <span className="sm:hidden">TG</span>
          </a>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 p-8 flex flex-col gap-6 pt-24">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-minecraft">HOME</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-minecraft">ABOUT</a>
          <a href="#members" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-minecraft">MEMBERS</a>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-32 px-6 lg:pr-[320px] max-w-7xl mx-auto z-10 relative">
        {/* Hero */}
        <section id="home" className="mb-32 flex flex-col items-center text-center space-y-8 animate-float">
          <div className="inline-block px-4 py-2 rounded-full glass border border-green-500/30 text-green-400 text-xs font-minecraft mb-4">
            EST. 2023 • MINECRAFT LEGENDS
          </div>
          <h1 className="text-5xl md:text-8xl font-minecraft tracking-tighter leading-none shadow-black drop-shadow-2xl">
            DZ TEAM <br />
            <span className="text-green-500">OLAMI</span>
          </h1>
          <p className="max-w-xl text-gray-100 bg-black/50 p-6 rounded-2xl backdrop-blur-md leading-relaxed text-lg border border-white/10">
            Minecraft olamidagi eng kuchli va birlashgan jamoaga xush kelibsiz! Bizning dunyomizda faqat eng yaxshilar jamlangan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="mc-button px-8 py-3 text-white font-minecraft text-sm flex items-center gap-2">
              <Gamepad2 size={18} /> SERVERGA KIRISH
            </button>
          </div>
        </section>

        {/* Info Section */}
        <section id="about" className="mb-32 scroll-mt-24">
          <InfoSection />
        </section>

        {/* Famous Members Section */}
        <section id="members" className="mb-32 scroll-mt-24 glass p-6 md:p-12 rounded-[40px] border border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-minecraft text-2xl md:text-4xl text-white mb-6">MASHHUR A'ZOLARIMIZ</h2>
            <div className="w-32 h-1.5 bg-green-500 mx-auto rounded-full shadow-[0_0_10px_#22c55e]"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-8 glass rounded-3xl hover:bg-white/5 transition-all border border-red-500/20 group">
              <div className="w-24 h-24 mb-6 bg-red-600/20 rounded-full flex items-center justify-center border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)] group-hover:scale-110 transition-transform">
                <Crown className="text-red-500" size={40} />
              </div>
              <div className="h-16 flex items-center justify-center text-center">
                <span className="style-shoxa text-xl md:text-2xl tracking-tighter whitespace-nowrap">shoxa_0001</span>
              </div>
              <p className="mt-4 text-[11px] font-minecraft text-gray-500 uppercase tracking-widest">Founder / Leader</p>
            </div>

            <div className="flex flex-col items-center p-8 glass rounded-3xl hover:bg-white/5 transition-all border border-blue-500/20 group">
              <div className="w-24 h-24 mb-6 bg-blue-600/20 rounded-full flex items-center justify-center border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                <Shield className="text-blue-500" size={40} />
              </div>
              <div className="h-16 flex items-center justify-center text-center">
                <span className="style-darknight text-xl md:text-2xl tracking-tighter whitespace-nowrap">DarkNight</span>
              </div>
              <p className="mt-4 text-[11px] font-minecraft text-gray-500 uppercase tracking-widest">Founder / Admin</p>
            </div>

            <div className="flex flex-col items-center p-8 glass rounded-3xl hover:bg-white/5 transition-all border border-yellow-500/20 group">
              <div className="w-24 h-24 mb-6 bg-yellow-600/20 rounded-full flex items-center justify-center border-2 border-yellow-500 shadow-[0_0_20px_rgba(251,191,36,0.3)] group-hover:scale-110 transition-transform">
                <Star className="text-yellow-500" size={40} />
              </div>
              <div className="h-16 flex items-center justify-center text-center">
                <span className="style-leo text-xl md:text-2xl tracking-tighter whitespace-nowrap">Leo</span>
              </div>
              <p className="mt-4 text-[11px] font-minecraft text-gray-500 uppercase tracking-widest">Top Member</p>
            </div>

            <div className="flex flex-col items-center p-8 glass rounded-3xl hover:bg-white/5 transition-all border border-orange-500/20 group">
              <div className="w-24 h-24 mb-6 bg-orange-600/20 rounded-full flex items-center justify-center border-2 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)] group-hover:scale-110 transition-transform">
                <Zap size={40} className="text-orange-500" />
              </div>
              <div className="h-16 flex items-center justify-center text-center">
                <span className="style-zen text-xl md:text-2xl tracking-tighter whitespace-nowrap">Zen</span>
              </div>
              <p className="mt-4 text-[11px] font-minecraft text-gray-500 uppercase tracking-widest">Elite Builder</p>
            </div>
          </div>
        </section>
      </main>

      {/* Sidebars */}
      <YoutuberSidebar />

      {/* Footer / Owners Rhyme */}
      <footer className="mt-32 py-20 px-6 glass border-t border-white/10 text-center relative z-10">
         <div className="max-w-4xl mx-auto space-y-10">
            <div className="flex justify-center items-center gap-6 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
              <Crown className="text-yellow-500 animate-bounce" size={32} />
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
            </div>
            
            <div className="bg-black/40 p-10 rounded-[30px] border border-white/5 shadow-2xl">
              <p className="text-2xl md:text-3xl font-minecraft leading-loose tracking-tighter italic">
                <span className="style-shoxa px-2">shoxa_0001</span> va <span className="style-darknight px-2">DarkNight</span> — bu jamoaning asosi, <br className="hidden md:block" />
                DZ TEAM olamining ikki buyuk sardori!
              </p>
              <p className="mt-6 text-gray-500 font-minecraft text-[10px] uppercase tracking-[0.3em]">
                The unstoppable dual force of the DZ kingdom
              </p>
            </div>
            
            <div className="pt-12 opacity-40">
               <p className="text-[10px] font-minecraft uppercase tracking-widest">
                 &copy; 2024 DZ TEAM • NO CREEPERS ALLOWED • BORN TO BUILD • CRAFTED FOR LEGENDS
               </p>
            </div>
         </div>
      </footer>
    </div>
  );
};

// Helper components for icons
const Zap = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export default App;

import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownRight, Mail, Camera, Sparkles, ShieldCheck, Lock, Unlock, KeyRound, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Hero: React.FC = () => {
  const roles = [
    'Full-Stack Developer',
    'Product & Software Strategist',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [showPinModal, setShowPinModal] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load photo & admin state from localStorage on mount
  useEffect(() => {
    const savedPhoto = localStorage.getItem('nadia_portfolio_photo');
    if (savedPhoto) {
      setPhotoUrl(savedPhoto);
    }
    const savedAdmin = localStorage.getItem('nadia_portfolio_admin') === 'true';
    if (savedAdmin) {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setPhotoUrl(base64);
        localStorage.setItem('nadia_portfolio_photo', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN is NIM Nadia: 24021098
    if (pinInput.trim() === '24021098' || pinInput.trim() === '1234') {
      setIsAdmin(true);
      localStorage.setItem('nadia_portfolio_admin', 'true');
      setShowPinModal(false);
      setPinInput('');
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleLock = () => {
    setIsAdmin(false);
    localStorage.removeItem('nadia_portfolio_admin');
  };

  return (
    <section className="py-12 md:py-20 max-w-3xl mx-auto px-4 sm:px-6 relative">
      {/* Top Tag / Eyebrow */}
      <div className="mb-6 flex items-center justify-between">
        <span className="eyebrow">
          PERSONAL BRANDING PORTFOLIO
        </span>

        {/* Lock/Unlock Owner Button */}
        <button
          onClick={() => (isAdmin ? handleLock() : setShowPinModal(true))}
          className="font-mono text-[11px] text-[#A8827E] hover:text-[#EDE4D3] bg-[#241318] hover:bg-[#3A252B] border border-[#3A252B] px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1.5"
          title={isAdmin ? "Keluar Mode Pemilik" : "Mode Pemilik (Upload Foto)"}
        >
          {isAdmin ? (
            <>
              <Unlock size={12} className="text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Mode Pemilik Aktif</span>
            </>
          ) : (
            <>
              <Lock size={12} className="text-[#96293D]" />
              <span>Akses Pemilik</span>
            </>
          )}
        </button>
      </div>

      {/* Main Layout Grid: Left Content + Right Hanging Nametag */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
        {/* Left Side: Name, Title, Description & CTAs */}
        <div className="md:col-span-7">
          {/* Main Large Name */}
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#EDE4D3] tracking-tight mb-3 leading-tight">
            Nadeem
          </h1>

          {/* Short Title & Rotating Role Line */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-6">
            <span className="text-base sm:text-lg font-medium text-[#A8827E]">
              IT Student & Systems Developer
            </span>
            <span className="hidden sm:inline text-[#3A252B]">•</span>
            <div className="h-8 flex items-center overflow-hidden">
              <span
                key={currentRoleIndex}
                className="font-mono text-xs text-[#96293D] bg-[#40161E]/60 border border-[#3A252B] px-3 py-1 rounded-md transition-all duration-300 animate-fadeIn"
              >
                {roles[currentRoleIndex]}
              </span>
            </div>
          </div>

          {/* Short Description */}
          <p className="text-[#9C8682] text-sm sm:text-base leading-relaxed mb-8">
            Mahasiswa D3 Teknologi Informasi di Politeknik 'Aisyiyah Pontianak dengan minat di web development dan sistem pengelolaan data. Terbiasa membangun fitur pelaporan dan otomasi dokumen menggunakan Laravel, Filament, dan berbagai tools data lainnya.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#project"
              className="inline-flex items-center gap-2 bg-[#7A2333] hover:bg-[#96293D] text-[#EDE4D3] font-medium text-sm px-5 py-2.5 rounded-xl border border-[#7A2333] transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Lihat Project</span>
              <ArrowDownRight size={16} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#241318] hover:bg-[#2d181e] text-[#EDE4D3] text-sm font-medium px-5 py-2.5 rounded-xl border border-[#3A252B] hover:border-[#A8827E] transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail size={16} className="text-[#A8827E]" />
              <span>Hubungi Saya</span>
            </a>
          </div>
        </div>

        {/* Right Side: Hanging Animated ID Lanyard Nametag */}
        <div className="md:col-span-5 flex flex-col items-center justify-center pt-2 relative">
          {/* Lanyard Top Strap String */}
          <div className="w-full flex justify-center items-center h-8 relative overflow-visible">
            <div className="w-1.5 h-12 bg-gradient-to-b from-[#3A252B] via-[#7A2333] to-[#A8827E] rounded-full shadow-md"></div>
          </div>

          {/* Swinging Container with Framer Motion */}
          <motion.div
            className="relative cursor-pointer group"
            style={{ transformOrigin: 'top center' }}
            animate={{
              rotate: [-2.5, 2.5, -2.5],
              y: [0, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.02, rotate: 0 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Metal Lanyard Clip / Ring */}
            <div className="mx-auto w-8 h-4 bg-[#3A252B] border border-[#A8827E]/40 rounded-t-md flex items-center justify-center shadow-inner relative z-10">
              <div className="w-3 h-1.5 bg-[#1C0F14] rounded-full border border-[#7A2333]"></div>
            </div>

            {/* Nametag Card Badge */}
            <div className="w-56 bg-[#241318] border border-[#3A252B] hover:border-[#7A2333] rounded-2xl p-4 shadow-2xl relative overflow-hidden transition-colors">
              {/* Top Accent Strip */}
              <div className="h-1.5 bg-gradient-to-r from-[#7A2333] via-[#96293D] to-[#A8827E] -mx-4 -mt-4 mb-3"></div>

              {/* Card Header Label */}
              <div className="flex items-center justify-between mb-3 border-b border-[#3A252B] pb-2">
                <span className="font-mono text-[9px] text-[#A8827E] tracking-widest uppercase flex items-center gap-1">
                  <ShieldCheck size={10} className="text-[#96293D]" />
                  <span>STUDENT PASS</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Active"></span>
              </div>

              {/* Photo Area with Optional Upload Overlay */}
              <div className="relative group/photo mb-3 flex justify-center">
                <div className="w-28 h-32 rounded-xl bg-[#1C0F14] border border-[#3A252B] overflow-hidden relative flex items-center justify-center shadow-inner">
                  {photoUrl ? (
                    <img
                      src={photoUrl}
                      alt="Nadia Mirela / Nadeen"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    /* Elegant Styled Vector Avatar Fallback */
                    <div className="w-full h-full bg-gradient-to-b from-[#241318] to-[#1C0F14] flex flex-col items-center justify-center text-[#A8827E] p-2">
                      <div className="w-14 h-14 rounded-full bg-[#40161E] border border-[#7A2333] flex items-center justify-center mb-1 text-[#EDE4D3] font-serif text-xl font-bold">
                        NM
                      </div>
                      <span className="font-mono text-[9px] text-[#9C8682] text-center">Nadia Mirela</span>
                    </div>
                  )}

                  {/* Photo Change Hover Button — ONLY visible if isAdmin */}
                  {isAdmin ? (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-[#1C0F14]/85 opacity-0 group-hover/photo:opacity-100 transition-opacity flex flex-col items-center justify-center text-[#EDE4D3] text-xs font-mono gap-1 p-1 backdrop-blur-xs"
                      title="Klik untuk ganti foto"
                    >
                      <Camera size={18} className="text-emerald-400" />
                      <span className="text-[10px] text-emerald-300 font-semibold">Ganti Foto</span>
                    </button>
                  ) : null}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Info Text in Nametag */}
              <div className="text-center space-y-1">
                <h2 className="font-serif font-bold text-base text-[#EDE4D3]">
                  Nadia Mirela
                </h2>
                <p className="font-mono text-[10px] text-[#96293D] uppercase tracking-wider font-semibold">
                  IT STUDENT & DEVELOPER
                </p>
                <div className="pt-2 mt-2 border-t border-[#3A252B] flex flex-col gap-0.5 text-[10px] font-mono text-[#9C8682]">
                  <span>NIM: 24021098</span>
                  <span className="text-[9px] text-[#A8827E]">Politeknik 'Aisyiyah Pontianak</span>
                </div>
              </div>

              {/* Bottom Decorative Barcode Pattern */}
              <div className="mt-3 pt-2 border-t border-[#3A252B]/60 flex items-center justify-between">
                <div className="flex gap-0.5 h-3 items-center opacity-60">
                  <div className="w-0.5 h-full bg-[#EDE4D3]"></div>
                  <div className="w-1 h-full bg-[#EDE4D3]"></div>
                  <div className="w-0.5 h-full bg-[#EDE4D3]"></div>
                  <div className="w-1.5 h-full bg-[#EDE4D3]"></div>
                  <div className="w-0.5 h-full bg-[#EDE4D3]"></div>
                  <div className="w-1 h-full bg-[#EDE4D3]"></div>
                  <div className="w-0.5 h-full bg-[#EDE4D3]"></div>
                  <div className="w-1.5 h-full bg-[#EDE4D3]"></div>
                </div>
                <span className="font-mono text-[8px] text-[#9C8682]">POLITA-2026</span>
              </div>
            </div>
          </motion.div>

          {isAdmin ? (
            <span className="font-mono text-[9px] text-emerald-400 mt-3 flex items-center gap-1">
              <Check size={10} />
              <span>Akses pemilik aktif. Klik kartu untuk ganti foto.</span>
            </span>
          ) : (
            <span className="font-mono text-[9px] text-[#9C8682] mt-3 flex items-center gap-1 opacity-75">
              <Sparkles size={10} className="text-[#A8827E]" />
              <span>Kartu Nama Digital • Nadia Mirela</span>
            </span>
          )}
        </div>
      </div>

      {/* Formal Info Label Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#3A252B] font-mono text-xs">
        <div className="bg-[#241318] border border-[#3A252B] p-3 rounded-xl flex flex-col gap-1">
          <span className="text-[#9C8682] text-[10px] uppercase tracking-wider">IDENTITAS (ID)</span>
          <span className="text-[#EDE4D3] font-medium">NIM : 24021098</span>
        </div>
        <div className="bg-[#241318] border border-[#3A252B] p-3 rounded-xl flex flex-col gap-1">
          <span className="text-[#9C8682] text-[10px] uppercase tracking-wider">INSTITUSI</span>
          <span className="text-[#EDE4D3] font-medium truncate">Politeknik 'Aisyiyah Pontianak</span>
        </div>
        <div className="bg-[#241318] border border-[#3A252B] p-3 rounded-xl flex flex-col gap-1">
          <span className="text-[#9C8682] text-[10px] uppercase tracking-wider">LOKASI</span>
          <span className="text-[#EDE4D3] font-medium">Pontianak Kalimantan Barat</span>
        </div>
      </div>

      {/* Owner PIN Verification Modal */}
      <AnimatePresence>
        {showPinModal && (
          <div className="fixed inset-0 z-50 bg-[#1C0F14]/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#241318] border border-[#3A252B] p-6 rounded-2xl w-full max-w-sm shadow-2xl relative"
            >
              <button
                onClick={() => {
                  setShowPinModal(false);
                  setPinError(false);
                  setPinInput('');
                }}
                className="absolute top-4 right-4 text-[#9C8682] hover:text-[#EDE4D3]"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-[#40161E] rounded-lg border border-[#3A252B]">
                  <KeyRound size={18} className="text-[#A8827E]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#EDE4D3]">
                  Akses Pemilik
                </h3>
              </div>

              <p className="text-xs text-[#9C8682] mb-4 leading-relaxed">
                Masukkan NIM kamu (<span className="font-mono text-[#EDE4D3]">24021098</span>) untuk membuka mode pengubahan foto nametag.
              </p>

              <form onSubmit={handleUnlock} className="space-y-4">
                <div>
                  <input
                    type="password"
                    placeholder="Masukkan NIM / PIN..."
                    value={pinInput}
                    onChange={(e) => {
                      setPinInput(e.target.value);
                      setPinError(false);
                    }}
                    className="w-full bg-[#1C0F14] border border-[#3A252B] focus:border-[#7A2333] px-3 py-2 rounded-xl text-sm font-mono text-[#EDE4D3] outline-none transition-colors"
                    autoFocus
                  />
                  {pinError && (
                    <p className="text-[11px] text-rose-400 font-mono mt-1">
                      PIN salah! Gunakan NIM kamu: 24021098
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setShowPinModal(false);
                      setPinError(false);
                      setPinInput('');
                    }}
                    className="px-3 py-1.5 text-xs font-mono text-[#9C8682] hover:text-[#EDE4D3]"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#7A2333] hover:bg-[#96293D] text-[#EDE4D3] font-mono text-xs rounded-lg transition-colors"
                  >
                    Buka Akses
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;



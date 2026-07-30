import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailPlaceholder = 'nad994113@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText('nad994113@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 border-t border-[#3A252B] max-w-3xl mx-auto px-4 sm:px-6">
      {/* Eyebrow */}
      <div className="mb-4">
        <span className="eyebrow">CONTACT // HUBUNGI SAYA</span>
      </div>

      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#EDE4D3] mb-8">
        Mari Berkolaborasi
      </h2>

      {/* Main Contact Card */}
      <div className="bg-[#241318] border border-[#3A252B] rounded-xl p-6 sm:p-8 space-y-8">
        <div>
          <h3 className="font-serif text-xl text-[#EDE4D3] font-semibold mb-3">
            Siap Untuk Mendiskusikan Proyek Baru atau Peluang Strategis?
          </h3>
          <p className="text-[#9C8682] text-sm sm:text-base leading-relaxed">
            Saya terbuka untuk diskusi seputar konsultasi rekayasa perangkat lunak, kolaborasi arsitektur sistem, kegiatan akademis, atau diskusi profesional lainnya. Silakan hubungi saya melalui saluran resmi di bawah ini.
          </p>
        </div>

        {/* Primary Email Box */}
        <div className="bg-[#1C0F14] border border-[#3A252B] p-4 rounded-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#40161E] rounded-lg border border-[#3A252B]">
              <Mail size={20} className="text-[#A8827E]" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#9C8682] block tracking-wider">
                EMAIL DIRECT
              </span>
              <span className="font-mono text-sm text-[#EDE4D3] font-medium">
                {emailPlaceholder}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-2 bg-[#241318] hover:bg-[#3A252B] text-[#EDE4D3] text-xs font-mono rounded-lg border border-[#3A252B] transition-colors flex items-center gap-1.5"
              title="Salin Alamat Email"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span>Tersalin</span>
                </>
              ) : (
                <>
                  <Copy size={14} className="text-[#A8827E]" />
                  <span>Salin Email</span>
                </>
              )}
            </button>

            <a
              href="mailto:ganti_email@domain.com"
              className="px-4 py-2 bg-[#7A2333] hover:bg-[#96293D] text-[#EDE4D3] text-xs font-medium rounded-lg border border-[#7A2333] transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <Send size={14} />
              <span>Kirim Pesan</span>
            </a>
          </div>
        </div>

        {/* Social Link Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/nadia-mirela"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-[#1C0F14] hover:bg-[#201117] border border-[#3A252B] hover:border-[#A8827E] rounded-xl flex items-center justify-between transition-all duration-200 group hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#241318] rounded-lg border border-[#3A252B]">
                <Linkedin size={18} className="text-[#A8827E] group-hover:text-[#EDE4D3] transition-colors" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#9C8682] uppercase tracking-wider block">
                  LINKEDIN PROFILE
                </span>
                <span className="font-mono text-xs text-[#EDE4D3]">
                  Nadin
                </span>
              </div>
            </div>
            <span className="text-[#9C8682] group-hover:text-[#EDE4D3] transition-colors font-mono text-xs">
              →
            </span>
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/nadin-jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-[#1C0F14] hover:bg-[#201117] border border-[#3A252B] hover:border-[#A8827E] rounded-xl flex items-center justify-between transition-all duration-200 group hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#241318] rounded-lg border border-[#3A252B]">
                <Github size={18} className="text-[#A8827E] group-hover:text-[#EDE4D3] transition-colors" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#9C8682] uppercase tracking-wider block">
                  GITHUB REPOSITORY
                </span>
                <span className="font-mono text-xs text-[#EDE4D3]">
                  nadin-jpg
                </span>
              </div>
            </div>
            <span className="text-[#9C8682] group-hover:text-[#EDE4D3] transition-colors font-mono text-xs">
              →
            </span>
          </a>
        </div>

        {/* Footer Note inside contact */}
        <div className="text-center pt-2">
          <span className="font-mono text-[11px] text-[#9C8682]">
            Estimasi balasan dalam 1x24 jam kerja • Waktu Lokal WIB (UTC+7)
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

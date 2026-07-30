import React from 'react';
import { Wallet, GraduationCap, Globe } from 'lucide-react';

export const Organizations: React.FC = () => {
  const orgExperiences = [
    {
      roleBadge: 'Bendahara',
      orgName: 'HMTI — Himpunan Mahasiswa Teknologi Informasi',
      period: '2024 - 2026',
      icon: <Wallet size={16} className="text-[#A8827E]" />,
      description:
        'Mengelola keuangan organisasi secara menyeluruh, termasuk menyusun laporan pertanggungjawaban (LPJ) untuk seluruh program kerja HMTI.',
      highlights: [
        'Menyusun LPJ untuk 7 program kerja HMTI',
        'Mengelola arus kas dan pelaporan keuangan organisasi',
      ],
    },
    {
      roleBadge: 'Anggota Bidang Kaderisasi',
      orgName: 'PK IMM — Ikatan Mahasiswa Muhammadiyah',
      period: '2024 - 2026',
      icon: <GraduationCap size={16} className="text-[#A8827E]" />,
      description:
        'Terlibat dalam pengembangan dan pembinaan kader di tingkat komisariat, mendukung proses regenerasi dan penguatan nilai organisasi.',
      highlights: [
        'Berkontribusi dalam program pembinaan kader',
        'Menyusun dokumentasi kegiatan bidang kaderisasi',
      ],
    },
    {
      roleBadge: 'Anggota',
      orgName: 'PERMIKOMNAS',
      period: 'isi: 2025-2026',
      icon: <Globe size={16} className="text-[#A8827E]" />,
      description:
        'keterlibatan dalam kegiatan/program tingkat nasional, jaringan antar-mahasiswa ilmu komputer, atau kontribusi spesifik lainnya.',
      highlights: [
        'Highlight kontribusi 1 di PERMIKOMNAS',
        'Highlight kontribusi 2 di PERMIKOMNAS',
      ],
    },
  ];

  return (
    <section id="organisasi" className="py-16 border-t border-[#3A252B] max-w-3xl mx-auto px-4 sm:px-6">
      {/* Eyebrow */}
      <div className="mb-4">
        <span className="eyebrow">ORGANISASI // PENGALAMAN ORGANISASI</span>
      </div>

      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#EDE4D3] mb-8">
        Kepemimpinan & Kontribusi Komunitas
      </h2>

      {/* Grid 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orgExperiences.map((org, index) => (
          <div
            key={index}
            className="bg-[#241318] border border-[#3A252B] rounded-xl p-6 flex flex-col justify-between hover:border-[#7A2333]/50 transition-colors"
          >
            <div>
              {/* Top Header: Badge & Period */}
              <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#EDE4D3] bg-[#40161E] border border-[#3A252B] px-2.5 py-1 rounded-md">
                  {org.icon}
                  <span>{org.roleBadge}</span>
                </span>
                <span className="font-mono text-xs text-[#A8827E]">
                  {org.period}
                </span>
              </div>

              {/* Organization Name */}
              <h3 className="font-serif font-bold text-lg text-[#EDE4D3] mb-3 leading-snug">
                {org.orgName}
              </h3>

              {/* Description */}
              <p className="text-[#9C8682] text-xs sm:text-sm leading-relaxed mb-4">
                {org.description}
              </p>
            </div>

            {/* Highlights List */}
            <div className="border-t border-[#3A252B] pt-3 space-y-1.5">
              {org.highlights.map((item, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2 font-mono text-[11px] text-[#A8827E]">
                  <span className="text-[#7A2333] mt-0.5">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizations;
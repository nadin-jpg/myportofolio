import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

export const Project: React.FC = () => {
  return (
    <section id="project" className="py-16 border-t border-[#3A252B] max-w-3xl mx-auto px-4 sm:px-6">
      {/* Eyebrow */}
      <div className="mb-4">
        <span className="eyebrow">PROJECT // CASE STUDY UTAMA</span>
      </div>

      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#EDE4D3] mb-8">
        Studi Kasus Proyek Unggulan
      </h2>

      {/* Main Case Study Card */}
      <div className="bg-[#241318] border border-[#3A252B] rounded-xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        {/* Top Status & Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#3A252B] pb-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#96293D] bg-[#40161E] border border-[#3A252B] px-3 py-1 rounded-full">
            <CheckCircle2 size={12} className="text-[#96293D]" />
            <span>STATUS: BUILT FROM SCRATCH // 2026</span>
          </div>

          <span className="font-mono text-xs text-[#A8827E]">
            CASE STUDY #01
          </span>
        </div>

        {/* Project Title */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#EDE4D3] tracking-tight mb-2 flex items-center justify-between">
            <span>SI-LOGFAR — Sistem Informasi Logistik Farmasi</span>
            <a
              href="#"
              className="text-[#A8827E] hover:text-[#EDE4D3] transition-colors p-1"
              title="Demo / Tautan Eksternal"
            >
              <ExternalLink size={18} />
            </a>
          </h3>
          <p className="font-mono text-xs text-[#A8827E]">
            Dibangun dari nol untuk distribusi obat yang lebih akurat
          </p>
        </div>

        {/* 3 Paragraph Description */}
        <div className="space-y-4 text-[#9C8682] text-sm sm:text-base leading-relaxed border-t border-b border-[#3A252B]/60 py-6">
          <div>
            <span className="font-mono text-xs text-[#EDE4D3] uppercase tracking-wider block mb-1">
              01. OVERVIEW & TUJUAN
            </span>
            <p>
              SI-LOGFAR dibangun untuk menjawab kebutuhan pengelolaan distribusi
              obat dan BMHP (Bahan Medis Habis Pakai) yang sebelumnya masih rawan
              human error. Sistem ini dirancang agar setiap pergerakan stok obat —
              masuk, keluar, hingga kadaluarsa — bisa tercatat dan dipantau secara
              akurat dan real-time.
            </p>
          </div>

          <div>
            <span className="font-mono text-xs text-[#EDE4D3] uppercase tracking-wider block mb-1">
              02. PERAN & KONTRIBUSI
            </span>
            <p>
              Saya membangun aplikasi ini dari awal hingga jadi — mulai dari
              merancang struktur database, membangun backend dengan Laravel &
              Filament, sampai mengembangkan fitur pelaporan (Rekap Bulanan,
              Kartu Stok, Laporan Kadaluarsa) untuk kategori Obat maupun BMHP,
              lengkap dengan ekspor Excel dan PDF.
            </p>
          </div>

          <div>
            <span className="font-mono text-xs text-[#EDE4D3] uppercase tracking-wider block mb-1">
              03. TANTANGAN TEKNIS & SOLUSI
            </span>
            <p>
              Salah satu tantangan utama: data BMHP tidak memiliki pelacakan
              nomor batch per transaksi seperti Obat. Saya merancang ulang logika
              pelaporan agar tetap akurat dan konsisten tanpa memaksakan data
              yang memang tidak tersedia, sehingga laporan tetap bisa diandalkan
              untuk pengambilan keputusan.
            </p>
          </div>
        </div>

        {/* Meta Info Grid 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-[#1C0F14] border border-[#3A252B] p-4 rounded-xl">
            <span className="font-mono text-[10px] uppercase text-[#9C8682] tracking-wider block mb-1">
              TECH STACK
            </span>
            <span className="text-xs font-mono text-[#EDE4D3] font-medium leading-tight block">
              Laravel, Filament, MySQL
            </span>
          </div>

          <div className="bg-[#1C0F14] border border-[#3A252B] p-4 rounded-xl">
            <span className="font-mono text-[10px] uppercase text-[#9C8682] tracking-wider block mb-1">
              OUTPUT / HASIL
            </span>
            <span className="text-xs font-mono text-[#EDE4D3] font-medium leading-tight block">
              Sistem Pelaporan Stok Obat & BMHP
            </span>
          </div>

          <div className="bg-[#1C0F14] border border-[#3A252B] p-4 rounded-xl">
            <span className="font-mono text-[10px] uppercase text-[#9C8682] tracking-wider block mb-1">
              INSTANSI / KLIEN
            </span>
            <span className="text-xs font-mono text-[#EDE4D3] font-medium leading-tight block">
              Dinas Kesehatan Kota Pontianak
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
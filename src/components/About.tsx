import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 border-t border-[#3A252B] max-w-3xl mx-auto px-4 sm:px-6">
      {/* Eyebrow */}
      <div className="mb-4">
        <span className="eyebrow">ABOUT // TENTANG SAYA</span>
      </div>

      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#EDE4D3] mb-8">
        Latar Belakang & Filosofi Kerja
      </h2>

      <div className="space-y-10">
        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-[#9C8682] text-sm sm:text-base leading-relaxed">
          <p>
            Saya Nadeen, mahasiswa D3 Teknologi Informasi di Politeknik 'Aisyiyah Pontianak. Ketertarikan saya di bidang teknologi berkembang lebih nyata saat berkesempatan magang di Dinas Kesehatan Kota Pontianak, di mana saya membangun SI-LOGFAR — sebuah sistem untuk manajemen distribusi obat agar proses pencatatan dan pelacakan stok jadi lebih akurat.
          </p>
          <p>
            Dalam bekerja, saya percaya system yang baik bukan yang paling rumit, tapi yang paling jelas dan bisa diandalkan. Saya terbiasa memperhatikan detail kecil dari akurasi data sampai kemudahan laporan yang di baca karena di dunia seperti manajemen farmasi kesalahan kecil berdampak besar.
          </p>
          <p>
            Ke depan, saya ingin terus memperdalam kemampuan di pengembangan sistem berbasis data, sekaligus tetap aktif berkontribusi lewat organisasi kampus karena bagi saya, kemampuan teknis dan kemampuan mengelola tanggung jawab sama-sama penting untuk berkembang
          </p>
        </div>

        {/* Fact List Card */}
        <div className="bg-[#241318] border border-[#3A252B] rounded-xl p-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#A8827E] mb-4 pb-3 border-b border-[#3A252B] flex items-center justify-between">
            <span>METADATA DIRI & FAKTA UTAMA</span>
            <span className="text-[#96293D]">• FORMAL SPEC</span>
          </h3>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-xs sm:text-sm">
            <div>
              <dt className="font-mono text-[11px] text-[#9C8682] uppercase tracking-wider mb-1">
                Role
              </dt>
              <dd className="text-[#EDE4D3] font-medium">
                IT Student & System Developer
              </dd>
            </div>

            <div>
              <dt className="font-mono text-[11px] text-[#9C8682] uppercase tracking-wider mb-1">
                Institusi 
              </dt>
              <dd className="text-[#EDE4D3] font-medium">
                Politeknik 'Aisyiyah Pontianak
              </dd>
            </div>

            <div>
              <dt className="font-mono text-[11px] text-[#9C8682] uppercase tracking-wider mb-1">
                Lokasi Domisili
              </dt>
              <dd className="text-[#EDE4D3] font-medium">
                Kota Pontianak, Kalimantan Barat
              </dd>
            </div>

            <div>
              <dt className="font-mono text-[11px] text-[#9C8682] uppercase tracking-wider mb-1">
                Fokus Keahlian
              </dt>
              <dd className="text-[#EDE4D3] font-medium">
                Web Development dan Fullstack
              </dd>
            </div>

            <div className="sm:col-span-2 pt-2 border-t border-[#3A252B]">
              <dt className="font-mono text-[11px] text-[#9C8682] uppercase tracking-wider mb-1">
                Aktivitas Organisasi
              </dt>
              <dd className="text-[#EDE4D3] font-medium">
                Bendahara HMTI · Bidang Kaderisasi PK IMM
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;

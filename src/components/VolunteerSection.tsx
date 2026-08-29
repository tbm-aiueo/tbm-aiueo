import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Mail, 
  ExternalLink,
  MessageSquare,
  UserCheck
} from 'lucide-react';
import { VolunteerFormData } from '../types';

const interestOptions = [
  'Membaca & Mendongeng',
  'Mengajar / Bimbingan Belajar',
  'Menulis & Jurnalistik',
  'Desain Grafis & Mading',
  'Fotografi & Video',
  'Dokumentasi & Arsip',
  'Literasi Digital & Komputer',
  'Seni Karinding & Teater',
  'Kegiatan Anak & Permainan',
  'Lingkungan & Penghijauan',
  'Administrasi & Donasi Buku',
  'Lainnya'
];

export const VolunteerSection: React.FC = () => {
  const [formData, setFormData] = useState<VolunteerFormData>({
    name: '',
    email: '',
    whatsapp: '',
    domicile: '',
    interests: [],
    skills: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [mailToLink, setMailToLink] = useState('');

  const handleInterestToggle = (item: string) => {
    setFormData(prev => {
      const exists = prev.interests.includes(item);
      const newInterests = exists 
        ? prev.interests.filter(i => i !== item)
        : [...prev.interests, item];
      return { ...prev, interests: newInterests };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct clean mailto URI
    const subject = encodeURIComponent(`[PENDAFTARAN RELAWAN] ${formData.name} - TBM AIUEO`);
    const body = encodeURIComponent(
      `Halo Tim Redaksi & Relawan Komunitas Ngejah,\n\n` +
      `Saya ingin mendaftarkan diri sebagai relawan TBM AIUEO Komunitas Ngejah:\n\n` +
      `• Nama Lengkap: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• No. WhatsApp: ${formData.whatsapp}\n` +
      `• Domisili: ${formData.domicile}\n` +
      `• Minat Kegiatan: ${formData.interests.join(', ') || 'Umum'}\n` +
      `• Keahlian/Latar Belakang: ${formData.skills || '-'}\n` +
      `• Pesan/Motivasi: ${formData.message || '-'}\n\n` +
      `Terima kasih atas ruang bertumbuh bersama Komunitas Ngejah!\n`
    );

    const generatedLink = `mailto:redaksingejah@gmail.com?subject=${subject}&body=${body}`;
    setMailToLink(generatedLink);
    setSubmitted(true);

    // Open user's default email client
    window.location.href = generatedLink;
  };

  return (
    <section id="relawan" className="py-16 sm:py-24 bg-stone-50 dark:bg-stone-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Jadi Bagian dari Gerakan</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            "Satu buku. Satu waktu. Satu kontribusi."
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-400">
            Bergabunglah bersama kami merawat senyum dan asa anak-anak di pelosok Garut Selatan.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 shadow-xl">
          
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                Terima Kasih, Sahabat Relawan!
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto leading-relaxed">
                Formulir pendaftaran Anda telah disiapkan. Jika aplikasi email Anda belum terbuka otomatis, silakan klik tombol di bawah untuk mengirim data langsung ke tim TBM AIUEO.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={mailToLink}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>Kirim Email ke redaksingejah@gmail.com</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-sm font-semibold hover:bg-stone-200 dark:hover:bg-stone-700"
                >
                  Kembali ke Formulir
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nama */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2">
                    Nama Lengkap <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Sarah Nuraini"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2">
                    Alamat Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2">
                    Nomor WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="081234567890"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Domisili */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2">
                    Domisili / Kota Asal <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.domicile}
                    onChange={(e) => setFormData({ ...formData, domicile: e.target.value })}
                    placeholder="Contoh: Garut / Bandung / Jakarta"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Minat Kegiatan */}
              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2">
                  Minat Bidang Kontribusi (Boleh pilih lebih dari satu)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {interestOptions.map((item) => {
                    const isSelected = formData.interests.includes(item);
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => handleInterestToggle(item)}
                        className={`p-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                          isSelected
                            ? 'bg-emerald-700 text-white shadow-xs font-semibold'
                            : 'bg-stone-50 dark:bg-stone-950 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}{item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Keahlian */}
              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2">
                  Keahlian atau Pengalaman Relevan
                </label>
                <input
                  type="text"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="Contoh: Mengajar bahasa Inggris, mendongeng anak, desain grafis Canva/Photoshop, dll"
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Pesan */}
              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2">
                  Pesan atau Motivasi Bergabung
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ceritakan sedikit tentang motivasi Anda ingin berkontribusi bersama TBM AIUEO..."
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-volunteer-btn"
                  className="w-full py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pendaftaran Relawan</span>
                </button>
                <p className="text-center text-[11px] text-stone-500 dark:text-stone-400 mt-2">
                  Data Anda akan diproses langsung melalui email resmi pengelola: <strong>redaksingejah@gmail.com</strong>
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

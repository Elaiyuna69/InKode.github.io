import React, { useState } from 'react';
import { Book, Users, HardDrive, GamepadIcon, ChevronRight, ChevronLeft, Bell, Award, ShoppingBag } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: 'CSS Flexbox', content: 'Flexbox membuat layout responsif menjadi mudah!' },
    { title: 'HTML Semantik', content: 'Tag semantik meningkatkan aksesibilitas dan SEO.' },
    { title: 'JavaScript Promises', content: 'Promises memudahkan penanganan operasi asinkron.' },
    { title: 'Python List Comprehension', content: 'Buat list dengan cara yang efisien dan elegan.' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Belajar Coding Interaktif</h1>
      </header>

      {/* Fitur Utama */}
      <section className="container mx-auto my-8 p-4">
        <h2 className="text-xl font-semibold mb-4">Fitur Menarik</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard icon={<GamepadIcon />} title="Pembelajaran Berbasis Game" description="Belajar sambil bermain untuk pengalaman yang menyenangkan" />
          <FeatureCard icon={<Users />} title="Komunitas Suportif" description="Diskusi dan bantuan dari sesama pembelajar" />
          <FeatureCard icon={<HardDrive />} title="Penyimpanan Akun" description="Simpan progres belajar Anda dengan aman" />
          <FeatureCard icon={<Book />} title="Materi Komprehensif" description="Dari dasar hingga tingkat lanjut" />
        </div>
      </section>

      {/* Carousel Materi Unik */}
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto">
          <h2 className="text-xl font-semibold mb-4">Sekilas Materi Unik</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-4">
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-lg font-semibold">{slide.title}</h3>
                      <p>{slide.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1))} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
              <ChevronLeft />
            </button>
            <button onClick={() => setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0))} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Materi yang Belum Selesai */}
      <section className="container mx-auto my-8 p-4">
        <h2 className="text-xl font-semibold mb-4">Lanjutkan Belajar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <UnfinishedMaterialCard title="Dasar-dasar HTML" progress={75} />
          <UnfinishedMaterialCard title="CSS Layout" progress={50} />
          <UnfinishedMaterialCard title="JavaScript Dasar" progress={30} />
        </div>
      </section>

      {/* Update Komunitas */}
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto">
          <h2 className="text-xl font-semibold mb-4">Update Komunitas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CommunityUpdateCard icon={<Bell />} title="Pertanyaan Baru" content="5 pertanyaan baru tentang React Hooks" />
            <CommunityUpdateCard icon={<Award />} title="Kuis Latihan Baru" content="Kuis JavaScript ES6 telah ditambahkan" />
            <CommunityUpdateCard icon={<Users />} title="Diskusi Populer" content="Tips optimasi performa website" />
          </div>
        </div>
      </section>

      {/* Quest dan Reward */}
      <section className="container mx-auto my-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Quest Harian</h2>
            <ul className="space-y-2">
              <QuestItem title="Selesaikan 3 latihan CSS" xp={50} />
              <QuestItem title="Bantu 2 anggota komunitas" xp={30} />
              <QuestItem title="Buat proyek kecil menggunakan JavaScript" xp={100} />
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Reward Toko</h2>
            <ul className="space-y-2">
              <RewardItem title="Stiker Laptop Developer" points={500} />
              <RewardItem title="Kursus Premium 1 Bulan" points={2000} />
              <RewardItem title="Konsultasi 1-on-1 dengan Expert" points={5000} />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="text-blue-500 mb-2">{icon}</div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const UnfinishedMaterialCard = ({ title, progress }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="font-semibold mb-2">{title}</h3>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
    <p className="text-sm text-gray-600 mt-2">Progress: {progress}%</p>
  </div>
);

const CommunityUpdateCard = ({ icon, title, content }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="text-blue-500 mb-2">{icon}</div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{content}</p>
  </div>
);

const QuestItem = ({ title, xp }) => (
  <li className="flex justify-between items-center bg-white p-3 rounded shadow">
    <span>{title}</span>
    <span className="text-green-500 font-semibold">{xp} XP</span>
  </li>
);

const RewardItem = ({ title, points }) => (
  <li className="flex justify-between items-center bg-white p-3 rounded shadow">
    <span>{title}</span>
    <span className="text-purple-500 font-semibold">{points} poin</span>
  </li>
);

export default HomePage;
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Phone, 
  Car, 
  Clock, 
  MapPin, 
  CheckCircle, 
  ChevronDown, 
  X,
  Stethoscope,
  Plane,
  Package,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/* ============================================================
   CẤU HÌNH NỘI DUNG WEBSITE (DỄ DÀNG CHỈNH SỬA)
   ============================================================ */
const WEBSITE_CONFIG = {
  brandName: "Xe Ghép Hà Nam",
  hotline: "0824.225.225",
  hotlineRaw: "0824225225",
  zaloLink: "https://zalo.me/0824225225",
  subTitle: "Hà Nam • Hà Nội • Nội Bài",
  developer: "Công ty TNHH CS HMD",
  prices: {
    hanoi: [
      { name: 'Phủ Lý ↔ Hà Nội', shared: '200.000 - 250.000', bao4: '500.000 - 550.000', bao7: '600.000 - 700.000' },
      { name: 'Đồng Văn ↔ Hà Nội', shared: '200.000 - 250.000', bao4: '450.000 - 500.000', bao7: '600.000 - 700.000' },
      { name: 'Bình Lục ↔ Hà Nội', shared: '250.000 - 300.000', bao4: '550.000 - 650.000', bao7: '700.000 - 800.000' },
      { name: 'Lý Nhân ↔ Hà Nội', shared: '250.000 - 300.000', bao4: '550.000 - 650.000', bao7: '700.000 - 800.000' },
      { name: 'Thanh Liêm ↔ Hà Nội', shared: '250.000 - 300.000', bao4: '550.000 - 650.000', bao7: '700.000 - 800.000' },
    ],
    noibai: [
      { name: 'Phủ Lý ↔ Nội Bài', shared: '350.000 - 400.000', bao4: '650.000 - 750.000', bao7: '750.000 - 850.000' },
      { name: 'Đồng Văn ↔ Nội Bài', shared: '300.000 - 350.000', bao4: '600.000 - 700.000', bao7: '700.000 - 800.000' },
    ]
  }
};

const ZaloIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M13 12H35C37.8 12 40 14.2 40 17V30C40 32.8 37.8 35 35 35H23.6L16.9 39.6C16.1 40.1 15 39.6 15 38.6V35H13C10.2 35 8 32.8 8 30V17C8 14.2 10.2 12 13 12Z" fill="currentColor"/>
    <path d="M15.2 28.7H23.3V26.5H18.6L23.2 20.4V18.3H15.5V20.5H19.8L15.2 26.6V28.7ZM25.3 28.7H27.7V18.3H25.3V28.7ZM29.4 28.7H31.8V22.9C31.8 21.4 32.7 20.4 34 20.4C35.2 20.4 35.9 21.2 35.9 22.6V28.7H38.3V22.1C38.3 19.7 36.9 18.2 34.7 18.2C33.4 18.2 32.4 18.7 31.8 19.6V18.4H29.4V28.7Z" fill="white"/>
  </svg>
);

// --- Components ---

const Navbar = () => (
  <header className="sticky sticky-nav z-50 bg-white border-b border-slate-200 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-center sm:justify-between relative">
      
      {/* Brand & Logo Container */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
        {/* Logo - Absolute on mobile, static on desktop */}
        <div className="absolute left-4 sm:static w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-green flex items-center justify-center text-white shrink-0 shadow-sm">
          <Car size={26} />
        </div>
        
        {/* Brand Text - Centered on mobile due to justify-center parent, left-aligned on desktop */}
        <div className="text-center sm:text-left">
          <h1 className="text-lg sm:text-xl font-black text-slate-900 leading-tight tracking-tight">
            {WEBSITE_CONFIG.brandName}
          </h1>
          <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
            {WEBSITE_CONFIG.subTitle}
          </p>
        </div>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
        <a href="#prices" className="hover:text-brand-green transition-colors">Bảng giá</a>
        <a href="#services" className="hover:text-brand-green transition-colors">Dịch vụ</a>
        <a href="#faq" className="hover:text-brand-green transition-colors">Hỏi đáp</a>
      </nav>

      <div className="flex items-center gap-3">
        <a 
          href={`tel:${WEBSITE_CONFIG.hotlineRaw}`} 
          className="btn-primary bg-brand-green text-white shadow-lg shadow-green-200/50 hidden sm:inline-flex"
        >
          <Phone size={18} fill="currentColor" />
          <span>Gọi ngay</span>
        </a>
        <a 
          href={WEBSITE_CONFIG.zaloLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary bg-brand-blue text-white shadow-lg shadow-blue-200/50 hidden sm:inline-flex"
        >
          <ZaloIcon size={20} />
          <span>Zalo</span>
        </a>
      </div>

      {/* Mobile action button (Absolute right) */}
      <div className="sm:hidden absolute right-4 top-1/2 -translate-y-1/2">
        <a 
          href={WEBSITE_CONFIG.zaloLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-brand-blue text-white rounded-xl flex items-center justify-center shadow-lg"
        >
          <ZaloIcon size={24} />
        </a>
      </div>
    </div>
  </header>
);

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-slate-50 py-12 lg:py-20 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <CheckCircle size={16} />
            <span>Đón tận nhà • Xe sạch sẽ • Chạy 24/7</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
            {WEBSITE_CONFIG.brandName} <br className="hidden sm:block" />
            <span className="text-brand-green">đi Hà Nội, Nội Bài</span>
          </h2>
          
          <p className="text-lg text-slate-600 font-medium mb-8 max-w-2xl leading-relaxed">
            Nhận đưa đón khách tận nhà từ Phủ Lý, Đồng Văn, Duy Tiên, Bình Lục... lên nội thành Hà Nội, các bệnh viện trung ương và Sân bay Nội Bài.
          </p>

          <div className="bg-white p-6 rounded-2xl border-2 border-green-100 border-l-8 border-l-brand-green shadow-xl shadow-slate-200/50 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Hotline đặt xe 24/7</p>
              <p className="text-4xl font-black text-red-600 tracking-tight">{WEBSITE_CONFIG.hotline}</p>
            </div>
            <div className="text-brand-green font-black text-lg sm:text-right">
              ⚡ Gọi là có xe ngay
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href={`tel:${WEBSITE_CONFIG.hotlineRaw}`} className="btn-primary bg-brand-green text-white text-lg py-4 px-8 shadow-xl shadow-green-200/60">
              <Phone size={20} fill="currentColor" />
              Đặt xe ngay
            </a>
            <a href={WEBSITE_CONFIG.zaloLink} target="_blank" rel="noopener noreferrer" className="btn-primary bg-brand-blue text-white text-lg py-4 px-8 shadow-xl shadow-blue-200/60">
              <ZaloIcon size={24} />
              Chat Zalo
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Hỗ trợ khách', val: '24/7' },
              { label: 'Xe sạch sẽ', val: '4–7 chỗ' },
              { label: 'Đón trả nhanh', val: 'Tận nơi' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-black text-brand-green leading-none">{stat.val}</p>
                <p className="text-xs font-bold text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={images[currentSlide]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover transform scale-105"
                alt={WEBSITE_CONFIG.brandName}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-black mb-1">An toàn & Tiện lợi</h3>
              <p className="font-bold text-slate-200">Phù hợp đi khám bệnh, công tác, sân bay.</p>
            </div>

            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-white/90 backdrop-blur text-slate-900 px-3 py-1 rounded-lg text-xs font-black shadow-sm">Xe đời mới</span>
              <span className="bg-brand-green/90 backdrop-blur text-white px-3 py-1 rounded-lg text-xs font-black shadow-sm">Giá rẻ nhất</span>
            </div>

            <div className="absolute bottom-8 right-8 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${currentSlide === i ? 'w-6 bg-brand-green' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PriceTable = () => {
  const Table = ({ data }: { data: any[] }) => (
    <div className="space-y-4">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40">
        <table className="xe-ghep-table-reset text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-brand-dark text-white">
              <th className="px-6 py-4 font-black">Tuyến đường</th>
              <th className="px-4 py-4 font-black">Xe ghép</th>
              <th className="px-4 py-4 font-black">Bao 5 chỗ</th>
              <th className="px-4 py-4 font-black">Bao 7 chỗ</th>
              <th className="px-6 py-4 font-black text-center">Đặt xe</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((item, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-5 font-black text-slate-900">{item.name}</td>
                <td className="px-4 py-5 font-black text-brand-green">{item.shared}</td>
                <td className="px-4 py-5 font-bold text-slate-600">{item.bao4}</td>
                <td className="px-4 py-5 font-bold text-slate-600">{item.bao7}</td>
                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <a href={`tel:${WEBSITE_CONFIG.hotlineRaw}`} className="p-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-700 hover:text-white transition-colors">
                      <Phone size={18} fill="currentColor" />
                    </a>
                    <a href={WEBSITE_CONFIG.zaloLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
                      <ZaloIcon size={20} />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View (No scrolling needed) */}
      <div className="md:hidden space-y-3">
        {data.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-black text-slate-900">{item.name}</h4>
              <div className="flex gap-2">
                <a href={`tel:${WEBSITE_CONFIG.hotlineRaw}`} className="w-10 h-10 rounded-xl bg-green-50 text-brand-green flex items-center justify-center shadow-sm">
                  <Phone size={18} fill="currentColor" />
                </a>
                <a href={WEBSITE_CONFIG.zaloLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shadow-sm">
                  <ZaloIcon size={20} />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-sm font-bold text-slate-500">Xe ghép:</span>
                <span className="font-black text-brand-green">{item.shared}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-sm font-bold text-slate-500">Bao 5 chỗ:</span>
                <span className="font-bold text-slate-700">{item.bao4}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-bold text-slate-500">Bao 7 chỗ:</span>
                <span className="font-bold text-slate-700">{item.bao7}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="prices" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-brand-green font-black uppercase tracking-widest text-sm mb-3">Minh bạch chi phí</p>
          <h2 className="text-4xl font-black text-slate-900 mb-6">Bảng giá xe ghép Hà Nam</h2>
          <p className="text-lg text-slate-600 font-medium">Giá có thể thay đổi nhẹ theo điểm đón cụ thể, khung giờ và các dịp lễ Tết. Vui lòng gọi để nhận báo giá chính xác nhất.</p>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-8 bg-brand-green rounded-full" />
              <h3 className="text-2xl font-black text-slate-900">1. Tuyến Hà Nam ↔ Nội Thành Hà Nội</h3>
            </div>
            <Table data={WEBSITE_CONFIG.prices.hanoi} />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-8 bg-brand-blue rounded-full" />
              <h3 className="text-2xl font-black text-slate-900">2. Tuyến Hà Nam ↔ Sân Bay Nội Bài</h3>
            </div>
            <Table data={WEBSITE_CONFIG.prices.noibai} />
          </div>
        </div>

        <div className="mt-12 bg-amber-50 border border-amber-100 rounded-2xl p-6 flex gap-4">
          <ShieldCheck className="text-amber-600 shrink-0" size={24} />
          <p className="text-amber-900 font-bold leading-relaxed">
            Lưu ý: Mức giá tính bằng VNĐ. Đi tỉnh lẻ: xe 5 chỗ từ 12.000/km, xe 7 chỗ từ 15.000/km (Chưa bao gồm vé cầu đường).
          </p>
        </div>
      </div>
    </section>
  );
};

const Services = () => (
  <section id="services" className="py-20 lg:py-28 bg-brand-dark text-white rounded-[3rem] mx-4 sm:mx-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-brand-green font-black uppercase tracking-widest text-sm mb-3">Tận tâm phục vụ</p>
        <h2 className="text-4xl font-black mb-4">Các điểm đón trả phổ biến</h2>
        <p className="text-slate-400 font-medium">Chuyên tuyến Hà Nam đi các quận nội thành Hà Nội, các bệnh viện và sân bay.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Stethoscope,
            title: "Khám bệnh Tuyến TW",
            desc: "Hỗ trợ đưa đón bệnh nhân tận sảnh các viện lớn: Bạch Mai, Việt Đức, Viện K, 108. Xe sạch sẽ, êm ái.",
            image: "https://images.unsplash.com/photo-1510488556485-3be92636f322?auto=format&fit=crop&q=80&w=800"
          },
          {
            icon: Plane,
            title: "Đưa đón Nội Bài",
            desc: "Theo dõi sát giờ bay, đảm bảo đón trả đúng giờ. Hỗ trợ hành lý. Nhận bao xe riêng cho gia đình.",
            image: "https://images.unsplash.com/photo-1542401886-65d6c60db217?auto=format&fit=crop&q=80&w=800"
          },
          {
            icon: Package,
            title: "Gửi hàng hóa nhanh",
            desc: "Nhận gửi hồ sơ, thực phẩm từ Hà Nam đi Hà Nội giao hỏa tốc trong ngày với chi phí tiết kiệm nhất.",
            image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=800"
          }
        ].map((item, i) => (
          <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-3xl overflow-hidden hover:bg-slate-800 transition-colors group">
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-slate-700 flex items-center justify-center mb-6 text-brand-green">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4">{item.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "Xe ghép có đón khách tận nhà không?", a: "Có. Chúng tôi hỗ trợ đón và trả khách tận nơi tại tất cả các huyện/thị xã ở Hà Nam (Phủ Lý, Đồng Văn, Bình Lục, Lý Nhân...) và trả tận nơi tại nội thành Hà Nội." },
    { q: "Tôi cần đặt xe trước bao lâu?", a: "Để đảm bảo có xe đúng giờ và vị trí ngồi thoải mái, quý khách nên gọi điện đặt trước ít nhất 1-2 tiếng trước giờ xuất phát." },
    { q: "Giá xe bao gồm những gì?", a: "Giá xe ghép đã bao gồm công đưa đón tận nơi. Mọi chi phí cầu đường bến bãi theo tuyến chính sẽ được thỏa thuận rõ ràng khi quý khách đặt chuyến." },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-center text-slate-900 mb-12">Giải đáp thắc mắc</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-black text-slate-800">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 font-medium border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-green flex items-center justify-center text-white">
            <Car size={24} />
          </div>
          <span className="text-xl font-black">{WEBSITE_CONFIG.brandName}</span>
        </div>
        <div className="text-slate-500 font-bold text-center md:text-right">
          <p>© 2026 {WEBSITE_CONFIG.brandName}. Dịch vụ đưa đón chuyên nghiệp.</p>
          <p className="text-sm mt-1">Sẵn sàng phục vụ quý khách trên mọi nẻo đường.</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img 
          src="https://webmedia.com.vn/images/2021/09/logo-da-thong-bao-bo-cong-thuong-mau-xanh.png" 
          alt="Đã thông báo Bộ Công Thương" 
          className="h-12 w-auto grayscale opacity-50"
        />
        <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest text-center">
          Website được thiết kế và phát triển bởi {WEBSITE_CONFIG.developer}
        </p>
      </div>
    </div>
  </footer>
);

const FloatingActions = () => (
  <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-4">
    <a 
      href={WEBSITE_CONFIG.zaloLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
    >
      <ZaloIcon size={36} />
    </a>
    <a 
      href={`tel:${WEBSITE_CONFIG.hotlineRaw}`} 
      className="w-14 h-14 bg-brand-green text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
    >
      <Phone size={28} fill="currentColor" />
    </a>
  </div>
);

const BookingPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative border-2 border-brand-green"
      >
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-8">
          <Car className="mx-auto text-brand-green mb-4" size={48} />
          <h3 className="text-2xl font-black text-slate-900 mb-2">Bạn cần xe hôm nay?</h3>
          <p className="text-slate-600 font-medium">Đặt xe nhanh chóng, nhận báo giá tức thì và đón tại nhà ngay sau 30 phút.</p>
        </div>

        <div className="bg-red-50 rounded-2xl p-4 mb-6 text-center border border-red-100">
          <p className="text-red-500 text-xs font-black uppercase mb-1">Hotline tư vấn</p>
          <p className="text-3xl font-black text-red-600">{WEBSITE_CONFIG.hotline}</p>
        </div>

        <div className="grid gap-3">
          <a href={`tel:${WEBSITE_CONFIG.hotlineRaw}`} className="btn-primary bg-brand-green text-white w-full py-4 shadow-lg shadow-green-200">
            <Phone size={20} fill="currentColor" />
            Gọi đặt chuyến ngay
          </a>
          <a href={WEBSITE_CONFIG.zaloLink} target="_blank" rel="noopener noreferrer" className="btn-primary bg-slate-100 text-brand-blue w-full py-4">
            <ZaloIcon size={24} />
            Nhắn tin Zalo
          </a>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white xe-ghep-ha-nam-app">
      <Navbar />
      <main>
        <Hero />
        <PriceTable />
        <Services />
        <FAQ />
        
        <section className="py-20 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
                  Sẵn sàng cho chuyến đi <br className="hidden sm:block" /> 
                  của bạn hôm nay?
                </h2>
                <p className="text-xl text-slate-400 font-medium max-w-xl">
                  Đội ngũ lái xe kinh nghiệm, nhiệt tình luôn thường trực sẵn sàng phục vụ quý khách 24/7.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href={`tel:${WEBSITE_CONFIG.hotlineRaw}`} className="btn-primary bg-brand-green text-white text-xl py-5 px-10 shadow-2xl shadow-green-500/20">
                  <Phone size={24} fill="currentColor" />
                  Gửi yêu cầu ngay
                </a>
                <a href={WEBSITE_CONFIG.zaloLink} target="_blank" rel="noopener noreferrer" className="btn-primary bg-brand-blue text-white text-xl py-5 px-10 shadow-2xl shadow-blue-500/20">
                  <ZaloIcon size={28} />
                  Báo giá qua Zalo
                </a>
              </div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </section>
      </main>

      <Footer />
      <FloatingActions />
      <BookingPopup />
    </div>
  );
}

"use client";

import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-gold-500/30 selection:text-white">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 px-6 xl:px-16 py-8 flex justify-between items-center transition-all duration-500 bg-navy-900/60 backdrop-blur-md border-b border-white/5">
        <div className="text-xl md:text-2xl font-serif tracking-wide flex items-center gap-4">
          <div className="w-8 h-8 md:w-10 md:h-10 border border-gold-500/30 flex items-center justify-center text-white font-serif text-xs md:text-sm">OY</div>
          <span className="font-light">ONUR YILDIRIM <span className="text-gold-500 text-xs md:text-sm ml-1 md:ml-2 top-[-0.5rem] relative italic">Hukuk</span></span>
        </div>
        <div className="hidden lg:flex gap-16 text-[11px] uppercase tracking-[0.25em] text-slate-300">
          <a href="#" className="link-underline transition-colors hover:text-white">Ana Sayfa</a>
          <a href="#uzmanlik" className="link-underline transition-colors hover:text-white">Uzmanlık</a>
          <a href="#hakkinda" className="link-underline transition-colors hover:text-white">Hakkımızda</a>
          <a href="#iletisim" className="link-underline transition-colors hover:text-white">İletişim</a>
        </div>
        <a href="https://wa.me/905000000000" className="hidden sm:inline-flex text-[10px] uppercase tracking-[0.3em] text-gold-500 border border-gold-500/30 px-6 py-3 hover:bg-gold-500/5 hover:border-gold-500 transition-all">
          Randevu Al
        </a>
      </nav>

      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 pt-32 overflow-hidden">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy-900/85 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900 z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" 
            alt="Hukuk Bürosu" 
            className="w-full h-full object-cover opacity-70 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
        </div>

        <div className="relative z-10 max-w-6xl w-full text-center flex flex-col items-center">
          <div className="reveal">
            <h2 className="text-gold-500 uppercase tracking-[0.5em] text-xs mb-8 md:mb-10 font-light border-b border-gold-500/30 pb-4 inline-block">
              Malatya Barosu
            </h2>
          </div>
          
          <div className="reveal reveal-delay-100 w-full">
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-serif mb-6 md:mb-8 leading-[0.95] md:leading-[0.85] tracking-tight font-light text-white">
              Adalet İçin <br /> 
              <span className="italic text-slate-300">Savunma.</span>
            </h1>
          </div>
          
          <div className="reveal reveal-delay-200">
            <p className="text-slate-400 text-base md:text-xl font-light max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
              Hukuki uyuşmazlıklarda prestijli, şeffaf ve sonuç odaklı yaklaşım. 
              Karmaşık dosyalarınızda stratejik çözüm ortaklığınız.
            </p>
          </div>
          
          <div className="reveal reveal-delay-300 flex flex-col sm:flex-row gap-6 md:gap-8 items-center">
            <a href="https://wa.me/905000000000" className="btn-gold">
              Danışmanlık Al
            </a>
            <a href="#uzmanlik" className="text-slate-300 uppercase tracking-[0.2em] text-[10px] md:text-[11px] link-underline pb-1 mt-4 sm:mt-0">
              Uzmanlık Alanları
            </a>
          </div>
        </div>
      </section>

      {/* --- PRACTICE AREAS (BREATHING ROOM) --- */}
      <section id="uzmanlik" className="py-24 lg:py-48 px-6 lg:px-24 bg-navy-900 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-32 reveal">
            <div className="max-w-2xl">
              <h3 className="text-gold-500 flex items-center gap-4 uppercase tracking-[0.3em] text-xs mb-6">
                <span className="w-8 h-px bg-gold-500/50"></span>
                Faaliyet Alanlarımız
              </h3>
              <h2 className="text-4xl lg:text-6xl font-serif font-light leading-tight text-white mb-6 md:mb-0">
                Stratejik &amp; Sorumlu<br />
                <span className="text-slate-400 italic">Hukuki Temsil</span>
              </h2>
            </div>
            <div className="text-slate-400 font-light text-base lg:text-lg md:max-w-md">
              Her ihtilaf, kendi içinde özel bir strateji gerektirir. Butik ve mükemmeliyetçi yaklaşımımızla haklarınızı en üst düzeyde savunuyoruz.
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-white/5 reveal reveal-delay-100">
            {[
              { 
                title: "Ceza Hukuku", 
                desc: "Soruşturma ve kovuşturma evrelerinin tamamında, temel hakların korunması odağıyla titiz ve profesyonel müdafi hizmeti.",
                num: "I"
              },
              { 
                title: "Ticaret Hukuku", 
                desc: "Kurumsal hedeflerinizle uyumlu, şirketler arası uyuşmazlıklar ve kompleks sözleşme süreçlerinde stratejik danışmanlık.",
                num: "II"
              },
              { 
                title: "Aile Hukuku", 
                desc: "Gizlilik ve hassasiyetin ön planda olduğu boşanma, velayet anlaşmazlıkları ve mal rejimi uyuşmazlıklarında uzman destek.",
                num: "III"
              }
            ].map((area, index) => (
              <div key={index} className="group p-10 lg:p-16 border-b md:border-b-0 md:border-r border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors duration-500">
                <div className="text-gold-500/40 font-serif text-3xl mb-8 lg:mb-12 group-hover:text-gold-500 transition-colors duration-500">{area.num}</div>
                <h4 className="text-2xl lg:text-3xl font-serif font-light mb-6 text-white group-hover:-translate-y-1 transition-transform duration-500">{area.title}</h4>
                <p className="text-slate-400 font-light leading-loose text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="hakkinda" className="py-24 lg:py-48 px-6 lg:px-24 bg-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="lg:w-1/2 w-full reveal order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gold-500/5 translate-x-4 translate-y-4 border border-gold-500/20"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
                alt="Kurucu Avukat" 
                className="w-full h-full object-cover absolute inset-0 z-10 grayscale contrast-125 hover:grayscale-0 transition-all duration-1000" 
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full reveal reveal-delay-200 order-1 lg:order-2">
            <h3 className="text-gold-500 flex items-center gap-4 uppercase tracking-[0.3em] text-xs mb-6 lg:mb-8">
              <span className="w-8 h-px bg-gold-500/50"></span>
              Kurucu Profil
            </h3>
            <h2 className="text-4xl lg:text-7xl font-serif font-light mb-8 lg:mb-12 text-white">
              Onur Yıldırım
            </h2>
            <div className="space-y-6 lg:space-y-8 text-slate-300 font-light text-base lg:text-lg leading-relaxed mb-12 lg:mb-16">
              <p>
                Hukuk, kanunları ezberlemek değil, <span className="text-white italic font-serif text-xl">adalete giden yolda strateji kurma</span> sanatıdır. Malatya'da yılların getirdiği tecrübe ile her davanın kendi dinamiğini okuyoruz.
              </p>
              <p>
                Küçük detayların büyük sonuçlar doğurduğu hukuki süreçlerde, müvekkillerimize şeffaf, ölçülebilir ve gerçekçi çözümler sunmayı ilke ediniyoruz. Çözüm odaklı yaklaşımımız ile size sadece hukuki destek değil, aynı zamanda güven veriyoruz.
              </p>
            </div>
            <div className="border-t border-white/10 pt-8 lg:pt-12 flex gap-12 lg:gap-16">
              <div>
                <div className="text-4xl font-serif text-white mb-2">10<span className="text-gold-500 font-sans text-3xl ml-1">+</span></div>
                <div className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-slate-500">Yıllık Tecrübe</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-white mb-2">500<span className="text-gold-500 font-sans text-3xl ml-1">+</span></div>
                <div className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-slate-500">Çözülen Dosya</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT CTA --- */}
      <section id="iletisim" className="py-32 lg:py-48 px-6 lg:px-24 bg-navy-900 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] border border-white/[0.02] rounded-full z-0 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] border border-white/[0.03] rounded-full z-0 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center reveal">
          <div className="text-gold-500/80 text-3xl mb-8">⚖</div>
          <h2 className="text-4xl lg:text-7xl font-serif font-light mb-6 lg:mb-8 text-white leading-tight">
            Haklarınızı Şansa <br/>
            <span className="italic text-slate-400">Bırakmayın.</span>
          </h2>
          <p className="text-slate-400 font-light text-lg lg:text-xl mb-12 lg:mb-16 max-w-xl mx-auto">
            Hukuki ihtilaflarınız için hemen profesyonel destek alın. Durum değerlendirmesi için bizimle iletişime geçin.
          </p>
          <a href="https://wa.me/905000000000" className="btn-gold px-10 py-4 lg:px-12 lg:py-5 text-[10px] lg:text-sm bg-white/5 backdrop-blur-sm">
            BİZE ULAŞIN
          </a>
        </div>
      </section>

      {/* --- ELITE FOOTER --- */}
      <footer className="py-16 lg:py-20 px-6 lg:px-24 bg-black border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-24">
          <div className="col-span-1 lg:col-span-2">
            <div className="text-xl lg:text-2xl font-serif tracking-wide flex items-center gap-4 mb-6 lg:mb-8">
              <div className="w-8 h-8 border border-white/20 flex items-center justify-center text-white font-serif text-xs">OY</div>
              <span className="font-light text-white">ONUR YILDIRIM <span className="text-slate-500 text-sm ml-1 lg:ml-2 top-[-0.3rem] lg:top-[-0.5rem] relative italic">Hukuk</span></span>
            </div>
            <p className="text-slate-500 font-light text-sm max-w-sm leading-relaxed">
              Malatya'nın kalbinde, ulusal ve uluslararası standartlarda, sonuç odaklı ve vizyoner hukuk danışmanlığı.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-[10px] lg:text-xs uppercase tracking-[0.3em] mb-6 lg:mb-8 font-medium">İletişim</h4>
            <div className="space-y-4 text-slate-400 text-sm font-light">
              <p>T: +90 500 000 00 00</p>
              <p>E: info@onuryildirim.av.tr</p>
              <p className="pt-2 lg:pt-4 leading-relaxed">İsmetiye Mah. Ankara Cad.<br/>No:1 Kat:2 Yeşilyurt, Malatya</p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[10px] lg:text-xs uppercase tracking-[0.3em] mb-6 lg:mb-8 font-medium">Navigasyon</h4>
            <div className="flex flex-col space-y-4 text-slate-400 text-sm font-light">
              <a href="#" className="hover:text-gold-500 transition-colors w-max">Ana Sayfa</a>
              <a href="#uzmanlik" className="hover:text-gold-500 transition-colors w-max">Uzmanlık Alanları</a>
              <a href="#hakkinda" className="hover:text-gold-500 transition-colors w-max">Hakkımızda</a>
              <a href="#iletisim" className="hover:text-gold-500 transition-colors w-max">Randevu Al</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-slate-600 text-center md:text-left">
            © {new Date().getFullYear()} Onur Yıldırım Hukuk Bürosu. Tüm Hakları Saklıdır.
          </div>
          <div className="flex gap-8 text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-slate-500">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

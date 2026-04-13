"use client";

import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useEffect, useState } from "react";

export default function IdentifyPage() {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    // Read from session storage
    const stored = sessionStorage.getItem("uploadedImage");
    if (stored) {
      setImage(stored);
    } else {
      // fallback to spider from design
      setImage("https://lh3.googleusercontent.com/aida-public/AB6AXuBHUxhFDf9Hm2LZ8g9E7l7EDiA5mg2-ldC7-UYD1c8-jLA-3jCw5WiipLrsLOGsIi_oq6n56axcupyN2qGzaKzgXzq-kT8j0peHXlu7cg5aZprQRjrxPjF1aZF-EEMWoerR5QSalnBemlh3LyP_LORWb0wd4eRMNRCdkHIiJ3Az05j6aF2iXKAk0KGn09MWQBl2Bbi9eSwLjaODkNnDt7XSMv_os_0efxWPhCLKCmuETshMlXN1NXe1AxEULWDWrfHeHMAN5w-k0Q"); 
    }

    const timer = setTimeout(() => {
      setIsAnalyzing(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isAnalyzing) {
    return (
      <div className="bg-surface relative overflow-hidden">
        <Header />
        <main className="min-h-screen pt-24 pb-32 px-4 max-w-lg mx-auto flex flex-col items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-fixed/20 rounded-full blur-[80px]"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-4 border-surface-container border-t-primary animate-spin mb-8"></div>
            <h2 className="font-headline text-2xl font-bold text-primary mb-2 text-center">Analizando imagen...</h2>
            <p className="text-secondary tracking-widest text-[10px] uppercase font-bold text-center animate-pulse">Buscando coincidencias vectoriales</p>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-32 px-4 max-w-lg mx-auto">
        {/* Hero Identification Image */}
        <section className="relative mb-8 mt-4">
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface-container-low editorial-shadow flex items-center justify-center">
            {image && (
              <img
                alt="Identified Spider"
                src={image}
                className="w-full h-full object-cover transform scale-105"
              />
            )}
            
            {/* Match Confidence Overlay */}
            <div className="absolute top-6 right-6">
              <div className="bg-surface/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></div>
                <span className="text-xs font-bold font-label tracking-wider text-primary">98.4% MATCH</span>
              </div>
            </div>

            {/* Toxicity Indicator Floating */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-surface/80 backdrop-blur-xl p-4 rounded-2xl flex items-center justify-between border border-white/20">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-secondary block mb-1">
                    TOXICITY STATUS
                  </span>
                  <span className="text-primary font-bold text-lg">Non-Venomous</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Identity Section */}
        <section className="mb-8 px-2">
          <h2 className="text-4xl font-headline font-extrabold text-on-surface tracking-tighter mb-1">
            Maratus volans
          </h2>
          <p className="text-secondary italic text-lg mb-4">The Peacock Spider</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest">
              Arthropoda
            </span>
            <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest">
              Arachnida
            </span>
            <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest">
              Salticidae
            </span>
          </div>
        </section>

        {/* Biological Insights (Bento Style) */}
        <section className="grid grid-cols-2 gap-4 mb-8">
          <div className="col-span-2 bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/15">
            <h3 className="font-headline font-bold text-lg mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">menu_book</span>
              Biological Insight
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Known for their spectacular courtship displays, males feature an expandable, brightly colored opisthosomal flap. These spiders exhibit advanced visual systems and complex behavioral patterns typical of jumping spiders.
            </p>
          </div>
          <div className="bg-surface-container-low p-4 rounded-3xl">
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-2">Habitat</span>
            <p className="text-primary font-semibold text-sm">Arid Woodlands</p>
          </div>
          <div className="bg-surface-container-low p-4 rounded-3xl">
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-2">Size</span>
            <p className="text-primary font-semibold text-sm">4-5mm Average</p>
          </div>
        </section>

        {/* Primary Action */}
        <section className="mb-8">
          <button className="w-full organic-gradient text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-transform duration-200 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">bookmark_add</span>
            Save to Field Notebook
          </button>
          <p className="text-center text-outline text-[11px] mt-4 font-label tracking-wide uppercase">
            AUTOMATICALLY TAGGED IN DARWIN, AUSTRALIA
          </p>
        </section>
      </main>
      <BottomNav />
    </>
  );
}

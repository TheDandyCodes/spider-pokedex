"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useRef } from 'react';

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          sessionStorage.setItem("uploadedImage", event.target.result as string);
          router.push("/identify");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const isHome = pathname === "/";
  const isIdentify = pathname === "/identify";
  const isPokedex = pathname.startsWith("/pokedex");

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-surface/90 backdrop-blur-lg rounded-t-3xl shadow-[0_-10px_30px_rgba(24,28,30,0.04)] z-50">
      <Link href="/" className={`flex flex-col items-center justify-center px-5 py-2 active:scale-90 transition-transform duration-300 ${isHome ? "bg-primary text-white rounded-xl" : "text-secondary hover:bg-surface-container-low"}`}>
        <span className="material-symbols-outlined mb-1">home</span>
        <span className="font-label text-[10px] uppercase tracking-[0.1em] font-semibold">Home</span>
      </Link>
      
      <button 
        onClick={() => fileInputRef.current?.click()} 
        className={`flex flex-col items-center justify-center px-5 py-2 active:scale-90 transition-transform duration-300 ${isIdentify ? "bg-primary text-white rounded-xl" : "text-secondary hover:bg-surface-container-low"}`}
      >
        <span className="material-symbols-outlined mb-1">document_scanner</span>
        <span className="font-label text-[10px] uppercase tracking-[0.1em] font-semibold">Identify</span>
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
        />
      </button>

      <Link href="/pokedex" className={`flex flex-col items-center justify-center px-5 py-2 active:scale-90 transition-transform duration-300 ${isPokedex ? "bg-primary text-white rounded-xl" : "text-secondary hover:bg-surface-container-low"}`}>
        <span className="material-symbols-outlined mb-1">menu_book</span>
        <span className="font-label text-[10px] uppercase tracking-[0.1em] font-semibold">Notebook</span>
      </Link>
    </nav>
  );
}

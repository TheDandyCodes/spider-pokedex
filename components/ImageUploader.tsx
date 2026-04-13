"use client";

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export function ImageUploader() {
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

  return (
    <div className="bg-surface-container-lowest p-8 rounded-[2rem] editorial-shadow relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
      <div className="relative z-10">
        <div className="flex flex-col items-start gap-3 mb-6">
          <div className="p-3 bg-secondary-fixed rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">document_scanner</span>
          </div>
          <h3 className="font-headline text-xl font-bold text-primary mt-2">Instant Identification</h3>
        </div>
        <p className="text-on-surface-variant mb-8 leading-relaxed">
          Use our AI-powered botanical lens to classify arachnids and understand their ecological impact in seconds.
        </p>
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="w-full organic-gradient text-white py-5 rounded-xl font-semibold flex items-center justify-center gap-3 active:scale-95 transition-transform duration-200"
        >
          <span className="material-symbols-outlined">add_a_photo</span>
          Upload an image
        </button>
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
        />
      </div>
    </div>
  );
}

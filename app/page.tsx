import { Header } from "@/components/Header";
import { ImageUploader } from "@/components/ImageUploader";
import { SpiderCard } from "@/components/SpiderCard";

import { BottomNav } from "@/components/BottomNav";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-32 px-6 max-w-lg mx-auto">
        
        {/* Hero Section */}
        <section className="mb-12 relative">
          <div className="mb-4">
            <span className="font-label text-[0.6875rem] uppercase tracking-[0.1em] font-semibold text-tertiary">
              Field Observations
            </span>
            <h2 className="font-headline text-[3.5rem] leading-[1.1] font-extrabold tracking-tight text-primary mt-2">
              Have you catch any Spider?
            </h2>
          </div>
          <div className="relative w-full h-80 rounded-[2rem] overflow-hidden editorial-shadow mt-8">
            <img
              alt="Macro spider web"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDacEf3SKxhhkzK7vfACJfFKwT8GTWhfneBBgP6LFvdvsWieyn1nZJDYu1jDmp3ntBeNvGCQFSrkTC9v_cPsxBJcRMup7dFPvY9qkxEOZilsKXkJMJ8WrFBmfIY6EhWN_996tEeR-I-5OZjLiqQEhqKN0Ej6UBwGnaks_WHuSXzoaZfYf5CXbIAd3bVxpc2YiCUX6brHmcNiEMiiIivkV95T8n6U3uBPZaZ9J_yzWV68BnBqK5ZW8zWP1a9fRHyV7RTnmMvrjkJZw"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/90 font-medium max-w-[200px] leading-snug">
                Discovering the geometry hidden in plain sight.
              </p>
            </div>
          </div>
        </section>

        {/* Identification Card */}
        <section className="mb-12">
          <ImageUploader />
        </section>

        {/* Recent Discoveries Section */}
        <section className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <span className="font-label text-[0.6875rem] uppercase tracking-[0.1em] font-semibold text-tertiary">
                My Collection
              </span>
              <h3 className="font-headline text-2xl font-bold text-primary">Your Recent Discoveries</h3>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar -mx-6 px-6">
            <SpiderCard 
              name="Jumping Spider" 
              family="Salticidae" 
              status="Verified" 
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Phidippus_audax_male.jpg/640px-Phidippus_audax_male.jpg" 
            />
            <SpiderCard 
              name="Wolf Spider" 
              family="Lycosidae" 
              status="Pending" 
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Wolf_spider_on_rock.jpg/640px-Wolf_spider_on_rock.jpg" 
            />
          </div>
        </section>

      </main>
      <BottomNav />
    </>
  );
}

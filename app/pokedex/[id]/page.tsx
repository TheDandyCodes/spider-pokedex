import { BottomNav } from "@/components/BottomNav";

export default function SpiderDetailPage() {
  return (
    <>
      {/* Top Navigation Shell */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">pest_control</span>
          <span className="text-2xl font-extrabold text-primary italic font-headline tracking-tight">SpiDex</span>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed">
          <img
            alt="User"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHlz94SkPByWVLjUllslIY7tgXfS2e5SQMuyFsxGll6C5mD1vi3lT3ka9gBfLbY6Vcs3DB_Xm4Zkmi0YOD0nAdxduKvku-fNVwU2NFINtMRZ3-NwX7RT9OwumuLX9oJER5CByj1famYxF0wIMiwKNi68B5CwT0usWWTc87DuoHTauBLUKkQ8webYUeRbe0Wwdcx3ltfh3rLp1fOG0fL7vA4Tit9rpDLiAZkOi5QuGLtLYiHIY5TrDoc3g-5FAE7znto5rStRN2jw"
            className="w-full h-full object-cover"
          />
        </div>
      </nav>

      <main className="pb-32 max-w-lg mx-auto">
        {/* Hero Section */}
        <div className="relative w-full h-[530px] overflow-hidden">
          <img
            alt="Bold Jumping Spider"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB22TD58bzWMaaK0RREbvM0hCISHVjvOwWxDpViN49Ut9_dbaR1I2FaJWr9dHCUo3XlQKIC3gNLLew8sZarkp4KDnyaw6yl-LZ_s-1ZM3d_NOMPml2eGbiOzL7OsOFpSUgOEf9BQAD-LgVOLJTWbdw_R2ATTnGymQRYclr8slGy0GnQjTEURETcpoNtzdhjyjXwTt4t59yBwN-cUaAuEE_KpCu5QJCC4FbzZqayPBbRcooyuKBQyo6b3n5Dysbtal0M-ZBQFpngOA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <div className="flex flex-col gap-2">
              <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-semibold uppercase tracking-[0.15em] rounded-full w-fit">
                Species of the Day
              </span>
              <h1 className="text-4xl font-headline font-extrabold text-white tracking-tight leading-none">
                Bold Jumping Spider
              </h1>
              <p className="text-primary-fixed italic font-body text-lg">Phidippus audax</p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="px-6 -mt-8 relative z-10">
          {/* Taxonomy Bento Section */}
          <section className="grid grid-cols-2 gap-4 mb-10">
            <div className="col-span-2 p-6 bg-surface-container-lowest rounded-xl editorial-shadow">
              <h2 className="text-[11px] uppercase tracking-[0.1em] text-secondary font-bold mb-4">
                Taxonomy Hierarchy
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-surface-container-low rounded-lg text-xs font-medium text-on-surface-variant italic">
                  Kingdom: Animalia
                </span>
                <span className="px-3 py-2 bg-surface-container-low rounded-lg text-xs font-medium text-on-surface-variant italic">
                  Phylum: Arthropoda
                </span>
                <span className="px-3 py-2 bg-surface-container-low rounded-lg text-xs font-medium text-on-surface-variant italic">
                  Class: Arachnida
                </span>
                <span className="px-3 py-2 bg-surface-container-low rounded-lg text-xs font-medium text-on-surface-variant italic">
                  Order: Araneae
                </span>
                <span className="px-3 py-2 bg-surface-container-low rounded-lg text-xs font-medium text-on-surface-variant italic">
                  Family: Salticidae
                </span>
              </div>
            </div>

            <div className="bg-primary-container p-6 rounded-xl flex flex-col justify-between aspect-square">
              <span className="material-symbols-outlined text-primary-fixed text-3xl">straighten</span>
              <div>
                <p className="text-on-primary-container/60 text-[10px] uppercase font-bold tracking-widest">
                  Average Size
                </p>
                <p className="text-white font-headline text-2xl font-bold">13-20mm</p>
              </div>
            </div>

            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between aspect-square">
              <span className="material-symbols-outlined text-tertiary text-3xl">visibility</span>
              <div>
                <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest">
                  Visual Field
                </p>
                <p className="text-on-surface font-headline text-2xl font-bold">360°</p>
              </div>
            </div>
          </section>

          {/* Behavior & Predation */}
          <section className="mb-12">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="text-3xl font-headline font-bold text-primary">Behavior</h2>
              <div className="h-px flex-grow mx-4 bg-outline-variant/30"></div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-on-secondary-fixed">bolt</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-on-surface mb-1">Active Hunters</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    Unlike many spiders, P. audax does not build webs to catch food. Instead, they use their incredible vision to stalk and pounce on prey.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-on-secondary-fixed">psychology</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-on-surface mb-1">Curiosity & Intelligence</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    Considered among the most intelligent invertebrates, they exhibit complex learning and task-solving behaviors during hunting.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Habitat & Range */}
          <section className="mb-12">
            <div className="bg-surface-container-high rounded-3xl overflow-hidden">
              <div className="p-8">
                <h2 className="text-xl font-headline font-extrabold text-primary mb-2">Habitat & Range</h2>
                <p className="text-secondary text-sm mb-6">
                  Found across North America, from southern Canada to Mexico. They thrive in grasslands, prairies, and suburban gardens.
                </p>
                <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-surface-dim">
                  <img
                    alt="Map location"
                    className="w-full h-full object-cover grayscale opacity-50"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2EYZQGMDm4ZbnHN48h2v7DP8lElG2-yCU_rke8xEEhAfNyrIB2QDae1FnwDfwAq8mEvvGTQ_wrGMjse7actjEeg160V1yo4zSO6y5n9C0ZEi5t8mnpHejVOZluNhkHN22JFL-mItWF9a5Q7AyGrid5Ge8lui6dUOpmqQ7i6K9QRXnmpnJKfhceBhWMTQBqsCKLOuJm37DJ8NjecD8lKzIGj1k-vgNoFYRRN3ypje2CgQKcnAoQtVZJMiN_hbnpFfsGKsJwjZdVQ"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
                    <div className="absolute w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
                  </div>
                </div>
              </div>
              <div className="flex border-t border-outline-variant/20">
                <div className="flex-1 p-4 text-center border-r border-outline-variant/20">
                  <span className="block text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Climate</span>
                  <span className="text-sm font-semibold text-primary">Temperate</span>
                </div>
                <div className="flex-1 p-4 text-center">
                  <span className="block text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Substrate</span>
                  <span className="text-sm font-semibold text-primary">Vegetation</span>
                </div>
              </div>
            </div>
          </section>

          {/* Scientific Data Attribution */}
          <footer className="mt-20 pt-8 border-t border-outline-variant/30 text-center pb-8">
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-outline mb-4">
              Scientific Data Attribution
            </p>
            <div className="flex justify-center gap-8 items-center opacity-40">
              <span className="material-symbols-outlined text-2xl">account_balance</span>
              <span className="material-symbols-outlined text-2xl">magnification_small</span>
              <span className="material-symbols-outlined text-2xl">menu_book</span>
            </div>
            <p className="text-xs text-on-surface-variant mt-4 leading-loose px-4">
              Information sourced from the World Spider Catalog and the salticidae research collective. Ver. 4.2.9 | Smithsonian Institution Affiliated Data.
            </p>
          </footer>

        </div>
      </main>
      <BottomNav />
    </>
  );
}

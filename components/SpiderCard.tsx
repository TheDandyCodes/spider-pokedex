export interface SpiderCardProps {
  name: string;
  family: string;
  status: string;
  imageUrl: string;
  className?: string;
  variant?: "horizontal" | "vertical";
  date?: string;
}

export function SpiderCard({ name, family, status, imageUrl, className = "", variant = "horizontal", date }: SpiderCardProps) {
  if (variant === "vertical") {
    // Notebook Grid View variant
    return (
      <div className={`spider-card bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(24,28,30,0.04)] ${className}`}>
        <div className="aspect-[4/5] relative">
          <img alt={name} className="w-full h-full object-cover" src={imageUrl} />
          <div className={`absolute top-2 right-2 text-[8px] font-extrabold uppercase px-2 py-1 rounded-md ${
            status === "Dangerous" ? "bg-error-container text-on-error-container" :
            status === "Venomous" ? "bg-tertiary-fixed text-on-tertiary-fixed" : 
            "bg-secondary-fixed text-on-secondary-fixed"
          }`}>
            {status}
          </div>
        </div>
        <div className="p-4">
          <p className="font-label text-[9px] uppercase tracking-wider text-secondary mb-1">{family}</p>
          <h3 className="font-bold text-on-surface leading-tight mb-2 line-clamp-1">{name}</h3>
          <p className="text-[10px] text-on-surface-variant">{date || "Oct 12, 2023"}</p>
        </div>
      </div>
    );
  }

  // Default Home List View variant (horizontal)
  return (
    <div className={`min-w-[280px] bg-surface-container-low rounded-[2rem] overflow-hidden flex-shrink-0 relative group ${className}`}>
      <div className="flex flex-row h-32 relative">
        <div className="p-5 flex-1 relative z-10">
          <span className="inline-block px-2 py-0.5 bg-primary-fixed text-on-primary-fixed text-[9px] rounded font-bold uppercase tracking-wider mb-2">
            {status}
          </span>
          <h4 className="font-headline text-lg font-bold text-primary leading-tight line-clamp-1">{name}</h4>
          <p className="text-[10px] text-on-surface-variant mt-1 italic">{family}</p>
        </div>
        <div className="w-1/3 relative h-full flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low to-transparent z-10"></div>
          <img 
            src={imageUrl} 
            alt={name} 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[120%] object-cover object-left opacity-90 group-hover:scale-110 transition-transform duration-500" 
          />
        </div>
      </div>
    </div>
  );
}

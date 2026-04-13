export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-header bg-surface/80 flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-2xl">pest_control</span>
        <h1 className="font-headline font-extrabold text-2xl text-primary italic tracking-tight">SpiDex</h1>
      </div>
      <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border-2 border-primary/10">
        <img
          alt="User profile"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPhFylQLReRgrOTa92_uhU8clN1NFnUeQBL56e3MOOLh0QTAhuHyfGqFOAboqF85_zNPzG0mOoJzsgd8dtPpb4NdjJ6C4ns02Hlc0LEpJpA7eX0X2OBfYra66AmXYy_gn1_zXasZt4vJI5_qHjGuxquZ8xYxCYI4_P_I5LB1K-ZcwcsSfKDkC-GAOc_JLDewlS7O3d2D8vEkx6Ui54vwu11eOdpP7q-OaVyq8XBTdGv9BmU-No0kIL7tb-qBt0EbmV7Tv67wDSJw"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
}

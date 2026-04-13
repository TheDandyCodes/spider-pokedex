"use client";

import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { SpiderCard } from "@/components/SpiderCard";
import Link from 'next/link';
import { useState } from 'react';

const ALL_SPIDERS = [
  {
    id: 1,
    name: "Mexican Redknee",
    family: "Theraphosidae",
    status: "Venomous",
    date: "Oct 14, 2023",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf93cnokfZ933cIqmETi5-Oq1W60ADzdSy7Ztz-AfLN7Vvheb8h3PogbOhOIiYBHCU65t9ueCJoxgfpXOELKAwPnp0cGbQHowrG-hrcOpwnT2Ps0IJhGWGu43QOMEJaoBBvAyYF4QBxm-yHcqGxpisM_fhNCrzNAd8WYyM5GqUsl423Mfslwwm12z-eIaZg1tDdBiO7yJu0ZgxK4Bo2Gq5aRTHe2Lv9HXQ37_TM0UrKwZXoslJfTV3-f_nY3WHFT5LnZIOVwkMeQ"
  },
  {
    id: 2,
    name: "Bold Jumper",
    family: "Salticidae",
    status: "Harmless",
    date: "Oct 12, 2023",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCREkigHD33OBNWOqvCxkqm-FDDRMYpA8Cv1oUEH5HbV4OmEHglj4tClWQE2K4N_mWMqUB-t47uWVCdkAYBuDIPLXFDkmteKSigwW9AYBI3aFlA105zjoM3cKMeSCL6LES5tcEdFiPC1SUvvsxLOwjnm3o2Jo_WLOJ2Z4BP2FWVdIOHr3ME-UxY1tL1GknCA5S6LKhqDTj72n2tbQWHU1yq5adwRSA4XuMjmgsgfC-zNb-u9AJCwfgYVQTErp1VFir-sOoYyUAyEw"
  },
  {
    id: 3,
    name: "Golden Orb",
    family: "Araneidae",
    status: "Harmless",
    date: "Oct 09, 2023",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNTBkPvGb_0oPDfRhUNZo7UoEnpmqdYWx5DcIPHo4SRp8Eh313xQbj13cd_IyqY7McFxbRzWWGflgmONN-aqgLj3kV7auFZtlhlGlpuJj_MP8VwCZ2OtmnWcs2QwM_0xq0_ROpsEXKkmu-8OYYZWh3IMo3_gPZ2UWB2c8CbsJmRmdoriV4lQz2H8o0sY-QwamdPoQ5ZZY2j7NcULUTL9-FaYPnhghU1J3j_Qr1I4TkqhfCZjqht145xLzuJplXSsPd_wRmr5mQ4w"
  },
  {
    id: 4,
    name: "Brown Recluse",
    family: "Sicariidae",
    status: "Dangerous",
    date: "Oct 05, 2023",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVoVDUgqKOozAs37jgIBUwPEMicUfkDJlwZUk4cFfdRNJH501xyubnONeU69Bm1zKlSqtHt11-hUWM9TJ_b1nJu1MXOzV84Nli6dqzS9qWgEzIlbcNOp_xcnsqIt0g3onKOja2ILD7QC8bpDE-B84_pYxJAswp9eIY6ToHg69oYMOp684l-APrCTcHwmuQmFawVC-OVG9-e2g1LpZy2mkefA-8_qwQSwxQ4M0uV4H9KQ071E-7ij20vL7_8kjvSDUIq1JGraaM4Q"
  }
];

const FAMILIES = ["All Families", "Theraphosidae", "Araneidae", "Salticidae", "Sicariidae"];

export default function NotebookPage() {
  const [activeFamily, setActiveFamily] = useState("All Families");

  const filteredSpiders = activeFamily === "All Families"
    ? ALL_SPIDERS
    : ALL_SPIDERS.filter(s => s.family === activeFamily);

  return (
    <>
      <Header />
      <main className="pt-24 pb-32 px-6 max-w-lg mx-auto">
        {/* Catalog Status Summary */}
        <section className="mb-10">
          <div className="bg-surface-container-lowest rounded-xl p-6 editorial-shadow relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10">
              <span className="material-symbols-outlined text-8xl">menu_book</span>
            </div>
            <h2 className="font-label text-[10px] uppercase tracking-[0.1em] font-semibold text-tertiary mb-2">
              Catalog Status
            </h2>
            <div className="flex items-end gap-3 mb-4">
              <span className="font-headline text-5xl font-extrabold text-primary">
                {ALL_SPIDERS.length}
              </span>
              <span className="text-secondary mb-2 font-medium">Species Identified</span>
            </div>
            <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
              <div className="organic-gradient h-full w-[65%] rounded-full"></div>
            </div>
            <p className="text-on-surface-variant text-sm mt-3">65% of local region cataloged</p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {FAMILIES.map(family => (
                <button 
                  key={family}
                  onClick={() => setActiveFamily(family)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                    activeFamily === family 
                      ? "bg-primary text-white"
                      : "bg-surface-container-low text-secondary hover:bg-surface-container"
                  }`}
                >
                  {family === "All Families" && <span className="material-symbols-outlined text-sm inline-block align-middle mr-2">filter_list</span>}
                  {family}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Discovery Grid */}
        <section className="grid grid-cols-2 gap-x-4 items-start">
          {filteredSpiders.map(spider => (
            <Link key={spider.id} href={`/pokedex/${spider.id}`} className="contents">
              <SpiderCard
                variant="vertical"
                name={spider.name}
                family={spider.family}
                status={spider.status}
                date={spider.date}
                imageUrl={spider.imageUrl}
              />
            </Link>
          ))}
          {filteredSpiders.length === 0 && (
            <div className="col-span-2 text-center py-10 text-secondary">
              No spiders found in this family.
            </div>
          )}
        </section>
      </main>
      <BottomNav />
    </>
  );
}

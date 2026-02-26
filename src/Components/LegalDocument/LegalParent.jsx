import React from "react";
import LegalNavbar from "./LegalNavbar";
import LegalHero from "./LegalHero";
import LegalFeed from "./LegalFeed";
import LegalSide from "./LegalSide";

const LegalParent = () => {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <LegalNavbar />
      <main className="w-full bg-[#F8FAFC] relative overflow-x-hidden">
        <LegalHero />
        <div className="w-full px-4 md:px-10 lg:px-20 pb-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start relative">
            <aside className="w-full lg:w-[420px] shrink-0 lg:sticky lg:top-10 order-1 lg:order-2 z-30">
              <div
                className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100/50 
                  lg:relative lg:-top-[320px]"
              >
                <LegalSide />
              </div>
            </aside>

            <section className="w-full lg:flex-1 order-2 lg:order-1 pt-4 overflow-hidden">
              <LegalFeed />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalParent;

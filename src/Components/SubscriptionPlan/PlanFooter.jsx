import React from 'react';
import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlanFooter = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-slate-800/30 mt-12 bg-[#020617]/50">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        
        {/* Companies Logos Placeholder */}
        <div className="w-full text-center space-y-6">
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em]">Companies trusting Worknex</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale">
             {/* Yahan aap logos laga sakte hain */}
             <div className="w-12 h-12 bg-slate-500 rounded-full" />
             <div className="w-12 h-12 bg-slate-500 rounded-full" />
             <div className="w-12 h-12 bg-slate-500 rounded-full" />
             <div className="w-12 h-12 bg-slate-500 rounded-full" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-slate-500 text-[13px">
            <Lock size={14} /> Secure payments processed with 256-bit SSL encryption
          </div>
          <p className="text-slate-600 text-[12px] max-w-xl">
            Prices + VAT. Discounts are calculated against the monthly price. Service terms and payments are agreed directly between the parties.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-800/50">
          <p className="text-slate-500 text-[13px]">© 2026 WORKNEX Inc. All rights reserved.</p>
          <div className="flex gap-8 text-slate-500 text-[13px] font-medium">
            <Link to="/termsandconditions" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/termsandconditions" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/message-center" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PlanFooter;
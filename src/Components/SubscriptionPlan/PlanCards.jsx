import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PlanCards = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();
  // Default selected card 'Professional' (index 1)
  const [selectedPlan, setSelectedPlan] = useState(1); 

  const plans = [
    {
      id: 0,
      name: "Basic Plan",
      desc: "Ideal for professionals who are new to WORKNEX and want to start connecting with first client",
      price: isYearly ? "11.900" : "14.900",
      features: ["Up to 8 proposals/month", "Basic visibility", "Community access"]
    },
    {
      id: 1,
      name: "Professional Plan",
      desc: "Designed for professionals who want a steady flow of qualified requests.",
      price: isYearly ? "23.900" : "29.900",
      features: ["Up to 25 proposals/month", "High visibility", "LinkedIn integration"],
      popular: true
    },
    {
      id: 2,
      name: "Premium Plan",
      desc: "Recommended for businesses needing maximum visibility and high volume of opportunities.",
      price: isYearly ? "39.900" : "49.900",
      features: ["Unlimited proposals", "Top priority visibility", "Partner badge"]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto text-center space-y-10 px-4">
      {/* Header Info */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-black text-white ">
          Choose your professional plan
        </h1>
        <p className="text-slate-400 text-xl md:text-base max-w-xl mx-auto">
          Unlock professional tools to participate in verified requests and manage your activity.
        </p>
      </div>

      {/* Pricing Toggle */}
      <div className="flex items-center justify-center gap-4 bg-slate-900/50 w-fit mx-auto p-1.5 rounded-2xl border border-slate-800">
        <button 
          onClick={() => setIsYearly(false)}
          className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${!isYearly ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
        >
          Monthly
        </button>
        <button 
          onClick={() => setIsYearly(true)}
          className={`px-6 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${isYearly ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
        >
          Yearly <span className="text-[10px] bg-emerald-500/20 text-emerald-500 px-1.5 py-0.5 rounded-md">-20%</span>
        </button>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)} // User selection logic
            className={`cursor-pointer relative p-8 rounded-[32px] border transition-all duration-500 flex flex-col text-left ${
              selectedPlan === plan.id 
              ? 'bg-[#1E293B] border-blue-600 shadow-[0_20px_50px_rgba(37,99,235,0.15)] scale-[1.02] ring-1 ring-blue-600/50' 
              : 'bg-[#1E293B]/30 border-slate-800 hover:border-slate-700'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                Most Popular
              </span>
            )}

            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-white font-bold text-xl mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">{plan.desc}</p>
              </div>

              <div className="pt-4">
                <span className="text-white text-[15px] font-bold block mb-1">CLP</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-white text-3xl font-black ">${plan.price}</span>
                  <span className="text-slate-500 text-xs">/ month</span>
                </div>
              </div>

              <ul className="space-y-4 pt-6 border-t border-slate-800">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-[13px]">
                    <CheckCircle2 size={16} className={`${selectedPlan === plan.id ? 'text-blue-500' : 'text-slate-600'} shrink-0 mt-0.5`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => {
                if (selectedPlan === plan.id) {
                  navigate("/login-step-1");
                } else {
                  setSelectedPlan(plan.id);
                }
              }}
              className={`w-full mt-8 py-4 rounded-2xl font-black text-[15px] uppercase tracking-wider transition-all ${
              selectedPlan === plan.id 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 active:scale-95' 
              : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}>
              {selectedPlan === plan.id ? 'Get Started' : 'Select'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCards;
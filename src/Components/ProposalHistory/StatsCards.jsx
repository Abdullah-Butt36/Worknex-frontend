import React from "react";
import { FileText, CheckCircle, Calendar, ArrowUpRight } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      title: "Propuestas Activas",
      value: "12",
      change: "2%",
      icon: <FileText className="text-blue-500" size={18} />,
      bgIcon: "bg-blue-500/10",
    },
    {
      title: "Tasa de Selección",
      value: "68%",
      change: "5%",
      icon: <CheckCircle className="text-purple-500" size={18} />,
      bgIcon: "bg-purple-500/10",
    },
    {
      title: "Límite Mensual",
      value: "8 / 25",
      subText: "Usadas / Total",
      icon: <Calendar className="text-emerald-500" size={18} />,
      bgIcon: "bg-emerald-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#111827]/40 border border-gray-800/50 rounded-[20px] md:rounded-[24px] p-5 md:p-6 hover:border-blue-500/30 transition-all duration-300 group"
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className={`w-9 h-9 md:w-10 md:h-10 ${stat.bgIcon} rounded-xl flex items-center justify-center shrink-0`}
            >
              {stat.icon}
            </div>
            <span className="text-gray-400 text-[13px] md:text-[14px] font-[500] truncate">
              {stat.title}
            </span>
          </div>

          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <h3 className="text-white text-[24px] md:text-[28px] font-[800] tracking-tight">
                {stat.value}
              </h3>
              {stat.subText && (
                <p className="text-gray-500 text-[10px] md:text-[11px] font-[600] uppercase tracking-[0.05em]">
                  {stat.subText}
                </p>
              )}
            </div>

            {stat.change && (
              <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-500 px-2.5 py-1 rounded-lg text-[11px] md:text-[12px] font-[700] border border-emerald-500/10 mb-1">
                <ArrowUpRight size={14} strokeWidth={3} />
                <span>{stat.change}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;

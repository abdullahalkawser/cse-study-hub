"use client";

import { useState } from "react";
import Link from "next/link"; // 👈 Next.js Link ইম্পোর্ট করা হয়েছে
import { 
  BookOpen, 
  FileText, 
  Calculator, 
  Trophy, 
  Calendar, 
  FileUp, 
  Menu, 
  X 
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 📝 আপনার রুট বা পেজের পাথ অনুযায়ী href গুলো পরিবর্তন করতে পারবেন
  // যেমন: হোম পেজের ভেতরেই স্ক্রোল করতে চাইলে "#resource" আর আলাদা পেজ হলে "/resource" দিবেন।
  const navItems = [
    { name: "রিসোর্স", icon: <BookOpen className="w-4 h-4" />, href: "/resource" },
    { name: "কভার পেজ ডিজাইন", icon: <FileText className="w-4 h-4" />, href: "/cover" },
    { name: "সিজিপিএ ক্যালকুলেটর", icon: <Calculator className="w-4 h-4" />, href: "/cgpa" },
    { name: "লিডারবোর্ড", icon: <Trophy className="w-4 h-4" />, href: "/leaderboard" },

    { name: "নোট জমা", icon: <FileUp className="w-4 h-4" />, href: "/submit" },
  ];

  return (
    <nav className="bg-black text-white border-b border-green-500/20 sticky top-0 z-50 backdrop-blur-md bg-opacity-95 transition-all duration-300 shadow-[0_4px_30px_rgba(0,255,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* ⚡ Logo Section (ক্লিক করলে হোমে যাবে) */}
          <Link href="/" className="flex-shrink-0 flex items-center space-x-2 group cursor-pointer">
            <div className="bg-[#39FF14] p-2 rounded-lg text-black font-black text-xl tracking-wider transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-[0_0_15px_rgba(57,255,20,0.4)]">
              CSE
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:text-[#39FF14] transition-all duration-300">
              StyHub
            </span>
          </Link>

          {/* 💻 Desktop Menu (PC, Laptop, Tablet) */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href} // 👈 Link এর href
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-xs font-semibold text-gray-300 hover:text-[#39FF14] hover:bg-green-950/40 border border-transparent hover:border-green-500/30 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 relative group"
              >
                {/* Hover Bottom Line */}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#39FF14] transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]" />
                
                <span className="text-green-500 group-hover:text-[#39FF14] transition-colors duration-300">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* 📱 Mobile & Tablet Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#39FF14] hover:bg-green-950/30 focus:outline-none transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6 text-[#39FF14]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out border-t border-green-900/30 bg-black/95 backdrop-blur-lg overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-3 pt-2 pb-4 space-y-1 sm:px-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href} // 👈 Link এর href
              onClick={() => setIsOpen(false)} // মেনু ক্লিক করলে মোবাইল ড্রপডাউন বন্ধ হয়ে যাবে
              className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-green-950/40 hover:to-transparent border-l-4 border-transparent hover:border-[#39FF14] transition-all duration-200"
            >
              <span className="text-green-500">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
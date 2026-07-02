"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- কাউন্টডাউন টাইমার স্টেট ---
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [examName, setExamName] = useState("সেমিস্টার ফাইনাল পরীক্ষা");

  // --- সিজিপিএ ক্যালকুলেটর স্টেট ---
  const [cgpaRows, setCgpaRows] = useState([
    { id: 1, credit: 3, gradePoint: 4.0 },
    { id: 2, credit: 3, gradePoint: 3.75 },
    { id: 3, credit: 1.5, gradePoint: 4.0 }
  ]);
  const [calculatedCgpa, setCalculatedCgpa] = useState("৩.৯০");

  // --- ল্যাব কভার পেজ জেনারেটর স্টেট ---
  const [coverData, setCoverData] = useState({
    name: "", id: "", intake: "", section: "",
    courseCode: "CSE 211", courseTitle: "Data Structures Lab",
    expNo: "০১", expName: "Implementation of Stack using Array",
    submittedTo: "Md. Ashraful Islam", designation: "Lecturer, Dept. of CSE"
  });

  // পরীক্ষার নির্দিষ্ট তারিখ (উদাহরণস্বরূপ ২০২৬ সালের কোনো একটি তারিখ দেওয়া হলো)
  useEffect(() => {
    const targetDate = new Date("2026-08-15T10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const savedName = localStorage.getItem("bubt_student_name") || "";
    const savedId = localStorage.getItem("bubt_student_id") || "";
    const savedIntake = localStorage.getItem("bubt_student_intake") || "";
    const savedSection = localStorage.getItem("bubt_student_section") || "";
    
    setCoverData(prev => ({
      ...prev,
      name: savedName,
      id: savedId,
      intake: savedIntake,
      section: savedSection
    }));
  }, []);

  useEffect(() => {
    let totalCredits = 0;
    let totalPoints = 0;
    cgpaRows.forEach(row => {
      totalCredits += Number(row.credit);
      totalPoints += (Number(row.credit) * Number(row.gradePoint));
    });
    const result = totalPoints / totalCredits;
    setCalculatedCgpa(isNaN(result) ? "০.০০" : result.toFixed(2));
  }, [cgpaRows]);

  const categories = [
    { id: 1, icon: "📑", title: "নোট ও লেকচার শিট", desc: "প্রতিটি সেমিস্টারের টপিক ভিত্তিক হ্যান্ডরিটেন এবং গাইড নোটস।" },
    { id: 2, icon: "🗺️", title: "সিলেবাস ও কোর্স আউটলাইন", desc: "ডিপার্টমেন্টের লেটেস্ট সিলেবাস এবং আপ-টু-ডেট কোর্স গাইডলাইন।" },
    { id: 3, icon: "📝", title: "মিড ও ফাইনাল প্রশ্নব্যাংক", desc: "বিগত কয়েক বছরের অরিজিয়াল কোশ্চেন ব্যাংক এবং এক্সক্লুসিভ সাজেশন।" },
    { id: 4, icon: "🧪", title: "ল্যাব রিপোর্ট গাইডলাইন", desc: "CSE ল্যাব রিপোর্টের ফরম্যাট, স্যাম্পল কোড এবং রাইٹنگ গাইড।" }
  ];

  const premiumFeaturesInfo = [
    {
      id: "resources-section",
      icon: "⚡",
      badge: "সহজ ফিল্টারিং",
      title: "সেমিস্টার মেটেরিয়াল হাব",
      benefits: [
        "বর্ষ এবং সেমিস্টার ভিত্তিক ওয়ান-ক্লিক ক্যাটাগরি ফিল্টারিং সুবিধা।",
        "প্রয়োজনীয় বিষয়ের স্টাডি মেটেরিয়াল খোঁজার জন্য সময় বাঁচবে ৯০% পর্যন্ত।",
        "সরাসরি ক্লাউড ড্রাইভ ও প্রিমিয়াম পিডিএফ ডাউনলোডের ডেডিকেটেড লিঙ্ক।"
      ]
    },
    {
      id: "generator-section",
      icon: "🖼️",
      badge: "রিয়েল-টাইম জেনারেটর",
      title: "লাইভ ল্যাব কভার মেকার",
      benefits: [
        "ডাটা ইনপুট করার সাথে সাথে লাইভ ভিজ্যুয়াল কভার পেজ প্রিভিউ দেখার সুবিধা।",
        "BUBT-র লেটেস্ট অফিশিয়াল কভার পেজ ফরম্যাট অনুযায়ী অটোমেটিক ডিজাইন জেনারেশন।",
        "এক ক্লিকে সরাসরি প্রিন্ট-রেডি বা PDF আকারে ডাউনলোড করার সুব্যবস্থা।"
      ]
    },
    {
      id: "leaderboard-section",
      icon: "🏆",
      badge: "কমিউনিটি লিডারবোর্ড",
      title: "টপ কন্ট্রিবিউটর ওয়াল",
      benefits: [
        "রিসোর্স ও হ্যান্ডরিটেন নোট শেয়ারকারীদের নাম ও প্রোফাইল সংবলিত 'Wall of Fame'।",
        "শিক্ষার্থীদের মেটেরিয়াল আপলোড করতে ও একে অপরকে সাহায্য করতে অনুপ্রাণিত করার ব্যবস্থা।",
        "সর্বোচ্চ আপভোট ও কন্ট্রিবিউশনের ভিত্তিতে সাপ্তাহিক র‍্যাংকিং ট্র্যাকিং সিস্টেম।"
      ]
    }
  ];

  const extraFeaturesInfo = [
    {
      id: "calendar-section",
      icon: "📅",
      badge: "একাডেমিক ট্র্যাকার",
      title: "একাডেমিক ক্যালেন্ডার ও ইভেন্ট",
      benefits: [
        "BUBT এর অফিশিয়াল একাডেমিক ক্যালেন্ডার লাইভ ট্র্যাকিং সুবিধা।",
        "মিডটার্ম, ফাইনাল পরীক্ষা এবং কুইজের সম্ভাব্য ডেট কাউন্টডাউন টাইমার।",
        "ডিপার্টমেন্টাল ছুটি এবং ইভেন্টগুলোর তাৎক্ষণিক নোটিফিকেশন অ্যালার্ট।"
      ]
    },
    {
      id: "routine-section",
      icon: "⏱️",
      badge: "স্মার্ট শিডিউলার",
      title: "রুটিন ও শিডিউল হাব",
      benefits: [
        "ইনটেক এবং সেকশন ফিল্টার করে নিজের ডেইলি ক্লাস রুটিন বের করার সুবিধা।",
        "কোন দিন কোন ল্যাব বা থিওরি ক্লাস কত নম্বর রুমে, তা ইনস্ট্যান্টলি জানার উপায়।",
        "ক্যান্সেল বা রিশিডিউল হওয়া ক্লাসের লাইভ আপডেট বোর্ড।"
      ]
    },
    {
      id: "mentorship-section",
      icon: "🤝",
      badge: "সিনিয়র মেন্টরশিপ",
      title: "সিনিয়র ও অ্যালুমনাই কর্নার",
      benefits: [
        "BUBT CSE থেকে পাস আউট হওয়া সফল অ্যালুমনাইদের ক্যারিয়ার গাইডলাইন হাব।",
        "কঠিন কোর্স ও ল্যাব প্রজেক্টের জন্য সিনিয়ার ভাই-আপুদের মেন্টরশিপ সাপোর্ট।",
        "ইন্ডাস্ট্রি লেভেল প্রিপারেশন এবং ইন্টারভিউ ক্র্যাক করার দরকারি টিপস।"
      ]
    }
  ];

  const quickLinks = [
    { title: "⏰ কাউন্টডাউন", link: "#countdown-section" },
    { title: "📑 রিসোর্স সমূহ", link: "#resources-section" },
    { title: "🖼️ কভার মেকার", link: "#generator-section" },
    { title: "🧮 সিজিপিএ ক্যালকুলেটর", link: "#cgpa-section" },
    { title: "🏆 লিডারবোর্ড", link: "#leaderboard-section" },
    { title: "📅 ক্যালেন্ডার", link: "#calendar-section" }
  ];

  const faqs = [
    { q: "আমি এখানে কীভাবে আমার তৈরি করা নোট বা প্রশ্ন শেয়ার করতে পারি?", a: "ওপরে থাকা 'নোট জমা দাও' বাটনে ক্লিক করে একটি গুগল ফর্ম বা সরাসরি ড্রাইভ লিঙ্কের মাধ্যমে আপনার রিসোর্স আমাদের মডারেটর প্যানেলের কাছে পাঠাতে পারেন।" },
    { q: "এই ওয়েবসাইটের সব কন্টেন্ট কি ফ্রিতে পাওয়া যাবে?", a: "হ্যাঁ! BUBT CSE-র সকল স্টুডেন্টদের সাহায্য করার উদ্দেশ্যে তৈরি এই প্ল্যাটফর্মের প্রতিটি নোট, সাজেশন এবং কোশ্চেন ব্যাংক সম্পূর্ণ ফ্রি।" },
    { q: "ল্যাব কভার পেজ জেনারেটর কি BUBT-র অফিশিয়াল ফরম্যাট সমর্থন করে?", a: "হ্যাঁ, এটি সম্পূর্ণভাবে BUBT CSE ডিপার্টমেন্টের অফিশিয়াল ল্যাব কভার পেজের লেআউট মেনে ডিজাইন করা হয়েছে। আপনি চোখ বন্ধ করে এটি প্রিন্ট করতে পারেন।" },
    { q: "সিজিপিএ (CGPA) ক্যালকুলেটরটি কি সঠিক হিসাব দেখায়?", a: "অবশ্যই! এটি BUBT-র অফিশিয়াল গ্রেডিং সিস্টেম (UGC Guidelines) অনুযায়ী প্রোগ্রাম করা হয়েছে, তাই এর হিসাব ১০০% সঠিক।" }
  ];

  // সংখ্যাকে বাংলায় রূপান্তর করার ফাংশন
  const toBanglaNum = (num: number) => {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num.toString().split("").map(digit => banglaDigits[parseInt(digit)] || digit).join("");
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-[#39FF14] selection:text-black pb-12 overflow-x-hidden relative transition-colors duration-500 ${isDarkMode ? 'bg-[#0a0a0a] text-slate-100' : 'bg-[#f7f9fa] text-slate-900'}`}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes customMarquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-marquee { animation: customMarquee 25s linear infinite; }
        .animate-fade-in { animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .neon-border-glow:focus-within { border-color: #39FF14; box-shadow: 0 0 15px rgba(57, 255, 20, 0.2); }
        html { scroll-behavior: smooth; }
      `}} />



      {/* 📢 লাইভ নোটিশ বার */}
      <div className={`relative z-40 border-b backdrop-blur-md ${isDarkMode ? 'border-[#39FF14]/10 bg-black/40' : 'border-gray-200 bg-white/60'}`}>
        <div className="max-w-7xl mx-auto py-2.5 px-4 overflow-hidden flex items-center gap-3">
          <span className="bg-[#39FF14] text-black font-black px-2 py-0.5 rounded text-[9px] uppercase tracking-wider shrink-0 shadow-[0_0_10px_rgba(57,255,20,0.5)]">
            লাইভ আপডেট
          </span>
          <div className={`animate-marquee whitespace-nowrap text-xs font-medium ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
            🚨 সেমিস্টারের ফাইনাল পরীক্ষার এক্সক্লুসিভ সাজেশন্স এবং ল্যাব কভার পেজের অফিসিয়াল PDF ফরম্যাট আপলোড করা হয়েছে!
          </div>
        </div>
      </div>



      {/* 🚀 হিরো সেকশন */}
      <header className="relative z-10 pt-12 pb-6 flex flex-col items-center justify-center text-center px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <span className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-wider mb-6 inline-flex items-center gap-2 border backdrop-blur-sm ${isDarkMode ? 'text-[#39FF14] bg-[#39FF14]/5 border-[#39FF14]/20' : 'text-emerald-600 bg-emerald-50 border-emerald-200'}`}>
            <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping"></span>
            BUBT CSE ওপেন রিসোর্স পোর্টাল v2.5
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            BUBT CSE <br />
            <span className={`bg-gradient-to-r bg-clip-text text-transparent drop-shadow-sm ${isDarkMode ? 'from-[#39FF14] via-emerald-400 to-white' : 'from-emerald-600 via-gray-900 to-emerald-800'}`}>
              স্টাডি হাব
            </span>
          </h1>
          
     
        </div>
      </header>

            {/* ⏰ লাইভ এক্সাম কাউন্টডাউন সেকশন */}
      <section id="countdown-section" className="max-w-4xl mx-auto px-4 mb-12 scroll-mt-24">
        <div className={`p-6 border rounded-3xl text-center backdrop-blur-md transition-all relative overflow-hidden ${isDarkMode ? 'bg-neutral-900/40 border-neutral-800 shadow-[0_0_20px_rgba(57,255,20,0.05)]' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className="absolute top-0 left-0 w-2 h-full bg-[#39FF14]"></div>
          <h2 className="tracking-widest uppercase mb-4 text-white flex items-center justify-center gap-2 text-2xl md:text-4xl font-black mb-2">
            <span>⏳</span> {examName} কাউন্টডাউন
          </h2>
          
          <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-xl mx-auto">
            {[
              { label: "দিন", value: timeLeft.days },
              { label: "ঘণ্টা", value: timeLeft.hours },
              { label: "মিনিট", value: timeLeft.minutes },
              { label: "সেকেন্ড", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className={`p-3 md:p-4 rounded-2xl border ${isDarkMode ? 'bg-black/50 border-neutral-800' : 'bg-gray-50 border-gray-150'}`}>
                <div className="text-xl md:text-3xl font-black text-[#39FF14] mb-1">
                  {toBanglaNum(item.value)}
                </div>
                <div className={`text-[10px] md:text-xs font-bold ${isDarkMode ? 'text-neutral-500' : 'text-slate-500'}`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <p className={`text-[11px] mt-4 font-medium ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>
            পড়াশোনায় গতি বাড়াও, সময় আর বেশি বাকি নেই! 🚀
          </p>
        </div>
      </section>



      {/* 📊 ইনফরমেশন ও স্ট্যাটস সেকশন */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { count: "১২০০+", label: "টোটাল রিসোর্স", icon: "📚" },
            { count: "৩০০০+", label: "অ্যাক্টিভ স্টুডেন্ট", icon: "👨‍💻" },
            { count: "৫০+", label: "টপ কন্ট্রিবিউটর", icon: "🏆" },
            { count: "১০০%", label: "ফ্রি অ্যাক্সেস", icon: "✅" }
          ].map((stat, idx) => (
            <div key={idx} className={`p-4 border rounded-2xl text-center transition-all ${isDarkMode ? 'bg-neutral-900/20 border-neutral-800/80' : 'bg-white border-gray-150 shadow-sm'}`}>
              <div className="text-xl mb-1">{stat.icon}</div>
              <div className="text-lg md:text-2xl font-black text-emerald-500">{stat.count}</div>
              <div className={`text-[11px] font-bold ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 📍 কুইক লিঙ্কস */}
      <section className="max-w-6xl mx-auto px-4 mb-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickLinks.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className={`p-3.5 border rounded-xl text-center font-bold text-[11px] md:text-xs transition-all shadow-sm hover:scale-[1.04] duration-300 hover:shadow-md backdrop-blur-sm ${isDarkMode ? 'bg-neutral-900/60 border-neutral-800/60 text-slate-200 hover:text-[#39FF14] hover:border-[#39FF14]/30' : 'bg-white border-gray-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-300'}`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>

      {/* ⭐ কোর ইউটিলিটি এবং বেনিফিটস */}
      <section className="max-w-6xl mx-auto px-4 mb-16 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black mb-2">প্রধান ইউটিলিটি ও সুবিধাসমূহ</h2>
          <p className={`text-xs md:text-sm font-medium ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>
            শিক্ষার্থীদের একাডেমিক লাইফ সহজ করার মূল টুলস:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {premiumFeaturesInfo.map((feature) => (
            <div 
              id={feature.id} 
              key={feature.id}
              className={`p-6 border rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(57,255,20,0.1)] scroll-mt-24 ${isDarkMode ? 'bg-neutral-900/30 border-neutral-800 hover:border-[#39FF14]/40' : 'bg-white border-gray-200 hover:border-emerald-500/40 shadow-sm'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl p-2 bg-black/40 rounded-xl">{feature.icon}</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${isDarkMode ? 'bg-[#39FF14]/10 text-[#39FF14]' : 'bg-emerald-50 text-emerald-700'}`}>
                  {feature.badge}
                </span>
              </div>
              <h3 className="text-base font-black mb-3">{feature.title}</h3>
              <ul className="space-y-2 text-xs md:text-sm font-medium">
                {feature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-[#39FF14] mt-0.5 shrink-0">✔</span>
                    <span className={isDarkMode ? 'text-neutral-400' : 'text-slate-600'}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extraFeaturesInfo.map((feature) => (
            <div 
              id={feature.id} 
              key={feature.id}
              className={`p-6 border rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(57,255,20,0.15)] scroll-mt-24 ${isDarkMode ? 'bg-neutral-900/20 border-neutral-800/60 hover:border-[#39FF14]/40' : 'bg-white border-gray-200 hover:border-emerald-500/30 shadow-sm'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl p-2 bg-black/40 rounded-xl">{feature.icon}</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${isDarkMode ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-100 text-slate-700'}`}>
                  {feature.badge}
                </span>
              </div>
              <h3 className="text-base font-black mb-3">{feature.title}</h3>
              <ul className="space-y-2 text-xs md:text-sm font-medium">
                {feature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-emerald-500 mt-0.5 shrink-0">◈</span>
                    <span className={isDarkMode ? 'text-neutral-400' : 'text-slate-600'}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div id="cgpa-section" className="scroll-mt-24"></div>

      {/* 🧪 মূল ক্যাটাগরি ভিউ */}
      <section className="max-w-6xl mx-auto px-4 mb-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((item) => (
            <div 
              key={item.id}
              className={`p-5 border rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-sm ${isDarkMode ? 'bg-neutral-900/40 border-neutral-900 hover:border-[#39FF14]/20' : 'bg-white border-gray-200 hover:border-emerald-300'}`}
            >
              <div className={`text-xl mb-3 p-2.5 rounded-xl w-fit ${isDarkMode ? 'bg-black border border-neutral-800' : 'bg-gray-50 border border-gray-100'}`}>
                {item.icon}
              </div>
              <h3 className="text-sm font-bold mb-1">{item.title}</h3>
              <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ❓ ইন্টারেক্টিভ FAQ সেকশন */}
      <section className="max-w-3xl mx-auto px-4 mb-20 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black flex items-center justify-center gap-2">
            <span>💬</span> সচরাচর জিজ্ঞাসা (FAQ)
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className={`border rounded-xl overflow-hidden shadow-sm transition-all ${isDarkMode ? 'border-neutral-800 bg-neutral-900/20' : 'border-gray-200 bg-white'}`}>
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className={`w-full p-4 text-left flex justify-between items-center text-xs md:text-sm font-semibold transition-colors ${isDarkMode ? 'text-white hover:bg-neutral-900/60' : 'text-slate-800 hover:bg-gray-50'}`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-emerald-500 text-xs">❓</span> {faq.q}
                </span>
                <span className={`text-xs transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`}>▼</span>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-48 border-t p-4 ' + (isDarkMode ? 'border-neutral-800 bg-neutral-950/40 text-neutral-400' : 'border-gray-100 bg-gray-50/50 text-slate-600') : 'max-h-0'}`}>
                <p className="text-xs leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">💡</span> {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🧾 ফুটার */}
      <footer className={`text-center text-[10px] md:text-[11px] border-t pt-6 px-4 max-w-6xl mx-auto relative z-10 ${isDarkMode ? 'text-neutral-600 border-neutral-900' : 'text-slate-400 border-gray-200'}`}>
        <p>© {new Date().getFullYear()} BUBT CSE স্টাডি হাব। সর্বস্বত্ব সংরক্ষিত। BUBTians-দের জন্য তৈরি একটি প্রিমিয়াম প্ল্যাটফর্ম।</p>
      </footer>

      {/* 🌓 থিম পরিবর্তনকারী ফ্লোটিং বাটন */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 p-2.5 md:p-3.5 rounded-full bg-neutral-900 text-white text-xs border border-neutral-800 hover:scale-110 active:scale-95 transition-all shadow-2xl"
        style={{ boxShadow: isDarkMode ? '0 0 15px rgba(57, 255, 20, 0.3)' : '0 10px 25px rgba(0,0,0,0.1)' }}
        title="থিম পরিবর্তন করুন"
      >
        {isDarkMode ? '☀️ লাইট' : '🌙 ডার্ক'}
      </button>

    </div>
  );
}
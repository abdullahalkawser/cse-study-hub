import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  Download, 
  Users, 
  Bell, 
  Calendar, 
  GraduationCap, 
  Star,
  FileText,
  Code
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-950 via-purple-950 to-slate-950 text-slate-100 font-sans selection:bg-pink-600 selection:text-white relative overflow-hidden">
      
      {/* Background Glow Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full filter blur-[150px] opacity-15 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-pink-600 rounded-full filter blur-[150px] opacity-15 pointer-events-none"></div>

      {/* 1. STICKY NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-indigo-950/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center font-black text-white text-lg shadow-md shadow-pink-500/20">
              B
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-pink-400 via-purple-300 to-indigo-300 leading-tight">
                CSE Study Hub
              </span>
              <span className="text-[10px] text-purple-300/80 font-bold tracking-widest uppercase flex items-center gap-0.5">
                <Code size={10} /> BUBT
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-purple-200/70">
            <a href="#resources" className="hover:text-pink-400 transition-colors">Resources</a>
            <a href="#features" className="hover:text-pink-400 transition-colors">Facilities</a>
            <a href="#notice" className="hover:text-pink-400 transition-colors">Notice Board</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-semibold text-purple-200/80 hover:text-white transition-colors">
              Log in
            </Link>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-all shadow-lg shadow-pink-500/20">
              Student Portal
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-xs font-bold bg-pink-500/10 text-pink-300 border border-pink-500/20 mb-6 backdrop-blur-sm">
            🎓 Academic Resource Platform for BUBTians
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            Your Ultimate Companion for{' '}
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-pink-400 via-purple-400 to-indigo-300">
              CSE Department, BUBT
            </span>
          </h1>
          <p className="text-purple-200/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Access semester-wise study materials, lab reports, question banks, class routines, and connect with peers — all in one centralized hub.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-pink-500/20 flex items-center justify-center gap-2 group text-sm tracking-wide">
              Explore Resources 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-purple-200 border border-white/10 font-bold px-8 py-4 rounded-xl transition-all backdrop-blur-sm text-sm tracking-wide">
              View Class Routine
            </button>
          </div>
        </div>
      </section>

      {/* 3. QUICK STATISTICS */}
      <section className="py-12 border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-purple-300/60 mb-6">
            HUB AT A GLANCE
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-black text-pink-400">5000+</div>
              <div className="text-xs text-purple-200/60 font-medium mt-1">Active Students</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-purple-400">1200+</div>
              <div className="text-xs text-purple-200/60 font-medium mt-1">PDFs & Materials</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-indigo-400">50+</div>
              <div className="text-xs text-purple-200/60 font-medium mt-1">Faculty Guidelines</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-pink-400">100%</div>
              <div className="text-xs text-purple-200/60 font-medium mt-1">Free & Open Source</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN FEATURES (BENTO GRID STYLE) */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Smart Academic Facilities</h2>
          <p className="text-purple-200/60 max-w-xl mx-auto text-sm">Everything a BUBT CSE student needs to boost their CGPA and coding skills.</p>
        </div>

        {/* Bento Grid layout with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Semester Wise Resources */}
          <div id="resources" className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-pink-500/50 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white transition-all shadow-lg shadow-pink-500/5">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Semester-wise Academic Repository</h3>
              <p className="text-purple-200/60 leading-relaxed max-w-md text-sm">
                From 1st semester to 8th semester, get direct access to handouts, lecture slides, lab code solutions, and previous year's mid/final questions.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs font-semibold text-purple-300/70">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-pink-400" /> Syllabus 2026 Updated</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-pink-400" /> Lab Codes (C++, Java, Python)</span>
            </div>
          </div>

          {/* Card 2 - Notice Board */}
          <div id="notice" className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-pink-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-indigo-600 group-hover:text-white transition-all shadow-lg shadow-purple-500/5">
              <Bell size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Live Notice Updates</h3>
            <p className="text-purple-200/60 leading-relaxed text-sm">
              Never miss an official notice, exam postponement news, or registration deadline directly fetched from BUBT CSE department.
            </p>
          </div>

          {/* Card 3 - Exam Routines */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-pink-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600 group-hover:text-white transition-all shadow-lg shadow-indigo-500/5">
              <Calendar size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Class & Exam Tracker</h3>
            <p className="text-purple-200/60 leading-relaxed text-sm">
              View day-wise intake routines, lab schedules, and mid/final exam seating plans cleanly formatted for mobile viewing.
            </p>
          </div>

          {/* Card 4 - Alumni & Club Activity */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-pink-500/50 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white transition-all shadow-lg shadow-pink-500/5">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">BUBT CSE Club & Alumni Network</h3>
              <p className="text-purple-200/60 leading-relaxed max-w-md text-sm">
                Get updates on upcoming hackathons, programming contests (ICPC/NCPC preps), and mentorship programs from senior BUBTians working globally.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs font-semibold text-purple-300/70">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-pink-400" /> Contest Guideline</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-pink-400" /> Alumni Referral Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STUDENT TESTIMONIALS */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Feedback From BUBTians</h2>
            <p className="text-purple-200/60 text-sm">Hear how this study hub helps our regular student community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Rahat Khan", intake: "Intake 48", text: "Finding previous year mid questions was a nightmare. This portal made it 1-click away before exams!" },
              { name: "Faria Sultana", intake: "Intake 51", text: "The lab report structures and sample codes saved me hours during final assignments. High recommended!" },
              { name: "Tanvir Ahmed", intake: "Intake 45 (Alumni)", text: "Excellent project. Glad to see juniors stepping up to solve actual campus resource problems for BUBT." }
            ].map((student, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl relative hover:border-purple-500/30 transition-all">
                <div className="flex gap-1 text-pink-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-purple-100/80 italic text-sm mb-6 leading-relaxed">
                  "{student.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-400 flex items-center justify-center font-bold text-sm border border-pink-500/10">
                    {student.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{student.name}</h4>
                    <span className="text-xs text-purple-300/60 font-medium">{student.intake}, CSE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACADEMIC SYLLABUS OVERVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Quick Links & Resources</h2>
          <p className="text-purple-200/60 text-sm">Download direct materials verified by course coordinators.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-8">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl relative flex flex-col justify-between hover:border-pink-500/30 transition-all">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="text-pink-400" size={20} />
                <h3 className="text-lg font-bold text-white">Official Syllabus PDF</h3>
              </div>
              <p className="text-purple-200/60 text-sm mb-6 leading-relaxed">Get the latest credit distributions, prerequisite mappings, and marks policy.</p>
              <ul className="space-y-3 text-sm text-purple-200/80 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-pink-400" /> Outcome Based Education (OBE)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-pink-400" /> Credit breakdown per semester</li>
              </ul>
            </div>
            <button className="w-full mt-8 bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2 text-sm">
              <Download size={16} /> Download Syllabus
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-xl border border-pink-500/30 p-8 rounded-2xl relative flex flex-col justify-between shadow-2xl shadow-pink-500/5 hover:border-pink-500/60 transition-all">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="text-pink-400" size={20} />
                <h3 className="text-lg font-bold text-white">Graduation Project (Thesis)</h3>
              </div>
              <p className="text-purple-200/60 text-sm mb-6 leading-relaxed">Guidelines for CSE-400 project submission, formatting templates, and faculty domains.</p>
              <ul className="space-y-3 text-sm text-purple-200/80 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-pink-400" /> Latex/Word Templates</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-pink-400" /> Previous Year Repositories</li>
              </ul>
            </div>
            <button className="w-full mt-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-pink-500/20 text-sm">
              Explore Project Guide
            </button>
          </div>
        </div>
      </section>

      {/* 8. SIMPLE FOOTER */}
      <footer className="border-t border-white/10 py-12 text-center text-xs text-purple-300/40 space-y-2 bg-black/10">
        <p>© 2026 CSE Study Hub – BUBT. Developed for the student community.</p>
        <p>Disclaimer: This is an independent academic supporting platform managed by students.</p>
      </footer>

    </div>
  );
}
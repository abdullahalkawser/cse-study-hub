"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Star,
  FileText,
  Code,
  Edit3,
  Search,
  Sparkles,
  Layers,
  FolderOpen,
  Share2,
  Terminal,
  MousePointer,
  CloudLightning,
  Workflow,
  Cpu,
  Bookmark,
  Zap,
  Flame,
  Binary
} from 'lucide-react';
import Link from 'next/link';

// Core Framer Motion Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('editor'); // For interactive hero mockup
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#070913] via-[#0f1123] to-[#05060b] text-slate-100 font-sans selection:bg-pink-600 selection:text-white relative overflow-hidden">
      
      {/* --- ADVANCED BACKGROUND AMBIENT GLOWS --- */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-purple-600/15 to-transparent rounded-full filter blur-[150px] pointer-events-none"
      />
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[5%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-pink-600/10 to-transparent rounded-full filter blur-[150px] pointer-events-none"
      />

      {/* STICKY NAVBAR */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-[#070913]/70 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="w-9 h-9 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center font-black text-white text-lg shadow-md shadow-pink-500/20 cursor-pointer"
            >
              N
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-pink-400 via-purple-300 to-indigo-300 leading-tight">
                HubNotes
              </span>
              <span className="text-[10px] text-purple-300/60 font-bold tracking-widest uppercase flex items-center gap-0.5">
                <Code size={10} /> CSE BUBT
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-purple-200/60">
            <a href="#workspace" className="hover:text-pink-400 transition-colors">Workspace</a>
            <a href="#features" className="hover:text-pink-400 transition-colors">Features</a>
            <a href="#stats" className="hover:text-pink-400 transition-colors">Global Hub</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-semibold text-purple-200/70 hover:text-white transition-colors">Sign In</Link>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white text-sm font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-pink-500/20"
            >
              Launch Dashboard
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT AREA */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-5 text-left flex flex-col items-start"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full text-xs font-bold bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-300 border border-pink-500/20 mb-5 backdrop-blur-sm shadow-inner"
            >
              <Sparkles size={12} className="text-pink-400 animate-pulse" /> Intake Cluster Architecture v2.0
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-5"
            >
              Next-Gen <br />
              <span className="bg-gradient-to-r bg-clip-text text-transparent from-pink-400 via-purple-400 to-indigo-300">
                Note Engine
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-purple-200/60 text-sm md:text-base mb-6 leading-relaxed max-w-xl"
            >
              Smarter note structure optimized for CSE undergraduates. Create raw code snips, compile formulas using LaTeX, sync lab resources, and map course matrices dynamically.
            </motion.p>
            
            {/* DYNAMIC SEARCH BAR FITURE */}
            <motion.div 
              variants={fadeInUp}
              className={`w-full max-w-md bg-white/[0.03] border ${searchFocused ? 'border-pink-500/50 ring-2 ring-pink-500/10' : 'border-white/10'} rounded-xl p-1.5 flex items-center gap-2 mb-6 backdrop-blur-md transition-all duration-300`}
            >
              <div className="pl-2 text-purple-400/60">
                <Search size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Search CSE-311 notes, labs, faculty keys..." 
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full bg-transparent border-none outline-none text-xs text-white placeholder-purple-300/30 font-medium py-1.5"
              />
              <span className="hidden sm:inline-block bg-white/5 border border-white/5 rounded-md px-1.5 py-1 text-[10px] font-mono text-purple-300/40 tracking-wider">
                CTRL+K
              </span>
            </motion.div>

            {/* QUICK CTA ACTION BUTTONS */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 w-full">
              <motion.button 
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white font-bold px-6 py-3.5 rounded-xl text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg shadow-pink-500/10 group"
              >
                Enter Workspace
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* GRAPHICAL QUICK BADGES METRIC */}
            <motion.div 
              variants={fadeInUp} 
              className="mt-8 pt-6 border-t border-white/5 w-full flex flex-wrap gap-2.5"
            >
              {['Live Sync', 'Markdown', 'LaTeX Ready', 'Lab Formats'].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-1 bg-white/[0.02] border border-white/5 rounded-lg px-2.5 py-1 text-[11px] text-purple-300/60 font-medium">
                  <Flame size={10} className="text-pink-500" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: INTERACTIVE VISUAL APP EXPLANATION BOARD */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 w-full border border-white/10 p-2 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-3xl shadow-2xl relative"
          >
            {/* UI Top Navigator Control Bars */}
            <div className="w-full bg-[#090b14] border border-white/5 rounded-xl p-2 flex flex-col sm:flex-row items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 mr-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40 block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/40 block" />
                </div>
                <span className="text-[11px] font-mono text-purple-300/30">hubnotes_engine_viz/</span>
              </div>
              
              {/* INTERACTIVE TAB SWITCHER */}
              <div className="flex bg-white/5 p-1 rounded-lg border border-white/5">
                <button 
                  onClick={() => setActiveTab('editor')}
                  className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all uppercase tracking-wider ${activeTab === 'editor' ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-sm' : 'text-purple-300/40 hover:text-purple-200'}`}
                >
                  Markdown Editor
                </button>
                <button 
                  onClick={() => setActiveTab('graph')}
                  className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all uppercase tracking-wider ${activeTab === 'graph' ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-sm' : 'text-purple-300/40 hover:text-purple-200'}`}
                >
                  Architecture Graph
                </button>
              </div>
            </div>

            {/* DYNAMIC SCREEN CHANGING FRAME CONTAINER */}
            <div className="relative overflow-hidden rounded-xl bg-[#05060b] aspect-[16/10] border border-white/5 p-5 flex flex-col justify-between">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {activeTab === 'editor' ? (
                  <motion.div 
                    key="editor"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col gap-3 text-left font-mono text-xs text-purple-200/80"
                  >
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2 text-[11px] text-purple-300/40">
                      <FileText size={12} className="text-pink-400" />
                      <span>📁 Semester_5 / CSE-311_Database_Systems / Lab_Report_02.md</span>
                    </div>
                    <div className="space-y-2 pt-2 text-[11px] leading-relaxed">
                      <p><span className="text-pink-400">#</span> <span className="text-white font-bold">Relational Algebra Operators</span></p>
                      <p className="text-purple-400/60">// Structured schema representation query matrix</p>
                      <div className="bg-white/[0.02] border border-white/5 p-3 rounded-lg text-indigo-300 text-[10px] space-y-1">
                        <p><span className="text-purple-400">SELECT</span> emp_name, salary <span className="text-purple-400">FROM</span> BUBT_Faculty_Schema</p>
                        <p><span className="text-purple-400">WHERE</span> department = <span className="text-pink-400">'CSE'</span> <span className="text-purple-400">AND</span> status = <span className="text-pink-400">'Active'</span>;</p>
                      </div>
                      <p className="text-emerald-400/80 flex items-center gap-1.5 pt-2">
                        <CheckCircle2 size={12} /> Auto-compiling syntax tokens matching server specs...
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="graph"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center relative"
                  >
                    {/* Graphical Visual Node Map Simulation */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="w-36 h-36 rounded-full border border-dashed border-purple-500/20 flex items-center justify-center"
                      />
                      
                      {/* Center Node */}
                      <div className="absolute w-16 h-16 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 flex flex-col items-center justify-center shadow-lg border border-white/10 z-10 text-center">
                        <Workflow size={20} className="text-white animate-pulse" />
                        <span className="text-[8px] font-black tracking-widest text-white mt-1">CORE HUB</span>
                      </div>

                      {/* Floating Connected Nodes */}
                      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-4 left-10 bg-white/[0.03] border border-white/10 p-2 rounded-lg flex items-center gap-2 text-[10px]">
                        <CloudLightning size={12} className="text-pink-400" /> <span>Cloud Cluster</span>
                      </motion.div>

                      <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="absolute bottom-6 right-8 bg-white/[0.03] border border-purple-500/20 p-2 rounded-lg flex items-center gap-2 text-[10px]">
                        <Binary size={12} className="text-indigo-400" /> <span>P2P Intake Feed</span>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Box Micro Footer HUD Info */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-purple-300/30">
                <span className="flex items-center gap-1"><Cpu size={10} className="text-emerald-500" /> Pipeline Matrix Node Status: Operational</span>
                <span>Buffer Stack 100%</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* QUICK CORE STATISTICS HUD */}
      <section id="stats" className="py-12 border-y border-white/5 bg-white/[0.01] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { score: "12,000+", label: "Engineered Notes", color: "text-pink-400" },
              { score: "450+", label: "Lab Schema Maps", color: "text-purple-400" },
              { score: "24/7", label: "Realtime Sync Active", color: "text-indigo-400" },
              { score: "Instant", label: "Cluster Broadcasts", color: "text-pink-400" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className={`text-xl md:text-2xl font-black ${stat.color}`}>{stat.score}</div>
                <div className="text-[10px] text-purple-200/40 font-bold mt-1 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RE-ARCHITECTED BENTO GRID FEATURES SECTION */}
      <section id="workspace" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-pink-400 tracking-widest uppercase bg-pink-500/10 px-3 py-1 rounded-md border border-pink-500/20">Operational Modules</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 tracking-tight text-white">Engineered For High-Performance Learning</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Advanced Directory System */}
          <div className="md:col-span-2 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col justify-between transition-all group relative overflow-hidden hover:border-pink-500/30">
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white transition-all shadow-md">
                <FolderOpen size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Semantic Semester Matrix</h3>
              <p className="text-purple-200/60 leading-relaxed text-xs md:text-sm max-w-xl">
                Organize documents instantly by Intake profiles, special labs, and faculty tags. Includes automatic index compilers that generate directory paths for quick access before semesters end.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap gap-4 text-[11px] font-semibold text-purple-300/50">
              <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-pink-400" /> Automated Directories</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-pink-400" /> Pre-configured BUBT Layout Templates</span>
            </div>
          </div>

          {/* Card 2 - Peer Cluster Share */}
          <div className="bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col justify-between transition-all group relative overflow-hidden hover:border-purple-500/30">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-indigo-600 group-hover:text-white transition-all shadow-md">
                <Share2 size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Secure P2P Sharing</h3>
              <p className="text-purple-200/60 leading-relaxed text-xs md:text-sm">
                Generate tokenized URLs to securely broadcast workspace notes or lab assignments to specific intake batches instantly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-purple-300/40 font-mono">
              [Sharing Protocols Encryption: Active]
            </div>
          </div>

          {/* NEW CARD 3 - LA-TEX LAB PRESETS */}
          <div className="bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col justify-between transition-all group relative overflow-hidden hover:border-indigo-500/30">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600 group-hover:text-white transition-all shadow-md">
                <Bookmark size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">LaTeX Mathematical Blocks</h3>
              <p className="text-purple-200/60 leading-relaxed text-xs md:text-sm">
                Write algorithms, set theories, and complex discrete mathematical proofs easily using integrated math tokens.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-purple-300/40 font-mono">
              [KaTeX Math Engine: Loaded]
            </div>
          </div>

          {/* NEW CARD 4 - REAL-TIME HOT SYNC */}
          <div className="md:col-span-2 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col justify-between transition-all group relative overflow-hidden hover:border-pink-500/30">
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white transition-all shadow-md">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Offline Buffer Vault</h3>
              <p className="text-purple-200/60 leading-relaxed text-xs md:text-sm">
                WiFi issues on campus? No problem. The app securely saves notes locally inside the browser memory cache and auto-syncs with cloud storage once connection recovers.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex gap-4 text-[11px] font-semibold text-purple-300/50">
              <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-pink-400" /> LocalStorage Fallback</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-pink-400" /> Hot-Reload Syncing</span>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM SIMPLE FOOTER */}
      <footer className="border-t border-white/5 py-12 text-center text-xs text-purple-300/20 bg-black/10">
        <p>© 2026 HubNotes Workspace – Department of CSE, BUBT.</p>
      </footer>

    </div>
  );
}
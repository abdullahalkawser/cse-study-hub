"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, FileText, Presentation, Award, GraduationCap, 
  Code, User, Search, Download, ChevronRight, Calendar, 
  Layers, Bookmark, Eye, Upload, CheckCircle2, X, Home 
} from 'lucide-react';

export default function DashboardPage() {
  // Application States
  const [selectedCourse, setSelectedCourse] = useState('CSE-311');
  const [activeTab, setActiveTab] = useState('all'); // all, outlines, notes, slides, suggestions
  const [examType, setExamType] = useState('all'); // all, mid, final
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState([2, 4]);
  const [activePreview, setActivePreview] = useState(null);

  // Mock Data for BUBT CSE Courses
  const courses = [
    { id: 'CSE-311', name: 'Database Management Systems', code: 'CSE-311' },
    { id: 'CSE-313', name: 'Computer Architecture', code: 'CSE-313' },
    { id: 'CSE-315', name: 'Operating Systems', code: 'CSE-315' },
    { id: 'MAT-205', name: 'Mathematics for CSE', code: 'MAT-205' },
  ];

  // Mock Data covering all requested sectors
  const resources = [
    { id: 1, title: 'DBMS Course Outline, Syllabus & Grading Policy', type: 'outlines', course: 'CSE-311', exam: 'mid', size: '1.2 MB', date: '2026-05-02', author: 'Dept Faculty' },
    { id: 2, title: 'Computer Architecture Course Outline & Reference Books', type: 'outlines', course: 'CSE-313', exam: 'mid', size: '980 KB', date: '2026-05-02', author: 'Dept Faculty' },
    { id: 3, title: 'ER-Diagram & Relational Algebra Hand-written Notes', type: 'notes', course: 'CSE-311', exam: 'mid', size: '14.5 MB', date: '2026-05-12', author: 'Anik Rahman (Intake 46)' },
    { id: 4, title: 'SQL Joins, Subqueries & Aggregate Functions Guide', type: 'notes', course: 'CSE-311', exam: 'mid', size: '6.8 MB', date: '2026-05-18', author: 'Tahmid Hasan' },
    { id: 5, title: 'Database Normalization (1NF, 2NF, 3NF, BCNF) Deep Dive', type: 'notes', course: 'CSE-311', exam: 'final', size: '12.3 MB', date: '2026-06-01', author: 'Sajid Ahmed' },
    { id: 6, title: 'Transaction Processing & Concurrency Control Lecture Notes', type: 'notes', course: 'CSE-311', exam: 'final', size: '19.1 MB', date: '2026-06-04', author: 'Nusrat Jahan' },
    { id: 7, title: 'Chapter 1: Introduction to Database Systems (Official Slide)', type: 'slides', course: 'CSE-311', exam: 'mid', size: '5.2 MB', date: '2026-05-05', author: 'Dr. M. Rahman' },
    { id: 8, title: 'Chapter 3: Relational Model & Constraints Presentation', type: 'slides', course: 'CSE-311', exam: 'mid', size: '7.4 MB', date: '2026-05-10', author: 'Dr. M. Rahman' },
    { id: 9, title: 'Chapter 7: Indexing & Hashing Structures Slide', type: 'slides', course: 'CSE-311', exam: 'final', size: '11.5 MB', date: '2026-06-02', author: 'Prof. Alim' },
    { id: 10, title: 'Chapter 8: Crash Recovery & Protocols Slide', type: 'slides', course: 'CSE-311', exam: 'final', size: '9.3 MB', date: '2026-06-05', author: 'Prof. Alim' },
    { id: 11, title: 'DBMS Mid-Term Short Suggestion & Previous Years Questions', type: 'suggestions', course: 'CSE-311', exam: 'mid', size: '4.1 MB', date: '2026-05-22', author: 'CSE Dev-Wing' },
    { id: 12, title: 'Top 20 Repeated SQL Queries Specially for Mid Exam', type: 'suggestions', course: 'CSE-311', exam: 'mid', size: '2.5 MB', date: '2026-05-24', author: 'CR Panel' },
    { id: 13, title: 'DBMS Final Exam Mega Suggestion & Math Blueprint', type: 'suggestions', course: 'CSE-311', exam: 'final', size: '8.7 MB', date: '2026-06-06', author: 'CSE Dev-Wing' },
    { id: 14, title: 'Exclusive Question Bank Solution Matrix (2022-2025)', type: 'suggestions', course: 'CSE-311', exam: 'final', size: '15.2 MB', date: '2026-06-07', author: 'Senior Guild' },
  ];

  // Filtering Algorithm
  const filteredResources = resources.filter(res => {
    const matchesCourse = res.course === selectedCourse;
    const matchesTab = activeTab === 'all' || res.type === activeTab;
    const matchesExam = examType === 'all' || res.exam === examType;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCourse && matchesTab && matchesExam && matchesSearch;
  });

  const toggleBookmark = (id) => {
    setBookmarkedIds(prev => prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]);
  };

  const getIcon = (type) => {
    switch(type) {
      case 'notes': return <FileText className="w-5 h-5 text-emerald-400" />;
      case 'outlines': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'slides': return <Presentation className="w-5 h-5 text-amber-400" />;
      case 'suggestions': return <Award className="w-5 h-5 text-rose-400" />;
      default: return <BookOpen className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-950 via-purple-950 to-slate-950 text-white font-sans p-4 md:p-8 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-pink-600 rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 h-full relative z-10">
        
        {/* ========================================================
            PART 1: LEFT PANEL (Fixed Profile Place & Courses)
           ======================================================== */}
        <div className="w-full lg:w-1/4 flex flex-col gap-5">
          
          {/* Logo Brand Box */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-md font-black tracking-wider text-white">BUBT HUB</h2>
                <p className="text-[9px] text-purple-300 font-bold tracking-widest flex items-center gap-1">
                  <Code className="w-3 h-3" /> CSE DEV-WING
                </p>
              </div>
            </div>
          </div>

          {/* FIXED USER PROFILE SPACE */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl">
            <div className="flex items-center gap-3.5 mb-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center font-bold text-lg border border-white/10 shadow-md">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-wide">Anik Rahman</h4>
                <p className="text-[10px] text-purple-300/60 font-mono">ID: 22231103000</p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/5 flex justify-between items-center text-[11px] text-purple-300/50">
              <span>Intake 48 • SEC 3</span>
              <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[9px] font-bold">Active</span>
            </div>
          </div>

          {/* Upload Button */}
          <button 
            className="w-full bg-white/5 border border-dashed border-white/20 text-purple-200 p-3.5 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold hover:bg-white/10 transition-all"
            onClick={() => alert('Upload gateway functionality ready.')}
          >
            <Upload className="w-4 h-4 text-pink-400" />
            Contribute Document
          </button>

          {/* Academic Courses Selector */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex-1">
            <h3 className="text-[10px] font-black uppercase text-purple-300 tracking-widest mb-4">Academic Courses</h3>
            <div className="space-y-1.5">
              {courses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => {
                    setSelectedCourse(course.id);
                    setActiveTab('all'); // Reset to home when course changes
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left border transition-all text-xs group ${
                    selectedCourse === course.id
                      ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-pink-500 text-white font-bold shadow-lg'
                      : 'bg-white/0 border-white/5 hover:bg-white/5 text-purple-200/60 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${selectedCourse === course.id ? 'bg-pink-500/30' : 'bg-white/5'}`}>
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <div className="truncate max-w-[150px]">
                      <span className="block font-mono text-[10px] opacity-50">{course.code}</span>
                      <span className="truncate block font-medium">{course.name}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${selectedCourse === course.id ? 'translate-x-1 text-pink-400' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: RIGHT PANEL (With Home Button on Category Filters)
           ======================================================== */}
        <div className="w-full lg:w-3/4 flex flex-col gap-5">
          
          {/* Top Operational Bar */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:w-80 group">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-300/40 group-focus-within:text-pink-400 transition-colors" />
              <input 
                type="text"
                placeholder="Search notes, suggestions, exam codes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-purple-300/30 focus:outline-none focus:border-pink-500 transition-all"
              />
            </div>

            {/* Mid / Final Segment Switcher */}
            <div className="flex bg-black/30 p-1 rounded-xl border border-white/5 w-full sm:w-auto">
              {[
                { id: 'all', label: 'All Exams' },
                { id: 'mid', label: 'Mid Exam' },
                { id: 'final', label: 'Final Exam' }
              ].map((segment) => (
                <button
                  key={segment.id}
                  onClick={() => setExamType(segment.id)}
                  className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${
                    examType === segment.id
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                      : 'text-purple-300/50 hover:text-white'
                  }`}
                >
                  {segment.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs Section WITH INTEGRATED HOME BUTTON */}
          <div className="flex overflow-x-auto pb-1 gap-2 no-scrollbar">
            {/* HOME BUTTON (ALL SELECT) */}
            <button
              onClick={() => setActiveTab('all')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold whitespace-nowrap border transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-pink-500 text-white font-black'
                  : 'bg-white/5 border-white/5 text-purple-200/60 hover:text-white hover:border-white/10'
              }`}
            >
              <Home className="w-3.5 h-3.5 text-pink-400" />
              Home (All)
            </button>

            {[
              { id: 'outlines', label: 'Course Outline', icon: <Layers className="w-3.5 h-3.5" /> },
              { id: 'notes', label: 'Lecture Notes', icon: <FileText className="w-3.5 h-3.5" /> },
              { id: 'slides', label: 'Slides Panel', icon: <Presentation className="w-3.5 h-3.5" /> },
              { id: 'suggestions', label: 'Suggestions Guide', icon: <Award className="w-3.5 h-3.5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold whitespace-nowrap border transition-all ${
                  activeTab === tab.id
                    ? 'bg-white/10 border-white/20 text-pink-400 font-black shadow-inner'
                    : 'bg-white/5 border-white/5 text-purple-200/60 hover:text-white hover:border-white/10'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Main Content Dynamic Grid Container */}
          <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl min-h-[460px]">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-bold text-white">
                  {courses.find(c => c.id === selectedCourse)?.name}
                </h2>
                <span className="text-[10px] bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded-md font-mono border border-pink-500/10">{selectedCourse}</span>
              </div>
              <span className="text-xs text-purple-300/40">{filteredResources.length} Materials Loaded</span>
            </div>

            <AnimatePresence mode="wait">
              {filteredResources.length > 0 ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {filteredResources.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -3, border: "1px solid rgba(236, 72, 153, 0.2)" }}
                      className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col justify-between transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/5 rounded-xl shadow-inner group-hover:scale-105 transition-transform">
                          {getIcon(item.type)}
                        </div>
                        <div className="space-y-1 flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`text-[9px] uppercase font-black px-1.5 py-0.5 rounded ${
                              item.exam === 'mid' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                            }`}>
                              {item.exam}
                            </span>
                            <span className="text-[9px] text-purple-300/40 uppercase tracking-wider font-semibold">{item.type}</span>
                          </div>
                          <h4 className="text-xs font-semibold text-white leading-snug group-hover:text-pink-300 transition-colors truncate">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-purple-300/40 truncate">By: {item.author}</p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[11px] text-purple-300/40">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                          <span>{item.size}</span>
                        </div>
                        
                        <div className="flex items-center gap-1.5 relative z-20">
                          <button 
                            onClick={() => setActivePreview(item)}
                            className="bg-white/5 p-2 rounded-lg text-purple-300 hover:text-white hover:bg-white/10 transition-all"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          
                          <button 
                            onClick={() => toggleBookmark(item.id)}
                            className={`p-2 rounded-lg transition-all ${
                              bookmarkedIds.includes(item.id) 
                                ? 'bg-pink-500/20 text-pink-400' 
                                : 'bg-white/5 text-purple-300 hover:text-white hover:bg-white/10'
                            }`}
                          >
                            <Bookmark className="w-3.5 h-3.5" fill={bookmarkedIds.includes(item.id) ? "currentColor" : "none"} />
                          </button>

                          <a 
                            href="#"
                            onClick={(e) => { e.preventDefault(); alert(`Downloading: ${item.title}`); }}
                            className="bg-white/5 p-2 rounded-lg text-purple-300 hover:text-white hover:bg-pink-600 transition-all"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-[300px] flex flex-col items-center justify-center text-center opacity-30"
                >
                  <BookOpen className="w-10 h-10 mb-2 stroke-[1.5]" />
                  <p className="text-xs font-medium">No results matched your precise matrix filters.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ========================================================
          PREVIEW MODAL FEATURE 
         ======================================================== */}
      <AnimatePresence>
        {activePreview && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-slate-900/90 border border-white/10 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="p-2.5 bg-white/5 rounded-xl h-fit">
                    {getIcon(activePreview.type)}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-pink-400">{activePreview.type} Preview</span>
                    <h3 className="text-md font-bold text-white">{activePreview.title}</h3>
                    <p className="text-xs text-purple-300/50">Shared by: {activePreview.author}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActivePreview(null)}
                  className="p-1.5 bg-white/5 rounded-lg text-purple-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-black/40 border border-white/5 rounded-xl p-4 h-64 overflow-y-auto font-mono text-xs text-purple-200/80 space-y-3 leading-relaxed">
                <div className="border-b border-white/10 pb-2 text-center text-purple-400 font-bold tracking-wider">
                  --- BUBT CENTRAL REPOSITORY INTEGRATED DOCUMENT READER ---
                </div>
                <p className="font-sans font-bold text-white text-sm">💡 Quick Content Overview:</p>
                <p>1. Core Concepts and frequently asked definitions from Mid/Final semesters.</p>
                <p>2. Structural breakdown matching the exact marks criteria set by BUBT Academic Board.</p>
                <div className="p-3 bg-pink-500/5 border border-pink-500/10 rounded-lg font-sans text-purple-200">
                  <span className="font-bold text-pink-400 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Material
                  </span>
                  This file has been checked by the CSE Dev-Wing panel and marked as highly recommended for upcoming exams.
                </div>
              </div>

              <div className="mt-5 flex justify-between items-center">
                <span className="text-xs text-purple-300/40">File Size: {activePreview.size}</span>
                <button 
                  onClick={() => { alert(`Downloading: ${activePreview.title}`); setActivePreview(null); }}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-2 px-5 rounded-xl text-xs flex items-center gap-1.5 shadow-lg hover:opacity-90 transition-all"
                >
                  <Download className="w-4 h-4" /> Download Document
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
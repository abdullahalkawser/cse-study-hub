"use client";

import { useState, useEffect } from "react";
import { 
  Download, 
  User, 
  BookOpen, 
  FileText, 
  QrCode,
  Plus,
  Layers,
  Sparkles
} from "lucide-react";

export default function CoverDesigner() {
  const [pageType, setPageType] = useState("lab_report");
  const [mounted, setMounted] = useState(false);

  // Trigger intro animations smoothly on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Comprehensive Form States
  const [formData, setFormData] = useState({
    university: "Bangladesh University of Business and Technology",
    department: "Department of Computer Science & Engineering",
    courseCode: "CSE-311",
    courseTitle: "Database Management Systems",
    expNo: "01",
    expName: "Installation of Oracle and Basic SQL Queries",
    studentName: "John Doe",
    studentId: "2021-1-60-001",
    semester: "5th",
    section: "2",
    session: "2021-2022",
    teacherName: "Dr. Abu Fazal",
    teacherDesignation: "Associate Professor",
    teacherDept: "Dept. of CSE",
    dateOfPerf: "2026-07-01",
    dateOfSub: "2026-07-08",
    projectTitle: "E-Commerce System using Next.js & Oracle",
    internshipCompany: "TechVerse Bangladesh Ltd.",
    indexItems: [
      { sl: "1", date: "2026-07-01", name: "Installation & Configuration", page: "1-4" },
      { sl: "2", date: "2026-07-08", name: "DDL & DML Commands", page: "5-12" },
      { sl: "3", date: "2026-07-15", name: "Joins and Subqueries", page: "13-20" },
    ]
  });

  const [themeColor, setThemeColor] = useState("#006A4E"); // Official BUBT Deep Green
  const [fontFamily, setFontFamily] = useState("font-serif");
  const [showQr, setShowQr] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleIndexChange = (index, field, value) => {
    const updatedItems = [...formData.indexItems];
    updatedItems[index][field] = value;
    setFormData(prev => ({ ...prev, indexItems: updatedItems }));
  };

  const addIndexRow = () => {
    setFormData(prev => ({
      ...prev,
      indexItems: [...prev.indexItems, { sl: String(prev.indexItems.length + 1), date: "", name: "", page: "" }]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-950 to-zinc-900 text-white p-4 lg:p-8 flex flex-col items-center selection:bg-emerald-600 overflow-x-hidden relative">
      
      {/* 🌌 Cyber Ambient Background Decorations (UI Only) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none no-print"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none no-print"></div>

      {/* 🖨️ Professional Printing Overrides */}
      <style jsx global>{`
        @media print {
          body { background: white !important; color: black !important; padding: 0 !important; }
          .no-print { display: none !important; }
          .print-container {
            position: absolute; left: 0; top: 0; width: 210mm; height: 297mm;
            padding: 22mm 20mm; border: 6px double ${themeColor} !important;
            box-shadow: none !important; background: white !important;
            page-break-after: avoid; -webkit-print-color-adjust: exact; print-color-adjust: exact;
          }
          .inner-border {
            position: absolute; inset: 6px; border: 1px solid ${themeColor}; opacity: 0.35; pointer-events: none;
          }
          .print-watermark { opacity: 0.045 !important; display: block !important; }
        }
      `}</style>

      {/* Header section (Hidden on Print) */}
      <div className={`w-full max-w-7xl mb-8 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-zinc-800/60 pb-5 no-print transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/10 text-emerald-400 p-1 rounded-lg text-xs font-mono border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] animate-pulse">v2.5 Live</span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent flex items-center gap-2">
              BUBT Smart Cover Engine
            </h1>
          </div>
          <p className="text-xs text-zinc-400 mt-1.5 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400 animate-spin" /> Fill your identity details below. Designed strictly for clear, vibrant physical ink printouts.
          </p>
        </div>
        
        <button 
          onClick={() => window.print()}
          className="group flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(16,185,129,0.2)] active:scale-95 mt-4 md:mt-0 relative overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          <Download className="w-4 h-4 group-hover:scale-110 transition-transform" /> Print & Save PDF
        </button>
      </div>

      {/* Main Workspace Frame */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Smooth Interactive Dashboard Panel (Hidden on Print) */}
        <div className={`lg:col-span-5 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-5 space-y-6 max-h-[85vh] overflow-y-auto shadow-2xl no-print transition-all duration-1000 delay-100 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
          
          {/* Cover Variant Fast Switching */}
          <div>
            <span className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" /> Choose Cover Page Mode
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: "assignment", label: "Assignment Cover" },
                { id: "lab_report", label: "Lab Report Cover" },
                { id: "project", label: "Project / Thesis Cover" },
                { id: "index", label: "Dynamic Lab Index" },
                { id: "internship", label: "Internship Document" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setPageType(tab.id)}
                  className={`p-3 rounded-xl border text-left transition-all duration-300 relative ${pageType === tab.id ? 'bg-emerald-600/10 text-emerald-400 border-emerald-500/40 font-bold shadow-inner' : 'bg-zinc-950/40 text-zinc-400 border-zinc-800/80 hover:border-zinc-700/80'}`}
                >
                  {pageType === tab.id && <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-zinc-800/60" />

          {/* Core Configuration Styling Engine */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-zinc-400 mb-2 font-bold uppercase tracking-wider text-[10px]">Theme Color Theme</label>
              <div className="flex gap-2">
                {[
                  { hex: "#006A4E", name: "BUBT Green" },
                  { hex: "#1e3a8a", name: "Royal Blue" },
                  { hex: "#111827", name: "Classic Charcoal" }
                ].map((color) => (
                  <button
                    key={color.hex}
                    title={color.name}
                    onClick={() => setThemeColor(color.hex)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 ${themeColor === color.hex ? "border-white scale-105 shadow-md shadow-black" : "border-transparent"}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <label className="block text-zinc-400 mb-2 font-bold uppercase tracking-wider text-[10px]">Typography System</label>
              <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)} className="w-full bg-zinc-950/80 border border-zinc-800 p-2.5 rounded-xl text-zinc-200 outline-none focus:border-zinc-700 transition-colors">
                <option value="font-serif">Academic Serif (Times Roman Style)</option>
                <option value="font-sans">Modern Structural (Inter / Arial)</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="flex items-center gap-2.5 text-zinc-400 cursor-pointer select-none">
                <input type="checkbox" checked={showQr} onChange={(e) => setShowQr(e.target.checked)} className="accent-emerald-500 rounded w-4 h-4" />
                <span className="text-xs">Include Code Repository / Live System QR Barcode</span>
              </label>
            </div>
          </div>

          <hr className="border-zinc-800/60" />

          {/* Academic Form Fields */}
          <div className="space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Course & Subject Metadata
            </h2>
            <div className="grid grid-cols-1 gap-3 text-xs">
              <input type="text" name="department" value={formData.department} onChange={handleInputChange} placeholder="Department Title" className="w-full bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700 transition-all" />
              <div className="grid grid-cols-3 gap-2">
                <input type="text" name="courseCode" value={formData.courseCode} onChange={handleInputChange} placeholder="Code" className="col-span-1 bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700 transition-all text-center" />
                <input type="text" name="courseTitle" value={formData.courseTitle} onChange={handleInputChange} placeholder="Course Title Name" className="col-span-2 bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700 transition-all" />
              </div>

              {(pageType === "lab_report" || pageType === "index") && (
                <div className="grid grid-cols-3 gap-2 animate-fadeIn">
                  <input type="text" name="expNo" value={formData.expNo} onChange={handleInputChange} placeholder="No." className="col-span-1 bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700 text-center" />
                  <input type="text" name="expName" value={formData.expName} onChange={handleInputChange} placeholder="Experiment Title Name" className="col-span-2 bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700" />
                </div>
              )}

              {pageType === "assignment" && (
                <input type="text" name="expName" value={formData.expName} onChange={handleInputChange} placeholder="Assignment Topic Title" className="w-full bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700 animate-fadeIn" />
              )}

              {pageType === "project" && (
                <input type="text" name="projectTitle" value={formData.projectTitle} onChange={handleInputChange} placeholder="Project Thesis Title Definitive" className="w-full bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700 animate-fadeIn" />
              )}

              {pageType === "internship" && (
                <input type="text" name="internshipCompany" value={formData.internshipCompany} onChange={handleInputChange} placeholder="Host Enterprise / Placement Name" className="w-full bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700 animate-fadeIn" />
              )}
            </div>
          </div>

          <hr className="border-zinc-800/60" />

          {/* Student Identity Information */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <User className="w-4 h-4" /> Student Workspace Credentials
            </h2>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} placeholder="Student Full Name" className="col-span-2 bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700" />
              <input type="text" name="studentId" value={formData.studentId} onChange={handleInputChange} placeholder="ID Number" className="bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700" />
              <input type="text" name="semester" value={formData.semester} onChange={handleInputChange} placeholder="Semester" className="bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700" />
              <input type="text" name="section" value={formData.section} onChange={handleInputChange} placeholder="Section" className="bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700" />
              <input type="text" name="session" value={formData.session} onChange={handleInputChange} placeholder="Session" className="bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700" />
            </div>
          </div>

          {/* Dynamic Table Index Adder */}
          {pageType === "index" && (
            <div className="space-y-2 border-t border-zinc-800/60 pt-4 animate-fadeIn">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">Dynamic Index Rows</span>
                <button onClick={addIndexRow} className="flex items-center gap-1 text-[10px] bg-emerald-600 hover:bg-emerald-500 px-2.5 py-1.5 rounded-lg text-white font-bold transition-all">
                  <Plus className="w-3 h-3" /> Append Row
                </button>
              </div>
              {formData.indexItems.map((item, idx) => (
                <div key={idx} className="grid grid-cols-5 gap-1.5 text-xs animate-fadeIn">
                  <input type="text" value={item.sl} onChange={(e) => handleIndexChange(idx, "sl", e.target.value)} placeholder="SL" className="bg-zinc-950 border border-zinc-800 p-2 rounded text-center text-white" />
                  <input type="text" value={item.date} onChange={(e) => handleIndexChange(idx, "date", e.target.value)} placeholder="Date" className="bg-zinc-950 border border-zinc-800 p-2 rounded text-white col-span-2" />
                  <input type="text" value={item.name} onChange={(e) => handleIndexChange(idx, "name", e.target.value)} placeholder="Experiment" className="bg-zinc-950 border border-zinc-800 p-2 rounded text-white col-span-2" />
                </div>
              ))}
            </div>
          )}

          {pageType !== "index" && (
            <>
              <hr className="border-zinc-800/60" />
              <div className="space-y-3">
                <h2 className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Faculty / Supervisor Meta
                </h2>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <input type="text" name="teacherName" value={formData.teacherName} onChange={handleInputChange} placeholder="Faculty Full Name" className="w-full bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-zinc-700" />
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" name="teacherDesignation" value={formData.teacherDesignation} onChange={handleInputChange} placeholder="Designation" className="bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none" />
                    <input type="text" name="teacherDept" value={formData.teacherDept} onChange={handleInputChange} placeholder="Faculty Department" className="bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl text-white outline-none" />
                  </div>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Right Side: Ultra High-Fidelity A4 Print Preview Sheet */}
        <div className={`lg:col-span-7 flex justify-center bg-zinc-950/40 p-2 sm:p-6 rounded-3xl border border-zinc-800/80 shadow-inner overflow-x-auto transition-all duration-1000 delay-200 ${mounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          
          {/* A4 Document Wrapper */}
          <div 
            className={`print-container w-[210mm] min-h-[297mm] bg-white p-[24mm] flex flex-col justify-between items-center shadow-2xl relative ${fontFamily} overflow-hidden shrink-0 transition-all duration-500`}
            style={{ border: `6px double ${themeColor}`, color: '#000000' }}
          >
            {/* Elegant Inner Geometric Safety Frame Line */}
            <div className="inner-border absolute inset-[6px] border border-zinc-300/80 opacity-60 pointer-events-none z-0"></div>

            {/* 🛡️ DYNAMIC HD LOGO WATERMARK BACKGROUND (Pulls directly from the root public/ folder) */}
            <div className="print-watermark absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.045] select-none z-0 mix-blend-multiply transition-opacity duration-700">
              <img src="/bubt-logo.png" alt="BUBT Watermark Core" className="w-[130mm] h-[130mm] object-contain grayscale" />
            </div>

            {/* University Institution Branding Block */}
            <div className="text-center space-y-4 w-full z-10 relative">
              {/* Main Visible Top Logo */}
              <div className="w-28 h-28 mx-auto mb-2 relative group">
                <img src="/bubt-logo.png" alt="BUBT Logo Official" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide px-1.5" style={{ color: themeColor }}>
                {formData.university}
              </h2>
              <div className="flex items-center justify-center gap-3 max-w-xl mx-auto">
                <div className="h-[1px] bg-zinc-300 flex-grow"></div>
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-zinc-600 whitespace-nowrap">
                  {formData.department}
                </p>
                <div className="h-[1px] bg-zinc-300 flex-grow"></div>
              </div>
            </div>

            {/* Middle Structural Container Layer */}
            <div className="w-full my-auto space-y-10 text-center z-10 relative">
              
              {/* Context Tag Badge */}
              <div className="animate-fadeIn">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white px-7 py-2 rounded shadow-sm" style={{ backgroundColor: themeColor }}>
                  {pageType.replace('_', ' ')}
                </span>
              </div>

              {/* Subject Information Rows */}
              <div className="space-y-2">
                <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-zinc-400 block">Academic Subject Metadata</span>
                <h3 className="text-base sm:text-lg font-black tracking-tight text-zinc-900 px-6 uppercase">
                  {formData.courseCode} &mdash; {formData.courseTitle}
                </h3>
              </div>

              {/* Dynamic Information Block Based on active page type */}
              {(pageType === "lab_report" || pageType === "assignment") && (
                <div className="border-t-[1.5px] border-b-[1.5px] py-8 px-6 space-y-2 bg-zinc-50/60 relative transition-all duration-500" style={{ borderColor: themeColor }}>
                  {pageType === "lab_report" && (
                    <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500 block mb-1">Experiment Identifier: {formData.expNo}</span>
                  )}
                  <h1 className="text-lg sm:text-xl font-black max-w-xl mx-auto leading-relaxed text-zinc-900 uppercase">
                    {formData.expName}
                  </h1>
                </div>
              )}

              {pageType === "project" && (
                <div className="border-l-[4px] py-6 px-6 text-left max-w-xl mx-auto bg-zinc-50/80 border-r border-t border-b border-zinc-100 rounded shadow-sm transition-all duration-500" style={{ borderColor: themeColor }}>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 block mb-1">Project / Thesis Title Definition</span>
                  <h1 className="text-base sm:text-lg font-black leading-snug text-zinc-900 uppercase">{formData.projectTitle}</h1>
                </div>
              )}

              {pageType === "internship" && (
                <div className="border-2 border-dashed py-6 px-4 bg-zinc-50/40 max-w-xl mx-auto transition-all duration-500" style={{ borderColor: themeColor + '70' }}>
                  <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block mb-1">Host Organization Context</span>
                  <h1 className="text-base font-black text-zinc-800 uppercase">{formData.internshipCompany}</h1>
                </div>
              )}

              {/* Index Page Variant Structural Table Grid */}
              {pageType === "index" && (
                <div className="w-full pt-2 animate-fadeIn">
                  <table className="w-full text-left text-xs border-collapse border border-zinc-300">
                    <thead>
                      <tr className="bg-zinc-50 text-center font-bold text-[11px]" style={{ color: themeColor }}>
                        <th className="border border-zinc-300 p-3 w-12 text-center">SL</th>
                        <th className="border border-zinc-300 p-3 w-28 text-center">Date</th>
                        <th className="border border-zinc-300 p-3">Title of the Experiment Layout</th>
                        <th className="border border-zinc-300 p-3 w-16 text-center">Page</th>
                        <th className="border border-zinc-300 p-3 w-24 text-center">Signature</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.indexItems.map((item, idx) => (
                        <tr key={idx} className="text-center font-medium">
                          <td className="border border-zinc-300 p-3 bg-zinc-50/30 text-center font-bold">{item.sl}</td>
                          <td className="border border-zinc-300 p-3 text-center text-zinc-600">{item.date || "—"}</td>
                          <td className="border border-zinc-300 p-3 text-left text-zinc-800 font-bold uppercase text-[11px]">{item.name || "—"}</td>
                          <td className="border border-zinc-300 p-3 text-center font-semibold">{item.page || "—"}</td>
                          <td className="border border-zinc-300 p-3 text-zinc-300">—</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Split Grid Metadata Footer Columns (Hidden for index layouts) */}
            {pageType !== "index" && (
              <div className="w-full grid grid-cols-2 gap-10 text-xs sm:text-sm pt-8 border-t border-zinc-200 z-10 relative">
                
                {/* Submitted By Column */}
                <div className="space-y-4 text-left">
                  <h4 className="text-xs font-black uppercase tracking-wider border-b-[1.5px] pb-1 w-fit pr-6" style={{ color: themeColor, borderColor: themeColor }}>
                    Submitted By:
                  </h4>
                  <div className="space-y-2 font-bold text-zinc-800 text-[13px]">
                    <p className="text-zinc-900 font-black tracking-tight text-sm uppercase">{formData.studentName}</p>
                    <p><span className="text-zinc-400 font-normal">ID Credentials:</span> {formData.studentId}</p>
                    <p><span className="text-zinc-400 font-normal">Semester/Sec:</span> {formData.semester} ({formData.section})</p>
                    <p><span className="text-zinc-400 font-normal">Academic Session:</span> {formData.session}</p>
                  </div>
                </div>

                {/* Submitted To Column */}
                <div className="space-y-4 text-left pl-4 border-l border-zinc-100">
                  <h4 className="text-xs font-black uppercase tracking-wider border-b-[1.5px] pb-1 w-fit pr-6" style={{ color: themeColor, borderColor: themeColor }}>
                    Submitted To:
                  </h4>
                  <div className="space-y-1.5 font-bold text-zinc-800 text-[13px]">
                    <p className="text-zinc-900 font-black tracking-tight text-sm uppercase">{formData.teacherName}</p>
                    <p className="text-xs text-zinc-500 font-medium leading-tight">{formData.teacherDesignation}</p>
                    <p className="text-[11px] text-zinc-400 font-normal tracking-wide uppercase">{formData.teacherDept}</p>
                  </div>
                </div>

              </div>
            )}

            {/* Sticky Submission Timeline Block & QR Metric */}
            <div className="w-full flex justify-between items-end mt-10 pt-4 border-t border-zinc-100 text-xs z-10 relative">
              <div className="space-y-1.5 text-zinc-500 font-semibold text-[11px]">
                <p>Date of Performance: <span className="text-zinc-900 font-bold ml-1">{formData.dateOfPerf}</span></p>
                <p>Date of Submission: <span className="text-zinc-900 font-bold ml-1">{formData.dateOfSub}</span></p>
              </div>

              {showQr && (
                <div className="flex flex-col items-center gap-1 border border-zinc-200/80 p-1.5 rounded-xl bg-white shadow-sm transition-transform hover:scale-105">
                  <QrCode className="w-9 h-9" style={{ color: themeColor }} />
                  <span className="text-[7px] font-mono font-bold text-zinc-400 tracking-tighter uppercase">Source Artifact</span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
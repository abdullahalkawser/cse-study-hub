"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Printer, Plus, Trash2, GraduationCap, Zap } from 'lucide-react';

export default function BUBTMarkSheet() {
  const [courses, setCourses] = useState(Array(4).fill({ name: '', credit: '3', grade: '4.00' }));

  const grades = [
    { label: 'A (4.00)', value: 4.00 }, { label: 'A- (3.75)', value: 3.75 },
    { label: 'B+ (3.50)', value: 3.50 }, { label: 'B (3.25)', value: 3.25 },
    { label: 'B- (3.00)', value: 3.00 }, { label: 'C+ (2.75)', value: 2.75 },
    { label: 'C (2.50)', value: 2.50 }, { label: 'D (2.00)', value: 2.00 },
    { label: 'F (0.00)', value: 0.00 }
  ];

  const calculateGPA = () => {
    let pts = 0, crs = 0;
    courses.forEach(c => {
      pts += parseFloat(c.credit) * parseFloat(c.grade);
      crs += parseFloat(c.credit);
    });
    return crs > 0 ? (pts / crs).toFixed(2) : "0.00";
  };

  return (
    <div className="min-h-screen bg-black text-green-500 p-4 md:p-8 font-mono">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl mx-auto bg-[#0a0a0a] border border-green-500/30 p-8 rounded-3xl shadow-[0_0_50px_rgba(34,197,94,0.1)]"
      >
        <div className="flex justify-between items-center mb-8 border-b border-green-500/20 pb-6">
          <h1 className="text-3xl font-bold flex items-center gap-3 text-white">
            <GraduationCap className="text-green-500" size={35}/> BUBT
          </h1>
          <p className="text-xs tracking-[0.2em] text-green-700 uppercase">Unofficial Marksheet</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
           {['Name', 'ID', 'Department', 'Section'].map((field) => (
             <input key={field} placeholder={field} className="bg-black border border-green-500/20 p-3 rounded-lg outline-none focus:border-green-500 text-white" />
           ))}
        </div>

        {/* Title Section */}
        <div className="grid grid-cols-12 gap-3 px-4 mb-2 text-xs uppercase tracking-widest text-green-600 font-bold">
          <div className="col-span-6">Subject Name</div>
          <div className="col-span-2">Credit</div>
          <div className="col-span-3">Grade</div>
        </div>

        <div className="space-y-3 mb-6">
          <AnimatePresence>
            {courses.map((c, i) => (
              <motion.div key={i} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 20, opacity: 0 }} 
                className="grid grid-cols-12 gap-3 items-center bg-[#111] p-3 rounded-xl border border-green-500/10"
              >
                <input className="col-span-6 bg-transparent outline-none text-white pl-2" placeholder="Subject Name" />
                <select className="col-span-2 bg-black border border-green-500/20 p-1 rounded text-white" onChange={(e) => {const n=[...courses]; n[i].credit=e.target.value; setCourses(n)}}>
                   {[1, 2, 3].map(cr => <option key={cr} value={cr}>{cr}</option>)}
                </select>
                <select className="col-span-3 bg-black border border-green-500/20 p-1 rounded text-white" onChange={(e) => {const n=[...courses]; n[i].grade=e.target.value; setCourses(n)}}>
                  {grades.map(g => <option key={g.label} value={g.value}>{g.label}</option>)}
                </select>
                <button onClick={() => setCourses(courses.filter((_, idx) => idx !== i))} className="col-span-1 text-red-500"><Trash2 size={18}/></button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button onClick={() => setCourses([...courses, { name: '', credit: '3', grade: '4.00' }])} className="w-full py-3 border border-dashed border-green-500/30 text-green-500 hover:bg-green-500/10 transition-all mb-8 flex justify-center gap-2">
          <Plus size={20} /> Add Subject
        </button>

        <div className="flex justify-between items-center bg-green-950/20 p-6 rounded-2xl border border-green-500/20">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Zap className='text-green-500 animate-pulse' /> Semester GPA: {calculateGPA()}
          </h2>
          <button onClick={() => window.print()} className="bg-green-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-green-400 transition-all">
            <Printer size={20} /> Print
          </button>
        </div>
      </motion.div>
    </div>
  );
}
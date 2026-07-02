// app/submit-notes/page.js
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SubmitNotes() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    semester: '',
    section: '',
    type: 'assignment' // notes, lab, assignment
  });

  return (
    <div className="min-h-screen bg-black text-green-500 p-8 flex justify-center items-center font-mono">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg border border-green-500 bg-gray-900 p-8 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.3)]"
      >
        <h1 className="text-2xl font-bold mb-6 text-center border-b border-green-500 pb-4">
          নোট বা অ্যাসাইনমেন্ট জমা দিন
        </h1>

        <form className="space-y-4">
          <input type="text" placeholder="আপনার নাম" className="w-full bg-black border border-green-500 p-2 text-green-500 outline-none" />
          <input type="text" placeholder="ডিপার্টমেন্ট" className="w-full bg-black border border-green-500 p-2 text-green-500 outline-none" />
          
          <div className="flex gap-4">
            <input type="text" placeholder="সেমিস্টার" className="w-1/2 bg-black border border-green-500 p-2 text-green-500 outline-none" />
            <input type="text" placeholder="সেকশন" className="w-1/2 bg-black border border-green-500 p-2 text-green-500 outline-none" />
          </div>

          <select className="w-full bg-black border border-green-500 p-2 text-green-500 outline-none">
            <option>নোট</option>
            <option>ল্যাব রিপোর্ট</option>
            <option>সাজেশন</option>
            <option>এক্সাম কোশ্চেন</option>
          </select>

          <div className="border-2 border-dashed border-green-700 p-6 text-center cursor-pointer hover:bg-green-900/20 transition-all">
            <p>PDF বা Doc ফাইল ড্রপ করুন</p>
            <input type="file" className="hidden" />
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-green-600 text-black font-bold p-3 mt-4 hover:bg-green-400 transition-colors"
          >
            জমা দিন (Submit)
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
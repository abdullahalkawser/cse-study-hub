import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function Sidebar({ semesters, onSelect, selectedName }) {
  return (
    <motion.div 
      initial={{ width: 280 }}
      className="h-screen bg-gray-900 border-r border-gray-800 flex flex-col p-6 shadow-2xl"
    >
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-green-500 p-2 rounded-xl text-gray-900">
          <GraduationCap size={24} />
        </div>
        <h1 className="text-xl font-bold text-white tracking-wider">StudyHub</h1>
      </div>

      <nav className="flex flex-col gap-2 overflow-y-auto pr-2 scrollbar-hide">
        {semesters.map((sem, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(sem)}
            className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
              selectedName === sem.name 
              ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
              : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <BookOpen size={20} />
            <span className="font-medium">{sem.name}</span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
}
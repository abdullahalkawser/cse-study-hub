import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ResourceCard({ selectedSemester }) {
  const [activeTab, setActiveTab] = useState('notes');

  const tabs = [
    { id: 'notes', label: 'Notes' },
    { id: 'lab', label: 'Lab' },
    { id: 'assignment', label: 'Assignment' },
    { id: 'mid', label: 'Mid Suggestion' },
    { id: 'final', label: 'Final Suggestion' }
  ];

  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
      {/* ট্যাব বাটন */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-800 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === tab.id ? 'bg-green-600 text-white' : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* কন্টেন্ট এরিয়া */}
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {selectedSemester.courses.map((course, idx) => (
          <div key={idx} className="mb-6 p-5 bg-gray-950 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-green-400 mb-3">{course.name}</h3>
            
            <p className="text-gray-300">
              {activeTab === 'notes' && (course.notes || "No notes yet.")}
              {activeTab === 'lab' && (course.lab || "No lab tasks.")}
              {activeTab === 'assignment' && (course.assignment || "No assignments.")}
              {activeTab === 'mid' && (course.midSuggestion || "Mid suggestion coming soon.")}
              {activeTab === 'final' && (course.finalSuggestion || "Final suggestion coming soon.")}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
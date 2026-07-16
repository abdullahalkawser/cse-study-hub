'use client';
import React, { useState } from 'react';
import Sidebar from '../componenets/Sidebar';
import ResourceCard from '../componenets/ResourceCard';
import { semesters } from '../../data/data';

export default function Page() {
  const [selectedSemester, setSelectedSemester] = useState(semesters[0]);

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      <Sidebar 
        semesters={semesters} 
        onSelect={setSelectedSemester} 
        selectedName={selectedSemester.name}
      />
      
      <main className="flex-1 overflow-y-auto p-10">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              {selectedSemester.name}
            </h2>
            <p className="text-gray-400 mt-2">আপনার সকল কোর্সের রিসোর্স এক জায়গায়।</p>
          </header>
          
          <ResourceCard selectedSemester={selectedSemester} />
        </div>
      </main>
    </div>
  );
}
"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { User, Trophy, Award, TrendingUp } from 'lucide-react';

const leaderboardData = [
  { id: 1, name: "Rahim Ahmed", dept: "CSE", section: "A1", studentId: "220101", points: 1950, gender: "male", status: "Top" },
  { id: 2, name: "Sumaiya Akter", dept: "BBA", section: "B2", studentId: "220102", points: 1880, gender: "female", status: "Rising" },
  { id: 3, name: "Karim Islam", dept: "EEE", section: "A2", studentId: "220103", points: 1750, gender: "male", status: "Stable" },
  { id: 4, name: "Fatima Tuj", dept: "CSE", section: "C1", studentId: "220104", points: 1690, gender: "female", status: "Top" },
  { id: 5, name: "Fahim Shah", dept: "BBA", section: "D1", studentId: "220105", points: 1620, gender: "male", status: "Stable" },
  { id: 6, name: "Sumi Akter", dept: "ENG", section: "B1", studentId: "220106", points: 1580, gender: "female", status: "Rising" },
  { id: 7, name: "Rakib Hasan", dept: "CSE", section: "A3", studentId: "220107", points: 1510, gender: "male", status: "Stable" },
  { id: 8, name: "Nusrat Jahan", dept: "EEE", section: "C2", studentId: "220108", points: 1450, gender: "female", status: "Top" },
  { id: 9, name: "Tanvir Ahmed", dept: "BBA", section: "A1", studentId: "220109", points: 1400, gender: "male", status: "Stable" },
  { id: 10, name: "Mehedi Hasan", dept: "CSE", section: "B2", studentId: "220110", points: 1350, gender: "male", status: "Rising" },
  { id: 11, name: "Ayesha Siddi", dept: "ENG", section: "D2", studentId: "220111", points: 1320, gender: "female", status: "Stable" },
  { id: 12, name: "Sabbir Hossain", dept: "EEE", section: "C1", studentId: "220112", points: 1280, gender: "male", status: "Top" },
  { id: 13, name: "Tamanna Mim", dept: "BBA", section: "A2", studentId: "220113", points: 1250, gender: "female", status: "Stable" },
  { id: 14, name: "Rashedul Ali", dept: "CSE", section: "B1", studentId: "220114", points: 1210, gender: "male", status: "Rising" },
  { id: 15, name: "Jannatul B.", dept: "ENG", section: "C3", studentId: "220115", points: 1180, gender: "female", status: "Stable" },
  { id: 16, name: "Mahir Chowdhury", dept: "EEE", section: "A1", studentId: "220116", points: 1150, gender: "male", status: "Top" },
  { id: 17, name: "Sadia Afrin", dept: "CSE", section: "D1", studentId: "220117", points: 1120, gender: "female", status: "Stable" },
  { id: 18, name: "Imran Khan", dept: "BBA", section: "C2", studentId: "220118", points: 1090, gender: "male", status: "Rising" },
  { id: 19, name: "Farhana Yasmin", dept: "ENG", section: "B2", studentId: "220119", points: 1050, gender: "female", status: "Stable" },
  { id: 20, name: "Arif Mollah", dept: "EEE", section: "A3", studentId: "220120", points: 1020, gender: "male", status: "Top" },
];

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-black text-green-400 p-6 font-mono">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-black text-white uppercase tracking-widest">BUBT Hall of Fame</h2>
          <p className="text-green-600 mt-2">Top 20 Academic Performers</p>
        </div>

        <div className="space-y-3">
          {leaderboardData.map((user, index) => (
            <motion.div 
              key={user.studentId}
              initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#0a0a0a] border border-green-900/50 p-4 rounded-2xl flex items-center gap-6 hover:border-green-500/50 hover:bg-[#111] transition-all"
            >
              <div className={`text-2xl font-black w-12 text-center ${index < 3 ? 'text-yellow-500' : 'text-gray-600'}`}>
                {index === 0 ? <Trophy size={28}/> : index === 1 ? <Award size={28}/> : index === 2 ? <Award size={28}/> : `#${index + 1}`}
              </div>

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 ${user.gender === 'male' ? 'border-blue-500/30 bg-blue-500/10' : 'border-pink-500/30 bg-pink-500/10'}`}>
                <User size={28} className={user.gender === 'male' ? 'text-blue-400' : 'text-pink-400'} />
              </div>

              <div className="flex-1 grid grid-cols-4 items-center gap-4">
                <div>
                  <p className="text-white font-bold text-lg">{user.name}</p>
                  <p className="text-xs text-green-700 uppercase">{user.dept} | Sec: {user.section}</p>
                </div>
                <div className="text-gray-500 text-sm">ID: {user.studentId}</div>
                <div className="flex items-center gap-2 text-gray-400">
                    <TrendingUp size={16} /> <span className="text-xs">{user.status}</span>
                </div>
                <div className="text-green-500 font-black text-2xl text-right">{user.points} <span className="text-xs">pts</span></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
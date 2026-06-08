"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, ArrowRight, GraduationCap, Code, User, Phone, IdCard } from 'lucide-react';

export default function AuthPage() {
  // Toggle between Login and Register
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-950 via-purple-950 to-slate-950 relative overflow-hidden font-sans">
      
      {/* Background Animated Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full filter blur-[120px] opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-600 rounded-full filter blur-[120px] opacity-20 animate-pulse delay-700 pointer-events-none"></div>

      {/* Main Card Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col md:flex-row w-[90%] max-w-4xl min-h-[600px] overflow-hidden z-10"
      >
        
        {/* LEFT SIDE: Brand & Info (BUBT CSE Theme) */}
        <div className="md:w-1/2 bg-gradient-to-br from-purple-600/20 to-indigo-950/40 p-8 md:p-12 flex flex-col justify-between text-white border-b md:border-b-0 md:border-r border-white/10 relative z-20">
          <div>
            {/* Logo Area */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-8 cursor-pointer inline-flex"
            >
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-pink-500/20">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">BUBT</h2>
                <p className="text-[10px] text-purple-300 font-bold tracking-widest flex items-center gap-1">
                  <Code className="w-3 h-3" /> CSE DEPARTMENT
                </p>
              </div>
            </motion.div>

            {/* Dynamic Typography Heading based on state */}
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? "login-text" : "register-text"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="mt-6"
              >
                <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
                  {isLogin ? "Welcome Back" : "Start Your"}{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-300">
                    {isLogin ? "To The Future." : "Journey Here."}
                  </span>
                </h1>
                <p className="text-sm text-purple-200/60 mt-4 leading-relaxed">
                  {isLogin 
                    ? "Access your student portal, explore academic resources, and stay connected with the BUBT CSE community."
                    : "Create your verified institutional account to access semester handouts, question banks, and coding resources."
                  }
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Info Footer */}
          <div className="mt-8 pt-6 border-t border-white/5 text-xs text-purple-300/40 flex justify-between items-center">
            <span>Powered by CSE Dev-Wing</span>
            <span>Version 3.0.0</span>
          </div>
        </div>

        {/* RIGHT SIDE: Animated Forms (Login / Register) */}
        <div className="md:w-1/2 p-8 md:p-12 bg-black/10 flex flex-col justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {isLogin ? (
              
              /* --- LOGIN FORM --- */
              <motion.div
                key="login-form"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">Account Login</h3>
                  <p className="text-xs text-purple-200/50 mt-1">Enter your institutional credentials to log in.</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-purple-300 tracking-wider uppercase">Institutional Email</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300/40 group-focus-within:text-pink-400 transition-colors" />
                      <input 
                        type="email" 
                        placeholder="student_id@cse.bubt.edu.bd" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-purple-300/20 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-purple-300 tracking-wider uppercase">Password</label>
                      <a href="#" className="text-xs text-pink-400 hover:underline transition-all">Forgot?</a>
                    </div>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300/40 group-focus-within:text-pink-400 transition-colors" />
                      <input 
                        type="password" 
                        placeholder="••••••••" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-purple-300/20 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="remember" 
                      className="w-4 h-4 rounded border-white/10 text-pink-600 bg-white/5 accent-pink-500 cursor-pointer" 
                    />
                    <label htmlFor="remember" className="ml-2 text-xs text-purple-200/60 select-none cursor-pointer">
                      Remember this device
                    </label>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(236, 72, 153, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-pink-500/10 flex items-center justify-center gap-2 transition-all mt-2 group text-sm tracking-wide"
                  >
                    Sign In 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>

                <p className="text-center text-xs text-purple-200/40 mt-8">
                  Don't have an account?{' '}
                  <button 
                    onClick={() => setIsLogin(false)} 
                    className="text-pink-400 font-bold hover:underline focus:outline-none"
                  >
                    Register Now
                  </button>
                </p>
              </motion.div>
            ) : (
              
              /* --- REGISTER FORM --- */
              <motion.div
                key="register-form"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="mb-5">
                  <h3 className="text-2xl font-bold text-white">Create Account</h3>
                  <p className="text-xs text-purple-200/50 mt-1">Join the BUBT CSE Student Hub today.</p>
                </div>

                <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-purple-300 tracking-wider uppercase">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-300/40 group-focus-within:text-pink-400 transition-colors" />
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-white placeholder-purple-300/20 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all text-xs"
                      />
                    </div>
                  </div>

                  {/* Student ID & Intake row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-purple-300 tracking-wider uppercase">Student ID</label>
                      <div className="relative group">
                        <IdCard className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-300/40 group-focus-within:text-pink-400 transition-colors" />
                        <input 
                          type="text" 
                          placeholder="22231103..." 
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-white placeholder-purple-300/20 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all text-xs"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-purple-300 tracking-wider uppercase">Intake</label>
                      <input 
                        type="number" 
                        placeholder="48" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-white placeholder-purple-300/20 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all text-xs"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-purple-300 tracking-wider uppercase">Institutional Email</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-300/40 group-focus-within:text-pink-400 transition-colors" />
                      <input 
                        type="email" 
                        placeholder="student_id@cse.bubt.edu.bd" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-white placeholder-purple-300/20 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all text-xs"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-purple-300 tracking-wider uppercase">Create Password</label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-300/40 group-focus-within:text-pink-400 transition-colors" />
                      <input 
                        type="password" 
                        placeholder="••••••••" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-white placeholder-purple-300/20 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all text-xs"
                      />
                    </div>
                  </div>

                  {/* Submit Register Button */}
                  <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(236, 72, 153, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-pink-500/10 flex items-center justify-center gap-2 transition-all mt-3 group text-xs tracking-wide"
                  >
                    Create Account 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>

                <p className="text-center text-xs text-purple-200/40 mt-6">
                  Already have an account?{' '}
                  <button 
                    onClick={() => setIsLogin(true)} 
                    className="text-pink-400 font-bold hover:underline focus:outline-none"
                  >
                    Sign In
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </motion.div>
    </div>
  );
}
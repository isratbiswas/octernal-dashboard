import React, { useState, useId } from "react";
import { useAuth } from "../../../context/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Loader2, CheckCircle2 } from "lucide-react";

const LoginForm: React.FC = () => {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const patternId = useId();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError("");
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
      toast.success("Logged in successfully");
    } catch {
      setError("Invalid email or password");
      toast.error("Login Failed");
    }
  };

  const fillDemoCredentials = () => {
    setEmail("user1@example.com");
    setPassword("password123");
  };

  return (
    <div className="min-h-screen bg-white flex overflow-hidden font-sans">
      <div className="hidden lg:flex lg:w-1/2 bg-[#02130a] relative flex-col justify-center items-center p-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.path
              d="M -50 180 Q 50 20 250 180"
              fill="none"
              stroke="#52b788"
              strokeWidth="0.5"
              animate={{
                d: [
                  "M -50 180 Q 50 20 250 180",
                  "M -50 160 Q 100 0 250 160",
                  "M -50 180 Q 50 20 250 180",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-24 h-24 bg-emerald-500/10 rounded-[2rem] border border-emerald-500/20 flex items-center justify-center backdrop-blur-sm">
              <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
                <path
                  d="M8 15C8 8 14 6 20 6C26 6 32 8 32 15C32 25 24 34 20 34C16 34 8 25 8 15Z"
                  stroke="#52b788"
                  strokeWidth="3"
                />
                <circle cx="20" cy="18" r="3" fill="#52b788" />
              </svg>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-white mb-4 tracking-tight"
          >
            Plan, Prioritize, and Accomplish.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-emerald-500/70 text-lg mb-12"
          >
            Manage your workspace and tasks with the <br /> Donezo professional
            dashboard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md text-left flex items-center gap-4 shadow-2xl"
          >
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-white font-bold">Today's Productivity</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "74%" }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="h-full bg-emerald-400"
                  />
                </div>
                <span className="text-emerald-400 text-xs font-bold">74%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#F8F9FA] relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern
              id={patternId}
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="#1B4D3E"
                strokeWidth="2"
              />
            </pattern>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="flex lg:hidden items-center gap-3 mb-8 justify-center">
            <span className="text-2xl font-bold text-gray-900 tracking-tighter">
              Donezo
            </span>
          </div>

          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
            <div className="mb-8 text-left">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome back
              </h1>
              <p className="text-gray-400 text-sm">Sign in to your dashboard</p>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 overflow-hidden"
                >
                  <div className="px-4 py-3 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-2.5 text-red-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    {error}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 text-[10px] font-bold mb-2 uppercase tracking-[0.2em] ml-1">
                  Email address
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1B4D3E] transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-300 rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:border-emerald-200 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-[11px] font-bold text-[#1B4D3E] hover:underline"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1B4D3E] transition-colors">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-300 rounded-2xl pl-12 pr-12 py-3.5 text-sm focus:outline-none focus:border-emerald-200 focus:bg-white transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
                  >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1B4D3E] hover:bg-[#153a2f] disabled:opacity-50 text-white font-bold rounded-2xl py-4 text-sm transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  "Sign in to Dashboard"
                )}
              </motion.button>
            </form>

            <div className="mt-8 pt-8 text-center border-t border-gray-50">
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full hover:bg-emerald-100 transition-colors"
              >
                Try Demo Credentials
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginForm;

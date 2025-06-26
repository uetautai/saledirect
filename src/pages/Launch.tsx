import React, { useState, useEffect } from 'react';

const LAUNCH_DATE = new Date('2025-08-26T00:00:00+10:00');

function getTimeLeft() {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Launch() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#181F2F] via-[#232946] to-[#181F2F] relative overflow-hidden">
      {/* Subtle star field effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>
      <main className="relative z-10 flex flex-col items-center justify-center w-full h-screen">
        <span className="uppercase tracking-widest text-xs md:text-sm text-white mb-4" style={{letterSpacing:'0.2em'}}>Site Under Construction</span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-[0.3em] text-white mb-8 text-center drop-shadow-lg">COMING SOON</h1>
        {/* Animated Progress Bar */}
        <div className="w-full max-w-md flex flex-col items-center mb-8">
          <div className="w-full h-4 rounded-full bg-white/20 overflow-hidden mb-2">
            <div className="h-full bg-gradient-to-r from-primary-400 via-blue-400 to-pink-400 animate-progress-bar" style={{width: '62%'}} />
          </div>
          <span className="text-white text-base font-semibold tracking-wider">62%</span>
        </div>
        {/* Minimal Email Signup Form */}
        <div className="w-full max-w-xs flex flex-col items-center mb-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-l-lg bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 text-base"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-r-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors"
              >Notify</button>
            </form>
          ) : (
            <div className="text-green-300 font-semibold text-base py-2">Thank you! We'll keep you posted.</div>
          )}
        </div>
        {/* SaleDirect branding - visually striking separation */}
        <div className="flex items-center gap-4 mt-2">
          <span className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">Sale</span>
          <span className="inline-block w-5 h-5 rounded-full bg-gradient-to-br from-primary-400 via-blue-400 to-pink-400 shadow-lg"></span>
          <span className="text-blue-400 text-3xl md:text-4xl font-extrabold tracking-tight">Direct</span>
        </div>
        <span className="text-primary-100 mt-4 text-base md:text-lg tracking-wide">Launching August 26, 2025</span>
      </main>
    </div>
  );
}
